"use client";

import { ClientBootWrapper } from "@/components/ClientBootWrapper";
import { HomeContent } from "@/components/HomeContent";
import { OrbitingLogos } from "@/components/Background/OrbitingLogos";
import { useIDEWindow } from "@/contexts/IDEWindowContext";

export default function Home() {
  return (
    <div className="relative flex h-full w-full flex-col items-start overflow-y-auto text-gray-300">
      <ClientBootWrapper>
        <HomePageContent />
      </ClientBootWrapper>
    </div>
  );
}

function HomePageContent() {
  const { windowSize } = useIDEWindow();
  const isLargeWindow = windowSize.width >= 1400;

  return (
    <div className="relative w-full pb-[300px] xl:pb-0">
      {/* Adjust content positioning based on window size */}
      <div 
        className="relative w-full"
        style={{
          paddingTop: isLargeWindow ? '0' : '2rem', // Push content up on small screens
          display: 'flex',
          flexDirection: 'column',
          justifyContent: isLargeWindow ? 'center' : 'flex-start',
          minHeight: isLargeWindow ? '100vh' : 'auto'
        }}
      >
        <HomeContent />
        <OrbitingLogosPositioned />
      </div>
    </div>
  );
}

function OrbitingLogosPositioned() {
  return (
    <div className="ide-responsive-logos">
      <OrbitingLogos />
    </div>
  );
}
