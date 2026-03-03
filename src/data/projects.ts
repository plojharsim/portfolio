import { GraduationCap, Home, Layout, Gift, Thermometer, Cpu } from "lucide-react";

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  status: "Vydáno" | "Ve vývoji" | "Plánováno";
  tags: string[];
  demo?: string;
  github?: string;
  images?: string[];
  features?: string[];
  hardware?: string[];
  category: "Web" | "Hardware" | "Ostatní";
}

export const projects: Project[] = [
  {
    slug: "edu-plojharsim",
    title: "Edu | by plojharsim",
    description: "Moderní vzdělávací platforma, která mění učení v interaktivní zážitek.",
    longDescription: "Edu je komplexní platforma navržená pro studenty, kteří chtějí mít své studijní materiály přehledně na jednom místě. Systém podporuje synchronizaci v reálném čase, chytré poznámky a interaktivní kvízy.",
    status: "Vydáno",
    tags: ["Web", "Android", "React", "Supabase"],
    demo: "https://edu.plojharsim.cz",
    category: "Web",
    features: ["Cloudová synchronizace", "Offline režim", "Interaktivní kvízy", "Export do PDF"]
  },
  {
    slug: "iot-meteostanice",
    title: "IoT Meteostanice v2",
    description: "Vlastní hardwarové řešení pro monitoring prostředí postavené na Raspberry Pi a 3D tisku.",
    longDescription: "Tento projekt kombinuje mou vášeň pro hardware a software. Jedná se o stanici, která měří teplotu, vlhkost, tlak a kvalitu vzduchu. Data jsou odesílána do vlastního dashboardu a ukládána pro analýzu. Krabička byla navržena ve Fusion 360 a vytištěna na 3D tiskárně.",
    status: "Vydáno",
    tags: ["Python", "Raspberry Pi", "3D Tisk", "IoT"],
    category: "Hardware",
    hardware: ["Raspberry Pi Zero W", "Senzor BME280", "Senzor PMS5003", "Vlastní 3D tištěný case"],
    features: ["Měření PM2.5 částic", "Webový dashboard", "Notifikace do Telegramu", "Logování dat do InfluxDB"]
  },
  {
    slug: "panorama-house-brdy",
    title: "Panorama house Brdy",
    description: "Webová prezentace pro soukromé ubytování v Brdech.",
    status: "Vydáno",
    tags: ["Web", "React", "Tailwind"],
    demo: "https://phb.plojharsim.cz",
    category: "Web"
  },
  {
    slug: "seply",
    title: "Seply",
    description: "Profesionální webová prezentace pro servis plynových kotlů.",
    status: "Vydáno",
    tags: ["Web", "HTML", "CSS"],
    demo: "https://seply.cz",
    category: "Web"
  },
  {
    slug: "vesele-vanoce",
    title: "Veselé Vánoce",
    description: "Vánoční webová stránka s odpočtem a interaktivními prvky.",
    status: "Vydáno",
    tags: ["Next.js", "React", "TypeScript", "Firebase"],
    demo: "https://vanoce.plojharsim.cz",
    category: "Web"
  }
];