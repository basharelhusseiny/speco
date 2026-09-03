import type { Metadata } from "next";
import PrefabPanels from "@/views/PrefabPanels";

export const metadata: Metadata = {
  title: "Prefabricated Sandwich Panels & Roofing",
  description:
    "SPECO prefabricated sandwich panels and roofing iron sheets for walls, roofs, and industrial applications. Superior thermal performance, structural rigidity, and quick assembly.",
  openGraph: {
    title: "Prefabricated Sandwich Panels & Roofing | SPECO Building Technology",
    description:
      "SPECO prefabricated sandwich panels and roofing iron sheets for walls, roofs, and industrial applications. Superior thermal performance, structural rigidity, and quick assembly.",
    url: "/products/prefab-panels",
    type: "website",
  },
};

export default function Page() {
  return <PrefabPanels />;
}