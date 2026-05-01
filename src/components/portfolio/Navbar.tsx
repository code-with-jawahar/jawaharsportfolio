import { useEffect, useState } from "react";
import { Linkedin, Mail } from "lucide-react";

const links = [
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((s): s is HTMLElement => !!s);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2 backdrop-blur-xl bg-background/60 border-b border-border/50" : "py-0"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="grid place-items-center w-10 h-10 rounded-lg bg-gradient-primary text-primary-foreground font-display font-bold text-lg shadow-glow group-hover:scale-110 transition-transform duration-500">
            JB
          </span>
          <span className="hidden sm:block font-display font-semibold tracking-tight">
            Jawahar<span className="text-primary">.</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1.5">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative px-4 py-1.5 text-sm rounded-full transition-all duration-300 ${
                  isActive
                    ? "text-primary-foreground bg-gradient-primary shadow-glow"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/jawahar-babu-23a5a9215"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid place-items-center w-10 h-10 rounded-lg glass hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:jawaharbabu2604@gmail.com"
            aria-label="Email"
            className="hidden sm:grid place-items-center w-10 h-10 rounded-lg glass hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
