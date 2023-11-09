import React from "react";
import {StaticImageData} from "next/image";

export type Service = {
  name: string;
  skills: string[];
};

export const Services: Service[] = [
  {
    name: "FRAMEWORKS",
    skills: [
      "HTML",
      "CSS",
      "Typescript",
      "Javascript",
      "Liquid",
      "React",
      "Astro",
      "NextJS",
      "TailwindCSS",
      "Framer Motion",
      "SQL",
      "PlanetScale",
      "Supabase",
      "Sanity CMS",
      "Shopify CMS",
      "GraphQL",
      "NodeJS",
      "Prisma",
      "Drizzle ORM",
      "NextAuth",
    ],
  },
  {
    name: "HARD SKILLS",
    skills: [
      "Shopify App Development",
      "Shopify Theme Development",
      "Conversion Rate Optimization",
      "Landing Page Optimization",
      "Web Performance Optimization",
      "UI / UX Design",
      "Web Design",
      "Web Development",
      "SEO",
      "Google Analytics",
      "Google Tag Manager",
      "Split Testing",
    ],
  },
];
