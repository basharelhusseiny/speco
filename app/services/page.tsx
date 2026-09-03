import type { Metadata } from "next";
import Services from "@/views/Services";

export const metadata: Metadata = {
  title: "Construction Services | Supply, Installation, Design & Build",
  description:
    "Beyond materials, SPECO offers installation, design and build, project management, consulting, and training services for construction projects across South Sudan.",
  openGraph: {
    title: "Construction Services | Supply, Installation, Design & Build | SPECO Building Technology",
    description:
      "Beyond materials, SPECO offers installation, design and build, project management, consulting, and training services for construction projects across South Sudan.",
    url: "/services",
    type: "website",
  },
};

export default function Page() {
  return <Services />;
}