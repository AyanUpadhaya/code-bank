import { Flex, Text } from "@chakra-ui/react";

const CustomError = () => {
  return (
    <Flex
      bgColor={"light.200"}
      w={"100%"}
      pos={"absolute"}
      top={"0px"}
      left={"0px"}
      direction={"column"}
      gap={4}
      zIndex={10}
      minH={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text as={"h1"} color={"primary.200"} textStyle={"heading-h1-lg"}>
        Oops!
      </Text>
      <Text as={"p"} color={"dark.200"} textStyle={"p-lg"}>
        Something went wrong...
      </Text>
    </Flex>
  );
};

export default CustomError;
