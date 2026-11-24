import { Sparkles } from "lucide-react";

const ComingSoon = () => {
  return (
    <section id="brzy" className="py-24 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] animate-pulse-glow pointer-events-none" />

      <div className="container relative z-10 px-4">
        <div
          data-reveal
          className="max-w-3xl mx-auto text-center p-10 md:p-14 rounded-3xl border border-primary/30 bg-card/60 backdrop-blur-sm glow"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-mono text-primary">// BRZY</span>
          </div>

          <h3 className="text-4xl md:text-6xl font-bold mb-6">
            Po Novém roce se chystá <span className="text-gradient">něco velkého</span>
          </h3>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Na něčem pracuji a nemůžu se dočkat, až vám to ukážu. Sledujte web nebo mě na{" "}
            <a
              href="https://github.com/plojharsim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              GitHubu
            </a>
            , ať vám to neuteče.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
