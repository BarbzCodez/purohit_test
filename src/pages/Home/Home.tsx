import * as React from "react";

import { Heading, Text, VStack, Highlight, StackSeparator } from "@chakra-ui/react";

import Header from "../../components/Header";

const Home = (): JSX.Element => {
  return (
    <div>
      <Header />
      <VStack mx="10rem" separator={<StackSeparator />}>
        <Heading size="6xl" letterSpacing="tight">
          <Highlight query="Health Clinic" styles={{ color: "green.600" }}>
            Welcome to your Health Clinic
          </Highlight>
        </Heading>
        <Text fontSize="md" color="fg.muted">
          What info should I put here?
          - No longer accepting new patients
          - Best way to reach is by calling
          - call for current activities?
        </Text>
      </VStack>
    </div>
  );
};

export default Home;
