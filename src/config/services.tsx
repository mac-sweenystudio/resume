import ImageSEOOptimization from "~/assets/services/seo-optimization.jpeg";
import ImageSoftwareDevelopment from "~/assets/services/software-development.avif";
import ImageUXUI from "~/assets/services/ux-ui.jpeg";
import ImageWebDesign from "~/assets/services/web-design.webp";
import ImageWebDevelopment from "~/assets/services/web-development.jpeg";
import ImageWebMaintenance from "~/assets/services/web-maintenance.png";
import { StaticImageData } from "next/image";
import React from "react";

export type Service = {
  name: string;
  url: string;
  children: React.ReactNode;
  image: StaticImageData;
};

export const Services: Service[] = [
  {
    name: "WEB DESIGN",
    url: "/services/web-design",
    children: (
      <div>
        <p>
          I will start by delving into your branding and utilizing{" "}
          <strong className="underline"> analytical research </strong> to
          meticulously design a website that resonates with your unique goals
          and sets you apart from your competition. This process begins with the
          development of detailed user personas, which provide a clear picture
          of your ideal website users. We&apos;ll then proceed to conduct a
          comprehensive competitive analysis, examining what your competitors
          are excelling at and identifying areas where you can{" "}
          <strong className="underline">gain a competitive edge</strong>.{" "}
        </p>
        <br />
        <p>
          Once we&apos;ve gathered this invaluable data, we&apos;ll create a{" "}
          <strong className="underline">well-structured sitemap</strong> and
          wireframes to ensure a logical and user-friendly layout for your
          website. These blueprints are instrumental in early usability testing,
          allowing us to fine-tune and make necessary adjustments before we
          delve into the visual design. The visual design phase focuses on
          selecting the right color schemes, fonts, and images to craft a{" "}
          <strong className="underline">
            visually appealing and professional website{" "}
          </strong>
          . It&apos;s a critical stage because it shapes the first impression
          visitors have of your site, and a positive impression can
          significantly impact their overall experience.
        </p>
      </div>
    ),
    image: ImageWebDesign,
  },
  {
    name: "WEB DEVELOPMENT",
    url: "/services/web-development",
    children: (
      <div>
        <p>
          Web Development is where the digital magic happens. I specialize in
          creating robust, high-performance websites{" "}
          <strong className="underline">
            {" "}
            tailored to your unique requirements
          </strong>
          . Our journey begins with a detailed analysis of your project,
          understanding your goals, target audience, and functionality needs.
          Based on this analysis, we devise a comprehensive development strategy
          and select the most suitable technologies and frameworks. Our
          development process is highly collaborative, with regular updates and
          opportunities for your feedback to ensure the final product aligns
          perfectly with your vision.
        </p>
        <br />
        <p>
          We focus on creating clean, maintainable code that adheres to industry
          best practices. Our responsive web designs ensure a seamless user
          experience across various devices and screen sizes. Whether it&apos;s
          an informative business website, a dynamic e-commerce platform, or a
          complex web application, we ensure optimal performance, security, and
          scalability. Our commitment to providing custom solutions means your
          website will not only look great but also function flawlessly, meeting
          your business needs and leaving a lasting impact on your visitors.
        </p>
      </div>
    ),
    image: ImageWebDevelopment,
  },
  {
    name: "LANDING PAGES",
    url: "/services/landing-pages",
    children: (
      <div>
        <p>
          Our Software Development service is all about turning your ideas into
          robust, high-performing software solutions. We kick off the process
          with a deep dive into your project, understanding your specific
          requirements, goals, and user needs. We leverage{" "}
          <strong className="underline">cutting-edge technologies</strong> and{" "}
          <strong className="underline">best development practices</strong> to
          create a solid foundation for your software. Whether it&apos;s web
          applications, mobile apps, or custom software, we ensure a seamless
          experience for your users.
        </p>
        <br />
        <p>
          Once we&apos;ve gathered the essential insights, our development team
          focuses on{" "}
          <strong className="underline">clean and scalable coding</strong> that
          ensures maintainability and long-term success. We conduct rigorous{" "}
          <strong className="underline">testing and quality assurance</strong>{" "}
          to deliver a product that meets the highest industry standards. Our
          commitment to{" "}
          <strong className="underline">innovation and excellence</strong>{" "}
          ensures that your software not only meets your current needs but also
          grows with your future ambitions.
        </p>
      </div>
    ),
    image: ImageSoftwareDevelopment,
  },
  {
    name: "SEO OPTIMIZATION",
    url: "/services/seo",
    children: (
      <div>
        <p>
          Our SEO Optimization service is your pathway to improved online
          visibility and increased organic traffic. We begin with a thorough{" "}
          <strong className="underline">
            analysis of your online presence
          </strong>
          , diving deep into your website&apos;s performance, content quality,
          and search engine rankings. This analysis guides us in developing a
          tailored <strong className="underline">SEO strategy</strong> that
          aligns with your business goals and target audience. We leverage{" "}
          <strong className="underline">industry best practices</strong> to
          optimize your website&apos;s structure, content, and technical
          elements.
        </p>
        <br />
        <p>
          Once your SEO strategy is in motion, we monitor{" "}
          <strong className="underline">key performance indicators</strong> and
          continuously adapt our approach to ensure your website&apos;s search
          engine ranking and organic traffic improve over time. Our{" "}
          <strong className="underline">content optimization</strong> efforts
          help you deliver valuable information to your audience, and our{" "}
          <strong className="underline">link-building techniques</strong>{" "}
          enhance your website&apos;s authority in the digital landscape. With
          our SEO Optimization service, your website becomes a valuable asset
          that not only attracts more visitors but also{" "}
          <strong className="underline">
            converts them into loyal customers
          </strong>
          .
        </p>
      </div>
    ),
    image: ImageSEOOptimization,
  },
  {
    name: "WEB MAINTENANCE",
    url: "/services/maintenance",
    children: (
      <div>
        <p>
          Our Web Maintenance service is your partner in ensuring your website
          remains at its best. We understand that a successful online presence
          goes beyond the initial launch. With our ongoing{" "}
          <strong className="underline">SEO optimization</strong>, we
          continuously fine-tune your website to improve search engine rankings,
          drive more organic traffic, and stay ahead of the competition. Our
          team regularly analyzes key performance indicators to keep your
          site&apos;s performance at its peak.
        </p>
        <br />
        <p>
          But that&apos;s not all. We also provide a platform for{" "}
          <strong className="underline">feature requests</strong>. If you have
          ideas for enhancing your website, we&apos;re here to listen and bring
          those concepts to life. Our experienced developers work on
          implementing new features, improving functionality, and ensuring a
          seamless user experience. Additionally, we offer{" "}
          <strong className="underline">comprehensive analytic reports</strong>{" "}
          to keep you informed about your website&apos;s performance. With these
          insights, you can make data-driven decisions to continually enhance
          your online presence and stay ahead of the curve.
        </p>
      </div>
    ),
    image: ImageWebMaintenance,
  },
];
