import React from "react";
import { MDXComponents } from "mdx/types";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1
        className={`${jetbrainsMono.className} mb-4 text-2xl font-bold text-gray-200`}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        className={`${jetbrainsMono.className} mb-3 mt-6 text-xl font-semibold text-gray-200`}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className={`${jetbrainsMono.className} mb-2 text-lg font-medium text-gray-200`}
      >
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className={`${jetbrainsMono.className} mb-4 text-gray-300`}>
        {children}
      </p>
    ),
    code: ({ children }) => (
      <code
        className={`${jetbrainsMono.className} whitespace-pre-wrap break-all font-mono`}
      >
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre
        className={`${jetbrainsMono.className} mb-4 mt-2 max-w-full overflow-x-auto whitespace-pre-wrap break-all rounded-lg bg-gray-900 p-4`}
      >
        {children}
      </pre>
    ),
    ul: ({ children }) => (
      <ul
        className={`${jetbrainsMono.className} mb-4 space-y-1 pl-5 text-gray-300`}
      >
        {children}
      </ul>
    ),
    li: ({ children }) => (
      <li className={`${jetbrainsMono.className} list-disc pl-1`}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === "ul") {
            return <ul className="mt-1 space-y-1 pl-5">{child}</ul>;
          }
          return child;
        })}
      </li>
    ),
    ...components,
  };
}
