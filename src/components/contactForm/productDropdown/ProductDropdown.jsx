import React, { useState } from "react";
import {
  Flex,
  Button,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function ProductDropdown() {
  const [value, setValue] = useState("Identity Risk Store");

  return (
    <Flex flexDirection="column">
      <Text
        color="gray.500"
        fontSize="sm"
        fontWeight="bold"
        pl={2}
        pt={2}
        m={0}
      >
        Product
      </Text>
      <Menu isLazy>
        {({ isOpen }) => (
          <>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              transition="all 0.2s"
              _hover={{ bg: "gray.400" }}
              bg={"white"}
              pl={2} // Adjust padding
              pb={2}
              m={0} // Adjust margin
              isActive={isOpen}
            >
              {value}
            </MenuButton>
            <MenuList w={"370px"} mt={"6px"} ml={"-80px"}>
              <RadioGroup onChange={setValue} value={value}>
                <Stack direction="column" p={2}>
                  {" "}
                  {/* Adjust padding */}
                  <Radio value="Identity Risk Store">Identity Risk Store</Radio>
                  <Radio value="Mule Score">Mule Score</Radio>
                  <Radio value="Swap-In Score">Swap-In Score</Radio>
                  <Radio value="Swap-out Score">Swap-out Score</Radio>
                </Stack>
              </RadioGroup>
            </MenuList>
          </>
        )}
      </Menu>
    </Flex>
  );
}
