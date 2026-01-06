export interface Project {
  title: string;
  description: string;
  status: "Vydáno" | "Ve vývoji" | "Plánováno";
  tags: string[];
  demo?: string;
  github?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export const projects: Project[] = [
  {
    title: "Panorama house Brdy",
    description: "Webová prezentace pro soukromé ubytování v Brdech. Zaměřeno na přehlednost a jednoduchost rezervace.",
    status: "Vydáno",
    tags: ["Web", "React", "Tailwind"],
    demo: "https://panoramahousebrdy.cz",
  },
  {
    title: "Seply",
    description: "Profesionální webová prezentace pro servis plynových kotlů. Zaměřeno na konverzi a přehlednost služeb.",
    status: "Vydáno",
    tags: ["Web", "React", "Tailwind"],
    demo: "https://seply.cz",
  },
  {
    title: "Veselé Vánoce",
    description: "Vánoční webová stránka s odpočtem a interaktivními prvky, vytvořená pro sváteční náladu.",
    status: "Vydáno",
    tags: ["Next.js", "React", "TypeScript"],
    demo: "https://vanoce.plojharsim.cz",
  },
  {
    title: "Discord Bot",
    description: "Vlastní bot pro správu komunity s funkcemi pro moderování a zábavu.",
    status: "Ve vývoji",
    tags: ["Python", "API"],
    github: "https://github.com/plojharsim",
  },
  {
    title: "Batch Tools",
    description: "Sada užitečných skriptů pro Windows, které mi usnadňují každodenní práci se soubory.",
    status: "Plánováno",
    tags: ["Batch", "Automatizace"],
    github: "https://github.com/plojharsim",
  },
];