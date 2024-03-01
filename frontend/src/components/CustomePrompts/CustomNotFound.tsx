import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { SiGithub } from "react-icons/si";

const CustomNotFound = () => {
  return (
    <Flex w={"100%"} bgColor={"light.200"} minH={"100vh"} direction={"column"} gap={3} justifyContent={"center"} alignItems={"center"}>
      <Text as={"h1"} color={"primary.200"} textStyle={"heading-h1-lg"}>
        Not Found!
      </Text>
      <Text as={"p"} color={"dark.200"} textStyle={"p-lg"}>
        The Snippet you are looking for, is not found...
      </Text>
      <Text as={"p"} color={"dark.200"} textStyle={"p-lg"}>
        You can request on our github page
      </Text>
      <CustomButton title="GitHub" variant="grey-solid" link="https://github.com/sayshark75/code-bank" target="_blank">
        <SiGithub />
      </CustomButton>
    </Flex>
  );
};

export default CustomNotFound;
