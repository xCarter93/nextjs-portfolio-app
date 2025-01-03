"use client";

import { useEffect, useState } from "react";
import { getAstronomyData } from "@/lib/actions";

interface AstronomyData {
  sun_altitude: number;
  sun_azimuth: number;
  moon_altitude: number;
  moon_azimuth: number;
  moon_phase: string;
  moon_illumination_percentage: string;
  sunrise: string;
  sunset: string;
}

interface Position {
  x: number;
  y: number;
}

export default function CelestialObject() {
  const [mounted, setMounted] = useState(false);
  const [astronomyData, setAstronomyData] = useState<AstronomyData | null>(
    null,
  );
  const [isNight, setIsNight] = useState(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const fetchAstronomyData = async () => {
      try {
        const data = await getAstronomyData();
        setAstronomyData(data);

        // Determine if it's night time
        const currentTime = new Date();
        const sunsetTime = new Date();
        const sunriseTime = new Date();

        const [sunsetHour, sunsetMinute] = data.sunset.split(":");
        const [sunriseHour, sunriseMinute] = data.sunrise.split(":");

        sunsetTime.setHours(parseInt(sunsetHour), parseInt(sunsetMinute));
        sunriseTime.setHours(parseInt(sunriseHour), parseInt(sunriseMinute));

        setIsNight(currentTime > sunsetTime || currentTime < sunriseTime);
      } catch (error) {
        console.error("Error fetching astronomy data:", error);
      }
    };

    fetchAstronomyData();
    const interval = setInterval(fetchAstronomyData, 600000); // Update every 10 minutes
    return () => clearInterval(interval);
  }, [mounted]);

  useEffect(() => {
    if (!mounted || !astronomyData) return;

    const ideElement = document.querySelector(
      "[data-ide-window]",
    ) as HTMLElement;
    if (!ideElement) return;

    const { sun_altitude, sun_azimuth, moon_altitude, moon_azimuth } =
      astronomyData;

    // Use moon data at night, sun data during day
    const altitude = isNight ? moon_altitude : sun_altitude;
    const azimuth = isNight ? moon_azimuth : sun_azimuth;

    // Calculate normalized position of light source relative to the window
    const lightX = Math.sin((azimuth * Math.PI) / 180);
    const lightY = Math.cos((azimuth * Math.PI) / 180);

    // Shadow should be opposite to light source
    const shadowX = -lightX * 25; // Increased from 20 to 25 for more pronounced shadow
    const shadowY = -lightY * 25;

    // Calculate shadow intensity based on altitude
    const intensity = Math.max(
      0.05,
      Math.min(0.25, ((90 - Math.abs(altitude)) / 90) * 0.25),
    );

    // Set shadow color and opacity - same intensity for both sun and moon
    const shadowColor = isNight
      ? `rgba(255, 255, 255, ${intensity})`
      : `rgba(255, 215, 0, ${intensity})`;

    // Apply styles with transition
    ideElement.style.transition = "box-shadow 0.5s ease-in-out";
    ideElement.style.boxShadow = `${shadowX}px ${shadowY}px 45px ${shadowColor}`;
  }, [astronomyData, isNight, mounted]);

  useEffect(() => {
    if (!mounted || !astronomyData) return;

    const updatePosition = () => {
      const currentTime = new Date();
      const sunriseTime = new Date();
      const sunsetTime = new Date();

      const [sunriseHour, sunriseMinute] = astronomyData.sunrise.split(":");
      const [sunsetHour, sunsetMinute] = astronomyData.sunset.split(":");

      sunriseTime.setHours(parseInt(sunriseHour), parseInt(sunriseMinute));
      sunsetTime.setHours(parseInt(sunsetHour), parseInt(sunsetMinute));

      // Calculate position based on time of day
      let horizontalPosition;
      if (isNight) {
        // For night time (moon)
        if (currentTime < sunriseTime) {
          // Between midnight and sunrise
          const totalNightMinutes =
            (24 - parseInt(sunsetHour)) * 60 + parseInt(sunriseHour) * 60;
          const minutesSinceSunset =
            currentTime.getHours() * 60 +
            currentTime.getMinutes() +
            (24 - parseInt(sunsetHour)) * 60 -
            parseInt(sunsetMinute);
          horizontalPosition = (minutesSinceSunset / totalNightMinutes) * 100;
        } else {
          // Between sunset and midnight
          const totalNightMinutes = (24 - parseInt(sunsetHour)) * 60;
          const minutesSinceSunset =
            (currentTime.getHours() - parseInt(sunsetHour)) * 60 +
            (currentTime.getMinutes() - parseInt(sunsetMinute));
          horizontalPosition = (minutesSinceSunset / totalNightMinutes) * 100;
        }
      } else {
        // For day time (sun)
        const totalDayMinutes =
          (parseInt(sunsetHour) - parseInt(sunriseHour)) * 60 +
          (parseInt(sunsetMinute) - parseInt(sunriseMinute));
        const minutesSinceSunrise =
          (currentTime.getHours() - parseInt(sunriseHour)) * 60 +
          (currentTime.getMinutes() - parseInt(sunriseMinute));
        horizontalPosition = (minutesSinceSunrise / totalDayMinutes) * 100;
      }

      // Ensure position stays within bounds
      horizontalPosition = Math.max(10, Math.min(90, horizontalPosition));

      // Calculate vertical position based on altitude
      const altitude = isNight
        ? astronomyData.moon_altitude
        : astronomyData.sun_altitude;
      const verticalPosition = Math.max(
        2,
        Math.min(8, ((90 - altitude) / 90) * 6 + 2),
      );

      setPosition({
        x: (horizontalPosition * window.innerWidth) / 100,
        y: (verticalPosition * window.innerHeight) / 100,
      });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [astronomyData, isNight, mounted]);

  if (!mounted || !astronomyData) return null;

  const celestialStyles = {
    position: "fixed" as const,
    left: `${position.x}px`,
    top: `${position.y}px`,
    width: isNight ? "50px" : "70px",
    height: isNight ? "50px" : "70px",
    borderRadius: "50%",
    background: isNight
      ? "radial-gradient(circle at 30% 30%, #ffffff 0%, #ffffff 20%, #e0e0e0 40%, #808080 100%)"
      : "radial-gradient(circle at 30% 30%, #ffffff 0%, #fff176 30%, #ffd700 60%, #ff8f00 100%)",
    boxShadow: isNight
      ? `0 0 15px 5px rgba(255, 255, 255, 0.5),
         0 0 30px 8px rgba(255, 255, 255, 0.3),
         0 0 45px 12px rgba(255, 255, 255, 0.15)`
      : `0 0 15px 5px rgba(255, 215, 0, 0.5),
         0 0 30px 8px rgba(255, 215, 0, 0.3),
         0 0 45px 12px rgba(255, 215, 0, 0.15)`,
    zIndex: 0,
    pointerEvents: "none" as const,
  };

  return <div style={celestialStyles} />;
}
