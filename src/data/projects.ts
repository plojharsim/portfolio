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
    title: "Edu | by plojharsim",
    description: "Moderní vzdělávací platforma, která mění učení v interaktivní zážitek. S chytrou správou znalostí a cloudovou synchronizací pomáhá studentům efektivněji zvládat studium.",
    status: "Vydáno",
    tags: ["Web", "Android", "React", "Supabase"],
    demo: "https://edu.plojharsim.cz",
  },
  {
    title: "Panorama house Brdy",
    description: "Webová prezentace pro soukromé ubytování v Brdech. Zaměřeno na přehlednost a jednoduchost rezervace.",
    status: "Vydáno",
    tags: ["Web", "React", "Tailwind"],
    demo: "https://phb.plojharsim.cz",
  },
  {
    title: "Seply",
    description: "Profesionální webová prezentace pro servis plynových kotlů. Zaměřeno na konverzi a přehlednost služeb.",
    status: "Vydáno",
    tags: ["Web", "HTML", "CSS"],
    demo: "https://seply.cz",
  },
  {
    title: "Veselé Vánoce",
    description: "Vánoční webová stránka s odpočtem a interaktivními prvky, vytvořená pro sváteční náladu.",
    status: "Vydáno",
    tags: ["Next.js", "React", "TypeScript", "Firebase"],
    demo: "https://vanoce.plojharsim.cz",
  },
];