
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import './globals.css';
import { AppKit } from "@/context/web3modal";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create wallet demo",
  description: "create wallet demo of my talk at college",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body>
        <AppKit>{children}</AppKit>
      </body>
    </html>
  );
}
