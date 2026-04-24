export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  process: { step: string; title: string; description: string }[];
  faqs: ServiceFAQ[];
  metaTitle: string;
  metaDescription: string;
  h1: string;
  relatedServices: string[];
  keywords: string[];
}

export const services: Service[] = [
  {
    slug: "car-key-replacement",
    name: "Car Key Replacement",
    shortName: "Key Replacement",
    icon: "🔑",
    tagline: "New car key cut & programmed on-site — all makes & models",
    shortDescription:
      "Lost, broken, or stolen car keys replaced fast. We cut and program new keys on-site for all makes and models across Manchester.",
    longDescription:
      "Losing your car keys or having them break can bring your day to a standstill. Key 2 BHP provides a fully mobile car key replacement service across Manchester and Greater Manchester. Our technician comes to you — at home, at work, or roadside — with all the equipment needed to cut and programme a new key on the spot. We cover all major manufacturers including Ford, Vauxhall, BMW, Mercedes, Audi, Volkswagen, Toyota, Honda, Nissan, Renault, and many more. Whether you need a standard key, a transponder key, or a proximity remote key, we have the specialist equipment to match, cut, and programme it to your vehicle.",
    features: [
      "Fully mobile — we come to you",
      "All makes & models covered",
      "Keys cut and programmed on-site",
      "Transponder & proximity keys",
      "Spare key cutting service",
      "Lost all keys? No problem",
      "Competitive fixed pricing",
      "Available 24/7",
    ],
    process: [
      {
        step: "01",
        title: "Call or WhatsApp Us",
        description:
          "Give us your vehicle make, model, and year. We'll confirm availability and provide a no-obligation quote.",
      },
      {
        step: "02",
        title: "We Come to You",
        description:
          "Our mobile locksmith arrives at your location — home, work, or roadside — typically within 30–60 minutes.",
      },
      {
        step: "03",
        title: "Key Cut & Programmed",
        description:
          "We verify your identity and vehicle ownership, then cut and programme your new key on-site.",
      },
    ],
    faqs: [
      {
        question: "How much does a car key replacement cost in Manchester?",
        answer:
          "Car key replacement costs vary by vehicle make and key type. Standard keys start from around £60–£90. Transponder and smart keys are typically £100–£250. Contact us for a free no-obligation quote specific to your vehicle.",
      },
      {
        question: "How long does car key replacement take?",
        answer:
          "Once our technician is at your location, most car key replacements take 30–60 minutes. We programme and test the key before we leave.",
      },
      {
        question: "Can you replace keys if I've lost all my car keys?",
        answer:
          "Yes. Even if you have no working keys, we can cut and programme a new key set for your vehicle. We carry ID verification equipment to confirm ownership.",
      },
      {
        question: "Do you replace keys for all car brands?",
        answer:
          "We cover all major UK car brands including Ford, Vauxhall, BMW, Mercedes, Audi, VW, Toyota, Nissan, Renault, Peugeot, Citroën, Kia, Hyundai, and many more. Contact us if you're unsure about your specific model.",
      },
    ],
    metaTitle: "Car Key Replacement Manchester | Key 2 BHP Locksmith",
    metaDescription:
      "Lost or broken car key? Key 2 BHP replaces & programmes car keys on-site across Manchester. All makes & models. 24/7 mobile service. Call 0161 884 0755.",
    h1: "Car Key Replacement in Manchester",
    relatedServices: ["key-programming", "smart-key-replacement", "emergency-lockout"],
    keywords: ["car key replacement Manchester", "replacement car key Manchester", "lost car keys Manchester"],
  },
  {
    slug: "emergency-lockout",
    name: "Emergency Vehicle Lockout",
    shortName: "Emergency Lockout",
    icon: "🚗",
    tagline: "Locked out of your car? We'll have you back in — fast, 24/7",
    shortDescription:
      "Locked out of your vehicle in Manchester? Our emergency locksmith will reach you quickly and gain access without damage.",
    longDescription:
      "Being locked out of your car is stressful, especially late at night or in an unfamiliar area. Key 2 BHP offers a rapid-response emergency vehicle lockout service across Manchester, Denton, Stockport, Tameside, and surrounding areas — 24 hours a day, 7 days a week. We use non-destructive entry techniques to open your vehicle without causing any damage to your locks, windows, or bodywork. Our mobile locksmith carries specialist tools for all vehicle types and will typically reach you within 30–60 minutes of your call.",
    features: [
      "24/7 emergency response",
      "Non-destructive entry — no damage",
      "Fast arrival — typically 30–60 mins",
      "All vehicle types covered",
      "Keys locked inside? No problem",
      "Broken key in lock resolved",
      "Transparent fixed pricing",
      "Covers all of Greater Manchester",
    ],
    process: [
      {
        step: "01",
        title: "Call Us Now",
        description:
          "Describe your situation and location. We'll dispatch a technician to you immediately.",
      },
      {
        step: "02",
        title: "Fast Response",
        description:
          "Our mobile locksmith heads to your location with specialist entry tools. No waiting for a recovery truck.",
      },
      {
        step: "03",
        title: "Back in Your Vehicle",
        description:
          "We open your vehicle using non-destructive methods, check everything is functioning, and get you on your way.",
      },
    ],
    faqs: [
      {
        question: "Can you unlock my car without causing damage?",
        answer:
          "Yes — we exclusively use non-destructive entry techniques. We do not break windows or force locks. Our specialist tools allow us to open virtually any vehicle without leaving a mark.",
      },
      {
        question: "How fast can you reach me if I'm locked out in Manchester?",
        answer:
          "We aim to reach you within 30–60 minutes anywhere in Greater Manchester. In most central Manchester areas response times are faster.",
      },
      {
        question: "What if my key has broken inside the lock?",
        answer:
          "We can extract broken keys from door locks and ignition barrels, then advise on replacement if needed — all in one visit.",
      },
      {
        question: "Is your lockout service available on bank holidays?",
        answer:
          "Yes. We operate 365 days a year including all bank holidays and Christmas. Emergencies don't keep office hours and neither do we.",
      },
    ],
    metaTitle: "Car Lockout Manchester | 24/7 Emergency Locksmith | Key 2 BHP",
    metaDescription:
      "Locked out of your car in Manchester? Key 2 BHP provides 24/7 emergency vehicle lockout service. Non-destructive entry, fast response. Call 0161 884 0755.",
    h1: "Emergency Vehicle Lockout Service in Manchester",
    relatedServices: ["car-key-replacement", "key-programming", "key-fob-repair"],
    keywords: ["locked out of car Manchester", "car lockout Manchester", "emergency locksmith Manchester"],
  },
  {
    slug: "key-programming",
    name: "Car Key Programming",
    shortName: "Key Programming",
    icon: "💻",
    tagline: "Transponder & remote key programming for all makes and models",
    shortDescription:
      "Specialist car key programming service in Manchester. Transponder keys, remote fobs, and proximity keys coded to your vehicle on-site.",
    longDescription:
      "Modern vehicles use electronic transponder keys and remote fobs that must be programmed to the car's ECU before they will work. Key 2 BHP provides professional car key programming across Manchester and Greater Manchester using the latest dealer-grade diagnostic and programming equipment. Whether you need a new key programmed, a spare key added, or a second-hand key re-coded to your vehicle, our mobile technician can handle it. We programme keys for all major manufacturers including BMW, Mercedes, Audi, Ford, Vauxhall, Toyota, Nissan, Renault, Volkswagen, and many more.",
    features: [
      "Dealer-grade programming equipment",
      "Transponder key coding",
      "Remote fob programming",
      "Proximity & smart key coding",
      "Spare key programming",
      "Second-hand key re-coding",
      "IMMO bypass where applicable",
      "All makes & models",
    ],
    process: [
      {
        step: "01",
        title: "Book Your Appointment",
        description:
          "Tell us your vehicle details — make, model, year, and key type. We'll confirm compatibility and price upfront.",
      },
      {
        step: "02",
        title: "Mobile Technician Arrives",
        description:
          "We come to your location with our programming equipment. No need to tow your vehicle or visit a garage.",
      },
      {
        step: "03",
        title: "Key Programmed & Tested",
        description:
          "We connect to your vehicle's OBD port, programme the key, and run full functionality tests before leaving.",
      },
    ],
    faqs: [
      {
        question: "Can you programme a key I bought online?",
        answer:
          "In many cases, yes — provided the key is the correct blank for your vehicle. We recommend calling us before purchasing to confirm compatibility.",
      },
      {
        question: "What is a transponder key?",
        answer:
          "A transponder key contains a microchip that communicates with your car's immobiliser. The car will only start if it recognises the chip. We programme this chip to match your specific vehicle.",
      },
      {
        question: "Can you delete a lost key from my car's system?",
        answer:
          "Yes. We can remove a lost or stolen key from your vehicle's memory so it can no longer be used to start the car, improving your security.",
      },
      {
        question: "Do you programme keys for luxury vehicles like BMW or Mercedes?",
        answer:
          "Yes. We carry advanced equipment for premium manufacturers including BMW, Mercedes-Benz, Audi, Porsche, Land Rover, and Jaguar.",
      },
    ],
    metaTitle: "Car Key Programming Manchester | Key 2 BHP Auto Locksmith",
    metaDescription:
      "Professional car key programming in Manchester. Transponder, remote & smart keys coded on-site. All makes & models. 24/7 mobile. Call 0161 884 0755.",
    h1: "Car Key Programming in Manchester",
    relatedServices: ["car-key-replacement", "smart-key-replacement", "key-fob-repair"],
    keywords: ["car key programming Manchester", "transponder key programming Manchester", "key coding Manchester"],
  },
  {
    slug: "smart-key-replacement",
    name: "Smart Key Replacement",
    shortName: "Smart Key",
    icon: "📱",
    tagline: "Proximity & push-start smart key replacement — all brands",
    shortDescription:
      "Smart key or keyless entry fob lost or damaged? We supply and programme genuine-spec replacement smart keys across Manchester.",
    longDescription:
      "Smart keys and keyless entry systems are now standard on most new vehicles. When a smart key is lost or damaged, replacement used to mean an expensive dealer visit. Key 2 BHP offers a fully mobile smart key replacement service in Manchester that costs significantly less than the dealership — and comes to you. We supply and programme proximity keys, push-start keys, and keyless go fobs for all major manufacturers. Our technician uses specialist equipment to pair the new smart key to your vehicle's ECU, ensuring full functionality including remote locking, push-button start, and comfort access.",
    features: [
      "Push-button start key replacement",
      "Proximity / keyless entry keys",
      "Comfort access programming",
      "Genuine-spec key blanks",
      "Fraction of dealer cost",
      "Fully mobile — we come to you",
      "All premium & standard brands",
      "Same-day service available",
    ],
    process: [
      {
        step: "01",
        title: "Get a Quote",
        description:
          "Share your vehicle details for an instant quote. Smart key prices vary by brand but we're always cheaper than the dealer.",
      },
      {
        step: "02",
        title: "We Source & Arrive",
        description:
          "We source the correct key blank and bring all programming equipment to your location.",
      },
      {
        step: "03",
        title: "Smart Key Paired",
        description:
          "We programme and sync the key to your vehicle, testing all functions — remote lock/unlock, push-start, and proximity detection.",
      },
    ],
    faqs: [
      {
        question: "How much does a smart key replacement cost?",
        answer:
          "Smart key replacements typically cost £150–£350 depending on the make and model — significantly less than a main dealer. Contact us for an exact quote for your vehicle.",
      },
      {
        question: "Can you replace a smart key without the original?",
        answer:
          "Yes. We can programme a new smart key even if you have no working keys remaining, though this may require additional security verification steps.",
      },
      {
        question: "Do smart keys need batteries?",
        answer:
          "Yes, most smart keys use a CR2032 or similar coin cell battery. If your smart key is not responding but appears undamaged, a battery replacement may solve the issue — a much cheaper fix.",
      },
    ],
    metaTitle: "Smart Key Replacement Manchester | Key 2 BHP Auto Locksmith",
    metaDescription:
      "Lost smart key or keyless fob? Key 2 BHP supplies & programmes smart keys in Manchester. All brands, fraction of dealer cost. Call 0161 884 0755.",
    h1: "Smart Key Replacement in Manchester",
    relatedServices: ["car-key-replacement", "key-programming", "key-fob-repair"],
    keywords: ["smart key replacement Manchester", "keyless entry key Manchester", "push start key Manchester"],
  },
  {
    slug: "key-fob-repair",
    name: "Key Fob Repair",
    shortName: "Fob Repair",
    icon: "🔧",
    tagline: "Broken or damaged key fob repaired fast — no need for full replacement",
    shortDescription:
      "Cracked casing, worn buttons, or faulty remote? We repair key fobs across Manchester — often faster and cheaper than replacement.",
    longDescription:
      "Key fobs take a lot of punishment — dropped on hard floors, sat on, exposed to moisture. Key 2 BHP offers a professional key fob repair service across Manchester. We diagnose and fix broken casings, worn or unresponsive buttons, damaged circuit boards, and faulty transponder chips. In many cases we can repair your existing fob rather than replacing it, saving you significant cost. We carry replacement fob shells, buttons, and components for most common vehicles. If repair isn't viable, we can also supply and programme a full replacement fob on the same visit.",
    features: [
      "Broken casing replacement",
      "Worn button repair",
      "Circuit board diagnostics",
      "Transponder chip repair",
      "Battery housing repair",
      "Remote signal testing",
      "Often cheaper than replacement",
      "Covers all major brands",
    ],
    process: [
      {
        step: "01",
        title: "Describe the Problem",
        description:
          "Tell us what's wrong — broken case, stuck button, no signal. We'll advise on repair vs replacement before you commit.",
      },
      {
        step: "02",
        title: "On-Site Diagnosis",
        description:
          "Our technician examines the fob, tests the circuit and chip, and identifies the exact fault.",
      },
      {
        step: "03",
        title: "Repaired & Tested",
        description:
          "We repair or replace the faulty component, reprogram if needed, and test all functions before leaving.",
      },
    ],
    faqs: [
      {
        question: "Can you fix a key fob that gets wet?",
        answer:
          "In some cases yes — if the damage is not too severe. We clean and dry the circuit board and test functionality. If the board is corroded beyond repair, we can supply a replacement fob.",
      },
      {
        question: "My buttons are working but the signal is weak — can you fix that?",
        answer:
          "Weak signal is often caused by a failing battery, damaged antenna coil, or worn circuit board. We diagnose and fix the root cause.",
      },
      {
        question: "Will repairing the fob affect my car's programming?",
        answer:
          "Simple case or button repairs don't affect programming. If we need to replace the circuit board or chip, we may need to re-programme the fob to your vehicle — which we can do in the same visit.",
      },
    ],
    metaTitle: "Key Fob Repair Manchester | Key 2 BHP Auto Locksmith",
    metaDescription:
      "Broken or faulty key fob? Key 2 BHP repairs car key fobs across Manchester — cracked cases, worn buttons, faulty remotes. Call 0161 884 0755.",
    h1: "Car Key Fob Repair in Manchester",
    relatedServices: ["car-key-battery-replacement", "key-programming", "smart-key-replacement"],
    keywords: ["key fob repair Manchester", "broken key fob Manchester", "car remote repair Manchester"],
  },
  {
    slug: "car-key-battery-replacement",
    name: "Car Key Battery Replacement",
    shortName: "Key Battery",
    icon: "🔋",
    tagline: "Quick car key battery swap — get your remote working again today",
    shortDescription:
      "Car key or fob not responding? A flat battery is the most common cause. We replace key batteries for all car types across Manchester.",
    longDescription:
      "A flat car key battery is one of the most common and easily fixed automotive problems. If your remote central locking has stopped working, your key fob is unresponsive, or your car is showing a 'key battery low' warning, Key 2 BHP can replace the battery on-site across Manchester. We carry all common key battery sizes including CR2032, CR2025, CR2016, and specialist batteries for premium vehicles. We also test the key's signal and programming after replacement to ensure everything is functioning correctly. If battery replacement doesn't resolve the issue, we can diagnose and fix the underlying fault in the same visit.",
    features: [
      "All battery types stocked",
      "Remote signal testing included",
      "Key function verification",
      "Quick 5–10 minute service",
      "All car key types covered",
      "Premium brand batteries used",
      "Fault diagnosis if battery not the issue",
      "Affordable fixed price",
    ],
    process: [
      {
        step: "01",
        title: "Contact Us",
        description:
          "Let us know your vehicle and key type. We'll confirm we have the right battery and arrange a visit.",
      },
      {
        step: "02",
        title: "Battery Replaced",
        description:
          "We open the fob, replace the battery with a premium replacement, and reseal the casing correctly.",
      },
      {
        step: "03",
        title: "Tested & Working",
        description:
          "We test the remote signal, lock/unlock function, and all buttons to confirm the issue is resolved.",
      },
    ],
    faqs: [
      {
        question: "How do I know if my car key needs a new battery?",
        answer:
          "Signs include: reduced remote range, needing multiple button presses, a warning on your dashboard, or the remote not responding at all. A flat battery is the most common cause.",
      },
      {
        question: "Can I drive without a working key fob battery?",
        answer:
          "Yes — most cars with electronic key fobs have a physical key backup inside the fob for the door, and can often be started by holding the fob to the start button. However, it's best to replace the battery promptly.",
      },
      {
        question: "How long do car key batteries last?",
        answer:
          "Typically 1–3 years depending on usage. Premium batteries last longer. If you're replacing more frequently, there may be an underlying fault we can investigate.",
      },
    ],
    metaTitle: "Car Key Battery Replacement Manchester | Key 2 BHP",
    metaDescription:
      "Car key or fob not working? Key 2 BHP replaces car key batteries across Manchester. Quick, affordable, all makes & models. Call 0161 884 0755.",
    h1: "Car Key Battery Replacement in Manchester",
    relatedServices: ["key-fob-repair", "car-key-replacement", "smart-key-replacement"],
    keywords: ["car key battery replacement Manchester", "key fob battery Manchester", "replace car key battery Manchester"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return services.filter((s) => slugs.includes(s.slug));
}
