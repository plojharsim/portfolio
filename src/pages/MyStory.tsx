import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BookOpen, Rocket, Code, Gamepad2, GraduationCap, Heart } from "lucide-react";

const MyStory = () => {
  const timeline = [
    {
      year: "2010",
      title: "Narodil jsem se",
      description: "Můj příběh začíná v České republice.",
      icon: Heart,
    },
    {
      year: "2017",
      title: "První setkání s počítači",
      description: "Začal jsem objevovat svět technologií a her.",
      icon: Gamepad2,
    },
    {
      year: "2021",
      title: "První řádky kódu",
      description: "Napsal jsem svůj první program a okamžitě mě to chytlo.",
      icon: Code,
    },
    {
      year: "2022",
      title: "Vážnější programování",
      description: "Začal jsem se učit webové technologie - HTML, CSS, JavaScript.",
      icon: BookOpen,
    },
    {
      year: "2024",
      title: "Vlastní projekty",
      description: "Vytvořil jsem své první skutečné projekty a webové aplikace.",
      icon: Rocket,
    },
    {
      year: "Nyní",
      title: "Neustálé učení",
      description: "Pokračuji v rozvoji svých dovedností a hledám nové výzvy.",
      icon: GraduationCap,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Můj <span className="text-gradient">Příběh</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Od zvědavého kluka k mladému programátorovi. Tady je moje cesta světem technologií.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
            
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"}`}>
                  <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
            <blockquote className="text-2xl md:text-3xl font-medium italic text-foreground mb-4">
              "Každý expert byl kdysi začátečník."
            </blockquote>
            <p className="text-muted-foreground">— Moje motto</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MyStory;