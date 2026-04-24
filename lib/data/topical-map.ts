/**
 * TOPICAL AUTHORITY MAP
 * Core topic: Auto Locksmith Manchester / Greater Manchester
 *
 * Structure:
 *   Core Topic → Service Clusters → Location Clusters → Blog Clusters
 *
 * Every page in the site maps to one node in this tree.
 * Internal links flow upward (leaf → parent) and laterally (sibling services / sibling locations).
 */

export type SearchIntent = "transactional" | "informational" | "navigational" | "commercial";

export interface TopicNode {
  id: string;
  label: string;
  url: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  intent: SearchIntent;
  monthlySearchVolume: "high" | "medium" | "low";
  cluster: "service" | "location" | "combo" | "blog" | "core";
  targetPage: string;
}

// ─── CORE TOPIC ────────────────────────────────────────────────────────────────
export const coreTopic: TopicNode = {
  id: "core-homepage",
  label: "Auto Locksmith Manchester",
  url: "/",
  primaryKeyword: "auto locksmith Manchester",
  secondaryKeywords: [
    "24 hour locksmith Manchester",
    "mobile locksmith Manchester",
    "car locksmith Manchester",
    "emergency locksmith Manchester",
    "locksmith near me Manchester",
  ],
  intent: "transactional",
  monthlySearchVolume: "high",
  cluster: "core",
  targetPage: "app/page.tsx",
};

// ─── SERVICE CLUSTER ───────────────────────────────────────────────────────────
export const serviceTopics: TopicNode[] = [
  {
    id: "service-car-key-replacement",
    label: "Car Key Replacement",
    url: "/services/car-key-replacement",
    primaryKeyword: "car key replacement Manchester",
    secondaryKeywords: [
      "replacement car key Manchester",
      "lost car key replacement Manchester",
      "car key cut Manchester",
      "new car key Manchester",
      "car key made Manchester",
    ],
    intent: "transactional",
    monthlySearchVolume: "high",
    cluster: "service",
    targetPage: "app/services/[service]/page.tsx",
  },
  {
    id: "service-emergency-lockout",
    label: "Emergency Lockout",
    url: "/services/emergency-lockout",
    primaryKeyword: "locked out of car Manchester",
    secondaryKeywords: [
      "car lockout Manchester",
      "emergency car lockout Manchester",
      "locked keys in car Manchester",
      "car door unlock Manchester",
      "locked out vehicle Manchester",
    ],
    intent: "transactional",
    monthlySearchVolume: "high",
    cluster: "service",
    targetPage: "app/services/[service]/page.tsx",
  },
  {
    id: "service-key-programming",
    label: "Key Programming",
    url: "/services/key-programming",
    primaryKeyword: "car key programming Manchester",
    secondaryKeywords: [
      "transponder key programming Manchester",
      "key fob programming Manchester",
      "car key coding Manchester",
      "remote key programming Manchester",
      "IMMO key programming Manchester",
    ],
    intent: "transactional",
    monthlySearchVolume: "medium",
    cluster: "service",
    targetPage: "app/services/[service]/page.tsx",
  },
  {
    id: "service-smart-key-replacement",
    label: "Smart Key Replacement",
    url: "/services/smart-key-replacement",
    primaryKeyword: "smart key replacement Manchester",
    secondaryKeywords: [
      "keyless entry key Manchester",
      "push start key replacement Manchester",
      "proximity key Manchester",
      "comfort access key Manchester",
      "keyless go fob Manchester",
    ],
    intent: "transactional",
    monthlySearchVolume: "medium",
    cluster: "service",
    targetPage: "app/services/[service]/page.tsx",
  },
  {
    id: "service-key-fob-repair",
    label: "Key Fob Repair",
    url: "/services/key-fob-repair",
    primaryKeyword: "key fob repair Manchester",
    secondaryKeywords: [
      "broken key fob Manchester",
      "car remote repair Manchester",
      "key fob button repair Manchester",
      "damaged key fob Manchester",
      "fix car remote Manchester",
    ],
    intent: "transactional",
    monthlySearchVolume: "medium",
    cluster: "service",
    targetPage: "app/services/[service]/page.tsx",
  },
  {
    id: "service-car-key-battery",
    label: "Car Key Battery Replacement",
    url: "/services/car-key-battery-replacement",
    primaryKeyword: "car key battery replacement Manchester",
    secondaryKeywords: [
      "key fob battery Manchester",
      "replace car key battery Manchester",
      "key remote battery Manchester",
      "car key not working battery Manchester",
    ],
    intent: "transactional",
    monthlySearchVolume: "low",
    cluster: "service",
    targetPage: "app/services/[service]/page.tsx",
  },
];

// ─── LOCATION CLUSTER ──────────────────────────────────────────────────────────
export const locationTopics: TopicNode[] = [
  {
    id: "location-manchester",
    label: "Manchester",
    url: "/locations/manchester",
    primaryKeyword: "auto locksmith Manchester",
    secondaryKeywords: [
      "locksmith Manchester city centre",
      "car locksmith Manchester",
      "mobile locksmith Manchester",
      "emergency locksmith Manchester",
    ],
    intent: "transactional",
    monthlySearchVolume: "high",
    cluster: "location",
    targetPage: "app/locations/[city]/page.tsx",
  },
  {
    id: "location-denton",
    label: "Denton",
    url: "/locations/denton",
    primaryKeyword: "auto locksmith Denton",
    secondaryKeywords: [
      "locksmith Denton Manchester",
      "car locksmith Denton M34",
      "locksmith Denton 24 hour",
      "mobile locksmith Denton",
    ],
    intent: "transactional",
    monthlySearchVolume: "low",
    cluster: "location",
    targetPage: "app/locations/[city]/page.tsx",
  },
  {
    id: "location-stockport",
    label: "Stockport",
    url: "/locations/stockport",
    primaryKeyword: "auto locksmith Stockport",
    secondaryKeywords: [
      "locksmith Stockport SK1",
      "car locksmith Stockport",
      "emergency locksmith Stockport",
      "mobile locksmith Stockport",
    ],
    intent: "transactional",
    monthlySearchVolume: "medium",
    cluster: "location",
    targetPage: "app/locations/[city]/page.tsx",
  },
  {
    id: "location-tameside",
    label: "Tameside",
    url: "/locations/tameside",
    primaryKeyword: "auto locksmith Tameside",
    secondaryKeywords: [
      "locksmith Tameside",
      "car locksmith Tameside",
      "mobile locksmith Tameside",
      "emergency locksmith Tameside",
    ],
    intent: "transactional",
    monthlySearchVolume: "low",
    cluster: "location",
    targetPage: "app/locations/[city]/page.tsx",
  },
  {
    id: "location-hyde",
    label: "Hyde",
    url: "/locations/hyde",
    primaryKeyword: "auto locksmith Hyde",
    secondaryKeywords: [
      "locksmith Hyde SK14",
      "car locksmith Hyde",
      "mobile locksmith Hyde Tameside",
    ],
    intent: "transactional",
    monthlySearchVolume: "low",
    cluster: "location",
    targetPage: "app/locations/[city]/page.tsx",
  },
  {
    id: "location-stretford",
    label: "Stretford",
    url: "/locations/stretford",
    primaryKeyword: "auto locksmith Stretford",
    secondaryKeywords: [
      "locksmith Stretford M32",
      "car locksmith Stretford",
      "mobile locksmith Stretford",
    ],
    intent: "transactional",
    monthlySearchVolume: "low",
    cluster: "location",
    targetPage: "app/locations/[city]/page.tsx",
  },
  {
    id: "location-ashton",
    label: "Ashton-under-Lyne",
    url: "/locations/ashton-under-lyne",
    primaryKeyword: "auto locksmith Ashton-under-Lyne",
    secondaryKeywords: [
      "locksmith Ashton under Lyne OL6",
      "car locksmith Ashton",
      "emergency locksmith Ashton-under-Lyne",
    ],
    intent: "transactional",
    monthlySearchVolume: "low",
    cluster: "location",
    targetPage: "app/locations/[city]/page.tsx",
  },
  {
    id: "location-salford",
    label: "Salford",
    url: "/locations/salford",
    primaryKeyword: "auto locksmith Salford",
    secondaryKeywords: [
      "locksmith Salford M5",
      "car locksmith Salford",
      "locksmith MediaCity Salford",
      "mobile locksmith Salford",
    ],
    intent: "transactional",
    monthlySearchVolume: "medium",
    cluster: "location",
    targetPage: "app/locations/[city]/page.tsx",
  },
];

// ─── COMBO CLUSTER (service × location) ────────────────────────────────────────
// 6 services × 8 locations = 48 programmatic pages
// Each at /[location]/[service]  e.g. /manchester/car-key-replacement

export const serviceSlugs = [
  "car-key-replacement",
  "emergency-lockout",
  "key-programming",
  "smart-key-replacement",
  "key-fob-repair",
  "car-key-battery-replacement",
] as const;

export const locationSlugs = [
  "manchester",
  "denton",
  "stockport",
  "tameside",
  "hyde",
  "stretford",
  "ashton-under-lyne",
  "salford",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];
export type LocationSlug = (typeof locationSlugs)[number];

// ─── BLOG CLUSTER ──────────────────────────────────────────────────────────────
export const blogClusters = {
  emergency: {
    label: "Emergency Situations",
    intent: "transactional" as SearchIntent,
    linkToServices: ["emergency-lockout", "car-key-replacement"],
  },
  cost: {
    label: "Cost & Pricing",
    intent: "commercial" as SearchIntent,
    linkToServices: ["car-key-replacement", "key-programming"],
  },
  howTo: {
    label: "How-To & DIY",
    intent: "informational" as SearchIntent,
    linkToServices: ["key-fob-repair", "car-key-battery-replacement"],
  },
  informational: {
    label: "General Information",
    intent: "informational" as SearchIntent,
    linkToServices: ["key-programming", "smart-key-replacement"],
  },
};

// ─── INTERNAL LINKING RULES ────────────────────────────────────────────────────
// Each page must link to:
//   - 3 related services (varied anchor text)
//   - 3 related locations (natural anchor text)
//   - 1 blog post (informational anchor text)
// Never use exact-match anchor text on every link — rotate variants.

export const anchorVariants: Record<string, string[]> = {
  "car-key-replacement": [
    "car key replacement in Manchester",
    "replace your car key",
    "mobile car key cutting",
    "new car key service",
    "get a replacement key made",
  ],
  "emergency-lockout": [
    "emergency car lockout service",
    "locked out of your vehicle",
    "vehicle lockout assistance",
    "fast car lockout response",
    "get back into your car",
  ],
  "key-programming": [
    "car key programming",
    "transponder key coding",
    "remote key programming",
    "key fob programming service",
    "get your key programmed",
  ],
  "smart-key-replacement": [
    "smart key replacement",
    "keyless entry key",
    "push-start key replacement",
    "proximity key service",
    "replace your smart key",
  ],
  "key-fob-repair": [
    "key fob repair",
    "broken remote repair",
    "fix your key fob",
    "car remote repair service",
    "damaged fob repair",
  ],
  "car-key-battery-replacement": [
    "key battery replacement",
    "replace your key fob battery",
    "car key battery swap",
    "fix your unresponsive remote",
  ],
};
