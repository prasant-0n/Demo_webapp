import React, { useState } from "react";
import { Box, Flex, Text, Stack, Divider } from "@chakra-ui/react";
import { scoreOutput } from "../Utils";
import TabDetails from "./Tab/TabDetails";
import OpenModel from "./Tab/openmodel/OpenModel";

export default function OutputDetails() {
  const [clicked, setClicked] = useState("false");
  return (
    <Box shadow={"lg"}>
      <Flex
        alignItems="center"
        bg="white"
        borderRadius="md"
        p={8}
        height={"auto"}
      >
        <Flex flexDirection={"column"} gap={6} p={""}>
          <Text as={"b"}>Output Details</Text>
          <Text fontSize={"sm"} as={"b"}>
            Identity Risk Score
          </Text>
          <Stack direction="row" h="auto">
            <Flex flexDirection={"row"} gap={6} alignItems={"center"}>
              <Text fontSize={"xl"} as={"b"}>
                350
              </Text>
              <Divider
                orientation="vertical"
                borderColor="gray.200"
                borderWidth="1px"
                height={"20px"}
              />
              <Text as={"b"} color={"green"} fontSize={"sm"}>
                Low Risk
              </Text>
            </Flex>
          </Stack>
          {/* score */}
          <Flex flexDirection={"row"} gap={10}>
            {scoreOutput.map((Data, index) => (
              <Box
                flexDirection={"column"}
                // bg={"gray.100"}
                bg={Data.isValid ? "gray.100" : "orange.100"}
                height={"60px"}
                width={"330px"}
                p={4}
                borderRadius={"10px"}
                shadow={"md"}
              >
                <Text color={"gray.400"} fontSize={"sm"}>
                  {Data.title}
                </Text>
                <Text
                  fontSize={"sm"}
                  as={"b"}
                  color={Data.isValid ? "" : "orange.300"}
                >
                  {Data.Value}
                </Text>
              </Box>
            ))}
          </Flex>
          {/* <OpenModel /> */}
          <TabDetails setClicked={setClicked} clicked={clicked} />
        </Flex>
      </Flex>
    </Box>
  );
}
