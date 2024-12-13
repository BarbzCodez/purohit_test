import * as React from "react";

import { Heading, Text, VStack, Highlight, StackSeparator } from "@chakra-ui/react";
import Header from "../../components/Header";

const HolterMonitors = (): JSX.Element => {
  return (
    <div>
      <Header />
      <VStack mx="10rem" separator={<StackSeparator />}>
        <Heading size="6xl" letterSpacing="tight">
          <Highlight query="monitor" styles={{ color: "green.600" }}>
           Holter monitor
          </Highlight>
        </Heading>
        <Text fontSize="md" color="fg.muted">
          What info should I put here?
          - how long does it take?
          - prices?
          - who to contact?
          - whats the process for the dropoff due to the canada post strike?
        </Text>
      </VStack>
    </div>
  );
};

export default HolterMonitors;
