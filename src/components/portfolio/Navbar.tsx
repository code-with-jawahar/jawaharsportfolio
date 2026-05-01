import { useEffect, useState } from "react";
import { Linkedin, Mail, Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about", id: "about", num: "01" },
  { label: "Skills", href: "#skills", id: "skills", num: "02" },
  { label: "Experience", href: "#experience", id: "experience", num: "03" },
  { label: "Work", href: "#projects", id: "projects", num: "04" },
  { label: "Contact", href: "#contact", id: "contact", num: "05" },
];

const Navbar = () => {
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter((s): s is HTMLElement => !!s);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 brutal-flat bg-background/90 backdrop-blur-md">
      <div className="container flex items-center justify-between py-3">
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center w-9 h-9 brutal-flat bg-foreground text-background font-bold text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            JB
          </span>
          <span className="hidden sm:flex flex-col text-xs leading-tight">
            <span className="font-semibold">JAWAHAR_BABU.D</span>
            <span className="text-muted-foreground">UI_ENGINEER</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`px-3 py-1.5 text-xs font-mono transition-colors flex items-center gap-1.5 ${
                  isActive ? "bg-foreground text-background" : "hover:bg-foreground/10"
                }`}
              >
                <span className="opacity-60">{l.num}</span>
                <span className="font-semibold">{l.label.toUpperCase()}</span>
              </a>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a href="https://www.linkedin.com/in/jawahar-babu-23a5a9215" target="_blank" rel="noreferrer" aria-label="LinkedIn"
            className="grid place-items-center w-9 h-9 brutal-flat hover:bg-primary transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="mailto:jawaharbabu2604@gmail.com" aria-label="Email"
            className="grid place-items-center w-9 h-9 brutal-flat hover:bg-primary transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden grid place-items-center w-9 h-9 brutal-flat" aria-label="Menu">
          {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t-[1.5px] border-foreground bg-background">
          <div className="container py-3 flex flex-col">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="py-2 text-sm font-mono flex items-center gap-3 border-b border-foreground/10 last:border-0">
                <span className="text-muted-foreground">{l.num}</span>
                <span className="font-semibold">{l.label.toUpperCase()}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
