import { ReactNode } from "react";
import { IconType } from "react-icons";

export type LinkType = {
  title: string;
  link: string;
};

export type SideBarTabTypes = LinkType & { IconName: IconType };

export type TabLinkTypes = { link: string; children: ReactNode };

export interface WindowSize {
  width: number;
  height: number;
}

export type SnippetDataType = {
  code: string;
  title: string;
  tags?: string[];
  author?: string;
  language?: string | undefined;
  delete?: boolean;
  description?: string;
};

export interface CodeHighlighterProps {
  language?: string;
  code: string;
  title: string;
}

export type SearchBarType = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type RequestSnippetType = { message: string; snippets: SnippetDataType[]; status: boolean };

// | "abap"
//     | "abnf"
//     | "actionscript"
//     | "ada"
//     | "agda"
//     | "al"
//     | "antlr4"
//     | "apacheconf"
//     | "applescript"
//     | "arduino"
//     | "asciidoc"
//     | "asm"
//     | "aspnet"
//     | "autohotkey"
//     | "bash"
//     | "basic"
//     | "batch"
//     | "bbcode"
//     | "c"
//     | "c++"
//     | "c#"
//     | "coffeescript"
//     | "cpp"
//     | "crystal"
//     | "css"
//     | "d"
//     | "dart"
//     | "diff"
//     | "docker"
//     | "ejs"
//     | "elixir"
//     | "elm"
//     | "erb"
//     | "erlang"
//     | "forth"
//     | "fsharp"
//     | "fortran"
//     | "fs"
//     | "ftl"
//     | "gfm"
//     | "gherkin"
//     | "git"
//     | "glsl"
//     | "go"
//     | "graphql"
//     | "groovy"
//     | "haml"
//     | "handlebars"
//     | "haskell"
//     | "haxe"
//     | "html"
//     | "http"
//     | "hyphy"
//     | "icon"
//     | "inform7"
//     | "ini"
//     | "ink"
//     | "io"
//     | "jcl"
//     | "javascript"
//     | "json"
//     | "jsp"
//     | "jsx"
//     | "julia"
//     | "kotlin"
//     | "latex"
//     | "less"
//     | "liquid"
//     | "lisp"
//     | "livescript"
//     | "llvm"
//     | "log"
//     | "lua"
//     | "makefile"
//     | "markdown"
//     | "markup"
//     | "matlab"
//     | "mel"
//     | "nginx"
//     | "nim"
//     | "nix"
//     | "nsis"
//     | "objectivec"
//     | "ocaml"
//     | "opencl"
//     | "oz"
//     | "parigp"
//     | "pascal"
//     | "pawn"
//     | "perl"
//     | "php"
//     | "php-extras"
//     | "powershell"
//     | "processing"
//     | "prolog"
//     | "properties"
//     | "pug"
//     | "puppet"
//     | "python"
//     | "q"
//     | "qml"
//     | "r"
//     | "razor"
//     | "redis"
//     | "rest"
//     | "robot"
//     | "ruby"
//     | "rust"
//     | "sas"
//     | "sass"
//     | "scala"
//     | "scheme"
//     | "scss"
//     | "shaders"
//     | "shell"
//     | "shorthand"
//     | "sql"
//     | "stylus"
//     | "swift"
//     | "tcl"
//     | "textile"
//     | "toml"
//     | "tsx"
//     | "typescript"
//     | "vb"
//     | "vhdl"
//     | "vim"
//     | "visualbasic"
//     | "wasm"
//     | "wiki"
//     | "yaml";
