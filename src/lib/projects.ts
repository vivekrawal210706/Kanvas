export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  tags: string[];
  year: string;
  location: string;
  heroColor: string;
  textColor: string;
  accentColor: string;
  overview: string;
  challenge: string;
  solution: string;
  outcome: string;
  services: string[];
  deliverables: string[];
  featured: boolean;
  cardDescription: string;
};

export const projects: Project[] = [
  {
    slug: "brewnest",
    name: "Brewnest",
    tagline: "Specialty coffee roastery redefining the Indian café experience",
    category: "Food & Beverage",
    tags: ["Brand Identity", "Packaging", "Website"],
    year: "2024",
    location: "Ahmedabad, GJ",
    heroColor: "#2C1A0E",
    textColor: "#F5EDE0",
    accentColor: "#C8783A",
    cardDescription:
      "Complete brand identity and packaging system for a specialty coffee roastery — from logo to bags to their direct-to-consumer website.",
    overview:
      "Brewnest was founded by two coffee enthusiasts who wanted to bring single-origin specialty coffee to Indian consumers who'd grown past the instant coffee era. They needed a brand that felt premium but warm — not intimidating like European roasteries, but not generic either.",
    challenge:
      "The specialty coffee market in India is growing fast but crowded at the premium end. Brewnest needed to carve out a distinct aesthetic — one that felt artisanal and handcrafted, while communicating rigorous quality and provenance sourcing from Ethiopia, Colombia, and Coorg.",
    solution:
      "We built Brewnest's identity around the concept of 'morning ritual' — the idea that great coffee is a moment, not just a product. The wordmark uses a custom-drawn letterform with a subtle nest motif. Kraft paper packaging with hand-illustrated origin maps gives each bag a collectible quality. The website is designed around discovery — letting customers explore by origin, roast level, and flavour notes.",
    outcome:
      "Brewnest launched with 3 SKUs and sold out their first batch within 11 days of going live. The packaging was featured on a packaging design blog with over 40,000 readers, driving a significant spike in direct website traffic.",
    services: ["Brand Strategy", "Visual Identity", "Packaging Design", "Website Development"],
    deliverables: [
      "Logo + wordmark system",
      "Full brand guidelines",
      "Coffee bag packaging (3 variants)",
      "Origin illustration series",
      "5-page direct-to-consumer website",
      "Social media launch kit (12 posts)",
    ],
    featured: true,
  },
  {
    slug: "veda-naturals",
    name: "Veda Naturals",
    tagline: "Ayurvedic skincare rooted in traditional Indian botanicals",
    category: "Beauty & Wellness",
    tags: ["Brand Identity", "Packaging", "Social Media"],
    year: "2024",
    location: "Jaipur, RJ",
    heroColor: "#2A3A2E",
    textColor: "#F0EDE6",
    accentColor: "#8FB896",
    cardDescription:
      "Minimal, botanical packaging identity for an Ayurvedic skincare brand — bridging ancient formulations with a modern, shelf-ready aesthetic.",
    overview:
      "Veda Naturals makes small-batch skincare using traditional Ayurvedic recipes handed down from the founder's grandmother. The founder, Priya Mehta, wanted to bring these formulations to a modern audience without losing their authenticity or heritage.",
    challenge:
      "The brand needed to appeal to two audiences simultaneously: wellness-conscious urban consumers who buy on Instagram, and traditional buyers who trust Ayurvedic credentials. Many brands in this space skew either too clinical or too 'old-fashioned'. Veda needed to feel both ancient and immediately desirable.",
    solution:
      "We developed a visual language rooted in botanical illustration — detailed line drawings of key ingredients (neem, saffron, ashwagandha) paired with a restrained, earthy palette. The packaging uses matte paper tubes and amber glass bottles, with foil accents for the premium range. Social media templates were designed for educational content — ingredient spotlights, ritual guides — that build trust alongside aesthetics.",
    outcome:
      "Veda Naturals secured a listing with a major D2C wellness platform within two months of launch. The Instagram account grew to 8,000 followers in the first quarter, primarily through organic sharing of the packaging and educational content.",
    services: ["Visual Identity", "Packaging Design", "Social Media Design"],
    deliverables: [
      "Logo + seal system",
      "Full brand guidelines",
      "Glass bottle + tube packaging (6 products)",
      "Botanical illustration set",
      "24 social media templates",
      "Instagram launch campaign (30 posts)",
    ],
    featured: true,
  },
  {
    slug: "earthen-table",
    name: "Earthen Table",
    tagline: "Farm-to-fork dining that celebrates regional Indian ingredients",
    category: "Food & Hospitality",
    tags: ["Brand Strategy", "Visual Identity", "Website"],
    year: "2023",
    location: "Ahmedabad, GJ",
    heroColor: "#3A2E1E",
    textColor: "#F5F0E8",
    accentColor: "#C4A46A",
    cardDescription:
      "Brand strategy and identity for a farm-to-fork restaurant group celebrating regional Indian cuisine and sustainable sourcing.",
    overview:
      "Earthen Table is a restaurant concept that sources ingredients directly from small farms across Gujarat and Rajasthan, working with over 30 farmer families. The founders, Amit and Ritu Sharma, wanted a brand that honoured both the food and the people behind it.",
    challenge:
      "Fine dining brands in India often reach for global reference points — European modernism, Japanese minimalism. The founders wanted something that felt unambiguously rooted in Indian culture without feeling rustic or provincial. The brand also needed to communicate the sustainability story clearly without becoming preachy.",
    solution:
      "We began with a 3-week brand strategy sprint — interviewing the founders, visiting the farms, and mapping the competitive landscape. The resulting identity uses earthy terracotta tones, hand-lettered Devanagari-inspired motifs, and an editorial layout system for menus and collateral. The website leads with the farmer stories, using documentary-style photography with minimal interface chrome.",
    outcome:
      "Earthen Table opened to a 6-week waiting list. The restaurant was reviewed in two national food publications within the first month. The brand identity was recognised as a finalist in a regional design award.",
    services: ["Brand Strategy", "Visual Identity", "Website Development"],
    deliverables: [
      "Brand strategy document",
      "Logo + identity system",
      "Menu design system",
      "Environmental signage guidelines",
      "Website (farmer stories, reservations, menu)",
      "Staff uniform design specs",
    ],
    featured: true,
  },
  {
    slug: "saltbox",
    name: "Saltbox",
    tagline: "Artisanal spice blends and condiments for the modern kitchen",
    category: "Food & Beverage",
    tags: ["Brand Identity", "Packaging", "Social Media"],
    year: "2023",
    location: "Mumbai, MH",
    heroColor: "#1A2A3A",
    textColor: "#F0EEE8",
    accentColor: "#E8A848",
    cardDescription:
      "Bold, typographic packaging identity for a spice blend startup targeting urban home cooks and gifting occasions.",
    overview:
      "Saltbox was started by chef-turned-entrepreneur Karan Bhatt, who spent 8 years in professional kitchens before deciding that great spice blends should be accessible to home cooks. The product range covers everyday cooking blends, regional speciality mixes, and curated gifting sets.",
    challenge:
      "The spice and condiment market is dominated either by traditional heritage brands (trustworthy but dull) or by hyper-trendy DTC brands chasing the same millennial aesthetic. Saltbox needed to feel fun and contemporary while also communicating genuine culinary credibility.",
    solution:
      "We led with typography — big, confident, slightly irreverent wordmarks on each product using a custom variable typeface. Each blend has its own colour-coded system (deep navy for everyday, terracotta for regional, gold for premium gifting). The glass jar + label system was designed for reuse, encouraging customers to refill rather than throw away. Social content is recipe-first — using Saltbox products as the star, not the subject.",
    outcome:
      "Saltbox launched on Instagram and saw 1,200 orders in the first 45 days, with a gifting set selling out in under a week during Diwali. Three premium grocery retailers reached out for wholesale partnerships following launch.",
    services: ["Visual Identity", "Packaging Design", "Social Media Design"],
    deliverables: [
      "Logo + lettering system",
      "Full brand guidelines",
      "Glass jar label design (8 variants)",
      "Gift box design",
      "Social media template library (20 templates)",
      "Launch campaign creative (Instagram + WhatsApp)",
    ],
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
