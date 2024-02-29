import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    mont: "var(--font-montserrat)",
    rubik: "var(--font-rubik)",
    poppins: "var(--font-poppins)",
  },

  styles: {
    global: {
      "html, body": {
        m: "0px",
        p: "0px",
        fontFamily: "poppins, sans-serif",
        fontSize: ["14px", "14px", "14px", "14px", "16px"],
        fontWeight: 500,
        letterSpacing: "0.8px",
        textAlign: "center",
        lineHeight: ["18px", "18px", "18px", "20px", "24px"],
        position: "relative",
        bg: "light.250",
        color: "dark.100",
      },
    },
  },

  colors: {
    primary: {
      100: "#1B8DFF",
      200: "#2E96FF",
      300: "#3A9CFF",
      400: "#4BA5FF",
      500: "#59ACFF",
      900: "#BFDFFF",
    },
  },

  semanticTokens: {
    colors: {
      dark: {
        100: { default: "#1D1D1D", _dark: "#fff" },
        200: { default: "#2B2B2B", _dark: "#FCFCFC" },
        300: { default: "#3C3C3C", _dark: "#DFDFDF" },
      },
      light: {
        100: { _dark: "#1D1D1D", default: "#fff" },
        200: { _dark: "#2B2B2B", default: "#FCFCFC" },
        250: { _dark: "#333333", default: "#FCFCFC" },
        300: { _dark: "#3C3C3C", default: "#DFDFDF" },
      },
    },
  },

  textStyles: {
    "heading-h1-lg": {
      fontSize: ["48px", "64px", "72px", "84px", "96px"],
      fontWeight: "700",
      fontFamily: "poppins",
      lineHeight: ["64px", "72px", "84px", "96px", "104px"],
      letterSpacing: "1.5px",
    },
    "p-lg": {
      fontSize: "18px",
      fontWeight: 600,
      fontFamily: "mont",
      lineHeight: "28px",
    },
  },

  layerStyles: {
    "screen-flex-col-center": {
      w: "100%",
      minH: "100vh",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    "flex-center": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  components: {
    Button: {
      variants: {
        "blue-solid": {
          w: "100%",
          maxW: "180px",
          py: "26px",
          color: "light.200",
          bgColor: "primary.200",
          rounded: "base",
          fontFamily: "mont",
          fontWeight: 400,
          letterSpacing: "0.5px",
          shadow: "lg",
          pos: "relative",
          transition: "transform 200ms",
          _active: {
            transform: "translateY(10px)",
          },
          _hover: {
            color: "dark.100",
            _after: {
              w: "100%",
              left: "0px",
            },
          },
          _after: {
            content: '"."',
            w: "0px",
            minH: "100%",
            pos: "absolute",
            color: "transparent",
            transition: "380ms",
            bgColor: "light.200",
            top: "0px",
            right: "0px",
            rounded: "base",
          },
        },
        "grey-solid": {
          w: "100%",
          maxW: "180px",
          py: "26px",
          color: "light.200",
          bgColor: "dark.200",
          rounded: "base",
          fontFamily: "mont",
          fontWeight: 400,
          letterSpacing: "0.8px",
          shadow: "lg",
          pos: "relative",
          transition: "transform 200ms",
          _active: {
            transform: "translateY(10px)",
          },
          _hover: {
            color: "dark.100",
            _after: {
              w: "100%",
              left: "0px",
            },
          },
          _after: {
            content: '"."',
            w: "0px",
            minH: "100%",
            pos: "absolute",
            color: "transparent",
            transition: "380ms",
            bgColor: "light.200",
            top: "0px",
            right: "0px",
            rounded: "base",
          },
        },
      },
    },
  },
});
