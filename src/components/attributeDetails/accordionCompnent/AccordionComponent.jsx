import React, { useState } from "react";
import {
  Box,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";

import { Information } from "../../Utils";
import ListItem from "./listitem/ListItem";

export default function AccordionComponent() {
  const [visible, setVisible] = useState(false); // State to manage visibility

  const handleAccordionClick = () => {
    setVisible(!visible);
  };

  const services = Information.services;

  return (
    <Box>
      {Object.entries(services).map(([serviceName, serviceData]) => (
        <Box key={serviceName}>
          <AccordionItem>
            <h2>
              <AccordionButton onClick={handleAccordionClick}>
                <Box as="span" flex="1" textAlign="left">
                  {serviceName}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <ListItem data={filterError(serviceData.response)} />
            </AccordionPanel>
          </AccordionItem>
        </Box>
      ))}
    </Box>
  );
}

// Function to filter out the error value
function filterError(data) {
  const filteredData = {};
  for (const key in data) {
    if (key !== "error") {
      filteredData[key] = data[key];
    }
  }
  return filteredData;
}
