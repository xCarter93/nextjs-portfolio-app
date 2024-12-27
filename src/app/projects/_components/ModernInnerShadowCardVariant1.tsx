import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import Image from "next/image";

interface Props {
  children: ReactNode;
  backgroundImage?: string;
}

export function ModernInnerShadowCardVariant1({
  children,
  backgroundImage,
}: Props) {
  return (
    <div
      className={cn(
        "group relative h-64 overflow-hidden rounded-2xl border border-neutral-500/10 dark:border-white/10",
        "dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]",
        "transform-gpu transition-all hover:scale-[1.01]",
        "bg-gray-50 dark:bg-neutral-800/80",
      )}
    >
      {backgroundImage && (
        <div className="h-1/2 overflow-hidden">
          <Image
            src={backgroundImage}
            alt="Project background"
            width={400}
            height={200}
            className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
          />
          <div className="absolute inset-x-0 top-0 h-1/2 bg-neutral-800/40 transition-all duration-300 group-hover:bg-neutral-800/20" />
        </div>
      )}
      <div className="p-4">{children}</div>
    </div>
  );
}

export default ModernInnerShadowCardVariant1;
