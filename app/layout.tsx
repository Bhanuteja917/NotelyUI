import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/home/header";

export const metadata: Metadata = {
  title: "Notely",
  description: "Created by Bhanuteja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
