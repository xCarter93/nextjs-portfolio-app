import React from "react";
import { MDXComponents } from "mdx/types";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className="mb-4 text-2xl font-bold text-gray-200">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-3 mt-6 text-xl font-semibold text-gray-200">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-2 text-lg font-medium text-gray-200">{children}</h3>
    ),
    p: ({ children }) => <p className="mb-4 text-gray-300">{children}</p>,
    code: ({ children }) => <code className="font-mono">{children}</code>,
    pre: ({ children }) => (
      <pre className="mb-4 mt-2 rounded-lg">{children}</pre>
    ),
    ul: ({ children }) => (
      <ul className="mb-4 space-y-1 pl-5 text-gray-300">{children}</ul>
    ),
    li: ({ children }) => (
      <li className="list-disc pl-1">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === "ul") {
            return <ul className="mt-1 space-y-1 pl-5">{child}</ul>;
          }
          return child;
        })}
      </li>
    ),
    // Add custom components here
    ...components,
  };
}
