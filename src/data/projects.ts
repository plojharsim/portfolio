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
    description: "Potřeba zefektivnit studium a organizaci poznámek vyžadovala chytřejší systém. Vytvořil jsem vzdělávací platformu se správou znalostí a synchronizací, která pomáhá studentům přehledněji zvládat výuku.",
    status: "Vydáno",
    tags: ["Web", "Android", "React", "Supabase"],
    demo: "https://edu.plojharsim.cz",
  },
  {
    title: "Panorama house Brdy",
    description: "Ubytování potřebovalo přehlednou prezentaci pro hosty a snadnou cestu k rezervačním dotazům. Vytvořil jsem rychlý a čistý web zaměřený na atmosféru místa a přímý kontakt.",
    status: "Vydáno",
    tags: ["Web", "React", "Tailwind"],
    demo: "https://phb.plojharsim.cz",
  },
  {
    title: "Seply",
    description: "Servis plynových kotlů potřeboval srozumitelně představit služby a usnadnit zákazníkům objednávku servisu. Vytvořil jsem přehlednou prezentaci s důrazem na rychlé kontaktování.",
    status: "Vydáno",
    tags: ["Web", "HTML", "CSS"],
    demo: "https://seply.cz",
  },
  {
    title: "Veselé Vánoce",
    description: "Zadání spočívalo ve vytvoření zábavného a svátečního prvku pro návštěvníky. Vytvořil jsem responzivní web s odpočítáváním a svátečními interaktivními efekty.",
    status: "Vydáno",
    tags: ["Next.js", "React", "TypeScript", "Firebase"],
    demo: "https://vanoce.plojharsim.cz",
  },
];