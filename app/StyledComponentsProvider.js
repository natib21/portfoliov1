"use client";

import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "@/style";

export default function StyledComponentsProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
