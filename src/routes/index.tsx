import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/HeroSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Newgen Traders | Construction, PEB & Steel Fabrication" },
      {
        name: "description",
        content:
          "Newgen Traders delivers integrated construction, pre-engineered buildings, steel fabrication and building material supply for industrial projects.",
      },
      { property: "og:title", content: "Newgen Traders | Building the Future of Industry" },
      {
        property: "og:description",
        content:
          "Integrated construction, PEB, fabrication and building material solutions for warehouses, factories and industrial sheds.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}
