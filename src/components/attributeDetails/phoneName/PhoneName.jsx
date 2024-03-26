import React from "react";
import { Box, Flex, Text, Stack, Divider } from "@chakra-ui/react";
import SelectInput from "../../inputComponent/SelectInput";
import { selectData } from "../../Utils";
export default function PhoneName() {
  return (
    <Flex flexDirection={"column"} gap={6}>
      <Flex flexDirection={"row"} gap={60}>
        <Box>
          <Text fontSize={"12px"} color={"gray.400"}>
            Address
          </Text>
          <Text fontSize={"12px"}>-----</Text>
        </Box>
        <Box>
          <Text fontSize={"12px"} color={"gray.400"}>
            Business Name Detected
          </Text>
          <Text fontSize={"12px"}>-----</Text>
        </Box>
        <Box>
          <Text fontSize={"12px"} color={"gray.400"}>
            Conditions Evaluations Status
          </Text>
          <Text fontSize={"12px"}>-----</Text>
        </Box>
        <Box>
          <Text fontSize={"12px"} color={"gray.400"}>
            Digital Age
          </Text>
          <Text fontSize={"12px"}>-----</Text>
        </Box>
      </Flex>
    </Flex>
  );
}
