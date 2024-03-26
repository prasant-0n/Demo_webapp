import React from "react";
import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
  TabIndicator,
  Flex,
} from "@chakra-ui/react";
import TabComponent from "./tabComponent/TabComponent";
import OpenModel from "./openmodel/OpenModel";

export default function TabDetails() {
  return (
    <Flex>
      {" "}
      {/* Updated parent container to a Flexbox */}
      <Tabs position="relative" variant="unstyled" width="100%">
        {" "}
        {/* Set width to 100% to fill the available space */}
        <TabList flexDirection={"row"} gap={4}>
          <Tab>Identity Risk Score</Tab>
          <Tab>Service 2</Tab>
          <Tab>Service 3</Tab>
          <Tab>Service 4</Tab>
          <Tab>Service 5</Tab>
          <Tab>Service 6</Tab>
          <Tab>Service 7</Tab>
        </TabList>
        <TabIndicator
          mt="1.5px"
          ml="12px"
          // p={2}
          height="4px"
          width="40px"
          bg="blue.500"
          borderRadius="4px"
        />
        <TabPanels>
          <TabPanel>
            <TabComponent />
          </TabPanel>
          <TabPanel>
            <TabComponent />
          </TabPanel>
          <TabPanel>
            <TabComponent />
          </TabPanel>
          <TabPanel>
            <TabComponent />
          </TabPanel>
          <TabPanel>
            <TabComponent />
          </TabPanel>
          <TabPanel>
            <TabComponent />
          </TabPanel>
          <TabPanel>
            <TabComponent />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Box mb={4}>
        <OpenModel />
      </Box>
    </Flex>
  );
}
