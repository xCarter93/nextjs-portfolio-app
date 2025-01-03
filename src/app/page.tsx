import { ClientBootWrapper } from "@/components/ClientBootWrapper";
import { HomeContent } from "@/components/HomeContent";
import { OrbitingLogos } from "@/components/Background/OrbitingLogos";

export default function Home() {
  return (
    <div className="relative flex h-full w-full flex-col items-start overflow-y-auto text-gray-300 xl:justify-center">
      <ClientBootWrapper>
        <div className="fixed bottom-[-300px] left-1/2 -translate-x-1/2 md:left-[calc(50%+88px)] xl:bottom-auto xl:left-auto xl:right-[-300px] xl:top-1/2 xl:-translate-y-1/2 xl:translate-x-0">
          <OrbitingLogos />
        </div>
        <div className="relative w-full pb-[300px] xl:pb-0">
          <HomeContent />
        </div>
      </ClientBootWrapper>
    </div>
  );
}
