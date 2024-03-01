import { Flex, Spinner } from "@chakra-ui/react";

const CustomLoader = () => {
  return (
    <Flex
      w={"100%"}
      bgColor={"light.100"}
      pos={"absolute"}
      top={"0px"}
      left={"0px"}
      zIndex={10}
      minH={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Spinner thickness="4px" speed="0.65s" emptyColor="light.200" color="primary.100" size="xl" />
    </Flex>
  );
};

export default CustomLoader;
