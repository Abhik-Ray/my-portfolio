import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import SmoothScrolling from "@/components/SmoothScrolling";
import localFont from "next/font/local";

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

const rajdhaniSemibold = localFont({
  src: "../public/Rajdhani-SemiBold.ttf",
});

export const metadata: Metadata = {
  title: "Abhik Ray Portfolio",
  description: "Portfolio website of Sri Abhik Ray",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${robotoCondensed.variable} ${rajdhaniSemibold.className} antialiased grid-bg w-full h-full`}
      >
        <SmoothScrolling />
        {children}
      </body>
      <GoogleAnalytics gaId="G-2VJ52694CM" />
    </html>
  );
}
