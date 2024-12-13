import * as React from "react";

import { Heading, Text, VStack, Highlight, StackSeparator } from "@chakra-ui/react";
import Header from "../../components/Header";

const Facials = (): JSX.Element => {
  return (
    <div>
      <Header />
      <VStack mx="10rem" separator={<StackSeparator />}>
        <Heading size="6xl" letterSpacing="tight">
          <Highlight query="Facials" styles={{ color: "green.600" }}>
           Facials
          </Highlight>
        </Heading>
        <Text fontSize="md" color="fg.muted">
          What info should I put here?
          - Do we even need this tab?
        </Text>
      </VStack>
    </div>
  );
};

export default Facials;
