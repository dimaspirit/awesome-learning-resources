import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const ralewayFont = Raleway({
  variable: "--font-raleway-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Awesome learning resources",
  description: "A curated list of awesome resources to help you learn, build your career, and land your dream job in tech, from coding basics to advanced topics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ralewayFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
