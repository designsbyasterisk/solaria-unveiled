import { createFileRoute } from "@tanstack/react-router";

import cementTexture from "@/assets/cement-texture.jpg.asset.json";
import { ScrollStage } from "@/components/home/ScrollStage";
import { WaterProof } from "@/components/home/WaterProof";
import { Products } from "@/components/home/Products";
import { Trust } from "@/components/home/Trust";
import { TechData } from "@/components/home/TechData";
import { SiteFooter } from "@/components/home/SiteFooter";

const title = "Solaria Cement India — Materials that stand the test of time";
const description =
  "Cement is everywhere and almost invisible. Look closer at Solaria Cement: three families, 150 years of testing, and 30% less water to cure.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main
      className="grain-surface"
      style={{ ["--cement-texture-url" as string]: `url(${cementTexture.url})` }}
    >
      <ScrollStage />
      <WaterProof />
      <Products />
      <Trust />
      <TechData />
      <SiteFooter />
    </main>
  );
}
