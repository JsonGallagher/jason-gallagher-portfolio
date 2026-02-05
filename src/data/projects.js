const projects = [
  {
    id: "ad-research-tool",
    title: "Ad Research Tool",
    tagline: "AI-powered competitive ad intelligence for marketing teams",
    category: "AI Automations",
    status: "Shipped",
    year: "2025",
    image: "/images/projects/ad-research-tool.png",
    problem:
      "Manually monitoring competitor ads across Meta is time-consuming and easy to miss shifts in creative strategy or spend patterns.",
    approach:
      "Built a scraping pipeline that pulls from Meta Ad Library, captures screenshots, and runs AI analysis to surface trends and flag new creatives automatically.",
    result:
      "Reduced competitive research time from hours to minutes. Gave the team a persistent view of competitor ad strategy without manual effort.",
    stack: ["JavaScript", "Node.js", "Puppeteer", "OpenAI API"],
    links: { github: "https://github.com/JsonGallagher/ad-research-tool" },
    featured: true,
  },
  {
    id: "market-data",
    title: "Market Data Dashboard",
    tagline: "Real estate market data explorer with interactive charts",
    category: "Data & Analytics",
    status: "Shipped",
    year: "2025",
    image: "/images/projects/market-data.png",
    problem:
      "Local real estate market data is scattered across MLS exports and government PDFs, making it hard to spot trends or compare neighborhoods quickly.",
    approach:
      "Created a Svelte-based dashboard backed by Supabase that ingests structured data and renders interactive charts for median prices, inventory, and days on market.",
    result:
      "Enabled real-time comparison across zip codes with a clean, responsive interface that loads in under a second.",
    stack: ["Svelte", "Supabase", "Chart.js", "Tailwind CSS"],
    links: { github: "https://github.com/JsonGallagher/market-data" },
    featured: true,
  },
  {
    id: "color-palette-generator",
    title: "AI Color Palette Generator",
    tagline: "Generate harmonious color palettes from natural language prompts",
    category: "AI Automations",
    status: "Shipped",
    year: "2024",
    image: "/images/projects/color-palette-generator.png",
    problem:
      "Designers and developers often struggle to pick cohesive color palettes that match a mood or brand direction without deep color theory knowledge.",
    approach:
      "Built a Flask app that takes a natural language prompt and uses OpenAI to generate a five-color palette with hex values, contrast ratios, and usage suggestions.",
    result:
      "Generates usable palettes in seconds. Popular with designers who need quick starting points for brand exploration.",
    stack: ["Python", "Flask", "OpenAI API", "CSS"],
    links: {
      github: "https://github.com/JsonGallagher/color_palette_generator",
    },
    featured: true,
  },
  {
    id: "808lab",
    title: "808Lab",
    tagline: "Retro 808 drum machine synth in the browser",
    category: "Creative Dev",
    status: "Shipped",
    year: "2024",
    image: "/images/projects/808lab.png",
    problem:
      "Classic drum machine emulators are either desktop-only or locked behind paywalls, making casual beat-making inaccessible.",
    approach:
      "Built a browser-based 808 drum machine using the Web Audio API with a step sequencer, tempo control, and per-channel volume mixing in a retro-styled UI.",
    result:
      "A fun, zero-install drum machine that runs entirely in the browser with low-latency audio playback.",
    stack: ["TypeScript", "React", "Web Audio API", "Tailwind CSS"],
    links: { github: "https://github.com/JsonGallagher/808lab" },
    featured: false,
  },
];

export default projects;
