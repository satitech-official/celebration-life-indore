import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Celebrate Life Indore",
    short_name: "Celebrate Life",
    description: "Premium event decoration in Indore",
    start_url: "/celebration-life-indore/",
    scope: "/celebration-life-indore/",
    display: "standalone",
    background_color: "#130B18",
    theme_color: "#5A2A82",
    icons: [
      {
        src: "/celebration-life-indore/icon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
