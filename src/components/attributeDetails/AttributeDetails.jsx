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
        <Accordion defaultIndex={[0]} allowMultiple>
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
        </Accordion>
      </Flex>
    </Box>
  );
}

{
  /* <PhoneName />
<Divider orientation="horizontal" borderColor="gray.200" />
<EmailName />
<Divider orientation="horizontal" borderColor="gray.200" />
<PhoneNetwork />
<Divider orientation="horizontal" borderColor="gray.200" />
<PhonetoName />
<Divider orientation="horizontal" borderColor="gray.200" />
<PhoneSocial />
<SocialFootprint />
<SocialSignal />
<EmailSocial />
<SocialFootprint />
<SocialSignal /> */
}
