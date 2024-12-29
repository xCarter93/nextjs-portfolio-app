export default function CodingStatsPage() {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-auto bg-gray-800 p-4">
      <div className="flex w-full max-w-[1600px] flex-col gap-4 lg:flex-row">
        <figure className="h-auto w-full bg-gray-800 lg:h-[600px]">
          <embed src="https://wakatime.com/share/@80aca99d-fb3d-4239-8ed6-9f39fbcab253/e3cae675-7e6b-4c12-804c-a97e6632762e.svg"></embed>
        </figure>
        <figure className="h-auto w-full bg-gray-800 lg:h-[600px]">
          <embed src="https://wakatime.com/share/@80aca99d-fb3d-4239-8ed6-9f39fbcab253/426c1f6f-2fc8-4a13-aa63-80ba280aca41.svg"></embed>
        </figure>
      </div>
    </div>
  );
}
