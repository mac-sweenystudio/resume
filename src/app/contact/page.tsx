"use client";

import Contact from "~/components/contact";
import Content from "~/components/content";
import Link from "next/link";
import MainLayout from "~/components/layouts/main";
import Navbar from "~/components/navbar";
import PageHeading from "~/components/layouts/pageLayout";
import PageLayout from "~/components/layouts/pageLayout";
import Screenshot404 from "~/assets/screenshots/screenshot-404.png";
import ScreenshotBlockrecipes from "~/assets/screenshots/screenshot-blockrecipes.png";
import ScreenshotCMC from "~/assets/screenshots/screenshot-cmc.png";

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="relative overflow-hidden">
        <Navbar />
        <PageLayout
          heading="SEND MESSAGE"
          image1URL={Screenshot404}
          image1Alt="Screenshot-404"
          image2URL={ScreenshotBlockrecipes}
          image2Alt="Screenshot-404"
          image3URL={ScreenshotCMC}
          image3Alt="Screenshot-CMC"
        />
      </div>
      <Contact />
    </MainLayout>
  );
}
