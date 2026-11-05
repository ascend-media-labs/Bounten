/**
 * BOUNTEN Water Softeners & Descalers Product Catalogue
 * Strictly organized into TWO categories:
 * 1. Zoftner Pro (All models come with a bag filter)
 * 2. Zoftner Quick Fix (All models come without a bag filter)
 * 
 * Standards & Certifications: ISO 9001, ISO 14001, Food Grade SS304
 * Warranty: 1-Year Unconditional on Cabinet & Electricals, 5-Year Unconditional on Electrode
 * Water Quality TDS: Up to 1,999 ppm (Above 2,000 ppm backwash recommended)
 */

export const CATEGORIES = [
  "All Products",
  "Zoftner Pro",
  "Zoftner Quick Fix"
];

export const PRODUCT_HIGHLIGHTS = {
  headline: "One Smart Solution. Multiple Applications. Better Water for Everyday Living.",
  technology: "Advanced Electrolysis Technology for Healthy, Soft & Scale-Free Living.",
  highlights: ["Resin-Free", "Salt-Free", "Chemical-Free"],
  certifications: ["ISO 9001", "ISO 14001"],
  material: "Food grade material: SS304",
  waterQuality: {
    maxTds: "Works with input water TDS up to 1,999 ppm.",
    highTdsNote: "For TDS above 2,000 ppm, backwashing is recommended."
  },
  warranty: {
    cabinet: "1-Year Unconditional Warranty on the cabinet body and electrical components.",
    electrode: "5-Year Unconditional Warranty on the electrode."
  },
  categoriesInfo: [
    {
      id: "zoftner-pro",
      name: "Zoftner Pro",
      tagline: "All models come with a bag filter",
      bagFilter: true,
      description: "Premium heavy-duty electrolysis water softeners equipped with integrated high-efficiency bag filtration to remove suspended solids, silt, and turbidity alongside molecular descaling."
    },
    {
      id: "zoftner-quick-fix",
      name: "Zoftner Quick Fix",
      tagline: "All models come without a bag filter",
      bagFilter: false,
      description: "Streamlined inline electrolytic descaling and water softening systems engineered for direct plumbing connection without a pre-filter bag assembly."
    }
  ],
  applications: {
    title: "Water Softener - Applications & Uses",
    subtitle: "Ideal for Homes, Apartments, Villas and Commercial Spaces.",
    residential: {
      title: "1. Residential Applications",
      items: [
        "Independent homes and villas",
        "Apartments and gated communities",
        "Residential complexes",
        "Individual and centralised water systems"
      ]
    },
    commercial: {
      title: "2. Commercial Applications",
      items: [
        "Hotels and resorts",
        "Restaurants and cafés",
        "Hospitals and clinics",
        "Gyms and wellness centres",
        "Offices and commercial buildings",
        "Guest houses and serviced apartments"
      ]
    },
    everyday: {
      title: "3. Everyday Applications",
      items: [
        { name: "Bathing & Showers", description: "Softer water for everyday bathing." },
        { name: "Laundry", description: "Helps reduce mineral deposits on fabrics." },
        { name: "Geysers & Water Heaters", description: "Helps prevent scale build-up." },
        { name: "Kitchen & Appliances", description: "Protects compatible appliances from hard-water scaling." },
        { name: "Plumbing & Pipelines", description: "Reduces mineral deposits." },
        { name: "Tiles & Bathroom Fixtures", description: "Helps minimise hard-water stains." }
      ]
    },
    keyBenefits: {
      title: "4. Key Benefits",
      items: [
        "Helps prevent scale build-up.",
        "Extends appliance lifespan.",
        "Reduces plumbing maintenance.",
        "Helps keep bathroom fixtures cleaner.",
        "Improves everyday bathing comfort.",
        "Supports long-term maintenance savings."
      ]
    }
  }
};

export const PRODUCTS_DATA = [
  // ==========================================
  // CATEGORY 1: ZOFTNER PRO (With Bag Filter)
  // ==========================================
  {
    id: "zoftner-pro-w1",
    aliases: ["zoftnor-pro-w1"],
    name: "Zoftner Pro W1",
    slug: "zoftner-pro-w1",
    category: "Zoftner Pro",
    hasBagFilter: true,
    filterNote: "Includes high-efficiency bag filter",
    price: 78000,
    originalPrice: 88000,
    rating: 4.9,
    reviewsCount: 46,
    popularity: 96,
    dateAdded: "2024-03-01",
    image: "/images/products/zoftnor-pro-w1.jpg",
    shortDescription: "Professional-grade 1,000 LPH electrolysis conditioning system with integrated Bag Filter for 1-2 BHK apartments and small villas.",
    description: "Zoftner Pro W1 is an advanced salt-free, resin-free, chemical-free whole-property water softener featuring an integrated high-efficiency bag filter. It combines pre-stage physical particulate removal with 18-level electrolysis technology, restructuring hard minerals into harmless Aragonite micro-crystals that will not adhere to pipes, geysers, or bathroom fixtures.",
    specifications: [
      { label: "Category", value: "Zoftner Pro (Includes Bag Filter)" },
      { label: "Bag Filter Included", value: "Yes — Industrial Washable Bag Filter Unit" },
      { label: "Flow Capacity", value: "1,000 LPH (Litres Per Hour)" },
      { label: "Technology", value: "Advanced Electrolysis (Resin-Free | Salt-Free | Chemical-Free)" },
      { label: "Water TDS Compatibility", value: "Works up to 1,999 ppm (Backwash recommended above 2,000 ppm)" },
      { label: "Cabinet & Electrical Warranty", value: "1-Year Unconditional Warranty" },
      { label: "Electrode Warranty", value: "5-Year Unconditional Warranty" },
      { label: "Certifications", value: "ISO 9001, ISO 14001" },
      { label: "Reactor Material", value: "Food Grade SS304 with Multi-stage MMO & Iridium Mesh" },
      { label: "Recommended Property", value: "1-2 BHK Apartments / Independent Small Villas" },
      { label: "Pipe Connection Size", value: "1 inch" },
      { label: "Power Rating", value: "400 W (Input 220V AC / Output 8-12V DC)" },
      { label: "Automation Grade", value: "Automatic ON/OFF with flow detection & digital timer" },
      { label: "Design Lifespan", value: "15-18 Years Design Life" }
    ],
    features: [
      "Comes complete with an industrial bag filter for dual sediment and scaling protection",
      "Resin-Free, Salt-Free & Chemical-Free advanced electrolysis technology",
      "Works with input water TDS up to 1,999 ppm (backwash above 2,000 ppm)",
      "1-Year Unconditional Warranty on cabinet body & electrical components",
      "5-Year Unconditional Warranty on the core electrolytic electrode",
      "Certified to ISO 9001 and ISO 14001 international standards",
      "Constructed from Food-grade SS304 stainless steel",
      "Retains essential healthy calcium and magnesium minerals without adding sodium",
      "Zero water wastage — 100% conditioned water delivered to every tap",
      "Protects luxury bathroom fixtures, geysers, tiles, and concealed plumbing"
    ],
    applications: [
      "1-2 BHK Flats & Apartments",
      "Independent Villas & Duplexes",
      "Bathing, Showers & Laundry",
      "Geysers & Rooftop Solar Lines"
    ]
  },
  {
    id: "zoftner-pro-w2",
    aliases: ["zoftnor-pro-w2"],
    name: "Zoftner Pro W2",
    slug: "zoftner-pro-w2",
    category: "Zoftner Pro",
    hasBagFilter: true,
    filterNote: "Includes high-efficiency bag filter",
    price: 88000,
    originalPrice: 98000,
    rating: 5.0,
    reviewsCount: 52,
    popularity: 98,
    dateAdded: "2024-03-05",
    image: "/images/products/zoftnor-pro-w2.jpg",
    shortDescription: "High-capacity 2,000 LPH electrolysis conditioning system with Bag Filter for 2-3 BHK homes and independent duplexes.",
    description: "The Zoftner Pro W2 delivers 2,000 LPH continuous conditioned water with an extended 600mm Iridium MMO anode and a heavy-duty integrated bag filter. Engineered for high-flow multi-bathroom households, it stops scale build-up while removing rust, silt, and sediment without salt bags or water wastage.",
    specifications: [
      { label: "Category", value: "Zoftner Pro (Includes Bag Filter)" },
      { label: "Bag Filter Included", value: "Yes — Industrial Washable Bag Filter Unit" },
      { label: "Flow Capacity", value: "2,000 LPH (Litres Per Hour)" },
      { label: "Technology", value: "Advanced Electrolysis (Resin-Free | Salt-Free | Chemical-Free)" },
      { label: "Water TDS Compatibility", value: "Works up to 1,999 ppm (Backwash recommended above 2,000 ppm)" },
      { label: "Cabinet & Electrical Warranty", value: "1-Year Unconditional Warranty" },
      { label: "Electrode Warranty", value: "5-Year Unconditional Warranty" },
      { label: "Certifications", value: "ISO 9001, ISO 14001" },
      { label: "Reactor Material", value: "Food Grade SS304 Reactor with 36 × 600 mm Extended Anode" },
      { label: "Recommended Property", value: "2-3 BHK Homes / Duplex Residences" },
      { label: "Pipe Connection Size", value: "1 inch" },
      { label: "Power Rating", value: "400 W" },
      { label: "Automation Grade", value: "Smart Flow Detection & Digital Automation" },
      { label: "Design Lifespan", value: "15-18 Years Design Life" }
    ],
    features: [
      "All models come equipped with a high-capacity washable bag filter",
      "Resin-Free | Salt-Free | Chemical-Free operating architecture",
      "Advanced Electrolysis Technology for Healthy, Soft & Scale-Free Living",
      "Compatible with high TDS input water up to 1,999 ppm",
      "1-Year Unconditional Warranty on cabinet body and electrical parts",
      "5-Year Unconditional Warranty on the long-life titanium electrode",
      "ISO 9001 and ISO 14001 certified manufacturing quality",
      "Food grade SS304 stainless steel construction",
      "Cuts plumbing maintenance and extends appliance lifespan significantly",
      "Prevents chalky limescale on shower glass, chrome fittings, and tiles"
    ],
    applications: [
      "2-3 BHK Apartments & Flats",
      "Independent Villas & Duplexes",
      "Boutique Homestays & Guest Houses",
      "Solar Water Heating Batteries"
    ]
  },
  {
    id: "zoftner-pro-max-w1",
    aliases: ["zoftnor-max-easyfit-w1"],
    name: "Zoftner Pro Max W1",
    slug: "zoftner-pro-max-w1",
    category: "Zoftner Pro",
    hasBagFilter: true,
    filterNote: "Includes high-efficiency bag filter",
    price: 54087,
    originalPrice: 62000,
    rating: 4.9,
    reviewsCount: 64,
    popularity: 97,
    dateAdded: "2024-03-01",
    image: "/images/products/zoftnor-max-w1.jpg",
    shortDescription: "Compact whole-house 1,000 LPH electrolysis water softener bundled with bag filter for apartments and compact residences.",
    description: "Zoftner Pro Max W1 combines Bounten's signature electrolytic water treatment reactor with an integrated sediment bag filter. Designed for 1-2 BHK apartments and compact independent homes, it transforms scale-forming hardness into soft Aragonite crystals with zero salt refills, zero water wastage, and no chemical additives.",
    specifications: [
      { label: "Category", value: "Zoftner Pro (Includes Bag Filter)" },
      { label: "Bag Filter Included", value: "Yes — Complete Pre-Filtration Bag Unit" },
      { label: "Flow Capacity", value: "1,000 LPH (Litres Per Hour)" },
      { label: "Technology", value: "Advanced Electrolysis (Resin-Free | Salt-Free | Chemical-Free)" },
      { label: "Water TDS Compatibility", value: "Works up to 1,999 ppm (Backwash recommended above 2,000 ppm)" },
      { label: "Cabinet & Electrical Warranty", value: "1-Year Unconditional Warranty" },
      { label: "Electrode Warranty", value: "5-Year Unconditional Warranty" },
      { label: "Certifications", value: "ISO 9001, ISO 14001" },
      { label: "Reactor Material", value: "Food Grade SS304" },
      { label: "Recommended Property", value: "1-2 BHK Apartments / Individual Water Lines" },
      { label: "Pipe Connection Size", value: "1 inch" },
      { label: "Power Consumption", value: "10-15 W (Energy efficient)" },
      { label: "Expected Lifespan", value: "15-18 Years" }
    ],
    features: [
      "Includes a washable bag filter for comprehensive physical and chemical protection",
      "Resin-Free, Salt-Free, Chemical-Free electrolysis technology",
      "TDS input tolerance up to 1,999 ppm (backwash above 2,000 ppm)",
      "1-Year Unconditional Warranty on cabinet body & electrical parts",
      "5-Year Unconditional Warranty on the reactor electrode",
      "Manufactured in compliance with ISO 9001 & ISO 14001",
      "Food grade SS304 heavy-gauge construction",
      "Zero backwash water waste — 100% water conservation",
      "Maintains essential healthy calcium & magnesium minerals",
      "Easy wall mount installation with direct rooftop tank integration"
    ],
    applications: [
      "1-2 BHK Flats & Apartments",
      "Individual Water Inlets",
      "Bathroom Geysers & Showers",
      "Automatic Washing Machines"
    ]
  },
  {
    id: "zoftner-pro-max-w2",
    aliases: ["zoftnor-max-easyfit-w2"],
    name: "Zoftner Pro Max W2",
    slug: "zoftner-pro-max-w2",
    category: "Zoftner Pro",
    hasBagFilter: true,
    filterNote: "Includes high-efficiency bag filter",
    price: 59708,
    originalPrice: 68000,
    rating: 5.0,
    reviewsCount: 88,
    popularity: 100,
    dateAdded: "2024-03-05",
    image: "/images/products/zoftnor-max-w2.jpg",
    shortDescription: "Best-selling 2,000 LPH whole-property water softener with Bag Filter for 2-3 BHK homes and independent duplexes.",
    description: "Bounten's flagship Zoftner Pro Max W2 delivers 2,000 Litres Per Hour of scale-free water backed by an industrial-grade bag filter. It provides comprehensive scale prevention for multi-bathroom homes, geysers, washing machines, and luxury shower fittings without requiring salt bags or chemical regenerants.",
    specifications: [
      { label: "Category", value: "Zoftner Pro (Includes Bag Filter)" },
      { label: "Bag Filter Included", value: "Yes — Industrial Washable Bag Filter Unit" },
      { label: "Flow Capacity", value: "2,000 LPH (Litres Per Hour)" },
      { label: "Technology", value: "Advanced Electrolysis (Resin-Free | Salt-Free | Chemical-Free)" },
      { label: "Water TDS Compatibility", value: "Works up to 1,999 ppm (Backwash recommended above 2,000 ppm)" },
      { label: "Cabinet & Electrical Warranty", value: "1-Year Unconditional Warranty" },
      { label: "Electrode Warranty", value: "5-Year Unconditional Warranty" },
      { label: "Certifications", value: "ISO 9001, ISO 14001" },
      { label: "Reactor Material", value: "Food Grade SS304 with MMO Iridium Coating" },
      { label: "Recommended Property", value: "2-3 BHK Homes / Duplex Residences" },
      { label: "Pipe Connection Size", value: "1 inch" },
      { label: "Power Consumption", value: "15 W" },
      { label: "Expected Lifespan", value: "15-18 Years" }
    ],
    features: [
      "Supplied with integrated bag filter to filter turbidity before electrolysis conditioning",
      "Resin-Free, Salt-Free, Chemical-Free — safe for families and gardens",
      "Reliable performance with borewell water TDS up to 1,999 ppm",
      "1-Year Unconditional Warranty on cabinet body & electrical components",
      "5-Year Unconditional Warranty on the electrolytic electrode",
      "ISO 9001 and ISO 14001 certified manufacturing process",
      "Constructed from Food-grade SS304 premium stainless steel",
      "Eliminates hard water hair fall and skin dryness",
      "Stops chalky limescale on sanitary ware and chrome taps",
      "Zero recurring salt purchase costs forever"
    ],
    applications: [
      "2-3 BHK Apartments & Flats",
      "Duplex Villas & Gated Communities",
      "Everyday Bathing & Showering",
      "Kitchen Appliances & Dishwashers"
    ]
  },
  {
    id: "zoftner-pro-max-w3",
    aliases: ["zoftnor-max-easyfit-w3"],
    name: "Zoftner Pro Max W3",
    slug: "zoftner-pro-max-w3",
    category: "Zoftner Pro",
    hasBagFilter: true,
    filterNote: "Includes high-efficiency bag filter",
    price: 66820,
    originalPrice: 75000,
    rating: 4.9,
    reviewsCount: 47,
    popularity: 91,
    dateAdded: "2024-03-12",
    image: "/images/products/zoftnor-max-w3.jpg",
    shortDescription: "Robust 3,000 LPH water conditioning system with Bag Filter for large 3-4 BHK luxury villas and joint family homes.",
    description: "Zoftner Pro Max W3 delivers 3,000 LPH of conditioned water with an included bag filter to support large residences with multiple rain showers, high-flow diverters, and solar water heaters. It guarantees clean, scale-free water across all household pipelines with zero salt and zero chemicals.",
    specifications: [
      { label: "Category", value: "Zoftner Pro (Includes Bag Filter)" },
      { label: "Bag Filter Included", value: "Yes — High Flow Washable Bag Filter" },
      { label: "Flow Capacity", value: "3,000 LPH (Litres Per Hour)" },
      { label: "Technology", value: "Advanced Electrolysis (Resin-Free | Salt-Free | Chemical-Free)" },
      { label: "Water TDS Compatibility", value: "Works up to 1,999 ppm (Backwash recommended above 2,000 ppm)" },
      { label: "Cabinet & Electrical Warranty", value: "1-Year Unconditional Warranty" },
      { label: "Electrode Warranty", value: "5-Year Unconditional Warranty" },
      { label: "Certifications", value: "ISO 9001, ISO 14001" },
      { label: "Reactor Material", value: "Food Grade SS304" },
      { label: "Recommended Property", value: "3-4 BHK Luxury Villas / Joint Family Residences" },
      { label: "Pipe Connection Size", value: "1.25 inch" },
      { label: "Power Consumption", value: "20 W" },
      { label: "Expected Lifespan", value: "15-18 Years" }
    ],
    features: [
      "Features an integrated heavy-duty bag filter unit for particle-free soft water",
      "100% Resin-Free | Salt-Free | Chemical-Free electrolytic treatment",
      "Engineered for borewell and municipal TDS levels up to 1,999 ppm",
      "1-Year Unconditional Warranty on the cabinet body & electrical parts",
      "5-Year Unconditional Warranty on the precision electrode",
      "Certified under ISO 9001 and ISO 14001 quality management standards",
      "Food-grade SS304 stainless steel contact chamber",
      "Protects luxury bathroom fixtures and concealed flush valves",
      "Saves up to 25% on water heating electricity by preventing scale on geysers",
      "Full PAN India installation and service support"
    ],
    applications: [
      "3-4 BHK Villas & Bungalows",
      "Gated Community Residences",
      "Gyms & Wellness Centres",
      "Cafés & Bakeries"
    ]
  },
  {
    id: "zoftner-pro-max-w4",
    aliases: ["zoftnor-max-easyfit-w4"],
    name: "Zoftner Pro Max W4",
    slug: "zoftner-pro-max-w4",
    category: "Zoftner Pro",
    hasBagFilter: true,
    filterNote: "Includes high-efficiency bag filter",
    price: 78969,
    originalPrice: 89000,
    rating: 5.0,
    reviewsCount: 39,
    popularity: 88,
    dateAdded: "2024-03-18",
    image: "/images/products/zoftnor-max-w4.jpg",
    shortDescription: "Heavy-duty 4,000 LPH water softener with Bag Filter for grand villas, multi-family homes, and boutique commercial spaces.",
    description: "The Zoftner Pro Max W4 handles 4,000 Litres Per Hour with an industrial bag filtration assembly. It is engineered for large multi-story estates, commercial kitchens, clinics, and boutique hotels requiring uninterrupted high-volume scale protection without salt maintenance.",
    specifications: [
      { label: "Category", value: "Zoftner Pro (Includes Bag Filter)" },
      { label: "Bag Filter Included", value: "Yes — Industrial Capacity Bag Filter Assembly" },
      { label: "Flow Capacity", value: "4,000 LPH (Litres Per Hour)" },
      { label: "Technology", value: "Advanced Electrolysis (Resin-Free | Salt-Free | Chemical-Free)" },
      { label: "Water TDS Compatibility", value: "Works up to 1,999 ppm (Backwash recommended above 2,000 ppm)" },
      { label: "Cabinet & Electrical Warranty", value: "1-Year Unconditional Warranty" },
      { label: "Electrode Warranty", value: "5-Year Unconditional Warranty" },
      { label: "Certifications", value: "ISO 9001, ISO 14001" },
      { label: "Reactor Material", value: "Food Grade SS304" },
      { label: "Recommended Property", value: "Grand Estates, Commercial Kitchens, Clinics" },
      { label: "Pipe Connection Size", value: "1.5 inch" },
      { label: "Power Consumption", value: "25 W" },
      { label: "Expected Lifespan", value: "15-18 Years" }
    ],
    features: [
      "Equipped with high-flow bag filter for effective particulate control",
      "Resin-Free, Salt-Free & Chemical-Free green technology",
      "Operates efficiently on input water TDS up to 1,999 ppm",
      "1-Year Unconditional Warranty on cabinet body & electrical components",
      "5-Year Unconditional Warranty on the core electrode",
      "ISO 9001 & ISO 14001 certified assurance",
      "Food-grade SS304 non-corrosive stainless steel",
      "Eliminates pipe encrustation across extensive plumbing networks",
      "Zero sodium discharged into wastewater, protecting gardens and soil",
      "Reliable low-energy solid-state continuous operation"
    ],
    applications: [
      "Grand Villas & Mansions",
      "Hotels, Resorts & Guest Houses",
      "Hospitals & Medical Clinics",
      "Offices & Commercial Buildings"
    ]
  },
  {
    id: "zoftner-pro-max-w6",
    aliases: ["zoftnor-max-easyfit-w6"],
    name: "Zoftner Pro Max W6",
    slug: "zoftner-pro-max-w6",
    category: "Zoftner Pro",
    hasBagFilter: true,
    filterNote: "Includes high-efficiency bag filter",
    price: 83855,
    originalPrice: 95000,
    rating: 5.0,
    reviewsCount: 31,
    popularity: 89,
    dateAdded: "2024-03-25",
    image: "/images/products/zoftnor-max-w6.jpg",
    shortDescription: "Ultra-capacity 6,000 LPH commercial water softener with Bag Filter for apartment societies, hospitals, and resorts.",
    description: "The peak model of the Pro series, Zoftner Pro Max W6 delivers an ultra-high 6,000 Litres Per Hour flow capacity accompanied by high-volume bag filtration. It conditions water for entire residential towers, hospital facilities, commercial laundry plants, and luxury resorts with zero salt bags and zero backwash wastewater.",
    specifications: [
      { label: "Category", value: "Zoftner Pro (Includes Bag Filter)" },
      { label: "Bag Filter Included", value: "Yes — Industrial Multi-Bag Filter System" },
      { label: "Flow Capacity", value: "6,000 LPH (Litres Per Hour)" },
      { label: "Technology", value: "Advanced Electrolysis (Resin-Free | Salt-Free | Chemical-Free)" },
      { label: "Water TDS Compatibility", value: "Works up to 1,999 ppm (Backwash recommended above 2,000 ppm)" },
      { label: "Cabinet & Electrical Warranty", value: "1-Year Unconditional Warranty" },
      { label: "Electrode Warranty", value: "5-Year Unconditional Warranty" },
      { label: "Certifications", value: "ISO 9001, ISO 14001" },
      { label: "Reactor Material", value: "Food Grade SS304 with Industrial MMO Titanium Anode" },
      { label: "Recommended Property", value: "Apartment Complexes, Hospitals, Hotels, Gyms" },
      { label: "Pipe Connection Size", value: "2 inch" },
      { label: "Power Consumption", value: "35 W" },
      { label: "Expected Lifespan", value: "15-18 Years" }
    ],
    features: [
      "Comes with high-capacity industrial bag filter to capture heavy suspended matter",
      "Resin-Free | Salt-Free | Chemical-Free operation saves tons of salt annually",
      "Handles water TDS up to 1,999 ppm (backwash recommended above 2,000 ppm)",
      "1-Year Unconditional Warranty on cabinet body & electrical parts",
      "5-Year Unconditional Warranty on the heavy-duty electrode",
      "ISO 9001 & ISO 14001 certified manufacturing standard",
      "Constructed from certified Food-grade SS304 alloy",
      "Protects expensive commercial boilers, cooling towers, and laundry machines",
      "Drastically reduces ongoing facility plumbing maintenance",
      "PAN India turnkey installation and certified AMC support"
    ],
    applications: [
      "Apartments & Gated Communities",
      "Hotels, Resorts & Restaurants",
      "Hospitals & Healthcare Facilities",
      "Gyms, Spas & Wellness Centres"
    ]
  },

  // ==========================================
  // CATEGORY 2: ZOFTNER QUICK FIX (Without Bag Filter)
  // ==========================================
  {
    id: "zoftner-quick-fix-w1",
    aliases: ["zoftnor-quick-fix-w1"],
    name: "Zoftner Quick Fix W1",
    slug: "zoftner-quick-fix-w1",
    category: "Zoftner Quick Fix",
    hasBagFilter: false,
    filterNote: "Without Bag Filter (Direct Inline Model)",
    price: 49500,
    originalPrice: 57000,
    rating: 4.8,
    reviewsCount: 35,
    popularity: 92,
    dateAdded: "2024-03-02",
    image: "/images/products/zoftnor-max-w1.jpg",
    shortDescription: "Streamlined 1,000 LPH inline electrolysis water softener without bag filter for direct plumbing installation in 1-2 BHK homes.",
    description: "Zoftner Quick Fix W1 delivers 1,000 LPH of electrolytic hard water conditioning in a streamlined, compact inline design without a bag filter. Ideal for properties where pre-filtration is already installed or water has low suspended silt, it neutralizes limescale bonding directly on inlet pipes with zero salt and zero chemicals.",
    specifications: [
      { label: "Category", value: "Zoftner Quick Fix (Without Bag Filter)" },
      { label: "Bag Filter Included", value: "No (Direct Inline Installation)" },
      { label: "Flow Capacity", value: "1,000 LPH (Litres Per Hour)" },
      { label: "Technology", value: "Advanced Electrolysis (Resin-Free | Salt-Free | Chemical-Free)" },
      { label: "Water TDS Compatibility", value: "Works up to 1,999 ppm (Backwash recommended above 2,000 ppm)" },
      { label: "Cabinet & Electrical Warranty", value: "1-Year Unconditional Warranty" },
      { label: "Electrode Warranty", value: "5-Year Unconditional Warranty" },
      { label: "Certifications", value: "ISO 9001, ISO 14001" },
      { label: "Reactor Material", value: "Food Grade SS304" },
      { label: "Recommended Property", value: "1-2 BHK Homes / Direct Inlet Lines" },
      { label: "Pipe Connection Size", value: "1 inch" },
      { label: "Power Consumption", value: "10-15 W" },
      { label: "Expected Lifespan", value: "15-18 Years" }
    ],
    features: [
      "Streamlined design without bag filter — fast and simple inline plumbing fitment",
      "Resin-Free | Salt-Free | Chemical-Free electrolysis water treatment",
      "TDS input tolerance up to 1,999 ppm (backwash recommended above 2,000 ppm)",
      "1-Year Unconditional Warranty on cabinet body & electrical components",
      "5-Year Unconditional Warranty on the reactor electrode",
      "Manufactured under ISO 9001 & ISO 14001 certified quality controls",
      "Food grade SS304 stainless steel reactor construction",
      "Eliminates limescale deposits in plumbing, taps, and geyser heating coils",
      "Zero salt purchases, zero wastewater discharge, fit-and-forget convenience",
      "Affordable budget-friendly solution for apartment owners"
    ],
    applications: [
      "1-2 BHK Flats & Apartments",
      "Individual Plumbing Inlets",
      "Bathing & Shower Comfort",
      "Geysers & Water Heaters"
    ]
  },
  {
    id: "zoftner-quick-fix-w2",
    aliases: ["zoftnor-quick-fix-w2"],
    name: "Zoftner Quick Fix W2",
    slug: "zoftner-quick-fix-w2",
    category: "Zoftner Quick Fix",
    hasBagFilter: false,
    filterNote: "Without Bag Filter (Direct Inline Model)",
    price: 55000,
    originalPrice: 63000,
    rating: 4.9,
    reviewsCount: 41,
    popularity: 94,
    dateAdded: "2024-03-08",
    image: "/images/products/zoftnor-max-w2.jpg",
    shortDescription: "High-efficiency 2,000 LPH inline water softener without bag filter for 2-3 BHK homes and independent duplexes.",
    description: "The Zoftner Quick Fix W2 offers 2,000 LPH capacity in a space-saving configuration without a bag filter. Designed for direct overhead tank outlet or inlet line connection, it protects bathrooms, kitchens, and water heaters from scale build-up while keeping natural minerals intact.",
    specifications: [
      { label: "Category", value: "Zoftner Quick Fix (Without Bag Filter)" },
      { label: "Bag Filter Included", value: "No (Direct Inline Configuration)" },
      { label: "Flow Capacity", value: "2,000 LPH (Litres Per Hour)" },
      { label: "Technology", value: "Advanced Electrolysis (Resin-Free | Salt-Free | Chemical-Free)" },
      { label: "Water TDS Compatibility", value: "Works up to 1,999 ppm (Backwash recommended above 2,000 ppm)" },
      { label: "Cabinet & Electrical Warranty", value: "1-Year Unconditional Warranty" },
      { label: "Electrode Warranty", value: "5-Year Unconditional Warranty" },
      { label: "Certifications", value: "ISO 9001, ISO 14001" },
      { label: "Reactor Material", value: "Food Grade SS304" },
      { label: "Recommended Property", value: "2-3 BHK Apartments & Duplex Homes" },
      { label: "Pipe Connection Size", value: "1 inch" },
      { label: "Power Consumption", value: "15 W" },
      { label: "Expected Lifespan", value: "15-18 Years" }
    ],
    features: [
      "All models come without bag filter for rapid, direct inline pipe connection",
      "Resin-Free, Salt-Free & Chemical-Free electrolysis treatment",
      "Works with input water TDS up to 1,999 ppm",
      "1-Year Unconditional Warranty on cabinet body & electrical parts",
      "5-Year Unconditional Warranty on the electrolytic electrode",
      "ISO 9001 and ISO 14001 certified engineering standards",
      "Constructed from Food grade SS304 alloy",
      "Protects luxury bathroom fittings, geysers, and concealed flush cisterns",
      "Zero ongoing maintenance — no salt refilling or filter replacements needed",
      "Maintains essential healthy minerals for skin and hair health"
    ],
    applications: [
      "2-3 BHK Apartments & Villas",
      "Everyday Showers & Bathing",
      "Laundry & Washing Machines",
      "Plumbing & Pipelines"
    ]
  },
  {
    id: "zoftner-quick-fix-w3",
    aliases: ["zoftnor-quick-fix-w3"],
    name: "Zoftner Quick Fix W3",
    slug: "zoftner-quick-fix-w3",
    category: "Zoftner Quick Fix",
    hasBagFilter: false,
    filterNote: "Without Bag Filter (Direct Inline Model)",
    price: 62000,
    originalPrice: 70000,
    rating: 4.9,
    reviewsCount: 38,
    popularity: 90,
    dateAdded: "2024-03-15",
    image: "/images/products/zoftnor-max-w3.jpg",
    shortDescription: "Robust 3,000 LPH inline water softener without bag filter for villas, joint family houses, and commercial kitchens.",
    description: "Zoftner Quick Fix W3 delivers 3,000 LPH flow capacity without a bag filter assembly, making it the perfect scale prevention solution for large villas and commercial facilities with existing pre-treatment lines. Eliminates hard water scaling using high-efficiency electrolysis without chemical consumables.",
    specifications: [
      { label: "Category", value: "Zoftner Quick Fix (Without Bag Filter)" },
      { label: "Bag Filter Included", value: "No (Direct Inline Installation)" },
      { label: "Flow Capacity", value: "3,000 LPH (Litres Per Hour)" },
      { label: "Technology", value: "Advanced Electrolysis (Resin-Free | Salt-Free | Chemical-Free)" },
      { label: "Water TDS Compatibility", value: "Works up to 1,999 ppm (Backwash recommended above 2,000 ppm)" },
      { label: "Cabinet & Electrical Warranty", value: "1-Year Unconditional Warranty" },
      { label: "Electrode Warranty", value: "5-Year Unconditional Warranty" },
      { label: "Certifications", value: "ISO 9001, ISO 14001" },
      { label: "Reactor Material", value: "Food Grade SS304" },
      { label: "Recommended Property", value: "3-4 BHK Villas, Restaurants, Cafés" },
      { label: "Pipe Connection Size", value: "1.25 inch" },
      { label: "Power Consumption", value: "20 W" },
      { label: "Expected Lifespan", value: "15-18 Years" }
    ],
    features: [
      "Supplied without bag filter for fast inline fitment into existing water setups",
      "Resin-Free, Salt-Free & Chemical-Free technology",
      "Operates seamlessly with input water TDS up to 1,999 ppm",
      "1-Year Unconditional Warranty on the cabinet body & electrical components",
      "5-Year Unconditional Warranty on the electrode",
      "ISO 9001 and ISO 14001 certified manufacturing quality",
      "Food grade SS304 stainless steel construction",
      "Prevents scaling across multiple bathrooms, geysers, and commercial kitchens",
      "Zero salt purchases or recurring filter replacement costs",
      "Long-term maintenance savings for homes and businesses"
    ],
    applications: [
      "Villas & Independent Houses",
      "Restaurants & Cafés",
      "Hotels & Guest Houses",
      "Gyms & Wellness Centres"
    ]
  },
  {
    id: "zoftner-quick-fix-descaler",
    aliases: ["descaler"],
    name: "Zoftner Quick Fix Descaler",
    slug: "zoftner-quick-fix-descaler",
    category: "Zoftner Quick Fix",
    hasBagFilter: false,
    filterNote: "Without Bag Filter (Inline Appliance Descaler)",
    price: 2748,
    originalPrice: 3499,
    rating: 4.8,
    reviewsCount: 38,
    popularity: 92,
    dateAdded: "2024-01-15",
    image: "/images/products/descaler.jpg",
    shortDescription: "Compact inline descaling device without bag filter for geysers, washing machines, and household inlet pipelines.",
    description: "Bounten Zoftner Quick Fix Descaler is an advanced physical scale conditioning solution engineered to stop fresh limescale encrustation and gradually loosen pre-existing mineral deposits across appliances. Installed directly in-line without a bag filter, electricity, or salts.",
    specifications: [
      { label: "Category", value: "Zoftner Quick Fix (Without Bag Filter)" },
      { label: "Bag Filter Included", value: "No (Direct Point-of-Use Fitment)" },
      { label: "Flow Capacity", value: "Up to 1,500 LPH" },
      { label: "Technology", value: "Physical Hydrodynamic Descaling (Resin-Free | Salt-Free | Chemical-Free)" },
      { label: "Water TDS Compatibility", value: "Works with input TDS up to 1,999 ppm" },
      { label: "Cabinet / Body Warranty", value: "1-Year Unconditional Warranty" },
      { label: "Core Element Warranty", value: "5-Year Unconditional Warranty" },
      { label: "Certifications", value: "ISO 9001, ISO 14001" },
      { label: "Material", value: "Food Grade SS304 Alloy" },
      { label: "Connection Size", value: "3/4 inch & 1 inch standard threaded" },
      { label: "Power Requirement", value: "Zero Electricity / Pure Hydrodynamic" },
      { label: "Maintenance", value: "Zero Consumables / Fit & Forget" }
    ],
    features: [
      "Inline installation without bag filter — fits directly before appliances",
      "Resin-Free | Salt-Free | Chemical-Free eco-friendly operation",
      "Stops fresh limescale formation on geyser heating coils and washing machines",
      "Works with input water TDS up to 1,999 ppm",
      "1-Year Unconditional Warranty on the body and components",
      "5-Year Unconditional Warranty on internal conditioning elements",
      "ISO 9001 and ISO 14001 certified",
      "Manufactured from Food grade SS304 alloy",
      "Extends appliance lifespan and reduces electricity consumption",
      "Zero salt refills, zero water wastage, quick DIY or plumber installation"
    ],
    applications: [
      "Geysers & Water Heaters",
      "Automatic Washing Machines",
      "Bathroom Showers & Faucets",
      "Kitchen Dishwashers & Sinks"
    ]
  },
  {
    id: "zoftner-quick-fix-mini",
    aliases: ["mini-zoftnor"],
    name: "Zoftner Quick Fix Mini",
    slug: "zoftner-quick-fix-mini",
    category: "Zoftner Quick Fix",
    hasBagFilter: false,
    filterNote: "Without Bag Filter (Shower & Tap Point-of-Use)",
    price: 3848,
    originalPrice: 4999,
    rating: 4.9,
    reviewsCount: 52,
    popularity: 96,
    dateAdded: "2024-02-10",
    image: "/images/products/mini-zoftnor.jpg",
    shortDescription: "Point-of-use shower and tap water conditioner without bag filter for immediate skin and hair protection.",
    description: "Zoftner Quick Fix Mini is Bounten's dedicated micro-application water conditioner designed for immediate personal wellness. Attached directly to your shower arm or bathroom tap without a bag filter, it neutralizes harsh hard water minerals to reduce hair fall, soothe dry skin, and prevent chalky stains on fixtures.",
    specifications: [
      { label: "Category", value: "Zoftner Quick Fix (Without Bag Filter)" },
      { label: "Bag Filter Included", value: "No (Direct Faucet / Shower Fitting)" },
      { label: "Flow Capacity", value: "Up to 2,000 LPH" },
      { label: "Technology", value: "Advanced Electrolytic Conditioning (Resin-Free | Salt-Free | Chemical-Free)" },
      { label: "Water TDS Compatibility", value: "Works with input TDS up to 1,999 ppm" },
      { label: "Cabinet / Body Warranty", value: "1-Year Unconditional Warranty" },
      { label: "Electrode Warranty", value: "5-Year Unconditional Warranty" },
      { label: "Certifications", value: "ISO 9001, ISO 14001" },
      { label: "Housing Material", value: "Food Grade SS304 Polished Stainless Steel" },
      { label: "Connection Size", value: "0.5 inch (Universal Shower / Tap Fitting)" },
      { label: "Maintenance", value: "Zero Maintenance / No Cartridge Changes" },
      { label: "Design Lifespan", value: "12+ Years" }
    ],
    features: [
      "Direct fitment on showers & taps without bag filter",
      "Resin-Free | Salt-Free | Chemical-Free natural conditioning",
      "Works with input water TDS up to 1,999 ppm",
      "1-Year Unconditional Warranty on the housing body",
      "5-Year Unconditional Warranty on the internal electrode",
      "ISO 9001 & ISO 14001 certified manufacturing standard",
      "Food grade SS304 polished body",
      "Direct hair-fall and skin irritation protection from hard borewell water",
      "Maintains essential healthy minerals without slimy feeling",
      "Zero electricity required, fits in 2 minutes"
    ],
    applications: [
      "Bathing & Overhead Showers",
      "Washbasin Taps & Faucets",
      "Tiles & Bathroom Fixtures",
      "Washing Machine Inlets"
    ]
  }
];
