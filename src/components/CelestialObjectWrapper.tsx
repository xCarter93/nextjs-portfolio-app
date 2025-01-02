"use client";

import dynamic from "next/dynamic";

const CelestialObject = dynamic(() => import("./CelestialObject"), {
  ssr: false,
});

export default function CelestialObjectWrapper() {
  return <CelestialObject />;
}
