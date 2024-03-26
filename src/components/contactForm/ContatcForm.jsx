import React from "react";
import { Box, Flex, Divider, IconButton, Stack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons"; // Import SearchIcon from Chakra UI icons
import InputComponent from "../inputComponent/InputComponent";
import SelectInput from "../inputComponent/SelectInput";
import { inputData } from "../Utils";
import { selectData } from "../Utils";
import ProductDropdown from "./productDropdown/ProductDropdown";

const ContactForm = () => {
  return (
    <Box>
      <Flex
        alignItems="center"
        bg="white"
        borderRadius="md"
        p={0}
        height={"80px"}
      >
        <Flex flexDirection="row" gap={4}>
          <Stack direction="row" h="100px" p={6}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              height={50}
              width={50}
            >
              <rect width="256" height="256" fill="none" />
              <polygon
                points="56 96 56 160 128 232 128 160 200 160 56 32 200 32 200 96 56 96"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              />
            </svg>
            {/* <SelectInput
              Data={selectData}
              placeholder="Identity Risk Score"
              text="Product"
            /> */}
            <ProductDropdown />

            <Divider
              orientation="vertical"
              borderColor="gray.200"
              borderWidth="1px"
              ml={40}
              // height={"20px"}
            />
          </Stack>

          {inputData.map((data, index) => (
            <Stack direction="row" h="100px" p={4} key={index}>
              <InputComponent text={data.text} placeholder={data.placeholder} />
              {index !== inputData.length - 1 && (
                <Divider
                  orientation="vertical"
                  borderColor="gray.200"
                  borderWidth="1px"
                />
              )}
            </Stack>
          ))}
        </Flex>
        <Flex flex="1" justifyContent="flex-end" pr={10}>
          <IconButton
            variant="solid"
            // colorScheme="blue.200"
            bg={"blue.600"}
            borderRadius="full"
            icon={<SearchIcon />}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default ContactForm;
