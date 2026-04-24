/**
 * PROGRAMMATIC SEO — SERVICE × LOCATION COMBO DATA
 *
 * Content uniqueness strategy:
 *   Each location has a `contentAngle` with unique signals:
 *     - responseTime: accurate ETA claim based on proximity to Denton base
 *     - contextParagraph: area-specific intro sentence
 *     - localContext: landmarks / postcodes / area characteristics
 *     - urgencyLine: location-specific urgency hook
 *     - areaCharacter: what kind of area this is (city, suburb, industrial, etc.)
 *
 *   Each service × location combo then gets a unique:
 *     - SEO title (service + location + postcode modifier)
 *     - Meta description (action-oriented, includes phone)
 *     - H1
 *     - Opening paragraph (generated from service.tagline + locationAngle.contextParagraph)
 *     - FAQ mix (2 service FAQs + 2 location FAQs)
 *
 *   This ensures all 48 pages pass a manual duplicate content check.
 */

import type { ServiceSlug, LocationSlug } from "./topical-map";

export interface LocationAngle {
  slug: LocationSlug;
  displayName: string;
  postcode: string;
  responseTime: string;
  responseMinutes: number;
  contextParagraph: string;
  localContext: string;
  urgencyLine: string;
  areaCharacter: string;
  nearbyLandmarks: string[];
  nearbyAreas: string[];
  specificFAQs: { question: string; answer: string }[];
}

export const locationAngles: Record<LocationSlug, LocationAngle> = {
  manchester: {
    slug: "manchester",
    displayName: "Manchester",
    postcode: "M1–M90",
    responseTime: "typically within 30–45 minutes",
    responseMinutes: 40,
    contextParagraph:
      "Manchester is a vast city and being stuck without a working car key — whether in the Northern Quarter, near Piccadilly, or out in Didsbury — means you need someone who can actually navigate the city and reach you fast.",
    localContext:
      "With heavy traffic in the city centre, one-way systems, and multi-storey car parks throughout Manchester, car lockouts and key problems are an everyday occurrence. Key 2 BHP covers every Manchester postcode, from M1 in the city centre to M23 in Wythenshawe.",
    urgencyLine:
      "Stuck in Manchester city centre? On a side street in Chorlton? Locked out near Piccadilly Gardens?",
    areaCharacter: "major city",
    nearbyLandmarks: [
      "Manchester City Centre",
      "Piccadilly Gardens",
      "Northern Quarter",
      "Deansgate",
      "Chorlton",
      "Didsbury",
      "Wythenshawe",
      "Salford",
    ],
    nearbyAreas: ["Salford", "Stretford", "Stockport", "Denton"],
    specificFAQs: [
      {
        question: "Do you cover parking in Manchester city centre multi-storeys?",
        answer:
          "Yes. Whether you're in an NCP car park, a street-level bay, or a residential area anywhere in Manchester, we come to your exact location. No need to get your vehicle recovered first.",
      },
      {
        question: "What's the fastest way to get a locksmith in Manchester city centre?",
        answer:
          "Call 0161 884 0755 directly — this gets the fastest response. WhatsApp also works for non-emergency quotes. We aim to reach central Manchester in under 40 minutes.",
      },
    ],
  },

  denton: {
    slug: "denton",
    displayName: "Denton",
    postcode: "M34",
    responseTime: "typically within 15–20 minutes",
    responseMinutes: 18,
    contextParagraph:
      "Denton is our home base — our workshop is on Laburnum Road, M34, which means we can reach most Denton addresses faster than any other locksmith in the area.",
    localContext:
      "From Crown Point Retail Park to Haughton Green and Dane Bank, Denton is well within our fastest-response zone. If you're in an M34 postcode, expect us on your doorstep in around 15–20 minutes.",
    urgencyLine:
      "Locked out in Denton? Need a key right now near Crown Point? We're closest.",
    areaCharacter: "suburban town",
    nearbyLandmarks: [
      "Crown Point Retail Park",
      "Denton Town Centre",
      "Haughton Green",
      "Dane Bank",
      "Hyde Road",
    ],
    nearbyAreas: ["Hyde", "Audenshaw", "Reddish", "Droylsden"],
    specificFAQs: [
      {
        question: "You're based in Denton — does that mean faster response times?",
        answer:
          "Yes. Our base at 34 Laburnum Road, Denton M34 2NE means we're typically on-site within 15–20 minutes for most Denton postcodes — faster than any other mobile locksmith in the area.",
      },
      {
        question: "Do you cover the Crown Point and Hyde Road areas of Denton?",
        answer:
          "Absolutely. We cover all Denton postcodes — from the Crown Point retail area on the A57 to the residential streets of Haughton Green and Dane Bank.",
      },
    ],
  },

  stockport: {
    slug: "stockport",
    displayName: "Stockport",
    postcode: "SK1–SK6",
    responseTime: "typically within 30–45 minutes",
    responseMinutes: 38,
    contextParagraph:
      "Stockport covers a broad area from the town centre viaduct down through Hazel Grove, Cheadle, and out to Marple — and car key emergencies happen across every corner of the borough.",
    localContext:
      "Whether you're parked near Merseyway, stuck in Hazel Grove, or need a key replacement in Bramhall, our mobile locksmith covers all SK postcodes. Stockport's mix of retail, residential, and business areas means we respond to all types of vehicle locksmith callouts here.",
    urgencyLine:
      "Car problems near Stockport Viaduct? Locked out in Hazel Grove or Cheadle?",
    areaCharacter: "market town and suburbs",
    nearbyLandmarks: [
      "Stockport Viaduct",
      "Merseyway Shopping Centre",
      "Hazel Grove",
      "Cheadle Hulme",
      "Bramhall",
      "Marple",
    ],
    nearbyAreas: ["Manchester", "Tameside", "Hyde", "Denton"],
    specificFAQs: [
      {
        question: "Do you cover the SK postcodes — including Hazel Grove and Cheadle?",
        answer:
          "Yes. We cover all Stockport SK postcodes including SK1 (town centre), SK2, SK3, SK4 (Hazel Grove), SK7 (Bramhall), SK8 (Cheadle), and SK6 (Marple and Romiley).",
      },
      {
        question: "Can you replace car keys in Stockport the same day?",
        answer:
          "In most cases yes. We carry key blanks and programming equipment for most makes and models, meaning same-day car key replacement in Stockport is usually achievable.",
      },
    ],
  },

  tameside: {
    slug: "tameside",
    displayName: "Tameside",
    postcode: "OL5–OL7, SK14–SK15, M34, M43",
    responseTime: "typically within 20–35 minutes",
    responseMinutes: 28,
    contextParagraph:
      "Tameside is a borough rather than a single town, stretching from Ashton-under-Lyne and Stalybridge in the east to Droylsden and Audenshaw bordering Manchester in the west. Being based in Denton puts us centrally within Tameside.",
    localContext:
      "From the industrial and retail areas of Ashton to the quieter residential streets of Mossley and Mottram, Tameside presents a wide variety of car locksmith scenarios. Key 2 BHP covers every Tameside postcode — any town, any time.",
    urgencyLine:
      "Locked out anywhere in Tameside? Need a key in Ashton, Stalybridge, or Droylsden?",
    areaCharacter: "metropolitan borough",
    nearbyLandmarks: [
      "Ashton-under-Lyne Market",
      "Stalybridge Town Centre",
      "Droylsden",
      "Audenshaw",
      "Dukinfield",
      "Mossley",
    ],
    nearbyAreas: ["Manchester", "Denton", "Hyde", "Stockport"],
    specificFAQs: [
      {
        question: "Which Tameside towns do you cover?",
        answer:
          "We cover all Tameside towns including Ashton-under-Lyne, Hyde, Stalybridge, Droylsden, Audenshaw, Dukinfield, Mossley, and Mottram. Being based in Denton puts us at the heart of the borough.",
      },
      {
        question: "Can you get to remote parts of Tameside like Mossley or Mottram?",
        answer:
          "Yes. We cover the full Tameside borough including outlying areas like Mossley, Mottram, and Longdendale. Response times to these areas are typically 35–50 minutes.",
      },
    ],
  },

  hyde: {
    slug: "hyde",
    displayName: "Hyde",
    postcode: "SK14",
    responseTime: "typically within 20–30 minutes",
    responseMinutes: 25,
    contextParagraph:
      "Hyde sits directly adjacent to our Denton base, making it one of our fastest-response areas. The SK14 postcode covers Hyde town centre, Gee Cross, Godley, and Newton — all within easy reach.",
    localContext:
      "Hyde is a busy town with a mix of residential streets, the Hyde market, and retail areas off Market Street. Car lockouts and key problems are common here and our proximity means you're rarely waiting long.",
    urgencyLine:
      "Key trouble in Hyde? Locked out near Hyde market or in Gee Cross?",
    areaCharacter: "market town",
    nearbyLandmarks: [
      "Hyde Town Centre",
      "Hyde Market",
      "Gee Cross",
      "Godley",
      "Newton",
      "Hattersley",
    ],
    nearbyAreas: ["Denton", "Tameside", "Dukinfield", "Mottram"],
    specificFAQs: [
      {
        question: "How quickly can you reach Hyde from your Denton base?",
        answer:
          "Hyde and Denton are adjacent, so we can typically reach Hyde in 20–30 minutes from our base — faster than most locksmiths who are further away.",
      },
      {
        question: "Do you cover Gee Cross and the SK14 rural areas?",
        answer:
          "Yes. We cover all of SK14 including Hyde town centre, Gee Cross, Godley, Newton, and Hattersley.",
      },
    ],
  },

  stretford: {
    slug: "stretford",
    displayName: "Stretford",
    postcode: "M32",
    responseTime: "typically within 35–50 minutes",
    responseMinutes: 43,
    contextParagraph:
      "Stretford in the Trafford borough is well-connected via the Metrolink and the A56, but when your car key stops working, public transport isn't much help. Key 2 BHP covers all M32 postcodes.",
    localContext:
      "From Old Trafford to Stretford's retail areas and Longford Park, we provide mobile auto locksmith coverage across the M32 area. Stretford's location between Manchester city centre and Sale makes it a busy area for commuters who rely on their vehicles.",
    urgencyLine:
      "Car key emergency in Stretford or Old Trafford? We'll come to you.",
    areaCharacter: "suburban commuter area",
    nearbyLandmarks: [
      "Old Trafford",
      "Stretford Arndale",
      "Longford Park",
      "Gorse Hill",
      "A56 Corridor",
    ],
    nearbyAreas: ["Manchester", "Salford", "Urmston", "Chorlton"],
    specificFAQs: [
      {
        question: "Do you cover the Old Trafford and M32 area?",
        answer:
          "Yes. We cover all of M32 including Stretford, Old Trafford, Gorse Hill, and surrounding streets. Expect a response time of around 35–50 minutes from our Denton base.",
      },
      {
        question: "Can you help if I'm locked out near Stretford Arndale?",
        answer:
          "Absolutely. Whether you're at the shopping centre, a residential street, or a side road in Stretford, we come to your exact location.",
      },
    ],
  },

  "ashton-under-lyne": {
    slug: "ashton-under-lyne",
    displayName: "Ashton-under-Lyne",
    postcode: "OL6–OL7",
    responseTime: "typically within 20–30 minutes",
    responseMinutes: 25,
    contextParagraph:
      "Ashton-under-Lyne is the main town of Tameside and one of our most frequently served areas. The OL6 and OL7 postcodes are well within our operational range from Denton.",
    localContext:
      "From the indoor market and The Arcades to Smallshaw and Hurst, Ashton has a mix of shoppers, workers, and residents who rely on their vehicles daily. Car lockouts near busy areas like Market Street or Stamford Street can be particularly stressful — and we respond fast.",
    urgencyLine:
      "Locked out near Ashton market? Key trouble in Smallshaw or Hurst?",
    areaCharacter: "market town",
    nearbyLandmarks: [
      "Ashton Indoor Market",
      "The Arcades Shopping Centre",
      "Stamford Street Central",
      "Smallshaw",
      "Hurst",
      "Waterloo",
    ],
    nearbyAreas: ["Tameside", "Droylsden", "Dukinfield", "Stalybridge"],
    specificFAQs: [
      {
        question: "How fast can you reach Ashton-under-Lyne town centre?",
        answer:
          "From our Denton base, we typically reach Ashton-under-Lyne town centre in 20–30 minutes. Outlying areas like Smallshaw may take a few minutes longer.",
      },
      {
        question: "Are you available on market days and busy weekend periods in Ashton?",
        answer:
          "Yes — our service is fully 24/7, including busy market days, weekends, and bank holidays. We don't schedule around demand; we respond to it.",
      },
    ],
  },

  salford: {
    slug: "salford",
    displayName: "Salford",
    postcode: "M5–M7, M27, M28, M30",
    responseTime: "typically within 35–50 minutes",
    responseMinutes: 43,
    contextParagraph:
      "Salford is home to MediaCityUK, Salford Quays, and a large university population — which means thousands of commuters and students driving in and out daily, any of whom might need a locksmith at a moment's notice.",
    localContext:
      "Whether you're stuck near MediaCityUK, locked out near Salford Quays, or need a car key replaced in Eccles or Swinton, Key 2 BHP provides full mobile auto locksmith coverage across the M5, M6, M7, M27, and surrounding postcodes.",
    urgencyLine:
      "Car key issue near MediaCityUK? Locked out in Salford Quays or Eccles?",
    areaCharacter: "urban mixed-use",
    nearbyLandmarks: [
      "MediaCityUK",
      "Salford Quays",
      "University of Salford",
      "Eccles",
      "Swinton",
      "Ordsall",
    ],
    nearbyAreas: ["Manchester", "Stretford", "Urmston", "Worsley"],
    specificFAQs: [
      {
        question: "Do you cover MediaCityUK and Salford Quays?",
        answer:
          "Yes. We cover the entire Salford area including MediaCityUK, Salford Quays, Ordsall, Eccles, and Swinton. Expect a response of around 35–50 minutes.",
      },
      {
        question: "Are you familiar with the gated areas and private roads at Salford Quays?",
        answer:
          "Yes. We regularly attend callouts at MediaCityUK and Salford Quays. If there are access restrictions, let us know when you call and we'll coordinate appropriately.",
      },
    ],
  },
};

// ─── COMBO META GENERATOR ──────────────────────────────────────────────────────
// Generates unique title, description, H1, and open paragraph per combo.
// Called from app/[location]/[service]/page.tsx

export function getComboMeta(
  serviceSlug: ServiceSlug,
  locationSlug: LocationSlug,
  serviceName: string,
  serviceTagline: string
): {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  openingParagraph: string;
} {
  const loc = locationAngles[locationSlug];

  const metaTitle = `${serviceName} ${loc.displayName} | ${loc.postcode.split("–")[0]} | Key 2 BHP`;

  const metaDescription = `Need ${serviceName.toLowerCase()} in ${loc.displayName}? Key 2 BHP responds ${loc.responseTime}. Mobile, 24/7, all makes & models. Call 0161 884 0755.`;

  const h1 = `${serviceName} in ${loc.displayName}`;

  const openingParagraph = `${loc.urgencyLine} Key 2 BHP provides professional ${serviceName.toLowerCase()} across ${loc.displayName} (${loc.postcode}), arriving ${loc.responseTime}. ${loc.contextParagraph}`;

  return { metaTitle, metaDescription, h1, openingParagraph };
}

// ─── ALL COMBO PARAMS (for generateStaticParams) ───────────────────────────────
export function getAllCombos(): { location: string; service: string }[] {
  const locations: LocationSlug[] = [
    "manchester", "denton", "stockport", "tameside",
    "hyde", "stretford", "ashton-under-lyne", "salford",
  ];
  const services: ServiceSlug[] = [
    "car-key-replacement", "emergency-lockout", "key-programming",
    "smart-key-replacement", "key-fob-repair", "car-key-battery-replacement",
  ];
  return locations.flatMap((loc) => services.map((svc) => ({ location: loc, service: svc })));
}
