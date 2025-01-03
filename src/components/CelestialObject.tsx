"use client";

import { useEffect, useState, useRef } from "react";
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
  const isInitialMount = useRef(true);

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

    // Calculate shadow direction based on horizontal position
    // When horizontalPosition is 10 (left), shadow should be bottom-right
    // When horizontalPosition is 90 (right), shadow should be bottom-left
    // When horizontalPosition is 50 (middle), shadow should be straight down
    const normalizedPosition = (horizontalPosition - 50) / 40; // Convert 10-90 range to -1 to 1

    // Calculate horizontal shadow component
    // Maximum shadow offset at the edges, reduces towards center
    const shadowX = -normalizedPosition * 30; // Increased range for more pronounced effect

    // Calculate vertical shadow component
    // Maximum shadow when in the middle, reduces towards the sides
    const verticalFactor = 1 - Math.abs(normalizedPosition); // 1 at center, 0 at edges
    const shadowY = 20 + 10 * verticalFactor; // Base of 20px, additional 10px at center

    // Calculate shadow intensity based on position and altitude
    const altitude = isNight
      ? astronomyData.moon_altitude
      : astronomyData.sun_altitude;

    // Base intensity varies with horizontal position
    // Strongest on the opposite side from the light source
    const baseIntensity = 0.25 - Math.abs(normalizedPosition) * 0.1; // 0.25 at center, 0.15 at edges

    // Combine with altitude-based intensity
    const altitudeIntensity = (90 - Math.abs(altitude)) / 90;
    const intensity = Math.max(
      0.05,
      Math.min(0.3, baseIntensity * altitudeIntensity),
    );

    // Set shadow color and opacity
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

      // Set initial position with a lower y value
      if (isInitialMount.current) {
        isInitialMount.current = false;
        setPosition({
          x: -100, // Start off-screen left
          y: window.innerHeight * 0.15, // Start 15% from top of screen
        });

        setTimeout(() => {
          setPosition({
            x: (horizontalPosition * window.innerWidth) / 100,
            y: (verticalPosition * window.innerHeight) / 100,
          });
        }, 100);
      } else {
        setPosition({
          x: (horizontalPosition * window.innerWidth) / 100,
          y: (verticalPosition * window.innerHeight) / 100,
        });
      }
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
    transition:
      "left 1.5s cubic-bezier(0.2, 0.8, 0.2, 1), top 1.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
    transform: position.x === -100 ? "translateX(-100%)" : "none",
    opacity: position.x === -100 ? 0 : 1,
  };

  return <div style={celestialStyles} />;
}
