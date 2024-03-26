import React from "react";
import { Box, Text, Flex, Link } from "@chakra-ui/react";
export default function TabComponent() {
  return (
    <Box display="grid" gridTemplateColumns="80% 20%" gap={4} height="90%">
      <Box bg="gray.200" height="570px" borderRadius={"4px"} shadow={"3xl"}>
        <Text>Graph Container</Text>
      </Box>
      <Box bg="">
        <Flex flexDirection={"column"} gap={6} pl={5}>
          <Box>
            <Text mb={4}>Email L1 Confidence</Text>
            <Text>-----</Text>
          </Box>
          <Box>
            <Text mb={4}>Email L1 Count</Text>
            <Text>-----</Text>
          </Box>
          <Box>
            <Text mb={4}>Mobile L1 Confidence</Text>
            <Text>-----</Text>
          </Box>
          <Box>
            <Text mb={4}>Mobile L1 Count</Text>
            <Text>-----</Text>
          </Box>
          <Box>
            <Text mb={4}>Mobile Fraud</Text>
            <Text>-----</Text>
          </Box>
          <Box>
            <Text mb={4}>Common Phone count 28 Days</Text>
            <Text>-----</Text>
          </Box>
          <Box>
            <Text mb={4}>Common Email Count 28 Days</Text>
            <Text>-----</Text>
          </Box>
          <Link color={"blue"}>
            <Text as="u"> View More</Text>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}
