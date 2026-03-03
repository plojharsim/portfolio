export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  status: "Vydáno" | "Ve vývoji" | "Plánováno";
  tags: string[];
  demo?: string;
  github?: string;
  images?: string[];
  icon?: React.ComponentType<{ className?: string }>;
}

export const projects: Project[] = [
  {
    id: "edu",
    title: "Edu | by plojharsim",
    description: "Moderní vzdělávací platforma, která mění učení v interaktivní zážitek. S chytrou správou znalostí a cloudovou synchronizací pomáhá studentům efektivněji zvládat studium.",
    status: "Vydáno",
    tags: ["Web", "Android", "React", "Supabase"],
    demo: "https://edu.plojharsim.cz",
  },
  {
    id: "phb",
    title: "Panorama house Brdy",
    description: "Webová prezentace pro soukromé ubytování v Brdech. Zaměřeno na přehlednost a jednoduchost rezervace.",
    status: "Vydáno",
    tags: ["Web", "React", "Tailwind"],
    demo: "https://phb.plojharsim.cz",
  },
  {
    id: "seply",
    title: "Seply",
    description: "Profesionální webová prezentace pro servis plynových kotlů. Zaměřeno na konverzi a přehlednost služeb.",
    status: "Vydáno",
    tags: ["Web", "HTML", "CSS"],
    demo: "https://seply.cz",
  },
  {
    id: "iot-station",
    title: "IoT Meteostanice",
    description: "Vlastní hardwarové řešení pro monitorování mikroklimatu založené na čipu ESP32 s odesíláním dat do cloudu.",
    longDescription: "Tento projekt kombinuje hardware a software. Skládá se z mikrokontroléru ESP32, senzorů BME280 a vlastního firmwaru v C++. Data jsou v reálném čase odesílána přes MQTT do centrální databáze a vizualizována v dashboardu. Řešil jsem zde optimalizaci spotřeby pro bateriový provoz a stabilitu Wi-Fi připojení v náročných podmínkách.",
    status: "Vydáno",
    tags: ["Hardware", "C++", "IoT", "ESP32"],
    github: "https://github.com/plojharsim",
    images: ["/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "vanoce",
    title: "Veselé Vánoce",
    description: "Vánoční interaktivní projekt vytvořený pro sváteční náladu s využitím moderních technologií.",
    longDescription: "Původně webová aplikace s odpočtem do Vánoc a interaktivním adventním kalendářem. Projekt využíval Firebase pro ukládání uživatelských přání a Next.js pro rychlé načítání. Aktuálně slouží jako ukázka práce s real-time databází a animacemi v Reactu.",
    status: "Vydáno",
    tags: ["Next.js", "React", "TypeScript", "Firebase"],
    github: "https://github.com/plojharsim",
    images: ["/placeholder.svg"]
  },
];