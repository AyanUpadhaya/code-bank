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
          content: `"${content}"`,
          w: ["200px", "300px"],
          h: ["min-content"],
          color: "light.200",
          bgColor: "dark.200",
        },
      }}
      _after={{
        content: `"."`,
        color: "transparent",
        w: "0px",
        h: "0px",
        pos: "absolute",
        py: 2,
        px: 4,
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
