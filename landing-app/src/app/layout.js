import { Geist, Geist_Mono ,Inter, Nunito_Sans, Plus_Jakarta_Sans , Funnel_Display,
  Funnel_Sans,} from "next/font/google";
import PageAnimations from "@/components/ui/PageAnimations";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "600", "700"],
});

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  variable: "--font-funnel-display",
  weight: ["400", "500", "600", "700"],
});

const funnelSans = Funnel_Sans({
  subsets: ["latin"],
  variable: "--font-funnel-sans",
  weight: ["400", "500", "600"],
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${nunito.variable} ${jakarta.variable} ${funnelDisplay.variable}
        ${funnelSans.variable}`}>
      <body>
        <PageAnimations />
        {children}
      </body>
    </html>
  );
}
