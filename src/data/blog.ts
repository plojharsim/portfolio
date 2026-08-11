export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: "Osobní" | "Technologie" | "Vize" | "YouTube";
  author: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "proc-resit-digitalni-problemy-a-ne-jen-kod",
    title: "Proč se nesoustředím jen na kód, ale na řešení digitálních problémů",
    excerpt: "Technologie a kód jsou skvělé nástroje, ale samy o sobě nestačí, pokud neřeší konkrétní potřebu. Zde je můj pohled na to, jak přistupuji k digitálním výzvám lidí a malých firem.",
    date: "11. srpna 2026",
    readTime: "3 min čtení",
    category: "Osobní",
    author: "Šimon Plojhar",
    content: `
      <p>Když jsem před několika lety začínal s programováním, sledoval jsem především technologie. Fascinovalo mě, co všechno se dá napsat v Pythonu, jak funguje Linux nebo jak vytvořit aplikaci v Reactu. Postupně jsem si ale uvědomil jednu klíčovou věc: <strong>technologie samy o sobě nejsou cílem, ale pouze nástrojem</strong>.</p>

      <h2 class="text-2xl font-bold text-foreground mt-8 mb-4">Lidé nehledají kód, hledají vyřešení svého problému</h2>
      <p>Ať už jde o živnostníka, malou firmu nebo jednotlivce, nikdo nepotřebuje „prostě jen web“ nebo „další skript“. Potřebují ušetřit čas s ruční přepisováním dat, získat více zákazníků, zjednodušit rezervace nebo automatizovat opakovanou rutinu.</p>
      
      <p>Často se stává, že člověk ani přesně neví, jaké technické řešení by pro něj bylo nejlepší. Neví, zda zvolit webovou aplikaci, jednoduchý formulář, propojení přes API nebo využití AI nástrojů. A to je úplně v pořádku.</p>

      <h2 class="text-2xl font-bold text-foreground mt-8 mb-4">Můj přístup: Od problému k funkcionalitě</h2>
      <p>Místo toho, abych nabízel šablonová řešení, raději začínám otázkou: <em>„Co vás v digitálním světě zdržuje nebo co potřebujete zjednodušit?“</em></p>

      <ul class="list-disc pl-6 space-y-2 my-4">
        <li><strong>Weby a aplikace:</strong> Přehledné prezentace zaměřené na srozumitelnost a přímou akční cestu pro návštěvníky.</li>
        <li><strong>Automatizace:</strong> Propojení nástrojů tak, aby se data přenášela sama bez zbytečného klikání.</li>
        <li><strong>AI a integrace:</strong> Chytrejší zpracování textů, podkladů nebo vyhledávání informací na míru.</li>
      </ul>

      <p>Moje filozofie je jednoduchá – pomáhat hledat nejkratší a nejsmysluplnější cestu k fungujícímu výsledku. Pokud řešíte digitální výzvu a nejste si jisti, kde začít, napište mi a společně na to mrkneme.</p>
    `,
  },
];