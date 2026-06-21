import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/components/CartProvider";

export const metadata: Metadata = {
  title: { default: "Knead To Know | Sweet & Sour", template: "%s | Knead To Know" },
  description: "Luxury artisan bakery for naturally leavened sourdough, refined sweets, and seasonal boxes."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><CartProvider><Header /><main>{children}</main><Footer /></CartProvider></body></html>;
}
