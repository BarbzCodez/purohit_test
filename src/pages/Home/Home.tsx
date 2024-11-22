import * as React from "react";

import { Text } from "@chakra-ui/react";

import Header from "../../components/Header";

const Home = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Text> Hi, Im Home</Text>
    </div>
  );
};

export default Home;
