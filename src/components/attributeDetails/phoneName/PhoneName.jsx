import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Stack,
  Divider,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import AccordionComponent from "../accordionCompnent/AccordionComponent";

export default function PhoneName() {
  const [visible, setVisible] = useState(false); // State to manage visibility

  // Function to toggle visibility when accordion button is clicked
  const handleAccordionClick = () => {
    setVisible(!visible);
  };

  return <Box></Box>;
}
