import React from "react";
import { Box, Flex, Text, Progress, Spacer } from "@chakra-ui/react";

export default function EmailSocial() {
  return (
    <Flex flexDirection={"column"} gap={6}>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Text color={"gray.400"}>{"89/100"}</Text>
        <Spacer />
        <Text color={"gray.400"} fontSize={"12px"}>
          {"Email Social Score"}
        </Text>
      </Flex>
      <Progress
        value={89}
        size="xs"
        colorScheme="green"
        borderRadius={"20px"}
      />
    </Flex>
  );
}
