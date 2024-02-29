"use client";
import { snippetData } from "@/CONSTANTS";
import CodeHighlighter from "@/components/CodeHighlighter/CodeHighlighter";
import Navigation from "@/components/Navigation/Navigation";
import SearchBar from "@/components/SearchBar/SearchBar";
import { Flex } from "@chakra-ui/react";
import React from "react";

const SnippetsPage = () => {
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
      <Flex w={"100%"} direction={"column"} pt={[0, 0, 0, 0, "56px", "64px"]}>
        <SearchBar />
        {snippetData.map((snippet, index) => {
          return <CodeHighlighter key={`snippet-key-${index}`} {...snippet} />;
        })}
      </Flex>
    </Flex>
  );
};

export default SnippetsPage;
