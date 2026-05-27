import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "American Seal & Surface | Professional Driveway Sealing",
  description:
    "Professional driveway sealing and surface protection services. Owned and operated by Ethan Brunk. Free estimates available. Call 540-835-9081.",
  keywords: [
    "driveway sealing",
    "asphalt sealing",
    "driveway repair",
    "parking lot sealing",
    "crack filling",
    "surface protection",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
