import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { FloatingNav } from "./components/ui/FloatingNav";
import { Spotlight } from "./components/ui/Spotlight";
import { LayoutTransition } from "./components/layout-transition";
import { SakuraBackground } from "./components/SakuraBackground";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ezra Wijaya — Software Developer",
    template: "%s | Ezra Wijaya",
  },
  description:
    "Aspiring iOS Developer, Backend Developer, and Mobile Developer with a strong foundation in software engineering. Proficient in Swift, SwiftUI, Laravel, and Flutter.",
  openGraph: {
    title: "Ezra Wijaya — Software Developer",
    description:
      "Aspiring iOS Developer, Backend Developer, and Mobile Developer with a strong foundation in software engineering.",
    url: "https://ezrawijaya.dev",
    siteName: "Ezra Wijaya",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased pb-safe`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <Spotlight />
          <SakuraBackground />
          <div className="relative z-10 min-h-svh pb-24">
            <LayoutTransition>{children}</LayoutTransition>
          </div>
          <FloatingNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
