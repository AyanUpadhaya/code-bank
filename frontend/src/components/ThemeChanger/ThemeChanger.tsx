"use client";
import { IconButton, useColorMode } from "@chakra-ui/react";
import React from "react";
import { MdSunny, MdNightsStay } from "react-icons/md";

const ThemeChanger = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      rounded={"full"}
      ml={5}
      overflow={"hidden"}
      bgColor={"light.200"}
      icon={colorMode === "light" ? <MdSunny /> : <MdNightsStay />}
      aria-label="Search Icon Button"
      onClick={toggleColorMode}
    />
  );
};

export default ThemeChanger;
