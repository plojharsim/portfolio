import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import BlogSection from "@/components/BlogSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://plojharsim.cz/#website",
        "url": "https://plojharsim.cz/",
        "name": "plojharsim",
        "description": "Řešení digitálních problémů pro lidi a malé firmy",
        "inLanguage": "cs"
      },
      {
        "@type": "Person",
        "@id": "https://plojharsim.cz/#person",
        "name": "Šimon Plojhar",
        "alternateName": "plojharsim",
        "url": "https://plojharsim.cz/",
        "image": "https://plojharsim.cz/og-image.png",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Příbram",
          "addressCountry": "CZ"
        },
        "sameAs": [
          "https://github.com/plojharsim",
          "https://youtube.com/@plojharsim",
          "https://discord.com/users/1305887518448685078"
        ],
        "jobTitle": "Řešitel digitálních problémů & tvůrce"
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://plojharsim.cz/#service",
        "name": "plojharsim - Řešení digitálních problémů",
        "url": "https://plojharsim.cz/",
        "areaServed": ["Příbram", "Příbramsko", "Česká republika"],
        "description": "Tvorba webů, webových aplikací, automatizace procesů, AI integrace a digitální nástroje na míru pro lidi a malé firmy.",
        "founder": { "@id": "https://plojharsim.cz/#person" },
        "email": "kontakt@plojharsim.cz"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="plojharsim | Řešení digitálních problémů pro lidi a malé firmy"
        description="Pomáhám lidem a malým firmám řešit digitální problémy. Tvorba webů, webové aplikace, automatizace, AI integrace a digitální nástroje na míru."
        keywords="tvorba webů, webové aplikace, automatizace, AI řešení, Příbram, Příbramsko, digitální nástroje, software na míru, Šimon Plojhar, plojharsim"
        canonicalUrl="https://plojharsim.cz/"
        schema={homepageSchema}
      />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <BlogSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;