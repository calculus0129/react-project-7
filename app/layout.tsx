import type { Metadata } from "next";
import type { Viewport } from "next";
import "./globals.css";
import MainHeader from "@/components/MainHeader";
import ReduxProvider from "./providers";

export const metadata: Metadata = {
  title: "React Shop",
  applicationName: "React Shopping Cart",
  description: "Buy your favorite products!",
  icons: [
    {
      url: "./favicon.ico",
      rel: "icon",
      sizes: "64x64 32x32 24x24 16x16",
      type: "image/x-icon",
    },
    {
      url: "/logo192.png",
      rel: "apple-touch-icon",
      sizes: "192x192",
      type: "image/png",
    },
  ],
};

// https://nextjs.org/docs/app/api-reference/functions/generate-viewport
export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body>
          {/* In HTML, <header> cannot be a child of <html>.
      This will cause a hydration error. */}
          <MainHeader />
          {children}
        </body>
      </ReduxProvider>
    </html>
  );
}
