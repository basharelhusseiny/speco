import type { Metadata } from "next";
import Gallery from "@/views/Gallery";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "View our completed construction projects and product installations across South Sudan. See SPECO building materials in action.",
  openGraph: {
    title: "Project Gallery | SPECO Building Technology Construction Projects",
    description:
      "View our completed construction projects and product installations across South Sudan. See SPECO building materials in action.",
    url: "/gallery",
    type: "website",
  },
};

export default function Page() {
  return <Gallery />;
}