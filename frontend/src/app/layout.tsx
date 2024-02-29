import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { fonts } from "@/fonts/fonts";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Code Bank",
  description: "A Library to easily use pre-configured code snippets tailored to your project needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${fonts.montserrat.variable} ${fonts.rubik.variable} ${fonts.poppins.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
