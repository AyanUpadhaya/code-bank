import { sidebarTabs } from "@/CONSTANTS";
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Text } from "@chakra-ui/react";
import React from "react";
import TabLink from "./TabLink";
import { Link } from "@chakra-ui/next-js";

const DrawerComponent = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton border={"1px solid"} borderColor={"light.300"} />
        <DrawerHeader py={"8px"}>
          <Link href={"/"}>
            <Text textStyle={"p-lg"} textAlign={"left"} ml={3} color={"dark.200"}>
              Code Bank
            </Text>
          </Link>
        </DrawerHeader>

        <DrawerBody>
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
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
