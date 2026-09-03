import type { Metadata } from "next";
import EpsPanels from "@/views/EpsPanels";

export const metadata: Metadata = {
  title: "EPS 3D Wall Panels | Expanded Polystyrene Panels",
  description:
    "SPECO EPS 3D Wall Panels are lightweight, high-strength construction panels with thermal insulation, soundproofing, and fire resistance. Ideal for residential, commercial, and industrial buildings in South Sudan.",
  openGraph: {
    title: "EPS 3D Wall Panels | Expanded Polystyrene Panels | SPECO Building Technology",
    description:
      "SPECO EPS 3D Wall Panels are lightweight, high-strength construction panels with thermal insulation, soundproofing, and fire resistance. Ideal for residential, commercial, and industrial buildings in South Sudan.",
    url: "/products/eps-panels",
    type: "website",
  },
};

export default function Page() {
  return <EpsPanels />;
}