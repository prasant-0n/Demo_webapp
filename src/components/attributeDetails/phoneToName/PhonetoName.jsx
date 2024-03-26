import React from "react";
import { Box, Flex, Text, Stack, Divider } from "@chakra-ui/react";
import SelectInput from "../../inputComponent/SelectInput";
import { selectData } from "../../Utils";
export default function PhonetoName() {
  return (
    <Flex flexDirection={"column"} gap={6} p={""}>
      <Flex flexDirection={"row"} gap={"220px"}>
        <Box flexDirection={"column"}>
          <Text fontSize={"12px"} color={"gray.400"}>
            {" "}
            VPA
          </Text>
          <Text fontSize={"12px"}>-----</Text>
        </Box>
        <Box flexDirection={"column"}>
          <Text fontSize={"12px"} color={"gray.400"}>
            UIP
          </Text>
          <Text fontSize={"12px"}>No</Text>
        </Box>
        <Box flexDirection={"column"}>
          <Text fontSize={"12px"} color={"gray.400"}>
            UPI NameSli{" "}
          </Text>
          <Text fontSize={"12px"}>-----</Text>
        </Box>
        <Box flexDirection={"column"}>
          <Text fontSize={"12px"} color={"gray.400"}>
            Digital Age
          </Text>
          <Text fontSize={"12px"}>-----</Text>
        </Box>
      </Flex>
    </Flex>
  );
}
