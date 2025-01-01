"use client";

import { JetBrains_Mono } from "next/font/google";
import Prism from "prismjs";
import "prismjs/components/prism-json";
import "prismjs/components/prism-typescript";
import { useEffect } from "react";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

interface StyledCodeProps {
  code: string;
  language?: string;
}

export function StyledCode({ code, language = "json" }: StyledCodeProps) {
  useEffect(() => {
    const highlight = () => {
      Prism.highlightAll();
      if (language === "json") {
        // Add custom classes to braces
        const codeElement = document.querySelector("code.language-json");
        if (codeElement) {
          const tokens = Array.from(codeElement.childNodes);
          // Find first and last curly braces
          const firstBrace = tokens.find(
            (token) => (token as Element).textContent === "{",
          ) as Element;
          const lastBrace = tokens
            .slice()
            .reverse()
            .find((token) => (token as Element).textContent === "}") as Element;

          if (firstBrace?.classList) firstBrace.classList.add("outer-brace");
          if (lastBrace?.classList) lastBrace.classList.add("outer-brace");

          // Mark other braces as inner and make URLs clickable
          tokens.forEach((token) => {
            const element = token as Element;
            if (element.textContent === "{" || element.textContent === "}") {
              if (
                element.classList &&
                !element.classList.contains("outer-brace")
              ) {
                element.classList.add("inner-brace");
              }
            }
            // Check if token is a URL string
            if (
              element.classList?.contains("string") &&
              element.textContent?.startsWith('"http')
            ) {
              const url = element.textContent.slice(1, -1); // Remove quotes
              const link = document.createElement("a");
              link.href = url;
              link.target = "_blank";
              link.rel = "noopener noreferrer";
              link.className = "token string url-link";
              link.textContent = element.textContent;
              element.parentNode?.replaceChild(link, element);
            }
          });
        }
      }
    };
    highlight();
  }, [code, language]);

  return (
    <div className={`${jetbrainsMono.className} overflow-hidden`}>
      <pre className="rounded-lg p-4 text-sm">
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <style jsx global>{`
        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: #7c7c7c;
        }
        .token.punctuation {
          color: #e1e1e1;
        }
        .token.property {
          color: #7dd3fc;
        }
        .token.keyword,
        .token.tag {
          color: #79b6f2;
        }
        .token.class-name,
        .token.builtin,
        .token.interface {
          color: #66d9ef;
        }
        .token.string,
        .token.attr-value {
          color: #d97706;
        }
        .url-link {
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .url-link:hover {
          opacity: 0.8;
          text-decoration: underline;
        }
        .token.number {
          color: #c5e478;
        }
        .token.operator {
          color: #e1e1e1;
        }
        .token.boolean {
          color: #79b6f2;
        }
        .token.function {
          color: #ffd580;
        }
        .language-typescript .token.primitive,
        .language-typescript .token.builtin,
        .language-typescript .token.keyword {
          color: #79b6f2;
        }
        .language-typescript .token.class-name,
        .language-typescript .token.builtin,
        .language-typescript .token.interface {
          color: #66d9ef;
        }
        .language-typescript .token.type-declaration {
          color: #66d9ef;
        }
        .language-typescript .token.type {
          color: #66d9ef;
        }
        pre[class*="language-"] {
          background: transparent;
          margin: 0;
          padding: 1rem;
          overflow: auto;
        }
        code[class*="language-"] {
          background: transparent;
          white-space: pre-wrap;
          word-break: break-word;
        }

        /* Style curly braces */
        .outer-brace {
          color: #fde047 !important;
        }

        .inner-brace {
          color: #e879f9 !important;
        }
      `}</style>
    </div>
  );
}
