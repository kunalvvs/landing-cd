import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://creatordesks.com"),
  title: "Creatordesks | Automation That Grows Audience & Revenue",
  description:
    "Creatordesks helps creators automate campaigns, audience workflows, and growth operations with confidence.",
  openGraph: {
    title: "Creatordesks | Automation That Grows Audience & Revenue",
    description:
      "Automate creator growth workflows, execute on real devices, and scale your audience and revenue.",
    url: "https://creatordesks.com",
    siteName: "Creatordesks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creatordesks | Automation That Grows Audience & Revenue",
    description:
      "Automate creator growth workflows and ship campaigns with confidence.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
