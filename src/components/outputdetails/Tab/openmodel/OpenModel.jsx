import React from "react";
import { useDisclosure } from "@chakra-ui/react"; // Import useDisclosure
import {
  Box,
  Modal,
  ModalOverlay,
  Button,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  ModalFooter,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import TabComponent from "../tabComponent/TabComponent";

export default function OpenModel() {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Destructure isOpen, onOpen, onClose from useDisclosure

  return (
    <Box>
      <Button onClick={onOpen} bg={"white"} textAlign={"right"}>
        <CloseIcon />
      </Button>

      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        // height={"auto"}
        // width={"100%"}
        size={"5xl"}
        // style={{ width: "990px", height: "990px" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TabComponent />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
