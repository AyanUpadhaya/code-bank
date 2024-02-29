import { SideBarTabTypes, SnippetDataType, componentsDataType } from "./TYPES";
import { FaPager } from "react-icons/fa6";
import { TbFishHook } from "react-icons/tb";

export const componentsData: componentsDataType[] = [
  {
    title: "component-title",
    id: "string+number",
    code: {
      "js-code": "string - for copy",
      "ts-code": "string - for copy",
    },
    usage: "string - is our kind of description",
    "creation-guide": "string - summary about how we created the component",
    "visual-code": "string - code for visualization on our page",
    "date-created": "an ISO date string",
    "date-modified": "an ISO date string",
    image: "StaticImageData type",
  },
];

export const sidebarTabs: SideBarTabTypes[] = [
  {
    title: "Snippets",
    link: "/snippets-page",
    IconName: FaPager,
  },
  {
    title: "Custom Hooks",
    link: "/custom-hooks",
    IconName: TbFishHook,
  },
];

export const snippetData: SnippetDataType[] = [
  {
    code: "&quot;use client&quot;;\n\timport CodeHighlighter from &quot;@/components/CodeHighlighter/CodeHighlighter&quot;;\n\timport Navigation from &quot;@/components/Navigation/Navigation&quot;;\n\timport SearchBar from &quot;@/components/SearchBar/SearchBar&quot;;\n\timport { Flex } from &quot;@chakra-ui/react&quot;;\n\timport React from &quot;react&quot;;\n\n\tconst SnippetsPage = () => {\n\t\treturn (\n\t\t\t<Flex w={&quot;100%&quot;} pos={&quot;relative&quot;} minH={&quot;100vh&quot;} direction={{ base: &quot;column&quot;, md: &quot;row&quot; }}>\n\t\t\t\t<Navigation />\n\t\t\t\t<Flex w={&quot;100%&quot;} minH={&quot;100vh&quot;} bgColor={&quot;light.200&quot;} pt={[0, 0, &quot;56px&quot;, &quot;64px&quot;]}>\n\t\t\t\t\t<SearchBar />\n\t\t\t\t\t<CodeHighlighter inputCode=&quot;test&quot;/>\n\t\t\t\t</Flex>\n\t\t\t</Flex>\n\t\t);\n\t};",
    title: "React Component",
    tags: ["React", "Component", "Snippet"],
    author: "sayshark75",
    language: "jsx",
  },
];
