import { Code2, Palette, Server, Wrench } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const groups = [
  {
    icon: Code2,
    title: "Frontend",
    items: ["React.js", "JavaScript", "TypeScript", "Redux", "React Hooks", "jQuery", "HTML5", "CSS3"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Node.js", "Express", "RESTful APIs", "MongoDB", "MySQL", "JSON", "Auth / JWT"],
  },
  {
    icon: Palette,
    title: "UI / UX & Design",
    items: ["Figma", "Responsive Design", "Component Architecture", "Material UI", "Bootstrap"],
  },
  {
    icon: Wrench,
    title: "Cloud, Tools & Methods",
    items: ["AWS S3", "CloudFront", "Stripe", "Mailchimp", "Zencoder", "Git", "Agile / Scrum", "CI/CD"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="text-xs font-mono text-primary tracking-widest uppercase">/ 02 — Skills</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Tools I reach for.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A practical stack honed across casino platforms, dashboards, leave management systems, and
            agriculture web apps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 stagger">
          {groups.map((g, i) => (
            <div
              key={g.title}
              className="group relative glass gradient-border rounded-2xl p-6 card-hover shadow-card"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-radial pointer-events-none" />
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-secondary grid place-items-center text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-500">
                  <g.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{g.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary/60 text-muted-foreground border border-border"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
