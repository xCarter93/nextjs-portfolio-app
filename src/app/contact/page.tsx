"use client";

import ContactContent from "@/markdown/contact.mdx";
import { ContactTerminal } from "@/components/Terminal/ContactTerminal";
import { useTerminalStore } from "@/store/useTerminalStore";

export default function ContactPage() {
  const isOpen = useTerminalStore((state) => state.isOpen);

  return (
    <div className="text-gray-300">
      <div className={`mt-4 ${isOpen ? "mb-[306px]" : "mb-6"}`}>
        <div className="rounded-lg bg-gray-800">
          <ContactContent />
        </div>
      </div>

      {/* Terminal Panel */}
      <div
        className={`fixed inset-x-0 bottom-6 transform border-t border-gray-800 bg-black transition-transform duration-300 ${
          isOpen ? "block translate-y-0" : "hidden translate-y-full"
        }`}
        style={{ height: "300px", marginLeft: "224px" }}
      >
        <div className="h-full px-4">
          <ContactTerminal />
        </div>
      </div>
    </div>
  );
}
