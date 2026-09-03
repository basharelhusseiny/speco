"use client";

import { ReactNode } from "react";
import { HeroProvider } from "@/lib/hero-context";
import Layout from "@/components/Layout";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <HeroProvider>
      <Layout>{children}</Layout>
    </HeroProvider>
  );
}