"use client";

import AccordianList from "~/components/accordian";
import Content from "~/components/content";
import Experience from "~/components/experience";
import Hero from "~/components/hero";
import Link from "next/link";
import MainLayout from "~/components/layouts/main";
import Navbar from "~/components/navbar";
import ScreenshotBlockrecipes from "~/assets/screenshots/screenshot-blockrecipes.png";
import ScreenshotDexioprotocol from "~/assets/screenshots/screenshot-dexioprotocol.png";
import ScreenshotWilakMedia from "~/assets/screenshots/wilak-media.png";
import ScrollingBanner from "~/components/scrollingBanner";
import Stats from "~/components/stats";

export default function Home() {
  return (
    <MainLayout>
      <div className="relative overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <Stats />
      <Content cta ctaText="Learn More" ctaLink="/about">
        <p>
          G&apos;day, I&apos;m Mac Sweeny, a passionate full-stack web developer
          and designer based out of Brisbane, Australia. I&apos;m currently the
          Web Development Manager at{" "}
          <Link className="underline" href="https://www.wilakmedia.com">
            Wilak Media
          </Link>{" "}
          where I&apos;m responsible for the design, development and performance
          of 50+ clients.
        </p>
      </Content>
      <ScrollingBanner baseVelocity={-200}>Experience</ScrollingBanner>
      <Experience
        imageDirection="right"
        imageSrc={ScreenshotWilakMedia}
        title="Wilak Media"
        role="Web Development Manager"
        stack={[
          {
            name: "Typescript",
            link: "https://www.typescriptlang.org/",
          },
          {
            name: "NextJS",
            link: "https://nextjs.org/",
          },
          {
            name: "React",
            link: "https://react.dev/",
          },
          {
            name: "TailwindCSS",
            link: "https://tailwindcss.com/",
          },
          {
            name: "PlanetScale",
            link: "https://planetscale.com/",
          },
          {
            name: "Drizzle ORM",
            link: "https://orm.drizzle.team/",
          },
          {
            name: "Figma",
            link: "https://www.figma.com/",
          },
          {
            name: "Google Analytics",
            link: "https://analytics.google.com/",
          },
        ]}
      >
        Wilak Media is a Marketing Consultancy which specializes in scaling
        brands profitably. My main roles include{" "}
        <span className="font-semibold underline">Designing</span>,{" "}
        <span className="font-semibold underline">Developing</span> and{" "}
        <span className="font-semibold underline">Deploying</span>, ecommerce
        stores, landing pages and web applications. My main responsibilities
        include: optimizing conversion rates, user experience and SEO, whilst
        simultaneously creating a good developer experience for my team and
        future teams.
      </Experience>
      <Experience
        imageDirection="left"
        imageSrc={ScreenshotBlockrecipes}
        title="Blockrecipes"
        role="Full-Stack Web Developer"
        stack={[
          {
            name: "Typescript",
            link: "https://www.typescriptlang.org/",
          },
          {
            name: "NextJS",
            link: "https://nextjs.org/",
          },
          {
            name: "React",
            link: "https://react.dev/",
          },
          {
            name: "TailwindCSS",
            link: "https://tailwindcss.com/",
          },
          {
            name: "Supabase",
            link: "https://supabase.com/",
          },
          {
            name: "Drizzle ORM",
            link: "https://orm.drizzle.team/",
          },
          {
            name: "Figma",
            link: "https://www.figma.com/",
          },
          {
            name: "Google Analytics",
            link: "https://analytics.google.com/",
          },
        ]}
      >
        Blockrecipes is a startup SaaS with is developing a{" "}
        <strong className="font-semibold underline">Real-Time</strong>{" "}
        blockchain API. My main roles include{" "}
        <span className="font-semibold underline">Designing</span> and{" "}
        <span className="font-semibold underline">Developing</span> the
        Blockrecipes web application. My main responsibilities include:
        implementing real-time data and features into the UI whilst
        simultaneously maintaining a good customer experience.
      </Experience>
      <Experience
        imageDirection="right"
        imageSrc={ScreenshotDexioprotocol}
        title="Dexioprotocol"
        role="Junior Frontend Developer"
        stack={[
          {
            name: "Typescript",
            link: "https://www.typescriptlang.org/",
          },
          {
            name: "React",
            link: "https://react.dev/",
          },
          {
            name: "TailwindCSS",
            link: "https://tailwindcss.com/",
          },
          {
            name: "Figma",
            link: "https://www.figma.com/",
          },
          {
            name: "AdobeXD",
            link: "https://helpx.adobe.com/au/support/xd.html",
          },
        ]}
      >
        Dexioprotocol is a Web3 gaming startup. My main roles include{" "}
        <span className="font-semibold underline">Designing</span>, and creating{" "}
        <span className="font-semibold underline">user stories</span> for the
        developers to implement. My main responsibilities include: creating a
        good user experience for the Dexioprotocol web application, listening to
        user feedback and turning them into developer-friendly user stories.
      </Experience>
      <ScrollingBanner baseVelocity={-200}>Skills</ScrollingBanner>

      {/* <AccordianList items={Services} /> */}
      {/* <About
        imageDirection="left"
        imageSrc={Selfy}
        title="About me"
        cta
        ctaText="More About Me"
        ctaLink="/about"
      >
        Hi, I&apos;m Mac Sweeny, a passionate designer and coder with a knack
        for creating beautiful, user-friendly sites. I&apos;ve been in the
        industry since 2020, and I&apos;m always looking for new and innovative
        ways to push the boundaries of what&apos;s possible. I&apos;m passionate
        about my work because I love using my skills to create products that
        both look good and work well. I believe that good design is essential
        for creating a positive user experience, and I&apos;m always looking for
        ways to improve my skills and knowledge.
      </About> */}
    </MainLayout>
  );
}
