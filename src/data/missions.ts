export interface Mission {
  id: string;
  name: string;
  year: number;
  yearLabel: string;
  tagline: string;
  description: string;
  facts: string[];
  image: string;
  status: "past" | "future";
}

export const missions: Mission[] = [
  {
    id: "viking-1",
    name: "Viking 1",
    year: 1976,
    yearLabel: "1976",
    tagline: "First successful Mars landing",
    description:
      "Viking 1 became the first spacecraft to successfully land on Mars and return images from the surface. It operated on the Martian surface for over six years, conducting biology experiments designed to detect life and studying the composition of the atmosphere and soil.",
    facts: [
      "Landed in Chryse Planitia on July 20, 1976",
      "Operated for 2,307 days on the surface",
      "Returned over 57,000 images",
      "Conducted the first soil analysis on Mars",
    ],
    image: "/images/viking1.webp",
    status: "past",
  },
  {
    id: "viking-2",
    name: "Viking 2",
    year: 1976,
    yearLabel: "1976",
    tagline: "Exploring Utopia Planitia",
    description:
      "Viking 2 landed on the opposite side of Mars from its twin, at Utopia Planitia. Together, the Viking landers provided humanity's first extended look at the Martian surface, analyzing soil samples and monitoring weather patterns for years.",
    facts: [
      "Landed at Utopia Planitia on September 3, 1976",
      "Operated for 1,281 days on the surface",
      "Detected water frost on the Martian surface",
      "Measured wind speeds up to 120 km/h during dust storms",
    ],
    image: "/images/viking2.webp",
    status: "past",
  },
  {
    id: "pathfinder",
    name: "Pathfinder & Sojourner",
    year: 1997,
    yearLabel: "1997",
    tagline: "The first rover on Mars",
    description:
      "Mars Pathfinder and its tiny rover Sojourner proved that low-cost Mars missions were feasible. Sojourner, weighing just 11.5 kg, became the first wheeled vehicle on another planet, analyzing nearby rocks and demonstrating technologies for future rovers.",
    facts: [
      "Landed using revolutionary airbag bouncing system",
      "Sojourner was only 65 cm long — the size of a microwave",
      "Returned 2.3 billion bits of data including 16,500 images",
      "Operated for 83 days, 12x its design lifetime",
    ],
    image: "/images/pathfinder.webp",
    status: "past",
  },
  {
    id: "spirit",
    name: "Spirit",
    year: 2004,
    yearLabel: "2004",
    tagline: "The rover that wouldn't quit",
    description:
      "Spirit landed in Gusev Crater and was designed for a 90-day mission. Instead, it explored Mars for over six years, climbing hills, surviving dust storms, and discovering evidence that water once flowed on the Martian surface.",
    facts: [
      "Drove 7.73 km across the Martian surface",
      "Discovered silica deposits suggesting past hot springs",
      "Survived by driving backwards after a wheel failure",
      "Last communication received on March 22, 2010",
    ],
    image: "/images/spirit.webp",
    status: "past",
  },
  {
    id: "opportunity",
    name: "Opportunity",
    year: 2004,
    yearLabel: "2004",
    tagline: "Marathon runner of Mars",
    description:
      "Opportunity holds the off-Earth driving record, traversing over 45 km during its 15-year mission. Landing on the opposite side of Mars from Spirit, it found definitive proof that liquid water once existed on the Martian surface.",
    facts: [
      "Drove 45.16 km — a marathon and then some",
      "Operated for 5,352 sols (14 years, 136 days)",
      "Found hematite 'blueberries' proving ancient water",
      "Silenced by a planet-wide dust storm in June 2018",
    ],
    image: "/images/opportunity.webp",
    status: "past",
  },
  {
    id: "phoenix",
    name: "Phoenix",
    year: 2008,
    yearLabel: "2008",
    tagline: "Touching Martian ice",
    description:
      "Phoenix landed in the Martian arctic to study the history of water and search for habitable conditions. It was the first mission to directly sample water ice on Mars, confirming what orbiters had long suspected about the planet's polar regions.",
    facts: [
      "First spacecraft to land in Mars' polar region",
      "Confirmed the presence of water ice just below the surface",
      "Detected perchlorate salts in Martian soil",
      "Observed snow falling from Martian clouds",
    ],
    image: "/images/phoenix.webp",
    status: "past",
  },
  {
    id: "curiosity",
    name: "Curiosity",
    year: 2012,
    yearLabel: "2012",
    tagline: "A mobile chemistry lab",
    description:
      "Curiosity is the largest and most capable rover ever sent to Mars. Powered by a nuclear battery, it has been exploring Gale Crater for over a decade, climbing Mount Sharp and analyzing rock layers that tell the story of Mars' wet past.",
    facts: [
      "Weighs 899 kg — the size of a small car",
      "Powered by a plutonium-238 radioisotope generator",
      "Found organic molecules and seasonal methane variations",
      "Still operating after 12+ years on Mars",
    ],
    image: "/images/curiosity.webp",
    status: "past",
  },
  {
    id: "insight",
    name: "InSight",
    year: 2018,
    yearLabel: "2018",
    tagline: "Listening to the heartbeat of Mars",
    description:
      "InSight was the first mission dedicated to studying the deep interior of Mars. Its seismometer detected over 1,300 marsquakes, revealing that Mars has a liquid iron core and a surprisingly thin crust, reshaping our understanding of rocky planet formation.",
    facts: [
      "Detected the first confirmed marsquake on April 6, 2019",
      "Revealed Mars has a liquid iron-nickel core",
      "Recorded over 1,300 seismic events",
      "Mission ended December 2022 due to dust on solar panels",
    ],
    image: "/images/insight.webp",
    status: "past",
  },
  {
    id: "perseverance",
    name: "Perseverance & Ingenuity",
    year: 2021,
    yearLabel: "2021",
    tagline: "Seeking signs of ancient life",
    description:
      "Perseverance is actively searching for biosignatures in Jezero Crater, an ancient lake bed. It brought Ingenuity, the first aircraft to achieve powered flight on another planet, opening an entirely new dimension for planetary exploration.",
    facts: [
      "Ingenuity completed 72 flights — first powered flight on another world",
      "Producing oxygen from CO₂ with the MOXIE experiment",
      "Collecting sealed rock samples for future Earth return",
      "Carries a piece of Martian meteorite back to Mars",
    ],
    image: "/images/perseverance.webp",
    status: "past",
  },
  {
    id: "escapade",
    name: "ESCAPADE",
    year: 2025,
    yearLabel: "2025",
    tagline: "Twin satellites studying Mars' magnetosphere",
    description:
      "ESCAPADE (Escape and Plasma Acceleration and Dynamics Explorers) will send twin spacecraft to orbit Mars and study how the solar wind strips away the planet's atmosphere. Understanding this process is key to knowing why Mars lost its water.",
    facts: [
      "Two identical spacecraft working in tandem",
      "Will study how solar wind interacts with Mars",
      "Part of NASA's Small Innovative Missions program",
      "Launched aboard the first New Glenn rocket in 2024",
    ],
    image: "/images/escapade.webp",
    status: "future",
  },
  {
    id: "starship",
    name: "SpaceX Starship",
    year: 2026,
    yearLabel: "2026+",
    tagline: "The ship designed for Mars",
    description:
      "SpaceX's fully reusable Starship is being designed as the vehicle that could carry humans to Mars. With a capacity of 100+ tonnes to the Martian surface, it represents the most ambitious interplanetary transport system ever conceived.",
    facts: [
      "Stands 121 meters tall — the largest rocket ever built",
      "Designed to carry 100+ tonnes to Mars",
      "Fully reusable to dramatically lower launch costs",
      "Orbital refueling enables deep-space missions",
    ],
    image: "/images/starship.webp",
    status: "future",
  },
  {
    id: "exomars",
    name: "ESA ExoMars Rosalind Franklin",
    year: 2028,
    yearLabel: "2028",
    tagline: "Europe's life-hunting rover",
    description:
      "The Rosalind Franklin rover will carry a drill capable of reaching 2 meters below the Martian surface — deep enough to find organic molecules shielded from harsh radiation. It represents Europe's most ambitious Mars mission to date.",
    facts: [
      "Equipped with a 2-meter subsurface drill",
      "Named after the chemist who helped decode DNA",
      "Will search for biomolecules protected from radiation",
      "Landing site: Oxia Planum, rich in ancient clay minerals",
    ],
    image: "/images/exomars.webp",
    status: "future",
  },
  {
    id: "human-mars",
    name: "Human Mars Missions",
    year: 2035,
    yearLabel: "2030s–2040s",
    tagline: "Humanity's next giant leap",
    description:
      "Multiple space agencies and private companies are working toward landing humans on Mars within the next two decades. A crewed mission would represent the furthest humans have ever traveled — a 6-month journey to a world 225 million km away.",
    facts: [
      "Journey time: approximately 6–9 months each way",
      "NASA's Moon-to-Mars program targets the 2030s–2040s",
      "Crew would need to produce water, oxygen, and fuel on Mars",
      "Radiation shielding remains one of the biggest challenges",
    ],
    image: "/images/human-mars.webp",
    status: "future",
  },
];
