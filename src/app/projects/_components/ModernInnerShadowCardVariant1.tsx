import Image from "next/image";

interface Props {
  title: string;
  hoverTitle: string;
  description: string;
  tag?: string;
  image?: string;
  hoverImage?: string;
}

export function ModernInnerShadowCardVariant1({
  title,
  hoverTitle,
  description,
  tag = "Project",
  image = "/placeholder.jpg",
  hoverImage,
}: Props) {
  return (
    <div className="group relative h-[400px] overflow-hidden rounded-2xl border bg-gradient-to-t from-[#242424] to-[#020202] before:absolute before:inset-0 before:bg-[url('/noise.gif')] before:opacity-5 hover:from-[#182135] hover:to-[#080808]">
      <div className="relative h-full">
        <div className="px-6 py-5">
          <div className="mb-1 w-fit rounded-full bg-white px-3 py-1 text-sm text-black transition-all duration-500 ease-in-out group-hover:bg-blue-400 group-hover:text-white">
            {tag}
          </div>
          <span className="mb-1 inline-block pt-2 text-lg font-semibold text-slate-200 transition-all duration-500 ease-in-out group-hover:hidden">
            {title}
          </span>
          <span className="mb-1 hidden pt-2 text-lg font-semibold text-slate-200 transition-all duration-500 ease-in-out group-hover:inline-block">
            {hoverTitle}
          </span>
          <p className="text-sm text-slate-500">{description}</p>
        </div>
        <div className="relative h-[180px] w-full overflow-hidden transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
          <Image
            className="m-0 h-full w-full object-cover p-0 grayscale transition-all duration-500 group-hover:opacity-0 group-hover:grayscale-0"
            src={image}
            width={500}
            height={180}
            alt="Card image"
          />
          <Image
            className="absolute left-0 top-0 m-0 h-full w-full object-cover p-0 opacity-0 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
            src={hoverImage || image}
            width={500}
            height={180}
            alt="Card hover image"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}

export default ModernInnerShadowCardVariant1;
