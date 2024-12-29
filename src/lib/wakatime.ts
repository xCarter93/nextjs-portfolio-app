export interface WakaTimeData {
  grand_total: {
    decimal: string;
    text: string;
  };
  range: {
    date: string;
  };
}

export interface LanguageData {
  name: string;
  percent: number;
  color: string;
}

export async function getActivityData() {
  const res = await fetch(
    "https://wakatime.com/share/@80aca99d-fb3d-4239-8ed6-9f39fbcab253/50b597e4-fe8a-4c9a-858f-0381143a4fb2.json",
    { next: { revalidate: 3600 } }, // Revalidate every hour
  );

  if (!res.ok) {
    throw new Error("Failed to fetch activity data");
  }

  const data = await res.json();
  return data.data.map((item: WakaTimeData) => ({
    date: new Date(item.range.date).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    }),
    hours: Number(item.grand_total.decimal),
    text: item.grand_total.text,
  }));
}

export async function getLanguagesData() {
  const res = await fetch(
    "https://wakatime.com/share/@80aca99d-fb3d-4239-8ed6-9f39fbcab253/4a0984a5-37d4-4081-b703-295ac778663d.json",
    { next: { revalidate: 3600 } }, // Revalidate every hour
  );

  if (!res.ok) {
    throw new Error("Failed to fetch languages data");
  }

  const data = await res.json();
  return data.data;
}
