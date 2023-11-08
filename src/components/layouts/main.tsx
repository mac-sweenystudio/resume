"use client";

import Footer from "~/components/footer";
import MouseFollower from "~/components/animations/mouseFollower";
import { SizeProvider } from "~/contexts/sizeContext";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="select-none bg-black font-generalsans">
      <SizeProvider>
        <MouseFollower className="mask" />
        <div className="h-full w-full ">
          <MouseFollower className="mask" />
          {children}
        </div>
        <Footer />
      </SizeProvider>
    </div>
  );
}
