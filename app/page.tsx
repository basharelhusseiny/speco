import type { Metadata } from "next";
import Home from "@/views/Home";

export const metadata: Metadata = {
  title: "SPECO Building Technology | South Sudan's First Building Materials Factory",
  description:
    "SPECO Building Technology is South Sudan's first building materials factory. EPS panels, sandwich panels, and roofing solutions engineered for speed, built for durability.",
  openGraph: {
    title: "SPECO Building Technology | South Sudan's First Building Materials Factory",
    description:
      "SPECO Building Technology is South Sudan's first building materials factory. EPS panels, sandwich panels, and roofing solutions engineered for speed, built for durability.",
    url: "/",
    type: "website",
  },
};

export default function Page() {
  return <Home />;
}