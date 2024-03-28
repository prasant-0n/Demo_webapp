import React from "react";
import { Box, Flex, Text, Grid } from "@chakra-ui/react";
export default function ListItem({ data }) {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      {Object.entries(data).map(([item, value]) => (
        <Flex flexDirection={"row"} gap={60} width={40}>
          <Box flexDirection={"column"}>
            <Text fontSize={"12px"} color={"gray.400"}>
              {item}
            </Text>
            <Text fontSize={"12px"}>
              {/* {typeof value === "object" ? JSON.stringify(value) : value} */}
              {value
                ? typeof value === "object"
                  ? JSON.stringify(value)
                  : value
                : "-----"}
            </Text>
          </Box>
        </Flex>
      ))}
    </Grid>
  );
}
