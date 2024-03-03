"use client";
import { RequestSnippetType, SnippetDataType } from "@/TYPES";
import CodeHighlighter from "@/components/CodeHighlighter/CodeHighlighter";
import CustomError from "@/components/CustomePrompts/CustomError";
import CustomLoader from "@/components/CustomePrompts/CustomLoader";
import CustomNotFound from "@/components/CustomePrompts/CustomNotFound";
import Navigation from "@/components/Navigation/Navigation";
import SearchBar from "@/components/SearchBar/SearchBar";
import useDebouncer from "@/hooks/useDebounce";
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

async function getData(query: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/snippets/search?q=${query}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}

const SnippetsPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const [data, setData] = useState<SnippetDataType[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = useDebouncer(async (query: string) => {
    getSnippetData(query);
  }, 500);

  const getSnippetData = async (query: string) => {
    try {
      setLoading(true);
      const resData: RequestSnippetType = await getData(query);
      if (resData.status) {
        setData(resData.snippets);
        setLoading(false);
      } else {
        setError(true);
        setLoading(false);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };
  useEffect(() => {
    getSnippetData(searchQuery);
  }, []);

  if (loading) {
    return <CustomLoader />;
  }

  if (error) {
    return <CustomError />;
  }

  return (
    <Flex
      w={"100%"}
      pos={"relative"}
      minH={"100vh"}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      bgColor={"light.250"}
      direction={["column", "column", "column", "column", "row"]}
    >
      <Navigation />
      <Flex w={"100%"} direction={"column"} pt={["56px", "64px"]}>
        <SearchBar
          value={searchQuery}
          onChange={(event) => {
            setSearchQuery(event.target.value);
            handleSearchChange(event.target.value);
          }}
        />
        {data.length === 0 && searchQuery !== "" ? (
          <CustomNotFound />
        ) : (
          data?.map((snippet, index) => {
            return <CodeHighlighter key={`snippet-key-${index}`} {...snippet} />;
          })
        )}
      </Flex>
    </Flex>
  );
};

export default SnippetsPage;
