"use client";
import { TabLinkTypes } from "@/TYPES";
import { Link } from "@chakra-ui/next-js";
import { Flex } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

const TabLink = ({ link, children }: TabLinkTypes) => {
  const path = usePathname();
  const isValidPath = link === path;
  return (
    <Link w={"100%"} href={link} _hover={{}}>
      <Flex
        w={"100%"}
        py={"12px"}
        px={"18px"}
        gap={"16px"}
        pos={"relative"}
        mt={"8px"}
        color={isValidPath ? "light.200" : "dark.200"}
        bgColor={isValidPath ? "dark.200" : "light.200"}
        rounded={"md"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        _hover={
          isValidPath
            ? {}
            : {
                _after: {
                  w: "100%",
                  left: "0px",
                },
              }
        }
        _after={
          isValidPath
            ? {}
            : {
                content: '"."',
                rounded: "md",
                w: "0px",
                minH: "100%",
                color: "transparent",
                pos: "absolute",
                top: "0px",
                right: "0px",
                transition: "300ms",
                bgColor: "light.300",
              }
        }
      >
        {children}
      </Flex>
    </Link>
  );
};

export default TabLink;
