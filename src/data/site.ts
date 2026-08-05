/**
 * Central, editable site content for Irqsa Edge.
 * Update copy, services, pricing, portfolio and contact details here —
 * every page reads from this single source.
 */

import workBusiness from "@/assets/work-business.jpg";
import workShopify from "@/assets/work-shopify.jpg";
import workRestaurant from "@/assets/work-restaurant.jpg";
import workDashboard from "@/assets/work-dashboard.jpg";
import workAi from "@/assets/work-ai.jpg";
import workBrand from "@/assets/work-brand.jpg";
import workMobile from "@/assets/work-mobile.jpg";
import workLanding from "@/assets/work-landing.jpg";

export const company = {
  name: "Irqsa Edge",
  domain: "irqsaedge.pro",
  url: "https://irqsaedge.pro",
  tagline: "Building the Future, One Solution at a Time.",
  email: "hello@irqsaedge.pro",
  phone: "+1 (000) 000-0000",
  whatsapp: "10000000000",
  whatsappMessage: "Hi Irqsa Edge, I'd like to start a project.",
  address: "Suite 100, Business District, Your City, Country",
  hours: "Mon – Sat · 09:00 – 19:00 (GMT+5)",
  social: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Dribbble", href: "https://dribbble.com" },
    { label: "X", href: "https://x.com" },
  ],
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Pricing", to: "/pricing" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

export const stats = [
  { value: 320, suffix: "+", label: "Projects delivered" },
  { value: 18, suffix: "", label: "Countries served" },
  { value: 96, suffix: "%", label: "Client retention" },
  { value: 9, suffix: " yrs", label: "Combined experience" },
];

export const values = [
  {
    title: "Innovation",
    body: "We pair proven engineering with emerging AI to build things that feel a step ahead.",
  },
  {
    title: "Quality",
    body: "Pixel-accurate interfaces, reviewed code, and design systems built to last.",
  },
  {
    title: "Performance",
    body: "Core Web Vitals treated as a feature, not an afterthought.",
  },
  {
    title: "Security",
    body: "Hardened auth, safe data handling, and dependable release practices.",
  },
  {
    title: "Scalability",
    body: "Architecture that grows from first launch to serious traffic.",
  },
  {
    title: "Customer satisfaction",
    body: "Clear communication, honest timelines, and long-term partnership.",
  },
];

export type ServiceGroup = {
  slug: string;
  title: string;
  summary: string;
  icon: string;
  items: string[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    slug: "website-development",
    title: "Website Development",
    summary:
      "Marketing sites, portals and dashboards engineered for speed, SEO and conversion.",
    icon: "Globe",
    items: [
      "Business Website",
      "Company Website",
      "Portfolio Website",
      "Landing Page",
      "Blog Website",
      "School Website",
      "College Website",
      "Hospital Website",
      "Restaurant Website",
      "Hotel Website",
      "Real Estate Website",
      "Travel Website",
      "Booking Website",
      "NGO Website",
      "Custom Website",
      "Dashboard",
      "Web Portal",
      "AI Website",
    ],
  },
  {
    slug: "ecommerce",
    title: "E-Commerce",
    summary: "Storefronts that merchandise beautifully and convert on every device.",
    icon: "ShoppingBag",
    items: [
      "Shopify Store",
      "WooCommerce",
      "Online Store",
      "Dropshipping",
      "Marketplace",
      "Amazon Store",
      "Daraz Store",
    ],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    summary: "Brand-consistent creative for every channel, delivered production-ready.",
    icon: "Palette",
    items: [
      "Logo Design",
      "Brand Identity",
      "Business Card",
      "Social Media Posts",
      "Facebook Ads",
      "Instagram Posts",
      "YouTube Thumbnail",
      "YouTube Banner",
      "Flyer",
      "Brochure",
      "Poster",
      "CV",
      "Resume",
      "Packaging",
      "Presentation",
      "Certificates",
      "Mockups",
      "Menu Design",
    ],
  },
  {
    slug: "ui-ux",
    title: "UI / UX Design",
    summary: "Research-led product design, from wireframe to polished design system.",
    icon: "Figma",
    items: [
      "Website UI",
      "Dashboard UI",
      "Mobile App UI",
      "Wireframes",
      "Prototype",
      "Landing Page UI",
    ],
  },
  {
    slug: "ai-services",
    title: "AI Services",
    summary: "Assistants, agents and automations wired into your real business workflows.",
    icon: "Sparkles",
    items: [
      "AI Chatbots",
      "AI Agents",
      "AI Automation",
      "OpenAI Integration",
      "Gemini Integration",
      "Workflow Automation",
      "Business AI Solutions",
    ],
  },
  {
    slug: "software-development",
    title: "Software Development",
    summary: "Internal tools and platforms that replace spreadsheets and manual work.",
    icon: "Code2",
    items: [
      "CRM",
      "ERP",
      "SaaS",
      "Custom Software",
      "Client Portal",
      "Admin Panel",
      "API Development",
      "Database Systems",
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    summary: "Demand generation built on measurement, not guesswork.",
    icon: "TrendingUp",
    items: [
      "SEO",
      "Google Ads",
      "Facebook Ads",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
    ],
  },
  {
    slug: "care-and-support",
    title: "Other Services",
    summary: "Everything that keeps your digital presence fast, safe and online.",
    icon: "LifeBuoy",
    items: [
      "Domain Registration",
      "Hosting",
      "SSL",
      "Maintenance",
      "Website Speed Optimization",
      "Website Redesign",
      "Bug Fixing",
      "Technical Support",
    ],
  },
];

export const whyChooseUs = [
  { title: "Professional Team", body: "Senior designers, engineers and strategists on every project." },
  { title: "Affordable Pricing", body: "Agency-grade output at rates that respect your budget." },
  { title: "Premium Quality", body: "Detail-obsessed craft in every screen we ship." },
  { title: "Fast Delivery", body: "Tight sprints with weekly, reviewable progress." },
  { title: "Modern Technologies", body: "A stack chosen for longevity and performance." },
  { title: "24/7 Support", body: "Reach a real human whenever something matters." },
  { title: "Secure Development", body: "Security reviews baked into the delivery process." },
  { title: "SEO Optimized", body: "Technical SEO and schema handled from day one." },
  { title: "Scalable Solutions", body: "Built to handle your next stage of growth." },
  { title: "Customer Satisfaction", body: "We iterate until you're genuinely proud of it." },
];

export const processSteps = [
  { step: "01", title: "Discovery", body: "Goals, audience, competitors and success metrics." },
  { step: "02", title: "Planning", body: "Scope, sitemap, timeline and technical approach." },
  { step: "03", title: "Design", body: "Brand-aligned UI concepts and a reusable design system." },
  { step: "04", title: "Development", body: "Clean, componentised builds with weekly previews." },
  { step: "05", title: "Testing", body: "Cross-device QA, accessibility and performance passes." },
  { step: "06", title: "Deployment", body: "Domains, SSL, analytics and a smooth go-live." },
  { step: "07", title: "Support", body: "Maintenance, monitoring and continuous improvement." },
];

export const technologies = [
  "WordPress",
  "Shopify",
  "React",
  "Next.js",
  "Node.js",
  "Laravel",
  "PHP",
  "Python",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "Firebase",
  "OpenAI",
  "Gemini",
];

export type Project = {
  title: string;
  category: string;
  blurb: string;
  image: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Northwind Consulting",
    category: "Business Website",
    blurb: "Corporate site refresh with a lead-first structure and CMS-driven case studies.",
    image: workBusiness,
    tags: ["Next.js", "CMS", "SEO"],
  },
  {
    title: "Atelier Nine",
    category: "Shopify Store",
    blurb: "Fashion storefront with custom product pages and a 2.4x conversion lift.",
    image: workShopify,
    tags: ["Shopify", "CRO", "Design"],
  },
  {
    title: "Saffron & Smoke",
    category: "Restaurant Website",
    blurb: "Reservation-driven site with digital menu and location-aware ordering.",
    image: workRestaurant,
    tags: ["WordPress", "Bookings"],
  },
  {
    title: "Pulse Analytics",
    category: "Dashboard",
    blurb: "Operations dashboard turning six spreadsheets into one live view.",
    image: workDashboard,
    tags: ["React", "Charts", "API"],
  },
  {
    title: "Helix AI",
    category: "AI Website",
    blurb: "AI assistant landing experience with an embedded product chatbot.",
    image: workAi,
    tags: ["OpenAI", "Automation"],
  },
  {
    title: "Form & Field",
    category: "Brand Identity",
    blurb: "Full identity system: logo, palette, type scale and collateral.",
    image: workBrand,
    tags: ["Branding", "Print"],
  },
  {
    title: "Ledgerly",
    category: "Mobile UI",
    blurb: "Fintech app design system across 40+ screens and two platforms.",
    image: workMobile,
    tags: ["UI/UX", "Prototype"],
  },
  {
    title: "Launchpad",
    category: "Landing Page",
    blurb: "High-intent SaaS landing page shipped in nine days.",
    image: workLanding,
    tags: ["Landing", "A/B Testing"],
  },
];

export const testimonials = [
  {
    quote:
      "They rebuilt our site in five weeks and inbound enquiries doubled the month after launch. The process felt genuinely senior.",
    name: "Amelia Hart",
    role: "Founder, Northwind Consulting",
  },
  {
    quote:
      "Our Shopify store finally looks like the brand we describe in pitches. Conversion is up and support tickets are down.",
    name: "Daniel Cruz",
    role: "Head of E-Commerce, Atelier Nine",
  },
  {
    quote:
      "The AI assistant they built handles about 60% of routine customer questions. Payback came in under two months.",
    name: "Priya Nandan",
    role: "COO, Helix AI",
  },
  {
    quote:
      "Design quality is the reason we chose them, but the engineering discipline is why we stayed on retainer.",
    name: "Marcus Lee",
    role: "CTO, Pulse Analytics",
  },
  {
    quote:
      "Clear timelines, weekly previews, zero surprises. Rare in this industry and worth every cent.",
    name: "Sofia Bianchi",
    role: "Marketing Director, Form & Field",
  },
  {
    quote:
      "They treated our small budget with the same care as an enterprise engagement. We've referred four clients since.",
    name: "Omar Farouk",
    role: "Owner, Saffron & Smoke",
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "$499",
    cadence: "per project",
    tagline: "For new businesses that need a credible presence fast.",
    features: [
      "Up to 5 custom pages",
      "Responsive design",
      "Basic on-page SEO",
      "Contact form integration",
      "1 round of revisions",
      "14 days post-launch support",
    ],
    cta: "Start with Starter",
    featured: false,
  },
  {
    name: "Growth",
    price: "$1,499",
    cadence: "per project",
    tagline: "Our most popular package for scaling companies.",
    features: [
      "Up to 15 pages or full store",
      "Custom UI/UX design system",
      "Shopify or WordPress build",
      "Advanced SEO + schema markup",
      "Speed & accessibility optimisation",
      "3 rounds of revisions",
      "60 days priority support",
    ],
    cta: "Choose Growth",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "scoped per engagement",
    tagline: "Custom software, AI systems and multi-team programmes.",
    features: [
      "Custom software, CRM or SaaS",
      "AI agents & workflow automation",
      "Dedicated project manager",
      "API & third-party integrations",
      "Security & performance audits",
      "Unlimited revisions in sprint scope",
      "Ongoing retainer & SLA",
    ],
    cta: "Book a consultation",
    featured: false,
  },
];

export const faqs = [
  {
    q: "How long does a website take?",
    a: "A focused landing page takes 5–9 days. A standard business website runs 2–4 weeks, and larger stores, portals or custom software typically take 5–10 weeks. You get a fixed timeline before we start.",
  },
  {
    q: "Do you create Shopify stores?",
    a: "Yes. We build and migrate Shopify stores end to end — theme customisation, custom sections, app integrations, payments, shipping and conversion optimisation.",
  },
  {
    q: "Can you redesign my website?",
    a: "Absolutely. We audit your current site, keep what performs, and rebuild the rest with modern design, faster load times and stronger SEO — with no loss of existing rankings.",
  },
  {
    q: "Do you create AI websites?",
    a: "We do. That includes AI chatbots trained on your content, AI agents for support and sales, OpenAI or Gemini integrations, and automations wired into the tools you already use.",
  },
  {
    q: "Do you provide hosting?",
    a: "Yes — domain registration, managed hosting, SSL, email setup and backups. You can also stay on your existing provider and we'll deploy there instead.",
  },
  {
    q: "Do you provide support?",
    a: "Every project includes post-launch support, and monthly maintenance plans cover updates, monitoring, security patches, backups and small content changes.",
  },
  {
    q: "Can I request custom features?",
    a: "Always. Booking systems, dashboards, portals, calculators, integrations and bespoke workflows are a core part of what we do — just describe the outcome you need.",
  },
];

export const industries = [
  "Startups",
  "SMEs",
  "Agencies",
  "E-Commerce",
  "Healthcare",
  "Education",
  "Real Estate",
  "Hospitality",
  "Travel",
  "Non-Profit",
];
