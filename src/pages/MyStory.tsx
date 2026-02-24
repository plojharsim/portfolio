import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BookOpen, Rocket, Code, Gamepad2, GraduationCap, Heart, Monitor, Printer, Keyboard, FileText } from "lucide-react";

const MyStory = () => {
  const vzdelaniBudoucnostiLink = (
    <a 
      href="https://vzdelanibudoucnosti.cz" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-primary hover:underline"
    >
      Vzdělání budoucnosti
    </a>
  );

  const CertificateLink = ({ href }: { href: string }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-1 text-primary hover:underline mt-2 text-sm"
    >
      <FileText className="h-4 w-4" /> Zobrazit certifikát
    </a>
  );

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
      year: "2021/22",
      title: "První řádky kódu (Python)",
      description: (
        <>
          Napsal jsem svůj první program na online kroužku Pythonu od {vzdelaniBudoucnostiLink}. Okamžitě mě to chytlo.
          <CertificateLink href="/certifikaty/python1_certifikat.pdf" />
        </>
      ),
      icon: Code,
    },
    {
      year: "2022",
      title: "První Python terminálová aplikace",
      description: "Vytvořil jsem svou první čistě Python terminálovou aplikaci na učení slovíček na angličtinu. Byla to moje první praktická aplikace.",
      icon: Code,
    },
    {
      year: "2022",
      title: "Základy webu (HTML/JS)",
      description: (
        <>
          Absolvoval jsem kroužek základů programování HTML a JavaScriptu.
          <a 
            href="/certifikaty/html_js_certifikat.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-primary hover:underline mt-2 text-sm"
          >
            <FileText className="h-4 w-4" /> Zobrazit certifikát
          </a>
        </>
      ),
      icon: Monitor,
    },
    {
      year: "2022/23",
      title: "Navazující Python 2",
      description: (
        <>
          Pokračoval jsem v online kroužku programování Python 2, opět od {vzdelaniBudoucnostiLink}.
          <CertificateLink href="/certifikaty/python2_certifikat.pdf" />
        </>
      ),
      icon: BookOpen,
    },
    {
      year: "2022/23",
      title: "Základy programovacího jazyka Java",
      description: (
        <>
          Online kroužek zaměřený na základy Javy. Naučil jsem se základní syntaxi a objektově orientované programování.
          <a 
            href="/certifikaty/java_certifikat.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-primary hover:underline mt-2 text-sm"
          >
            <FileText className="h-4 w-4" /> Zobrazit certifikát
          </a>
        </>
      ),
      icon: Code,
    },
    {
      year: "2023",
      title: "Kurz Psaní všemi deseti",
      description: "Absolvoval jsem kurz Psaní všemi deseti, což výrazně zrychlilo mou práci s kódem.",
      icon: Keyboard,
    },
    {
      year: "2023",
      title: "Kroužek 3D tisku",
      description: "Chodil jsem na kroužek 3D tisku v Techaku, kde jsem se naučil pracovat s modely a tiskárnou.",
      icon: Printer,
    },
    {
      year: "2023/24",
      title: "Navazující Python 3",
      description: (
        <>
          Další stupeň vzdělávání v Pythonu opět od {vzdelaniBudoucnostiLink}, kde jsem prohluboval své znalosti a řešil složitější logické úlohy.
          <CertificateLink href="/certifikaty/python3_certifikat.pdf" />
        </>
      ),
      icon: BookOpen,
    },
    {
      year: "2023/24",
      title: "Programování her v Unity",
      description: (
        <>
          Online kroužek Programování 2D a 3D her v Unity. Zaměřili jsme se hlavně na práci s UI Unity, přičemž C# kódy byly poskytovány.
          <a 
            href="/certifikaty/unity_certifikat.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-primary hover:underline mt-2 text-sm"
          >
            <FileText className="h-4 w-4" /> Zobrazit certifikát
          </a>
        </>
      ),
      icon: Gamepad2,
    },
    {
      year: "Jaro 2024",
      title: "První kroky s Linuxem",
      description: "Poprvé jsem zkoušel využívat operační systém Linux pro vývoj a experimentování.",
      icon: Code,
    },
    {
      year: "Nyní",
      title: "Neustálé učení",
      description: "Pokračuji v rozvoji svých dovedností a hledám nové výzvy, zejména v Reactu a TypeScriptu.",
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
                    <div className="text-muted-foreground">{item.description}</div>
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

      <Footer />
    </div>
  );
};

export default MyStory;