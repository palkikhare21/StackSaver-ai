import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StackSaver AI",
  description: "Free AI spend audit tool for startups",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}