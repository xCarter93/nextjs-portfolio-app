"use client";

export default function CodingStatsPage() {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-auto bg-gray-800 p-4">
      <div className="flex w-full max-w-[1600px] flex-col gap-4 lg:flex-row">
        <figure className="h-auto w-full bg-gray-800 lg:h-[600px]">
          <embed
            src="https://wakatime.com/share/@80aca99d-fb3d-4239-8ed6-9f39fbcab253/e87e8be3-7a97-4185-9536-d8fe84f81e87.svg"
            className="h-full w-full"
          />
        </figure>
        <figure className="h-auto w-full bg-gray-800 lg:h-[600px]">
          <embed
            src="https://wakatime.com/share/@80aca99d-fb3d-4239-8ed6-9f39fbcab253/4bec793c-8840-4d6e-b1fe-506f40559292.svg"
            className="h-full w-full"
          />
        </figure>
      </div>
    </div>
  );
}
