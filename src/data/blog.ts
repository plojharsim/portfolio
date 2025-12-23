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
    id: "proc-jsem-zacal-programovat",
    title: "Proč jsem začal programovat v 12 letech",
    excerpt: "Moje cesta k prvnímu řádku kódu a co mě na tom nejvíc baví.",
    date: "15. března 2024",
    readTime: "5 min čtení",
    category: "Osobní",
    author: "Šimon Plojhar",
    content: `
      <p>Programování pro mě nebylo jen o psaní kódu. Byla to cesta k pochopení toho, jak funguje svět kolem nás, který je stále více digitální.</p>
      
      <h2>Začátek cesty</h2>
      <p>Všechno to začalo, když jsem se začal zajímat o to, jak se vlastně tvoří webové stránky, které denně navštěvuji. Ta možnost vytvořit něco z ničeho jen pomocí klávesnice mě naprosto fascinovala.</p>
      
      <h2>Proč právě teď?</h2>
      <p>Věřím, že čím dříve člověk začne, tím přirozenější pro něj technologie budou. V 15 letech mám dostatek času na experimentování a učení se z chyb, aniž by mě tlačily pracovní termíny.</p>
      
      <blockquote>
        "Programování je nejbližší věc k magii, kterou v našem světě máme."
      </blockquote>
      
      <h2>Co dál?</h2>
      <p>Mým cílem je neustále se zlepšovat v Reactu a TypeScriptu. Každý projekt mě posouvá o kus dál a těším se na to, co přinese budoucnost.</p>
    `,
  },
];