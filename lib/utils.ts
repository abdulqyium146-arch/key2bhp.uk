import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BUSINESS = {
  name: "Key 2 BHP Auto Locksmith",
  shortName: "Key 2 BHP",
  phone: "+44 161 884 0755",
  phoneDisplay: "0161 884 0755",
  whatsapp: "441618840755",
  whatsappUrl: "https://wa.me/441618840755",
  address: {
    street: "34 Laburnum Road",
    city: "Denton",
    county: "Manchester",
    postcode: "M34 2NE",
    country: "GB",
    full: "34 Laburnum Road, Denton, Manchester, M34 2NE",
  },
  geo: {
    lat: 53.4559,
    lng: -2.1238,
  },
  rating: 5.0,
  reviewCount: 100,
  hours: "24/7",
  siteUrl: "https://key2bhp.co.uk",
} as const;

export function formatPhone(raw: string) {
  return raw.replace(/\s/g, "");
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}
