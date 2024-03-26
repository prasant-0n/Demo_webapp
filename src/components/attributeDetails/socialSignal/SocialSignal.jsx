import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { mediaData } from "../../Utils";

export default function SocialSignal() {
  return (
    <Flex flexDirection={"column"} gap={6} p={""}>
      <Flex flexDirection={"row"} gap={10}>
        {mediaData.map((Data, index) => (
          <Flex
            flexDirection={"row"}
            bg={Data.Value === "yes" ? "green.100" : "gray.100"}
            height={"60px"}
            width={"330px"}
            shadow={"md"}
            borderRadius={"lg"}
          >
            <Box
              dangerouslySetInnerHTML={{ __html: Data.file }}
              style={{ paddingLeft: "20px", paddingTop: "20px" }}
            />

            <Box flexDirection={"column"} p={4} borderRadius={"10px"}>
              <Text color={"gray.400"} fontSize={"sm"}>
                {Data.title}
              </Text>
              <Text fontSize={"sm"} as={"b"}>
                {Data.Value}
              </Text>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
