import type { Metadata } from "next";
import Contact from "@/views/Contact";

export const metadata: Metadata = {
  title: "Contact & Get a Quote | Juba, South Sudan",
  description:
    "Contact SPECO Building Technology for construction material supply, project inquiries, and consultations. Located in Gombo Soug, Juba, South Sudan.",
  openGraph: {
    title: "Contact SPECO Building Technology | Get a Quote | Juba, South Sudan",
    description:
      "Contact SPECO Building Technology for construction material supply, project inquiries, and consultations. Located in Gombo Soug, Juba, South Sudan.",
    url: "/contact",
    type: "website",
  },
};

export default function Page() {
  return <Contact />;
}