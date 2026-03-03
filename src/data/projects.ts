export interface Project {
  id: string;
  title: string;
  description: string;
  status: "Vydáno" | "Ve vývoji" | "Plánováno";
  tags: string[];
  demo?: string;
  github?: string;
  longDescription?: string;
  features?: string[];
  images?: string[];
}

export const projects: Project[] = [
  {
    id: "edu",
    title: "Edu | by plojharsim",
    description: "Moderní vzdělávací platforma, která mění učení v interaktivní zážitek. S chytrou správou znalostí a cloudovou synchronizací.",
    status: "Vydáno",
    tags: ["Web", "Android", "React", "Supabase"],
    demo: "https://edu.plojharsim.cz",
  },
  {
    id: "smart-home-node",
    title: "Smart Home Node",
    description: "Vlastní hardwarové řešení pro chytrou domácnost postavené na Raspberry Pi s vlastním 3D tištěným pouzdrem.",
    status: "Vydáno",
    tags: ["Hardware", "Linux", "Python", "3D Tisk"],
    github: "https://github.com/plojharsim",
    longDescription: "Tento projekt kombinuje mou vášeň pro Linux, Python a 3D tisk. Jedná se o centrální uzel pro chytrou domácnost, který běží na Raspberry Pi 4 a ovládá různé aspekty domácího prostředí přes vlastní webové rozhraní.",
    features: [
      "Automatizace osvětlení a teploty",
      "Vlastní 3D tištěná krabička navržená ve Fusion 360",
      "Monitoring spotřeby energie v reálném čase",
      "Zálohování dat přes Docker kontejnery"
    ],
    images: ["https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=1000&auto=format&fit=crop"]
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
    id: "vanoce",
    title: "Veselé Vánoce",
    description: "Vánoční webová stránka s odpočtem a interaktivními prvky, vytvořená pro sváteční náladu.",
    status: "Vydáno",
    tags: ["Next.js", "React", "TypeScript", "Firebase"],
    demo: "https://vanoce.plojharsim.cz",
  },
];