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
    title: "Classmate",
    description: "Aplikace pro celou třídu nebo školu s Bakaláři. Rozvrh se změnami v reálném čase, společné úkoly a testy, kalendář, známky a poznámky s nahrávkami z hodin na jednom místě. Funguje na telefonu i počítači, bez reklam, s dvoufázovým ověřením a podporou AI asistentů přes MCP.",
    status: "Vydáno",
    tags: ["Web", "PWA", "Bakaláři", "MCP"],
    demo: "https://classmate.cz",
  },
  {
    title: "LUGAS s.r.o.",
    description: "Webová prezentace pro odborného revizáka plynových zařízení. Zaměřeno na přehlednost nabízených služeb a snadné sjednání revize.",
    status: "Vydáno",
    tags: ["Web", "React", "CSS"],
    demo: "https://lugas.cz",
  },
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
    demo: "https://osec.cz",
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
  },
];