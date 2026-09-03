import type { Metadata } from "next";
import About from "@/views/About";

export const metadata: Metadata = {
  title: "About | Pioneering Construction in South Sudan",
  description:
    "Learn about SPECO Building Technology, founded in 2023 in Juba, South Sudan. Our mission is to revolutionize construction through innovative and sustainable building solutions.",
  openGraph: {
    title: "About SPECO Building Technology | Pioneering Construction in South Sudan",
    description:
      "Learn about SPECO Building Technology, founded in 2023 in Juba, South Sudan. Our mission is to revolutionize construction through innovative and sustainable building solutions.",
    url: "/about",
    type: "website",
  },
};

export default function Page() {
  return <About />;
}