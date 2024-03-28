import React from "react";
import {
  Box,
  Flex,
  Text,
  Stack,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import PhoneName from "./phoneName/PhoneName";
import EmailName from "./emailName/EmailName";
import PhoneNetwork from "./phoneNetwork/PhoneNetwork";
import PhonetoName from "./phoneToName/PhonetoName";
import SocialSignal from "./socialSignal/SocialSignal";
import SocialFootprint from "./socialFootprint/SocialFootprint";
import EmailSocial from "./emailSocial/EmailSocial";
import PhoneSocial from "./phoneSocial/PhoneSocial";
import AccordionComponent from "./accordionCompnent/AccordionComponent";
export default function AttributeDetails() {
  return (
    <Box shadow={"lg"}>
      <Flex
        bg="white"
        borderRadius="md"
        p={8}
        height={"auto"}
        flexDirection={"column"}
        gap={4}
      >
        {/* Your content here */}
        {/* <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="b" flex="1" textAlign="left">
                  Phone Name Attribute
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <PhoneName />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="b" flex="1" textAlign="left">
                  Email Name Attribute
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <EmailName />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="b" flex="1" textAlign="left">
                  Phone Network
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <PhoneNetwork />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="b" flex="1" textAlign="left">
                  Phone to Name
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <PhonetoName />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="b" flex="1" textAlign="left">
                  Phone Social Advance
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <PhoneSocial />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="b" flex="1" textAlign="left">
                  Social Footprint
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SocialFootprint />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="b" flex="1" textAlign="left">
                  Social Signal
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SocialSignal />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="b" flex="1" textAlign="left">
                  Email Social Advance{" "}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <PhoneSocial />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="b" flex="1" textAlign="left">
                  Social Footprint
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SocialFootprint />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="b" flex="1" textAlign="left">
                  Social Signal
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SocialSignal />
            </AccordionPanel>
          </AccordionItem>
        </Accordion> */}
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionComponent />
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </Box>
  );
}
