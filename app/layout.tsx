import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import clsx from "clsx";
import "@/styles/tailwind.css";
import '@aws-amplify/ui-react/styles.css';

import ConfigureAmplifyClientSide from "@/components/ConfigureAmplify";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "h-full scroll-smooth bg-white antialiased",
        inter.variable,
        lexend.variable
      )}
    >
      <body className="flex h-full flex-col">
        <ConfigureAmplifyClientSide />
        {children}
      </body>
    </html>
  );
}
