import "./globals.css";

import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Mac Sweeny | Portfolio",
  description: "Welcome to my portfolio!",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html className="bg-black scroll-smooth" lang="en">
      <body>{children}</body>
    </html>
  );
}
