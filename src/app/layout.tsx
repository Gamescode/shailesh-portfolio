import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Shailesh Kr. Raghav | Senior SDET & Automation Architect",
  description:
    "Shailesh Kr. Raghav is a Senior SDET and Automation Architect with 9+ years of experience in test automation, Playwright, Selenium, Appium, TypeScript and AI-powered quality engineering.",
  keywords: [
    "Shailesh Kr. Raghav",
    "Senior SDET",
    "Automation Architect",
    "Test Automation",
    "Playwright",
    "Selenium",
    "Appium",
    "TypeScript",
    "AI-powered Quality Engineering",
  ],
  authors: [{ name: "Shailesh Kr. Raghav" }],
  openGraph: {
    title: "Shailesh Kr. Raghav | Senior SDET & Automation Architect",
    description:
      "Building reliable automation frameworks, scalable testing solutions and quality engineering practices.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
