import React from "react";

import { VStack, Heading, Text, Center, AbsoluteCenter } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <VStack>
        <Center>
          <Heading>Purohit Nurse Practitioner Clinic</Heading>
        </Center>
        <AbsoluteCenter>
          <Text fontSize="xl">Phone: 2043901861 Fax: 204...</Text>
        </AbsoluteCenter>
      </VStack>
    </div>
  );
}

export default App;
