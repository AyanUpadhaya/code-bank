"use client";
import { Box, Flex, IconButton, Text, useColorMode } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark, coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import { MdContentCopy, MdOutlineCheckCircle, MdCode, MdKeyboard } from "react-icons/md";
import { CodeHighlighterProps, SnippetDataType } from "@/TYPES";

const CodeHighlighter: React.FC<CodeHighlighterProps> = ({
  title = "",
  author = "SayShark",
  code = "",
  language = "jsx",
}: SnippetDataType) => {
  const { colorMode } = useColorMode();
  const [isCopy, setIsCopy] = useState<boolean>(false);

  useEffect(() => {
    if (isCopy) {
      setTimeout(() => {
        window.navigator.clipboard.writeText(code);
        setIsCopy(false);
      }, 2000);
    }
  }, [isCopy]);

  return (
    <Box w={"100%"} p={[2, 8]}>
      <Box bgColor={"light.100"} border={"1px solid"} borderColor={"light.300"} rounded={"lg"} px={3}>
        <Flex justifyContent={"space-between"} alignItems={"center"} borderBottom={"1px solid"} borderBottomColor={"light.300"} p={2}>
          <Text
            as={Flex}
            ml={4}
            direction={["column", "column", "row"]}
            justifyContent={"flex-start"}
            alignItems={["flex-start", "flex-start", "center"]}
            gap={2}
            fontSize={["12px", "12px", "18px"]}
            textTransform={"capitalize"}
          >
            <Text as={Flex} alignItems={"center"} gap={2}>
              {title}{" "}
            </Text>
            <Text as={Flex} alignItems={"center"} gap={2}>
              <MdCode /> By {author}
            </Text>{" "}
            <Text as={Flex} alignItems={"center"} gap={2}>
              <MdKeyboard /> language: {language}
            </Text>
          </Text>

          {isCopy ? (
            <IconButton
              fontSize={"16px"}
              bgColor={"transparent"}
              border={"1px solid"}
              borderColor={"light.300"}
              rounded={"md"}
              icon={<MdOutlineCheckCircle />}
              aria-label="Copy The Code"
            />
          ) : (
            <IconButton
              fontSize={"16px"}
              bgColor={"transparent"}
              border={"1px solid"}
              borderColor={"light.300"}
              rounded={"md"}
              icon={<MdContentCopy />}
              onClick={() => setIsCopy(true)}
              aria-label="Copy The Code"
            />
          )}
        </Flex>
        <Box overflow={"hidden"} fontSize={["12px", "12px", "14px", "16px"]}>
          <Box
            overflow={"auto"}
            sx={{
              "> pre": {
                whiteSpace: "pre-wrap",
                bgColor: "red",
              },
              ">pre>code": {
                whiteSpace: "pre-wrap",
                p: "0px !important",
              },
            }}
          >
            <SyntaxHighlighter showLineNumbers language={language} style={colorMode === "light" ? coy : materialDark}>
              {code.replaceAll("&quot;", '"')}
            </SyntaxHighlighter>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CodeHighlighter;
