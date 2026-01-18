import type { Metadata } from "next";
import "@/lib/pixel-retroui-setup.js";
import { ThemeProvider } from "@/contexts/themeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suyash Aminbhavi",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-white`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
