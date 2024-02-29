"use client";
import { Flex, IconButton, Input } from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";
import ThemeChanger from "../ThemeChanger/ThemeChanger";

const SearchBar = () => {
  return (
    <Flex
      pos={"fixed"}
      top={"0px"}
      right={"0px"}
      zIndex={5}
      justifyContent={"center"}
      alignItems={"center"}
      mt={[2, 2, 2, 2, 4]}
      mr={[2, 2, 2, 2, 4]}
    >
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        rounded={"full"}
        border={"1px solid"}
        bgColor={"light.200"}
        borderColor={"light.300"}
        overflow={"hidden"}
      >
        <Input
          type="search"
          w={["140px", "200px"]}
          placeholder="Search..."
          name="search"
          autoComplete="search"
          variant={"unstyled"}
          pl={5}
        />
        <IconButton rounded={"none"} bgColor={"light.200"} icon={<MdSearch />} aria-label="Search Icon Button" />
      </Flex>
      <ThemeChanger />
    </Flex>
  );
};

export default SearchBar;
