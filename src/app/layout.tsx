import "./globals.css";

import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Mac Sweeny",
  description:
    "G'day, I'm Mac Sweeny, a Full-Stack Web Developer from Australia. This is my personal website where I write about my projects, tips and tricks, and other things I find interesting. I'm currently working on a few projects such as a website builder using the new Payload 2.0 CMS, a new version of my personal blog, and a few other things.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html className="bg-black scroll-smooth" lang="en">
      <body>{children}</body>
    </html>
  );
}
