"use client";

import { createContext } from "react";

export const ThemeContext = createContext({
  theme: "MINIMALISTIC", // default value
  setTheme: (theme: "WELCOME" | "MINIMALISTIC" | "RETRO") => {}, // placeholder function
});
