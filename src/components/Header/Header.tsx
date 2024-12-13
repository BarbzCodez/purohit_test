import React from "react";

import { Button, Flex, Image, Spacer, HStack } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import purohitLogo from "../../images/purohit_logo_full.png";

interface NavItem {
  name: string;
  path: string;
}
const navItems: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "Holter Monitors", path: "/holterMonitors" },
  { name: "Facials", path: "/facials" },
  { name: "Contact Us", path: "/contactUs" },

];

const Header = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div>
      <Flex m="2rem" mx="4rem">
        <Image width="15rem" src={purohitLogo} alt="Purohit Logo" />
        <Spacer />
        <HStack>
          {navItems.map((item) => (
            <Button key={item.name} onClick={() => navigate(item.path)} variant="ghost" size="lg">
              {item.name}
            </Button>
          ))}
        </HStack>
      </Flex>
    </div>
  );
};

export default Header;
