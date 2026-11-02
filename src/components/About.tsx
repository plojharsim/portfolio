import { Code2, Lightbulb, Rocket } from "lucide-react";
import { getAge } from "@/lib/age";
import CountUp from "@/components/CountUp";
import { projects } from "@/data/projects";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Vášeň pro kód",
      description: "Miluji řešení problémů pomocí kódu a vytváření užitečných aplikací.",
    },
    {
      icon: Lightbulb,
      title: "Neustálé učení",
      description: "Každý den se učím nové technologie a zlepšuji své dovednosti.",
    },
    {
      icon: Rocket,
      title: "Ambiciózní cíle",
      description: "Chci se stát profesionálním vývojářem a pracovat na zajímavých projektech.",
    },
  ];

  const stats = [
    { value: new Date().getFullYear() - 2021, suffix: "", label: "let programuji" },
    { value: projects.filter((p) => p.status === "Vydáno").length, suffix: "", label: "vydaných projektů" },
    { value: 6, suffix: "", label: "certifikátů z kroužků" },
  ];

  return (
    <section id="o-mne" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div data-reveal className="text-center mb-16">
            <h2 className="text-sm font-mono text-primary mb-4">// O MNĚ</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Kdo <span className="text-gradient">jsem?</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Jsem Šimon, {getAge()}letý student z České republiky. Začal jsem programovat 
              z čisté zvědavosti a teď je to moje největší vášeň.
            </p>
          </div>

          {/* Highlights grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                data-reveal className="spotlight group p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card transition-all duration-300 card-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Statistiky */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} data-reveal className="text-center p-4 rounded-xl border border-border bg-card/40">
                <div className="text-3xl md:text-5xl font-bold text-gradient font-mono">
                  <CountUp to={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Code snippet */}
          <div data-reveal className="mt-16 p-6 rounded-xl border border-border bg-card/80 backdrop-blur-sm font-mono text-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-primary/80" />
              <span className="ml-2 text-muted-foreground">about.ts</span>
            </div>
            <pre className="text-muted-foreground overflow-x-auto">
              <code>
{`const plojharsim = {
  jmeno: "Šimon Plojhar",
  prezdivka: "plojharsim",
  vek: ${getAge()},
  lokace: "Česká republika 🇨🇿",
  jazyky: ["Python", "HTML", "JavaScript"],
  zajmy: ["Vibecoding", "Selfhosting", "Turistika"]
};`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;