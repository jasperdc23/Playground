import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eplayment AI Onboarding",
  description: "Your guide to safe, effective AI adoption at Eplayment.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#22c55e",
          borderRadius: "0.75rem",
          fontFamily: "var(--font-geist-sans)",
        },
      }}
    >
      <html lang="en" className={`${geist.variable} h-full antialiased`}>
        <body className="min-h-full flex flex-col">
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
