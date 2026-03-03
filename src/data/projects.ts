import { Server, Shield, Cpu, HardDrive } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  status: "Vydáno" | "Ve vývoji" | "Plánováno";
  tags: string[];
  demo?: string;
  github?: string;
  images?: string[];
  features?: { icon: any; title: string; description: string }[];
}

export const projects: Project[] = [
  {
    id: "homelab",
    title: "Homelab & Network Infrastructure",
    description: "Vlastní serverová infrastruktura postavená na Proxmoxu a Dockeru pro self-hosting služeb a testování síťových technologií.",
    fullDescription: `
      Tento projekt není jen o jedné aplikaci, ale o celém ekosystému, který spravuji. Moje domácí laboratoř mi slouží k učení se správy Linuxu, virtualizace a síťové bezpečnosti. 
      Vše běží na dedikovaném hardwaru s důrazem na automatizaci a bezpečnost.
    `,
    status: "Vydáno",
    tags: ["Linux", "Docker", "Selfhosting", "Proxmox"],
    features: [
      {
        icon: Server,
        title: "Virtualizace",
        description: "Využití Proxmox VE pro běh kritických služeb v izolovaných kontejnerech a VM."
      },
      {
        icon: Shield,
        title: "Bezpečnost",
        description: "Implementace reverzní proxy (Nginx Proxy Manager) s SSL certifikáty a Firewallem."
      },
      {
        icon: HardDrive,
        title: "Úložiště",
        description: "Zálohovací systémy a síťová úložiště pro data z mých projektů."
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: "edu",
    title: "Edu | by plojharsim",
    description: "Moderní vzdělávací platforma, která mění učení v interaktivní zážitek. S chytrou správou znalostí a cloudovou synchronizací.",
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
    id: "vanoce",
    title: "Veselé Vánoce",
    description: "Vánoční webová stránka s odpočtem a interaktivními prvky, vytvořená pro sváteční náladu.",
    status: "Vydáno",
    tags: ["Next.js", "React", "TypeScript", "Firebase"],
    demo: "https://vanoce.plojharsim.cz",
  },
];