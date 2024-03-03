import { Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { MdMessage } from "react-icons/md";
import AlertBox from "./AlertBox";

const UsagePopup = ({ content = "" }: { content?: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex fontSize={"24px"} gap={2} justifyContent={"center"} alignItems={"center"}>
      <IconButton fontSize={"24px"} icon={<MdMessage />} aria-label="Document Popup Button" onClick={onOpen} />
      <AlertBox isOpen={isOpen} onClose={onClose} content={content} />
    </Flex>
  );
};

export default UsagePopup;
