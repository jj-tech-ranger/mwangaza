import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"],
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Mwangaza - Lighting the path to a better life",
  description: "Learn new skills and transform your future with Mwangaza",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-background",
        plusJakartaSans.variable,
        dmSans.variable,
        geistMono.variable
      )}
    >
      <body className="font-body">
        {children}
      </body>
    </html>
  );
}
