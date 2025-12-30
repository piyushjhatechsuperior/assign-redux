import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/components/StoreProvider";
import ImprovedNavbar from "@/components/ImprovedNavbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ShopHub - Your Premium Online Shopping Destination",
    template: "%s | ShopHub",
  },
  description:
    "Discover quality products at great prices. ShopHub offers electronics, fashion, jewelry, and more with fast shipping and secure checkout.",
  keywords: [
    "online shopping",
    "ecommerce",
    "electronics",
    "fashion",
    "jewelry",
    "deals",
  ],
  authors: [{ name: "ShopHub Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shophub.com",
    siteName: "ShopHub",
    title: "ShopHub - Your Premium Online Shopping Destination",
    description: "Discover quality products at great prices",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ShopHub Online Store",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShopHub - Your Premium Online Shopping Destination",
    description: "Discover quality products at great prices",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <StoreProvider>
          <ImprovedNavbar />
          <main className="grow">{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
