import React from "react";

import { Button, Flex, Image, Spacer, HStack} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import purohitLogo from "../../images/purohit_logo_full.png";

const Header = (): JSX.Element => {
  const navigate = useNavigate();
  const handleClickHome = () => {
    navigate("/");
  };

  const handleClickContactUs = () => {
    navigate("/ContactUs");
  };
  return (
    <div>
      <Flex m="1rem">
        <Image width="15rem" src={purohitLogo} alt="Purohit Logo" />
        <Spacer />
        <HStack>
          <Button onClick={handleClickHome}> Home </Button>
          <Button onClick={handleClickContactUs}> Contact Us </Button>
        </HStack>
      </Flex>
    </div>
  );
};

export default Header;
