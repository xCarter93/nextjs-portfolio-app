"use client";

import { JetBrains_Mono } from "next/font/google";
import Prism from "prismjs";
import "prismjs/components/prism-json";
import "prismjs/components/prism-typescript";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import { useEffect } from "react";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

interface StyledCodeProps {
  code: string;
  language?: string;
}

export function StyledCode({ code, language = "json" }: StyledCodeProps) {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <div className={`${jetbrainsMono.className} overflow-hidden`}>
      <pre className="line-numbers rounded-lg p-4 text-sm">
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <style jsx global>{`
        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: #6a9955;
        }
        .token.punctuation {
          color: #d4d4d4;
        }
        .token.property,
        .token.keyword,
        .token.tag {
          color: #569cd6;
        }
        .token.class-name,
        .token.builtin,
        .token.interface {
          color: #4ec9b0;
        }
        .token.string,
        .token.attr-value {
          color: #ce9178;
        }
        .token.number {
          color: #b5cea8;
        }
        .token.operator {
          color: #d4d4d4;
        }
        .token.boolean {
          color: #569cd6;
        }
        .token.function {
          color: #dcdcaa;
        }
        .language-typescript .token.primitive,
        .language-typescript .token.builtin,
        .language-typescript .token.keyword {
          color: #569cd6;
        }
        .language-typescript .token.class-name,
        .language-typescript .token.builtin,
        .language-typescript .token.interface {
          color: #4ec9b0;
        }
        .language-typescript .token.type-declaration {
          color: #4ec9b0;
        }
        .language-typescript .token.type {
          color: #4ec9b0;
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
        pre[class*="language-"].line-numbers {
          position: relative;
          padding-left: 3.8em;
          counter-reset: linenumber;
        }
        .line-numbers .line-numbers-rows {
          position: absolute;
          pointer-events: none;
          top: 1rem;
          left: 0;
          width: 3em;
          border-right: 1px solid #404040;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          z-index: 1;
        }
        .line-numbers-rows > span {
          display: block;
          counter-increment: linenumber;
          height: 1.5em;
          line-height: 1.5em;
        }
        .line-numbers-rows > span:before {
          content: counter(linenumber);
          color: #858585;
          display: block;
          padding-right: 0.8em;
          text-align: right;
        }
        @media (max-width: 768px) {
          pre[class*="language-"].line-numbers {
            padding-left: 1rem;
          }
          .line-numbers .line-numbers-rows {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
