// app/context/ThemeProvider.tsx
"use client";

import { useState, useEffect, ReactNode } from "react";
import { ThemeContext } from "./themeContext";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"WELCOME" | "MINIMALISTIC" | "RETRO">(
    "WELCOME",
  );

  // // Optional: persist theme across reloads
  // useEffect(() => {
  //   const storedTheme = localStorage.getItem("theme");

  //   if (storedTheme) setTheme(storedTheme);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("theme", theme);
  //   document.documentElement.classList.toggle("WELCOME", theme === "WELCOME");
  // }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
