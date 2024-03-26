import React from "react";
import { Box, Flex, Text, Stack, Divider } from "@chakra-ui/react";
import SelectInput from "../../inputComponent/SelectInput";
import { selectData } from "../../Utils";
export default function PhoneNetwork() {
  return (
    <Flex flexDirection={"column"} gap={6}>
      <Flex flexDirection={"row"} gap={60}>
        <Box flexDirection={"column"}>
          <Text fontSize={"12px"} color={"gray.400"}>
            {" "}
            Telco Risk Score{" "}
          </Text>
          <Text fontSize={"12px"}>34</Text>
        </Box>
        <Box flexDirection={"column"}>
          <Text fontSize={"12px"} color={"gray.400"}>
            Current Network Name
          </Text>
          <Text fontSize={"12px"}>Jio</Text>
        </Box>
        <Box flexDirection={"column"}>
          <Text fontSize={"12px"} color={"gray.400"}>
            Current Network Region{" "}
          </Text>
          <Text fontSize={"12px"}>-----</Text>
        </Box>
        <Box flexDirection={"column"}>
          <Text fontSize={"12px"} color={"gray.400"}>
            Phone Reachable
          </Text>
          <Text fontSize={"12px"}>Yes</Text>
        </Box>
      </Flex>
    </Flex>
  );
}
