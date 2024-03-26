import React from "react";
import { Flex, Select, Text } from "@chakra-ui/react";

export default function SelectInput({ Data, placeholder, text, styles }) {
  return (
    <Flex flexDirection={"column"} gap="3px" style={styles}>
      <Text color="gray.500" fontSize="sm" as={"b"}>
        {text}
      </Text>{" "}
      <Select
        variant="unstyled"
        value={"selectedOption"}
        onChange={"handleChange"}
        placeholder={placeholder}
        fontSize="md"
        width={styles ? "101rem" : "full"} // Set width to full
        style={{ fontWeight: "bold" }}
      >
        {Data.map((data, index) => (
          <option value={data.value} key={index} style={{ fontWeight: "bold" }}>
            {data.label}
          </option>
        ))}
      </Select>
    </Flex>
  );
}
