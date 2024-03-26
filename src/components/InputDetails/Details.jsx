import React from "react";
import { Flex, Box, Stack, Divider, Text } from "@chakra-ui/react";
import { Data } from "../Utils";
export default function Details() {
  return (
    <Box>
      <Flex
        alignItems="center"
        bg="white"
        borderRadius="md"
        p={8}
        height={"100px"}
      >
        <Flex flexDirection={"column"} gap={6} p={""}>
          <Text as={"b"}>Input Details</Text>
          <Flex flexDirection="row" gap={8}>
            {Data.map((data, index) => (
              <Flex flexDirection={"column"} w={"280px"}>
                <Text color={"gray.500"} fontSize={"sm"}>
                  {data.title}
                </Text>
                <Text as={"b"} fontSize={"md"}>
                  {data.value}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
