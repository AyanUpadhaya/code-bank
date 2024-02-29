"use client";
import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import logo from "@/assets/icons/icon.svg";
import { sidebarTabs } from "@/CONSTANTS";
import TabLink from "./TabLink";
import { Link } from "@chakra-ui/next-js";

const SideBar = () => {
  return (
    <Flex
      minW={"240px"}
      maxW={"240px"}
      bgColor={"light.200"}
      borderRight={"1px solid"}
      borderRightColor={"light.300"}
      direction={"column"}
      minH={"100vh"}
      overflow={"hidden"}
      pos={"sticky"}
      top={"0px"}
      left={"0px"}
    >
      {/* top logo */}
      <Link href={"/"} w={"100%"} _hover={{}}>
        <Flex
          w={"100%"}
          px={"16px"}
          py={"10px"}
          gap={"18px"}
          justifyContent={"space-between"}
          alignItems={"center"}
          bgColor={"light.100"}
          shadow={"base"}
        >
          <Flex gap={"12px"}>
            <Box>
              <Image
                w={"25px"}
                h={"25px"}
                src={logo.src}
                alt={"Free Code snippet bank, Code which is used regularly will be stored here."}
              />
            </Box>
            <Text textStyle={"p-lg"} color={"dark.200"}>
              Code Bank
            </Text>
          </Flex>
        </Flex>
      </Link>

      {/* Tabs list */}

      <Flex w={"100%"} px={"8px"} direction={"column"}>
        {sidebarTabs.map(({ title, link, IconName }, index) => {
          return (
            <TabLink key={`tab-link-key-${index}`} link={link}>
              <IconName fontSize={"24px"} style={{ position: "relative", zIndex: 1 }} />{" "}
              <Text pos={"relative"} zIndex={1}>
                {title}
              </Text>
            </TabLink>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default SideBar;
