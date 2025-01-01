"use client";

import React, { useEffect, useState } from "react";
import { SkillIconsTypescript } from "../Icons/SkillIconsTypescript";
import { SkillIconsJavascript } from "../Icons/SkillIconsJavascript";
import { SkillIconsTailwindcssDark } from "../Icons/SkillIconsTailwindcssDark";
import { SkillIconsNextjsDark } from "../Icons/SkillIconsNextjsDark";
import { SkillIconsMongodb } from "../Icons/SkillIconsMongodb";
import { SkillIconsPostgresqlDark } from "../Icons/SkillIconsPostgresqlDark";
import { SkillIconsPythonDark } from "../Icons/SkillIconsPythonDark";
import { SkillIconsReactDark } from "../Icons/SkillIconsReactDark";
import { LogosSalesforce } from "../Icons/LogosSalesforce";
import { VscodeIconsFileTypeCss } from "../Icons/VscodeIconsFileTypeCss";
import { SkillIconsHtml } from "../Icons/SkillIconsHtml";
import "./OrbitingLogos.css";

const LOGOS = [
  {
    id: 1,
    Icon: SkillIconsNextjsDark,
    alt: "Next.js",
    size: 50,
    color: "#242938",
  },
  {
    id: 2,
    Icon: SkillIconsPythonDark,
    alt: "Python",
    size: 50,
    color: "#242938",
  },
  {
    id: 3,
    Icon: SkillIconsTypescript,
    alt: "TypeScript",
    size: 50,
    color: "#007ACC",
  },
  {
    id: 4,
    Icon: SkillIconsReactDark,
    alt: "React",
    size: 50,
    color: "#242938",
  },
  {
    id: 5,
    Icon: SkillIconsTailwindcssDark,
    alt: "Tailwind CSS",
    size: 50,
    color: "#242938",
  },
  {
    id: 6,
    Icon: SkillIconsJavascript,
    alt: "JavaScript",
    size: 50,
    color: "#F0DB4F",
  },
  {
    id: 7,
    Icon: LogosSalesforce,
    alt: "Salesforce",
    size: 50,
    color: "#00A1E0",
  },
  {
    id: 8,
    Icon: SkillIconsHtml,
    alt: "HTML5",
    size: 50,
    color: "#E14E1D",
  },
  {
    id: 9,
    Icon: SkillIconsMongodb,
    alt: "MongoDB",
    size: 50,
    color: "#023430",
  },
  {
    id: 10,
    Icon: SkillIconsPostgresqlDark,
    alt: "PostgreSQL",
    size: 50,
    color: "#242938",
  },
  {
    id: 11,
    Icon: VscodeIconsFileTypeCss,
    alt: "CSS",
    size: 50,
    color: "#639",
  },
];

const ORBIT_DURATION = 30; // Seconds

export function OrbitingLogos() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="orbit-container">
      {/* Center Circle */}
      <div className="center-circle" />

      {/* Orbiting Logos */}
      {LOGOS.map((logo) => {
        const angle = (360 / LOGOS.length) * (logo.id - 1);
        const delay = (ORBIT_DURATION / LOGOS.length) * (logo.id - 1);

        return (
          <div
            key={logo.id}
            className="logo-wrapper"
            style={{
              animation: `orbit ${ORBIT_DURATION}s linear infinite`,
              animationDelay: `-${delay}s`,
              transform: `rotate(${angle}deg)`,
            }}
          >
            <logo.Icon
              style={{
                fontSize: logo.size,
                width: logo.size,
                height: logo.size,
                color: logo.color,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
