export interface Location {
  slug: string;
  name: string;
  county: string;
  postcodeArea: string;
  description: string;
  intro: string;
  landmarks: string[];
  neighbouringAreas: string[];
  relatedCities: string[];
  metaTitle: string;
  metaDescription: string;
  h1: string;
  localFAQs: { question: string; answer: string }[];
}

export const locations: Location[] = [
  {
    slug: "manchester",
    name: "Manchester",
    county: "Greater Manchester",
    postcodeArea: "M",
    description:
      "Manchester city centre and surrounding districts including Salford, Hulme, Ancoats, Chorlton, and Didsbury.",
    intro:
      "Key 2 BHP provides a 24/7 mobile auto locksmith service throughout Manchester city centre and all surrounding districts. Whether you're stuck in the Northern Quarter, locked out near Piccadilly, or need a car key replacement in South Manchester, our mobile technician reaches you fast.",
    landmarks: [
      "Manchester City Centre",
      "Piccadilly Gardens",
      "Northern Quarter",
      "Salford",
      "Hulme",
      "Chorlton",
      "Didsbury",
      "Levenshulme",
    ],
    neighbouringAreas: ["Salford", "Trafford", "Wythenshawe", "Gorton"],
    relatedCities: ["denton", "stockport", "tameside", "stretford"],
    metaTitle: "Auto Locksmith Manchester | 24/7 Mobile | Key 2 BHP",
    metaDescription:
      "24/7 auto locksmith in Manchester. Car key replacement, emergency lockout & key programming. Fast response, all makes & models. Call 0161 884 0755.",
    h1: "Auto Locksmith in Manchester",
    localFAQs: [
      {
        question: "How quickly can a locksmith reach me in Manchester city centre?",
        answer:
          "We typically arrive within 30–45 minutes in Manchester city centre. Response times can vary depending on traffic and time of day.",
      },
      {
        question: "Do you cover South Manchester and the suburbs?",
        answer:
          "Yes — we cover all Manchester postcodes including South Manchester areas such as Didsbury, Chorlton, Withington, and Levenshulme.",
      },
    ],
  },
  {
    slug: "denton",
    name: "Denton",
    county: "Tameside, Greater Manchester",
    postcodeArea: "M34",
    description:
      "Denton is a town in Tameside, Greater Manchester, with postcodes M34. Our base is in Denton, giving us the fastest response times in the area.",
    intro:
      "Key 2 BHP is based in Denton, making us the fastest-responding auto locksmith in the M34 area. From Crown Point to Haughton Green, we're on your doorstep in minutes. Our mobile service covers all Denton postcodes 24 hours a day, 7 days a week.",
    landmarks: [
      "Crown Point Retail Park",
      "Denton Town Centre",
      "Haughton Green",
      "Dane Bank",
      "Hyde Road Corridor",
    ],
    neighbouringAreas: ["Hyde", "Audenshaw", "Reddish", "Droylsden"],
    relatedCities: ["manchester", "tameside", "stockport", "hyde"],
    metaTitle: "Auto Locksmith Denton M34 | Key 2 BHP | 24/7 Mobile",
    metaDescription:
      "Auto locksmith in Denton M34. Key 2 BHP is based in Denton — fastest response for car key replacement & lockouts. 24/7. Call 0161 884 0755.",
    h1: "Auto Locksmith in Denton, Manchester",
    localFAQs: [
      {
        question: "Are you based in Denton?",
        answer:
          "Yes — our base is at 34 Laburnum Road, Denton, M34 2NE. This makes us the closest and fastest-responding locksmith in the Denton area.",
      },
      {
        question: "Do you cover the M34 postcode area?",
        answer:
          "Yes, we cover all M34 postcodes including Denton, Audenshaw, and surrounding areas. Response times from our Denton base are typically under 20 minutes.",
      },
    ],
  },
  {
    slug: "stockport",
    name: "Stockport",
    county: "Greater Manchester",
    postcodeArea: "SK",
    description:
      "Stockport and surrounding areas including Hazel Grove, Cheadle, Bramhall, Marple, and Romiley.",
    intro:
      "Key 2 BHP covers Stockport and all SK postcodes for mobile auto locksmith services. From Stockport town centre to Hazel Grove, Cheadle Hulme, and Marple, we provide rapid-response car key replacement and emergency lockout services throughout the borough.",
    landmarks: [
      "Stockport Town Centre",
      "Merseyway Shopping Centre",
      "Hazel Grove",
      "Cheadle",
      "Cheadle Hulme",
      "Bramhall",
      "Marple",
      "Romiley",
    ],
    neighbouringAreas: ["Cheadle", "Hazel Grove", "Bramhall", "Marple"],
    relatedCities: ["manchester", "denton", "tameside"],
    metaTitle: "Auto Locksmith Stockport | 24/7 Mobile | Key 2 BHP",
    metaDescription:
      "Mobile auto locksmith in Stockport. Car key replacement, emergency lockout & key programming across all SK postcodes. 24/7. Call 0161 884 0755.",
    h1: "Auto Locksmith in Stockport",
    localFAQs: [
      {
        question: "Do you cover all Stockport postcodes?",
        answer:
          "Yes, we cover all SK postcodes including Stockport, Hazel Grove, Cheadle, Bramhall, Marple, Romiley, and surrounding villages.",
      },
      {
        question: "Can you help if I'm locked out near Stockport train station?",
        answer:
          "Absolutely. We cover Stockport town centre and can typically reach the train station area within 30–40 minutes.",
      },
    ],
  },
  {
    slug: "tameside",
    name: "Tameside",
    county: "Greater Manchester",
    postcodeArea: "OL6/SK14/M34",
    description:
      "The Tameside borough including Ashton-under-Lyne, Hyde, Stalybridge, Droylsden, and Audenshaw.",
    intro:
      "Key 2 BHP provides full mobile auto locksmith coverage across the Tameside borough. From Ashton-under-Lyne and Hyde to Stalybridge and Mossley, our technician covers all Tameside towns with 24/7 availability. Being based in Denton, we're at the heart of Tameside and can respond quickly to any callout.",
    landmarks: [
      "Ashton-under-Lyne",
      "Hyde",
      "Stalybridge",
      "Droylsden",
      "Audenshaw",
      "Dukinfield",
      "Mossley",
    ],
    neighbouringAreas: ["Hyde", "Ashton", "Stalybridge", "Droylsden"],
    relatedCities: ["manchester", "denton", "stockport", "hyde"],
    metaTitle: "Auto Locksmith Tameside | Key 2 BHP | 24/7 Mobile Service",
    metaDescription:
      "24/7 mobile auto locksmith across Tameside. Key replacement, programming & emergency lockout in Ashton, Hyde, Stalybridge & more. Call 0161 884 0755.",
    h1: "Auto Locksmith in Tameside",
    localFAQs: [
      {
        question: "Do you cover Hyde and Ashton-under-Lyne?",
        answer:
          "Yes. We cover all Tameside towns including Hyde, Ashton-under-Lyne, Stalybridge, Dukinfield, and Droylsden.",
      },
      {
        question: "What is your response time in Tameside?",
        answer:
          "Being based in Denton, we're centrally located within Tameside. Most areas can be reached within 20–35 minutes.",
      },
    ],
  },
  {
    slug: "hyde",
    name: "Hyde",
    county: "Tameside, Greater Manchester",
    postcodeArea: "SK14",
    description:
      "Hyde is a town in the Tameside borough with SK14 postcodes, including Gee Cross, Godley, and Newton.",
    intro:
      "Our mobile auto locksmith service covers Hyde, SK14 and surrounding areas. Whether you're in Hyde town centre, Gee Cross, or Newton, we respond 24/7 to car key replacements, emergency lockouts, and key programming needs.",
    landmarks: ["Hyde Town Centre", "Gee Cross", "Godley", "Newton", "Hyde Leisure Pool"],
    neighbouringAreas: ["Denton", "Dukinfield", "Hattersley", "Mottram"],
    relatedCities: ["tameside", "denton", "stockport"],
    metaTitle: "Auto Locksmith Hyde SK14 | Key 2 BHP | 24/7",
    metaDescription:
      "Mobile auto locksmith in Hyde SK14. Car key replacement, lockout & programming. Fast response across Hyde, Gee Cross & Godley. Call 0161 884 0755.",
    h1: "Auto Locksmith in Hyde, Tameside",
    localFAQs: [
      {
        question: "Are you the nearest locksmith to Hyde?",
        answer:
          "Our Denton base is adjacent to Hyde, making us one of the closest mobile auto locksmiths to the SK14 area.",
      },
      {
        question: "Can you replace car keys in Hyde at night?",
        answer:
          "Yes — our service is fully 24/7. We respond to car key replacement and lockout callouts in Hyde at any time of day or night.",
      },
    ],
  },
  {
    slug: "stretford",
    name: "Stretford",
    county: "Trafford, Greater Manchester",
    postcodeArea: "M32",
    description:
      "Stretford is in the Trafford borough, covering M32 postcodes including Old Trafford and Gorse Hill.",
    intro:
      "Key 2 BHP provides mobile auto locksmith services in Stretford, M32. From Old Trafford to Stretford town centre, we're available around the clock for emergency lockouts, car key replacements, and programming.",
    landmarks: ["Old Trafford", "Stretford Arndale", "Gorse Hill", "Longford Park"],
    neighbouringAreas: ["Salford", "Urmston", "Chorlton", "Whalley Range"],
    relatedCities: ["manchester", "tameside", "stockport"],
    metaTitle: "Auto Locksmith Stretford M32 | Key 2 BHP | 24/7",
    metaDescription:
      "Mobile auto locksmith in Stretford M32. Emergency lockout, car key replacement & programming. 24/7 coverage. Call Key 2 BHP on 0161 884 0755.",
    h1: "Auto Locksmith in Stretford, Manchester",
    localFAQs: [
      {
        question: "Do you cover the Old Trafford area?",
        answer:
          "Yes. We cover all M32 postcodes including Stretford, Old Trafford, and Gorse Hill.",
      },
      {
        question: "How long to arrive in Stretford?",
        answer:
          "Typically 30–50 minutes, depending on traffic from our Denton base. We'll give you an accurate ETA when you call.",
      },
    ],
  },
  {
    slug: "ashton-under-lyne",
    name: "Ashton-under-Lyne",
    county: "Tameside, Greater Manchester",
    postcodeArea: "OL6/OL7",
    description:
      "Ashton-under-Lyne is the main town in Tameside with OL6 and OL7 postcodes.",
    intro:
      "Key 2 BHP covers Ashton-under-Lyne and all OL6/OL7 postcodes for mobile auto locksmith services. From the town centre market to Smallshaw and Hurst, we're on call 24/7 for all your vehicle key and lockout needs.",
    landmarks: ["Ashton-under-Lyne Market", "The Arcades Shopping Centre", "Smallshaw", "Hurst", "Waterloo"],
    neighbouringAreas: ["Droylsden", "Stalybridge", "Dukinfield", "Failsworth"],
    relatedCities: ["tameside", "denton", "manchester"],
    metaTitle: "Auto Locksmith Ashton-under-Lyne | Key 2 BHP | 24/7",
    metaDescription:
      "24/7 auto locksmith in Ashton-under-Lyne OL6. Emergency lockout, car key replacement & programming. Fast response. Call 0161 884 0755.",
    h1: "Auto Locksmith in Ashton-under-Lyne",
    localFAQs: [
      {
        question: "Do you cover Ashton-under-Lyne town centre?",
        answer:
          "Yes. We cover the town centre and all surrounding areas including Smallshaw, Hurst, and Waterloo.",
      },
      {
        question: "Can you come out on a Sunday in Ashton?",
        answer:
          "Yes — we operate every day including Sundays and bank holidays. Our 24/7 service covers Ashton-under-Lyne 365 days a year.",
      },
    ],
  },
  {
    slug: "salford",
    name: "Salford",
    county: "Greater Manchester",
    postcodeArea: "M5/M6/M7",
    description:
      "Salford city including MediaCityUK, Salford Quays, Ordsall, and surrounding areas.",
    intro:
      "Key 2 BHP serves Salford and all M5/M6/M7 postcodes with mobile auto locksmith services. From MediaCityUK and Salford Quays to Ordsall and Swinton, we're available 24/7 for car key replacement, lockouts, and key programming.",
    landmarks: ["MediaCityUK", "Salford Quays", "Ordsall", "Eccles", "Swinton"],
    neighbouringAreas: ["Manchester City", "Eccles", "Worsley", "Pendleton"],
    relatedCities: ["manchester", "stretford", "stockport"],
    metaTitle: "Auto Locksmith Salford | Key 2 BHP | 24/7 Mobile",
    metaDescription:
      "Mobile auto locksmith in Salford. Car key replacement, emergency lockout & programming near MediaCityUK, Salford Quays & beyond. Call 0161 884 0755.",
    h1: "Auto Locksmith in Salford",
    localFAQs: [
      {
        question: "Do you cover MediaCityUK and Salford Quays?",
        answer:
          "Yes — we cover all of Salford including MediaCityUK, Salford Quays, and surrounding areas.",
      },
      {
        question: "Is your service available in Eccles and Swinton?",
        answer:
          "Yes. We cover Salford city and surrounding towns including Eccles, Swinton, and Worsley.",
      },
    ],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locations.map((l) => l.slug);
}

export function getRelatedLocations(slugs: string[]): Location[] {
  return locations.filter((l) => slugs.includes(l.slug));
}
