"use client";
import { Link } from "@chakra-ui/next-js";
import { Button, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const CustomButton = ({
  title,
  variant,
  link,
  target,
  children,
}: {
  title: string;
  variant: "blue-solid" | "grey-solid";
  link: string;
  target: "_blank" | "_parent" | "_self" | "_top";
  children: ReactNode;
}) => {
  return (
    <Link href={link} w={"100%"} maxW={"180px"} target={target}>
      <Button variant={variant}>
        <Text pos={"relative"} zIndex={1} layerStyle={"flex-center"} gap={"12px"}>
          {title} {children}
        </Text>
      </Button>
    </Link>
  );
};

export default CustomButton;
