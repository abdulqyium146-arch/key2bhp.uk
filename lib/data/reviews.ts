export interface Review {
  author: string;
  rating: number;
  date: string;
  text: string;
  location: string;
  service: string;
}

export const reviews: Review[] = [
  {
    author: "James T.",
    rating: 5,
    date: "2024-11-14",
    text: "Absolute lifesaver! Locked my keys in the car late at night in Manchester city centre. Key 2 BHP arrived within 40 minutes, opened the car without any damage whatsoever. Professional, friendly, and surprisingly affordable. Can't thank them enough.",
    location: "Manchester",
    service: "Emergency Lockout",
  },
  {
    author: "Sarah K.",
    rating: 5,
    date: "2024-10-28",
    text: "Lost both sets of car keys for my BMW. Dreading a trip to the dealership, I found Key 2 BHP. They came to my home in Stockport, cut and programmed a new key on the spot for less than half what BMW quoted. Brilliant service.",
    location: "Stockport",
    service: "Car Key Replacement",
  },
  {
    author: "Mohammed A.",
    rating: 5,
    date: "2024-09-15",
    text: "Needed a spare key cut and programmed for my Ford Focus. Booked it for the next morning. The technician was punctual, professional, and done within an hour. Key works perfectly. Highly recommend.",
    location: "Denton",
    service: "Car Key Replacement",
  },
  {
    author: "Claire B.",
    rating: 5,
    date: "2024-08-30",
    text: "My key fob stopped working and I was worried about having to buy a whole new key. Called Key 2 BHP and they fixed the fob on-site — just needed a new internal battery and a small repair to the circuit. Sorted in 20 minutes for a fraction of the cost.",
    location: "Tameside",
    service: "Key Fob Repair",
  },
  {
    author: "David P.",
    rating: 5,
    date: "2024-12-02",
    text: "Smart key replacement for my Audi A4. The dealer wanted over £400 — Key 2 BHP did it for much less and came to me in Ashton. The new key works perfectly, all features including push-start and comfort access. Very impressed.",
    location: "Ashton-under-Lyne",
    service: "Smart Key Replacement",
  },
  {
    author: "Emma R.",
    rating: 5,
    date: "2024-07-19",
    text: "Got locked out in Hyde on a Sunday evening. Panicking a bit but Key 2 BHP answered immediately and were with me in just over half an hour. Friendly lad, opened the car cleanly, and even checked my spare key was working before he left. Five stars.",
    location: "Hyde",
    service: "Emergency Lockout",
  },
  {
    author: "Tariq M.",
    rating: 5,
    date: "2024-11-05",
    text: "Called at 11pm when I noticed my car key battery warning. They turned up quickly, replaced the battery, tested everything, and were done in under 10 minutes. What more can you ask for? Great service, fair price.",
    location: "Salford",
    service: "Car Key Battery Replacement",
  },
  {
    author: "Louise H.",
    rating: 5,
    date: "2024-06-11",
    text: "Needed key programming for a replacement key I'd bought online. Some locksmiths refused but Key 2 BHP were happy to help. Came to me in Stretford, programmed it to my VW Golf, works perfectly. Professional and knowledgeable.",
    location: "Stretford",
    service: "Key Programming",
  },
];
