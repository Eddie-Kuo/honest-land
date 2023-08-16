import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PHProvider } from "./posthogProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Honest Land",
  description: "Honest Land landing page, created with Next.js 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <PHProvider>
        <body className={inter.className}>{children}</body>
      </PHProvider>
    </html>
  );
}
