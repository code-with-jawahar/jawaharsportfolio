import { Github, Linkedin, Mail } from "lucide-react";

const Navbar = () => {
  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container flex items-center justify-between py-5">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="grid place-items-center w-10 h-10 rounded-lg bg-gradient-primary text-primary-foreground font-display font-bold text-lg shadow-glow">
            JB
          </span>
          <span className="hidden sm:block font-display font-semibold tracking-tight">
            Jawahar<span className="text-primary">.</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-full transition-all duration-300 hover:bg-secondary/60"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/jawahar-babu-23a5a9215"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid place-items-center w-10 h-10 rounded-lg glass hover:text-primary transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:jawaharbabu2604@gmail.com"
            aria-label="Email"
            className="hidden sm:grid place-items-center w-10 h-10 rounded-lg glass hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
