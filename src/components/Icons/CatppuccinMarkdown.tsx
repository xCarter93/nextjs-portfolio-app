import React, { SVGProps } from "react";

export function CatppuccinMarkdown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="none"
        stroke="#7dc4e4"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9.25 8.25l2.25 2.25l2.25-2.25M3.5 11V5.5l2.04 3l1.96-3V11m4-.5V5M1.65 2.5h12.7c.59 0 1.15.49 1.15 1v9c0 .51-.56 1-1.15 1H1.65c-.59 0-1.15-.49-1.15-1V3.58c0-.5.56-1.08 1.15-1.08"
      ></path>
    </svg>
  );
}
export default CatppuccinMarkdown;
