import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl glass p-10 md:p-16 shadow-elegant">
          <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />

          <div className="relative max-w-3xl">
            <div className="text-xs font-mono text-primary tracking-widest uppercase">/ 05 — Contact</div>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold tracking-tighter leading-none">
              Let's build
              <br />
              <span className="text-gradient">something great.</span>
              <span className="text-primary animate-blink">_</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              I'm open to UI Engineer and Frontend Developer roles, freelance gigs, and interesting collaborations.
              Drop a message — I usually respond within a day.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow rounded-full h-12 px-6">
                <a href="mailto:jawaharbabu2604@gmail.com">
                  <Mail className="mr-2 w-4 h-4" /> jawaharbabu2604@gmail.com
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-12 px-6 glass border-border hover:bg-secondary">
                <a href="tel:+919629398845">
                  <Phone className="mr-2 w-4 h-4" /> +91 96293 98845
                </a>
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <a
                href="https://github.com/code-with-jawahar"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid place-items-center w-11 h-11 rounded-xl glass hover:text-primary hover-lift transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/jawahar-babu-23a5a9215"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid place-items-center w-11 h-11 rounded-xl glass hover:text-primary hover-lift transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:jawaharbabu2604@gmail.com"
                aria-label="Email"
                className="grid place-items-center w-11 h-11 rounded-xl glass hover:text-primary hover-lift transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="grid place-items-center w-7 h-7 rounded-md bg-gradient-primary text-primary-foreground font-display font-bold text-xs">
              JB
            </span>
            <span>© {new Date().getFullYear()} Jawahar Babu D — Crafted with React.</span>
          </div>
          <div className="font-mono text-xs">Coimbatore, India · UI Engineer</div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
