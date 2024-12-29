import { ClientBootWrapper } from "@/components/ClientBootWrapper";
import { HomeContent } from "@/components/HomeContent";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center overflow-y-auto text-gray-300 lg:justify-center">
      <ClientBootWrapper>
        <HomeContent />
      </ClientBootWrapper>
    </div>
  );
}
