import { Flex } from "@chakra-ui/react";
import React from "react";
import { BsPatchQuestionFill } from "react-icons/bs";

const UsagePopup = ({ content = "" }: { content?: string }) => {
  return (
    <Flex
      pos={"relative"}
      fontSize={"16px"}
      p={3}
      bgColor={"transparent"}
      border={"1px solid"}
      borderColor={"light.300"}
      rounded={"md"}
      _hover={{
        _after: {
          h: ["min-content"],
          color: "light.200",
          bgColor: "dark.200",
          py: 2,
          px: 4,
        },
      }}
      _after={{
        content: `"${content}"`,
        color: "transparent",
        w: ["200px", "300px"],
        h: "0px",
        pos: "absolute",

        transition: "450ms",
        top: "100%",
        right: "100%",
        transform: ["translateX(30%)", "none"],
        zIndex: 8,
        rounded: "md",
        textAlign: "left",
        bgColor: "transparent",
      }}
    >
      <BsPatchQuestionFill />
    </Flex>
  );
};

export default UsagePopup;
