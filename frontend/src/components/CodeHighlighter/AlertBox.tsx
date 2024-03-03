import { Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";

const AlertBox = ({ isOpen, onClose, content = "" }: { content: string; isOpen: boolean; onClose: () => void }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={"inside"}>
      <ModalOverlay />
      <ModalContent bgColor={"light.200"}>
        <ModalHeader>Info</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex direction={"column"} gap={4} textAlign={"left"}>
            <Text as={"p"} whiteSpace={"pre-wrap"}>
              {content}
            </Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AlertBox;
