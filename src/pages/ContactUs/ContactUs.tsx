import * as React from "react";

import { Heading, Text, VStack, Highlight, StackSeparator, AspectRatio } from "@chakra-ui/react";

import Header from "../../components/Header";

const ContactUs = (): JSX.Element => {
  return (
    <div>
      <Header />
      <VStack mx="10rem" separator={<StackSeparator />}>
        <Heading size="6xl" letterSpacing="tight">
          <Highlight query="Us" styles={{ color: "green.600" }}>
            Contact Us
          </Highlight>
        </Heading>
        <AspectRatio ratio={16 / 9}>
          <iframe
            title="googlemap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.5526104089204!2d-97.09183932322131!3d49.832073331694794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea7756f043c347%3A0x9f86f18bf0700eae!2sPurohit%20Nurse%20Practitioner%20Clinic!5e0!3m2!1sen!2sca!4v1734066744849!5m2!1sen!2sca"
          />
        </AspectRatio>
        <Text fontSize="md" color="fg.muted">
          120-600 St. Anne's Road Winnipeg, MB R2M 2S2 Phone: (204) 254-4257 Fax: (204) 254-4283
        </Text>
      </VStack>
    </div>
  );
};

export default ContactUs;
