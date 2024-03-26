import React from "react";
import { Box, Flex, Text, Stack, Divider } from "@chakra-ui/react";
import SelectInput from "../../inputComponent/SelectInput";
import { selectData } from "../../Utils";
export default function EmailName() {
  return (
    <Flex flexDirection={"column"} gap={6}>
      <Flex flexDirection={"row"} gap={60}>
        <Box flexDirection={"column"}>
          <Text fontSize={"12px"} color={"gray.400"}>
            {" "}
            First Name Match
          </Text>
          <Text fontSize={"12px"}>89</Text>
        </Box>
        <Box flexDirection={"column"}>
          <Text fontSize={"12px"} color={"gray.400"}>
            Last Name Match
          </Text>
          <Text fontSize={"12px"}>-----</Text>
        </Box>
        <Box flexDirection={"column"}>
          <Text fontSize={"12px"} color={"gray.400"}>
            Multi Phone Attached
          </Text>
          <Text fontSize={"12px"}>-----</Text>
        </Box>
        <Box flexDirection={"column"}>
          <Text fontSize={"12px"} color={"gray.400"}>
            Name Email Match
          </Text>
          <Text fontSize={"12px"}>-----</Text>
        </Box>
      </Flex>
    </Flex>
  );
}
