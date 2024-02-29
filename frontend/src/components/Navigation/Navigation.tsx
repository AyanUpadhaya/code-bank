import { Hide, Show } from "@chakra-ui/react";
import React from "react";
import SideBar from "./SideBar";
import MobileNavbar from "./MobileNavbar";

const Navigation = () => {
  return (
    <>
      <Show breakpoint="(min-width: 1280px)">
        <SideBar />
      </Show>
      <Hide breakpoint="(min-width: 1280px)">
        <MobileNavbar />
      </Hide>
    </>
  );
};

export default Navigation;
