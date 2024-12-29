export default function Loading() {
  const getRandomWidth = (min: number, max: number) =>
    `${Math.floor(Math.random() * (max - min + 1) + min)}%`;

  return (
    <>
      {/* Entries skeleton */}
      <ul className="flex flex-col gap-y-2 divide-y divide-[#898989]/20 p-4 text-sm lg:divide-y-0">
        {Array.from({ length: 50 }).map((_, index) => (
          <li
            key={index}
            className="group flex flex-col gap-1 py-1 lg:flex-row lg:items-center lg:gap-2 lg:border-y-0 lg:py-0"
          >
            <div className="skeleton h-6 w-36 rounded lg:flex-none" />
            <div className="block lg:hidden">
              <div className="skeleton h-6 w-full rounded" />
            </div>
            <div className="hidden lg:block">:</div>
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-between">
              <div
                className="skeleton h-6 rounded"
                style={{ width: getRandomWidth(10, 100) }}
              />
              <div className="skeleton h-6 w-[180px] rounded" />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
