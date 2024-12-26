import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TabsProvider } from "@/contexts/TabsContext";
import { IDELayout } from "@/components/IDE/IDELayout";
import ParticlesBackground from "@/components/Background/ParticlesBackground";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={`${inter.className} text-sm antialiased`}>
        <ParticlesBackground />
        <TabsProvider>
          <IDELayout>{children}</IDELayout>
        </TabsProvider>
      </body>
    </html>
  );
}
