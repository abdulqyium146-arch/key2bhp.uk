import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/utils";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BUSINESS.legalName,
    short_name: "Key 2 BHP",
    description: "24/7 mobile auto locksmith in Manchester and Greater Manchester. Car key replacement, emergency lockout & key programming.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0B0B0B",
    theme_color: "#F59E0B",
    categories: ["automotive", "local business"],
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
