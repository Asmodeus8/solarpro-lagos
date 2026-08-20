// Site content for 7thbreed Ltd — refreshed to match the live deployed site & backend catalog.

export const site = {
  name: "7th Breed ltd",
  phone: "+2348113786437",
  phoneHref: "tel:+2348113786437",
  whatsapp: "https://wa.me/2348113786437",
  email: "Customerservice@7thbreed.com",
  address: ["10b Prince Ibrahim Eletu Ave,", "Osapa London, Lekki 106104,", "Lagos"],
};

export const heroImage = "/images/hero/11.jpg";

export const heroImages = ["/images/hero/11.jpg", "/images/hero/2.jpg", "/images/hero/5.jpg", "/images/hero/6.jpg", "/images/hero/9.jpg", "/images/hero/automation-a.jpg", "/images/hero/automation-b.jpg"];

export const stats = [
  {"value": 500, "suffix": "+", "label": "Installations", "sub": "Homes & businesses powered"},
  {"value": 10, "suffix": "+", "label": "Years Experience", "sub": "Trusted since 2014"},
  {"value": 98, "suffix": "%", "label": "Satisfaction Rate", "sub": "Happy customers"},
  {"value": 24, "suffix": "/7", "label": "Support", "sub": "Always available for you"}
  ];

export const services = [
  {
    title: "Renewable Energy",
    icon: "home",
    productService: "Renewable Energy & Solar",
    image: "/product-images/2.png",
    description: "Solar sales, design, installation and power backup solutions for homes, estates, businesses and industrial sites across Lagos.",
    points: ["Solar system sizing", "Hybrid inverter packages", "Battery backup integration", "Energy savings and reliability"],
  },
  {
    title: "Software Development",
    icon: "building",
    productService: "Software Development",
    image: "/product-images/3.png",
    description: "Digital products and business software that help teams streamline operations, serve customers and automate manual work.",
    points: ["Web applications", "Business dashboards", "Client portals", "Integration workflows"],
  },
  {
    title: "CCTV Surveillance & Installation",
    icon: "wrench",
    productService: "CCTV Installation",
    image: "/product-images/7.png",
    description: "Professional CCTV surveillance and security system deployment for homes, offices, estates and commercial facilities that need visibility and control.",
    points: ["CCTV camera installation", "Remote monitoring setup", "Video storage support", "Security system maintenance"],
  },
  {
    title: "Automation Solutions",
    icon: "gauge",
    productService: "Automation Solutions",
    image: "/product-images/6.png",
    description: "Smart automation, connected systems, and workflow solutions that help your organisation run more efficiently and reliably.",
    points: ["Process automation", "Smart device integration", "Remote monitoring setup", "Operational intelligence"],
  },
  {
    title: "Cloud Computing",
    icon: "cloud",
    productService: "Cloud Computing",
    image: "/product-images/7.png",
    description: "Cloud hosting, migration, and managed infrastructure support for teams that need reliable, scalable digital operations.",
    points: ["Cloud hosting setup", "Server migration support", "Backup and recovery planning", "Managed infrastructure guidance"],
  }
];

export type Product = {
  id?: string;
  name: string;
  service?: string;
  category: "Solar Panels" | "Inverters" | "Batteries" | "Complete Packages";
  badge?: string;
  price: string;
  amount?: number;
  image: string;
  brand?: string;
  specs: string[];
};

export type FeaturedProduct = {
  name: string;
  tag?: string;
  badge?: string;
  price: string;
  image: string;
  specs: string[];
};


// Full product catalog — matches backend data/products.json (source of truth).

export const products: Product[] = [
  {
    id: "3kva-core-series",
    name: "3KVA Core Series",
    category: "Complete Packages",
    badge: "Core",
    price: "₦1,900,000",
    amount: 1900000.0,
    image: "/product-images/2.png",
    specs: ["Battery: 3kwh/2.5kwh", "Solar Panels: 3×600W", "Load: 350W/200W/1000W"],
  },
  {
    id: "3kva-pro-series",
    name: "3KVA Pro Series",
    category: "Complete Packages",
    badge: "Pro",
    price: "₦2,450,000",
    amount: 2450000.0,
    image: "/product-images/3.png",
    specs: ["Battery: 4kwh", "Solar Panels: 4×600W", "Load: 500W/300W/1500W"],
  },
  {
    id: "3kva-max-series",
    name: "3KVA Max Series",
    category: "Complete Packages",
    badge: "Max",
    price: "₦2,650,000",
    amount: 2650000.0,
    image: "/product-images/hf_20260814_174302_1ce5fa8b-20a1-4eab-986e-77770301a322.png",
    specs: ["Battery: 5kwh", "Solar Panels: 5×600W", "Load: 750W/350W/1800W"],
  },
  {
    id: "4kva-core-series",
    name: "4KVA Core Series",
    category: "Complete Packages",
    badge: "Core",
    price: "₦2,000,000",
    amount: 2000000.0,
    image: "/product-images/4.png",
    specs: ["Battery: 3kwh/2.5kwh", "Solar Panels: 3×600W", "Load: 350W/200W/1000W"],
  },
  {
    id: "4kva-pro-series",
    name: "4KVA Pro Series",
    category: "Complete Packages",
    badge: "Pro",
    price: "₦2,650,000",
    amount: 2650000.0,
    image: "/product-images/7.png",
    specs: ["Battery: 4kwh", "Solar Panels: 4×600W", "Load: 500W/300W/1500W"],
  },
  {
    id: "4kva-max-series",
    name: "4KVA Max Series",
    category: "Complete Packages",
    badge: "Max",
    price: "₦2,750,000",
    amount: 2750000.0,
    image: "/product-images/b6317862-f178-446f-913b-6d9c80000000.0ab4d9.png",
    specs: ["Battery: 5kwh", "Solar Panels: 5×600W", "Load: 750W/350W/1800W"],
  },
  {
    id: "6kva-core-series",
    name: "6KVA Core Series",
    category: "Complete Packages",
    badge: "Core",
    price: "₦2,900,000",
    amount: 2900000.0,
    image: "/product-images/8.png",
    specs: ["Battery: 5kwh", "Solar Panels: 6×600W", "Load: 700W/350W/3000W"],
  },
  {
    id: "6kva-pro-series",
    name: "6KVA Pro Series",
    category: "Complete Packages",
    badge: "Pro",
    price: "₦4,000,000",
    amount: 4000000.0,
    image: "/product-images/9.png",
    specs: ["Battery: 10kwh", "Solar Panels: 8×600W", "Load: 900W/700W/3500W"],
  },
  {
    id: "6kva-max-series",
    name: "6KVA Max Series",
    category: "Complete Packages",
    badge: "Max",
    price: "₦4,900,000",
    amount: 4900000.0,
    image: "/product-images/10.png",
    specs: ["Battery: 15kwh", "Solar Panels: 10×600W", "Load: 1200W/1000W/4000W"],
  },
  {
    id: "8kva-core-series",
    name: "8KVA Core Series",
    category: "Complete Packages",
    badge: "Core",
    price: "₦5,300,000",
    amount: 5300000.0,
    image: "/product-images/3.png",
    specs: ["Battery: 15kwh", "Solar Panels: 12×600W", "Load: 1700W/1000W/4000W"],
  },
  {
    id: "8kva-pro-series",
    name: "8KVA Pro Series",
    category: "Complete Packages",
    badge: "Pro",
    price: "₦6,550,000",
    amount: 6550000.0,
    image: "/product-images/11.png",
    specs: ["Battery: 17.5kwh", "Solar Panels: 16×600W", "Load: 2000W/1300W/4500W"],
  },
  {
    id: "8kva-max-series",
    name: "8KVA Max Series",
    category: "Complete Packages",
    badge: "Max",
    price: "₦7,200,000",
    amount: 7200000.0,
    image: "/product-images/5.png",
    specs: ["Battery: 20kwh", "Solar Panels: 18×600W", "Load: 2500W/1800W/5000W"],
  },
  {
    id: "10kva-core-series",
    name: "10KVA Core Series",
    category: "Complete Packages",
    badge: "Core",
    price: "₦5,600,000",
    amount: 5600000.0,
    image: "/product-images/2.png",
    specs: ["Battery: 15kwh", "Solar Panels: 12×600W", "Load: 1700W/1000W/4000W"],
  },
  {
    id: "10kva-pro-lite-series",
    name: "10KVA Pro Lite Series",
    category: "Complete Packages",
    badge: "Pro Lite",
    price: "₦6,850,000",
    amount: 6850000.0,
    image: "/product-images/6.png",
    specs: ["Battery: 17.5kwh", "Solar Panels: 16×600W", "Load: 2000W/1300W/4500W"],
  },
  {
    id: "10kva-pro-series",
    name: "10KVA Pro Series",
    category: "Complete Packages",
    badge: "Pro",
    price: "₦7,600,000",
    amount: 7600000.0,
    image: "/product-images/4.png",
    specs: ["Battery: 20kwh", "Solar Panels: 18×600W", "Load: 2500W/1800W/5000W"],
  },
  {
    id: "10kva-max-lite-series",
    name: "10KVA Max Lite Series",
    category: "Complete Packages",
    badge: "Max Lite",
    price: "₦10,600,000",
    amount: 10600000.0,
    image: "/product-images/7.png",
    specs: ["Battery: 30kwh", "Solar Panels: 24×600W", "Load: 3500W/2000W/8000W"],
  },
  {
    id: "10kva-max-series",
    name: "10KVA Max Series",
    category: "Complete Packages",
    badge: "Max",
    price: "₦11,700,000",
    amount: 11700000.0,
    image: "/product-images/8.png",
    specs: ["Battery: 35kwh", "Solar Panels: 28×600W", "Load: 4000W/2200W/8000W"],
  },
  {
    id: "12kva-core-series",
    name: "12KVA Core Series",
    category: "Complete Packages",
    badge: "Core",
    price: "₦5,900,000",
    amount: 5900000.0,
    image: "/product-images/hf_20260814_174302_1ce5fa8b-20a1-4eab-986e-77770301a322.png",
    specs: ["Battery: 15kwh", "Solar Panels: 12×600W", "Load: 1700W/1000W/4000W"],
  },
  {
    id: "12kva-pro-lite-series",
    name: "12KVA Pro Lite Series",
    category: "Complete Packages",
    badge: "Pro Lite",
    price: "₦7,150,000",
    amount: 7150000.0,
    image: "/product-images/9.png",
    specs: ["Battery: 17.5kwh", "Solar Panels: 16×600W", "Load: 2000W/1300W/4500W"],
  },
  {
    id: "12kva-pro-series",
    name: "12KVA Pro Series",
    category: "Complete Packages",
    badge: "Pro",
    price: "₦7,900,000",
    amount: 7900000.0,
    image: "/product-images/7.png",
    specs: ["Battery: 20kwh", "Solar Panels: 18×600W", "Load: 2500W/1800W/5000W"],
  },
  {
    id: "12kva-max-lite-series",
    name: "12KVA Max Lite Series",
    category: "Complete Packages",
    badge: "Max Lite",
    price: "₦10,900,000",
    amount: 10900000.0,
    image: "/product-images/b6317862-f178-446f-913b-6d9c80000000.0ab4d9.png",
    specs: ["Battery: 30kwh", "Solar Panels: 24×600W", "Load: 3500W/2000W/8000W"],
  },
  {
    id: "12kva-max-series",
    name: "12KVA Max Series",
    category: "Complete Packages",
    badge: "Max",
    price: "₦12,150,000",
    amount: 12150000.0,
    image: "/product-images/5.png",
    specs: ["Battery: 35kwh", "Solar Panels: 28×600W", "Load: 4000W/2200W/8000W"],
  },
  {
    id: "12kva-extra-series",
    name: "12KVA Extra Series",
    category: "Complete Packages",
    badge: "Extra",
    price: "₦15,600,000",
    amount: 15600000.0,
    image: "/product-images/9.png",
    specs: ["Battery: 45kwh", "Solar Panels: 36×600W", "Load: 7000W/3000W/10000W"],
  },
  {
    id: "20kva-core-series",
    name: "20KVA Core Series",
    category: "Complete Packages",
    badge: "Core",
    price: "₦13,500,000",
    amount: 13500000.0,
    image: "/product-images/10.png",
    specs: ["Battery: 30kwh", "Solar Panels: 24×600W", "Load: 3500W/2000W/10000W"],
  },
  {
    id: "20kva-pro-series",
    name: "20KVA Pro Series",
    category: "Complete Packages",
    badge: "Pro",
    price: "₦14,200,000",
    amount: 14200000.0,
    image: "/product-images/3.png",
    specs: ["Battery: 35kwh", "Solar Panels: 28×600W", "Load: 4000W/2200W/11000W"],
  },
  {
    id: "20kva-max-series",
    name: "20KVA Max Series",
    category: "Complete Packages",
    badge: "Max",
    price: "₦17,800,000",
    amount: 17800000.0,
    image: "/product-images/11.png",
    specs: ["Battery: 45kwh", "Solar Panels: 36×600W", "Load: 7000W/3000W/13000W"],
  },
  {
    id: "20kva-extra-series",
    name: "20KVA Extra Series",
    category: "Complete Packages",
    badge: "Extra",
    price: "₦22,900,000",
    amount: 22900000.0,
    image: "/product-images/5.png",
    specs: ["Battery: 60kwh", "Solar Panels: 48×600W", "Load: 8500W/4000W/15000W"],
  }
];

// Featured products shown on the home page ("Top Solutions" section).

// Prices must match the backend catalog (data/products.json) — update both together.

export const featuredProducts: FeaturedProduct[] = [
  {
    name: "3KVA Core Series",
    tag: "Complete Package",
    badge: "Core",
    price: "₦1,900,000",
    image: "/product-images/2.png",
    specs: ["Battery: 3kwh/2.5kwh", "Solar Panels: 3×600W", "Load: 350W/200W/1000W"],
  },
  {
    name: "3KVA Pro Series",
    tag: "Complete Package",
    badge: "Pro",
    price: "₦2,450,000",
    image: "/product-images/3.png",
    specs: ["Battery: 4kwh", "Solar Panels: 4×600W", "Load: 500W/300W/1500W"],
  },
  {
    name: "3KVA Max Series",
    tag: "Complete Package",
    badge: "Max",
    price: "₦2,650,000",
    image: "/product-images/hf_20260814_174302_1ce5fa8b-20a1-4eab-986e-77770301a322.png",
    specs: ["Battery: 5kwh", "Solar Panels: 5×600W", "Load: 750W/350W/1800W"],
  }
];

export const projects = [
  {
    location: "Osapa London",
    type: "Residential",
    size: "9.6 KWP System",
    image: "/project-images/1.jpg",
    description: "Full solar installation with inverter, battery bank, and monitoring system.",
  },
  {
    location: "Victoria Island",
    type: "Commercial",
    size: "20KVA Commercial",
    image: "/project-images/2.jpg",
    description: "Commercial-grade solar setup with multiple inverters and extended battery storage.",
  },
  {
    location: "Lekki Phase 1",
    type: "Residential",
    size: "5KVA System",
    image: "/project-images/3.jpg",
    description: "Compact residential installation with wall-mounted inverter and LiFePO4 battery.",
  },
  {
    location: "Ikoyi",
    type: "Residential",
    size: "10KVA Premium",
    image: "/project-images/4.jpg",
    description: "Premium installation with Kärtel inverter, smart controls, and ECO-WORTHY battery.",
  },
  {
    location: "Lagos Mainland",
    type: "Commercial",
    size: "15KVA System",
    image: "/project-images/5.jpg",
    description: "Multi-inverter commercial setup with Vami inverters and organized battery arrays.",
  },
  {
    location: "Ajah",
    type: "Residential",
    size: "8KVA System",
    image: "/project-images/6.jpg",
    description: "Deye inverter installation with stacked lithium batteries and clean wiring.",
  }
];

export const testimonials = [
  {
    quote: "7thbreed Ltd transformed my life. I used to spend ₦80,000 monthly on diesel alone. Now my electricity is virtually free. The installation was professional and clean — took just 2 days.",
    name: "Chukwuemeka Obi",
    role: "Homeowner · Osapa London, Lagos",
    system: "9.6KWP System",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1e+83c2ac-1763294782132.png",
  },
  {
    quote: "My pharmacy used to lose products worth hundreds of thousands when NEPA took light. Since installing the 10KVA commercial system, zero downtime. Best investment I have made for my business.",
    name: "Adaeze Nwosu",
    role: "Business Owner · Lekki Phase 1, Lagos",
    system: "10KVA Commercial",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1d43dfc4c-1772296838517.png",
  },
  {
    quote: "We installed 7thbreed Ltd systems across 8 units in our estate. The team was knowledgeable, prices were fair, and the after-sales support has been exceptional. Highly recommend.",
    name: "Babatunde Fashola",
    role: "Estate Manager · Chevron Drive, Lagos",
    system: "5KVA × 8 Units",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1998cdbb8-1766339897408.png",
  }
];

export const comparison = {
  packages: [
    { name: "3KVA Pro", popular: false },
    { name: "6KVA Pro", popular: false },
    { name: "10KVA Pro", popular: true },
    { name: "12KVA Max", popular: false }
  ],
  rows: [
    { feature: "Price", values: ["₦2,450,000", "₦4,000,000", "₦7,600,000", "₦12,150,000"] },
    { feature: "Battery", values: ["4kwh", "10kwh", "20kwh", "35kwh"] },
    { feature: "Solar Panels", values: ["4×600W", "8×600W", "18×600W", "28×600W"] },
    { feature: "Peak Load", values: ["1500W", "3500W", "5000W", "8000W"] },
    { feature: "Ideal For", values: ["Small home", "Medium home", "Large home", "Commercial"] }
  ],
};

export const faqs = [
  { q: "What services does 7thbreed provide?", a: "We deliver renewable energy and solar systems, custom software development, CCTV and security installations, cloud hosting and migration, and automation solutions for homes and businesses across Lagos." },
  { q: "How long do projects typically take?", a: "Timelines depend on the service. Solar installations often take 1–7 days; software and automation work is delivered in agreed phases; CCTV setups can frequently be completed within a few days. We share a clear timeline after your request." },
  { q: "Do you offer payment plans?", a: "Yes. For eligible energy and installation projects we offer flexible payment plans with an initial deposit and milestone-based payments. Software and larger digital projects can also be phased — our team will recommend options once your requirements are scoped." },
  { q: "What areas in Lagos do you cover?", a: "We serve all of Lagos — Lekki, Osapa London, Ajah, Victoria Island, Ikoyi, Ikeja, Yaba, Surulere and beyond. Mainland and island coverage included." },
  { q: "What support do I get after delivery?", a: "Every project includes handover documentation and after-sales support. Solar systems carry warranty coverage; software and cloud clients can access ongoing maintenance; security and automation installs include configuration support and troubleshooting when you need it." }
];

