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
    id: "vitejte-na-mem-blogu",
    title: "Vítejte na mém blogu: Proč vznikl a o čem budu psát",
    excerpt:
      "Vítejte v mém novém koutku internetu! V tomto úvodním článku se podělím o to, proč jsem se rozhodl portfolio rozšířit o blog, jaké technologie pohání tento web a jaká témata zde můžete očekávat.",
    date: "12. 9. 2026",
    readTime: "3 min čtení",
    category: "Osobní",
    author: "Šimon Plojhar",
    content: `
      <p>
        Ahoj! Vítám tě na svém osobním blogu. Pokud jsi už procházel mé portfolio, pravděpodobně víš, 
        že se věnuji programování, moderním webovým technologiím a experimentování s vlastním hardwarem a servery.
      </p>

      <h2>Proč další blog o technologiích?</h2>
      <p>
        Dlouho jsem přemýšlel, kam zaznamenávat své postřehy, řešení problémů, na které při vývoji narážím, 
        a novinky, které mě zaujmou. GitHub a repozitáře sice uchovají kód, ale často chybí kontext – 
        proč jsem se rozhodl pro dané řešení, jaké překážky jsem musel překonat a co jsem se přitom naučil.
      </p>
      <p>
        Tento blog pro mě bude sloužit jako:
      </p>
      <ul>
        <li><strong>Veřejný deník vývoje:</strong> Budu zde dokumentovat průběh práce na mých projektech (jako je Edu, webové prezentace a další).</li>
        <li><strong>Sdílení praktických tipů:</strong> Od triků v Reactu a TypeScriptu po správu domácího serveru na Linuxu.</li>
        <li><strong>Názory a vize:</strong> Jak vnímám vývoj umělé inteligence, vzdělávání v IT a směřování moderního webu.</li>
      </ul>

      <h2>Jak je tento web postavený?</h2>
      <p>
        Portfolio a blog jsem postavil na moderním stacku:
      </p>
      <ul>
        <li><strong>React &amp; TypeScript:</strong> Zajišťují stabilitu kódu, přehlednost a rychlý vývoj.</li>
        <li><strong>Vite:</strong> Bleskový bundler s okamžitým hot-reloadingem.</li>
        <li><strong>Tailwind CSS &amp; shadcn/ui:</strong> Skvělý systém komponent a čistý moderní design s tmavým tématem.</li>
      </ul>

      <h2>Co chystám dál?</h2>
      <p>
        V nejbližší době se můžete těšit na podrobnější články o mých projektech, postřehy ze světa selfhostingu 
        a možná i nějaké praktické návody pro začínající vývojáře.
      </p>
      <p>
        Díky za návštěvu a pokud máš jakýkoliv dotaz, připomínku nebo nápad, neváhej se mi ozvat přes kontaktní formulář!
      </p>
    `.trim(),
  },
];