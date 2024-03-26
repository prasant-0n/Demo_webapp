import React from "react";
import { Box, Flex, Text, Stack, Divider } from "@chakra-ui/react";
import SelectInput from "../../inputComponent/SelectInput";
import { selectData } from "../../Utils";
export default function SocialSigna() {
  return (
    <Flex flexDirection={"column"} gap={6} p={""}>
      <Flex flexDirection={"row"} gap={"220px"}>
        <Box flexDirection={"column"}>
          <Text fontSize={"11px"} color={"gray.400"}>
            {" "}
            Label
          </Text>
          <Text fontSize={"13px"}>Value</Text>
        </Box>
        <Box flexDirection={"column"}>
          <Text fontSize={"11px"} color={"gray.400"}>
            {" "}
            Label
          </Text>
          <Text fontSize={"13px"}>Value</Text>
        </Box>
        <Box flexDirection={"column"}>
          <Text fontSize={"11px"} color={"gray.400"}>
            {" "}
            Label
          </Text>
          <Text fontSize={"13px"}>Value</Text>
        </Box>
        <Box flexDirection={"column"}>
          <Text fontSize={"11px"} color={"gray.400"}>
            {" "}
            Label
          </Text>
          <Text fontSize={"13px"}>Value</Text>
        </Box>
      </Flex>
    </Flex>
  );
}
