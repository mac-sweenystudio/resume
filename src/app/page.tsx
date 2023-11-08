"use client";

import AccordianList from "~/components/accordian";
import Casestudy from "~/components/casestudy";
import Content from "~/components/content";
import Hero from "~/components/hero";
import Link from "next/link";
import MainLayout from "~/components/layouts/main";
import Navbar from "~/components/navbar";
import ScreenshotBlockrecipes from "~/assets/screenshots/screenshot-blockrecipes.png";
import ScreenshotCMC from "~/assets/screenshots/screenshot-cmc.png";
import ScreenshotGoodmix from "~/assets/screenshots/screenshot-goodmix.png";
import ScrollingBanner from "~/components/scrollingBanner";
import {Services} from "~/config/services";
import {StarFilledIcon} from "@radix-ui/react-icons";
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
      <ScrollingBanner baseVelocity={-3}>Experience</ScrollingBanner>
      <Casestudy
        imageDirection="right"
        link="/casestudies/blockrecipes"
        imageSrc={ScreenshotBlockrecipes}
        title="Blockrecipes"
        services={[
          "Web Design",
          "UX / UI Design",
          "Web Development",
          "Software Development",
          "SEO Optimization",
          "Maintenance",
        ]}
      >
        Our landing page redesign, coupled with performance enhancements,
        resulted in both an{" "}
        <span className="font-semibold underline">
          82% increase in conversion rate
        </span>{" "}
        and a{" "}
        <span className="font-semibold underline">
          35% reduction in bounce rate
        </span>
        , delivering a faster and more effective user experience.
      </Casestudy>
      <Casestudy
        imageDirection="left"
        link="/casestudies/goodmix"
        imageSrc={ScreenshotGoodmix}
        title="Goodmix Superfoods"
        services={[
          "Web Design",
          "Web Development",
          "SEO Optimization",
          "Maintenance",
        ]}
      >
        Our E-Commerce Store Redesign and development, coupled with on-going SEO
        optimization, resulted in both an{" "}
        <span className="font-semibold underline">
          52% increase in Conversion Rate
        </span>{" "}
        generating an extra{" "}
        <span className="font-semibold underline">$2,500,000 in revenue</span>,
        over a 1 year period.
      </Casestudy>
      <Casestudy
        imageDirection="right"
        link="/casestudies/creative-minds-conference"
        imageSrc={ScreenshotCMC}
        title="Creative Minds Conference"
        services={[
          "Web Design",
          "Web Development",
          "SEO Optimization",
          "Maintenance",
        ]}
      >
        Our website redesign and recode resulted in a{" "}
        <span className="font-semibold underline">
          {" "}
          430% increase in page load speed
        </span>{" "}
        and a{" "}
        <span className="font-semibold underline">
          52% increase in lead-gen{" "}
        </span>{" "}
        , delivering a faster and more effective user experience.
      </Casestudy>
      <Content cta ctaText="More Casestudies" ctaLink="/casestudies">
        <div className="my-2 flex items-center justify-center">
          <StarFilledIcon className="h-8 w-8" />
          <StarFilledIcon className="h-8 w-8" />
          <StarFilledIcon className="h-8 w-8" />
          <StarFilledIcon className="h-8 w-8" />
          <StarFilledIcon className="h-8 w-8" />
        </div>
        <span className="italic">
          &quot;Our Shopify Store was growing slowly. However, after MAC SWEENY
          made us a dedicated landing page for our best selling product, we saw
          a{" "}
          <strong className="underline">52% increase in conversion rate</strong>{" "}
          and a{" "}
          <strong className="underline">35% reduction in bounce rate</strong>,
          delivering a faster and more effective customer experience.&quot;
        </span>
      </Content>
      <ScrollingBanner baseVelocity={-3}>Services</ScrollingBanner>
      <AccordianList items={Services} />
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
