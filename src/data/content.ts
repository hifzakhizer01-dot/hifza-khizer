// ─────────────────────────────────────────────────────────────
// SITE CONTENT — this file is the single source of truth.
// Edit the values below to update the live site — no other
// file needs to change. The /admin page generates a ready-to
// -paste block for the `projects` array at the bottom.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Hifza Khizer",
  heroImage: "/images/profile.jpeg",
  tagline: "Digital Marketing Student — Turning Curiosity into Campaigns",
  location: "Pakistan",
  status: "Open to internships & entry-level marketing roles",
  education: "BS Business Data Analytics, Marketing Major",
  email: "hifzakhizer01@gmail.com",
  phone: "0312 5687924",
  phoneHref: "tel:+923125687924",
  linkedin: "https://www.linkedin.com/in/hifza-khizer-683294322/",
  bio: [
    "I'm a Business Data Analytics student with a marketing major the kind of mix that makes me equally happy in a spreadsheet and in a caption box.",
    "It started with Tohfa Tales PK, a small gift-basket business I ran on Instagram. I opened the account to sell baskets and ended up falling for the content side of it planning posts, watching what worked, chasing the numbers.",
    "That pulled me into an internship at Visiontact, where I managed social media for their product VoiceTact and learned how B2B posting actually works: fewer trends, more trust.",
    "Next, I'm chasing performance marketing, SEO and content creation the parts of the funnel where the data and the creative have to agree with each other.",
  ],
};

export const tools = [
  { name: "Meta Business Suite", category: "Publishing & Ads" },
  { name: "Canva", category: "Design" },
  { name: "Google Sheets", category: "Analytics" },
  { name: "Google Flow", category: "AI Workflow" },
  { name: "ChatGPT", category: "AI Workflow" },
  { name: "Claude", category: "AI Workflow" },
];

export const focusAreas = [
  "Social Media Management",
  "B2B Content Posting",
  "Performance Marketing",
  "SEO",
  "Content Creation",
  "Data-Backed Campaigns",
];

// Chronological — order carries real meaning here, so numbered
// stages are justified (unlike decorative 01/02/03 elsewhere).
export const timeline = [
  {
    stage: "Stage 1",
    when: "The start",
    title: "Founder, Tohfa Tales PK",
    place: "Instagram — self-run",
    description:
      "Opened an Instagram page to sell gift baskets, then discovered I liked building the content calendar more than packing the baskets. First taste of planning posts around what an audience actually responds to.",
    tag: "Business",
  },
  {
    stage: "Stage 2",
    when: "Internship",
    title: "Marketing Intern",
    place: "Visiontact — VoiceTact",
    description:
      "Managed social media for VoiceTact, Visiontact's product account. Learned B2B posting specifically a different rhythm from consumer content, built on consistency and credibility over virality.",
    tag: "B2B Social",
  },
  {
    stage: "Stage 3",
    when: "Now",
    title: "Exploring Performance Marketing",
    place: "Self-directed learning",
    description:
      "Currently going deeper into performance marketing, SEO and content creation connecting the campaign-brief thinking from my degree to hands-on, data-backed execution.",
    tag: "In progress",
  },
];

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  details: string[];
  tags: string[];
  link?: string;
  linkLabel?: string;
  accent: "orange" | "teal-dark" | "teal";
  images: string[];
  featured?: boolean;
};

// ─────────────────────────────────────────────────────────────
// PROJECTS — the /admin page generates new entries in exactly
// this shape. Paste new objects into this array.
// ─────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    slug: "voicetact",
    title: "VoiceTact — B2B Social Media",
    client: "Visiontact",
    category: "Social Media Management",
    summary:
      "Ran the day-to-day social presence for VoiceTact, Visiontact's product account, during a marketing internship.",
    details: [
      "Published content for VoiceTact's B2B audience, focusing on consistency and trust over trends..",
      "Used Meta Business Suite to plan and manage a content calendar, scheduling posts ahead of time.",
      "Used AI tools to help draft and refine post elements, speeding up content creation while keeping the messaging on-brand.",
    ],
    tags: ["B2B", "Social Media", "Meta Business Suite"],
    link: "https://www.instagram.com/voicetact/",
    linkLabel: "View @voicetact",
    accent: "teal",
    images: [
      "/images/voicetact1.png",
      "/images/voicetact2.png",
      "/images/voicetact3.png",
      "/images/voicetact4.png",
    ],
    featured: true,
  },
  {
    slug: "tohfa-tales-pk",
    title: "Tohfa Tales PK",
    client: "Own business",
    category: "Founder · Content & Commerce",
    summary:
      "A gift-basket business built and run on Instagram — the project that turned into a marketing habit.",
    details: [
      "Founded and ran the Instagram page end to end: product photos, captions, posting schedule, and customer messages.",
      "Used the page as a live testing ground for what content actually drives interest and orders.",
      "This is the project that made me want to study marketing on purpose, not just do it by instinct.",
    ],
    tags: ["Instagram", "Founder", "Content"],
    accent: "orange",
    images: [
      "/images/work/tohfatales-1.jpg",
      "/images/work/tohfatales-2.jpg",
    ],
    featured: true,
  },
];
