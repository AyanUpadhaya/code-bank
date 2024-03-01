"use client";
import CustomButton from "@/components/CustomButton/CustomButton";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { MdOutlineCodeOff } from "react-icons/md";

const NotFound = () => {
  return (
    <Flex
      w={"100%"}
      bgColor={"light.200"}
      pos={"absolute"}
      top={"0px"}
      left={"0px"}
      zIndex={10}
      minH={"100vh"}
      direction={"column"}
      gap={3}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text as={"h1"} color={"primary.200"} textStyle={"heading-h1-lg"}>
        Not Found!
      </Text>
      <Text as={"p"} color={"dark.200"} textStyle={"p-lg"}>
        The Page you are looking for, is not found...
      </Text>
      <Flex gap={3}>
        <CustomButton title="View Snippets" variant="blue-solid" link="/snippets-page"></CustomButton>
        <CustomButton title="Visit Home" variant="grey-solid" link="/"></CustomButton>
      </Flex>
    </Flex>
  );
};

export default NotFound;
