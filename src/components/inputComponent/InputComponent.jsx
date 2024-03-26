import React from "react";
import { Text, Input, Flex } from "@chakra-ui/react";

export default function InputComponent({ text, placeholder }) {
  return (
    <Flex flexDirection={"column"} gap="3px" p={4}>
      <Text color="gray.500" fontSize="sm">
        {text}
      </Text>
      <Input
        variant="unstyled"
        size="md"
        width="100%"
        type="email"
        w={"260px"}
        fontSize="md"
        // placeholderTextColor="red"
        placeholder={placeholder}
      />
    </Flex>
  );
}
