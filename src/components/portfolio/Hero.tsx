import { ArrowRight, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />

      <div className="container relative">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Available for new opportunities
          </div>

          <h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            Building fast,
            <br />
            interactive
            <br />
            <span className="text-gradient bg-[length:200%_auto]" style={{ animation: "gradient-shift 8s ease-in-out infinite" }}>web interfaces.</span>
          </h1>

          <p
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            I'm <span className="text-foreground font-medium">Jawahar Babu D</span> — a Full-Stack Developer
            (frontend-focused) with 5+ years of experience building React applications end-to-end — from polished UIs
            to Node.js APIs, MongoDB data layers, and cloud integrations.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow rounded-full h-12 px-6 font-medium">
              <a href="#projects">
                View my work <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full h-12 px-6 glass border-border hover:bg-secondary">
              <a href="#contact">
                <Download className="mr-2 w-4 h-4" /> Get in touch
              </a>
            </Button>

            <div className="flex items-center gap-2 text-sm text-muted-foreground ml-auto">
              <MapPin className="w-4 h-4 text-primary" />
              Coimbatore, India
            </div>
          </div>

          <div
            className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            {[
              { k: "5+", v: "Years experience" },
              { k: "10+", v: "Projects shipped" },
              { k: "Full", v: "Stack capable" },
              { k: "MBA", v: "Info Systems" },
            ].map((s, i) => (
              <div
                key={s.v}
                className="border-l-2 border-primary/40 pl-4 hover:border-primary transition-all duration-500 hover:translate-x-1"
                style={{ animationDelay: `${400 + i * 80}ms` }}
              >
                <div className="font-display text-2xl md:text-3xl font-bold">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
