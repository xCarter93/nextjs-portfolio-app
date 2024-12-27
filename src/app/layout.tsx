import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { TabsProvider } from "@/contexts/TabsContext";
import { IDELayout } from "@/components/IDE/IDELayout";
import ParticlesBackground from "@/components/Background/ParticlesBackground";
import { ClerkProvider } from "@clerk/nextjs";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - IDE Style",
  description: "A developer portfolio styled like a modern IDE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${jetbrainsMono.className} text-sm antialiased`}
      >
        <ParticlesBackground />
        <ClerkProvider>
          <TabsProvider>
            <IDELayout>{children}</IDELayout>
          </TabsProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
