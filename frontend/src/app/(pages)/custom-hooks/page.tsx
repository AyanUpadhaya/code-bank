import Navigation from "@/components/Navigation/Navigation";
import { Flex } from "@chakra-ui/react";
import React from "react";

const CustomHooks = () => {
  return (
    <Flex w={"100%"} minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Navigation />
    </Flex>
  );
};

export default CustomHooks;
