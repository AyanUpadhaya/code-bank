import CustomButton from "@/components/CustomButton/CustomButton";
import ThemeChanger from "@/components/ThemeChanger/ThemeChanger";
import { Flex, Highlight, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

export default function Home() {
  return (
    <Flex layerStyle={"screen-flex-col-center"}>
      <Text as={"h1"} color={"dark.100"} textStyle={"heading-h1-lg"} mb={["16px", "24px"]}>
        Code
        <Highlight query={"Bank"} styles={{ color: "primary.100" }}>
          Bank
        </Highlight>
      </Text>
      <Text as={"h5"} px={"2"}>
        A Library to easily use pre-configured code snippets tailored to your project needs.
      </Text>
      <Flex gap={"16px"} mt={"24px"} w={"100%"} maxW={"600px"} layerStyle={"flex-center"} direction={["column", "row"]}>
        <CustomButton title="Get Started" variant="blue-solid" link="/snippets-page" target="_self">
          <FaArrowRight />
        </CustomButton>
        <CustomButton title="GitHub" variant="grey-solid" link="https://github.com/sayshark75/code-bank" target="_blank">
          <SiGithub />
        </CustomButton>
      </Flex>
      <Flex pos={"absolute"} top={4} right={4}>
        <ThemeChanger />
      </Flex>
    </Flex>
  );
}
