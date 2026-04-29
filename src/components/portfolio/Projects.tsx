import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "DEAL or NO DEAL — Casino Platform",
    summary:
      "Interactive casino gaming interface with user registration, KYC, payment processing, and real-time gameplay. Built for high performance across devices.",
    tags: ["React.js", "Performance", "Responsive", "Real-time"],
    role: "UI Engineer",
  },
  {
    title: "Segmentation Admin Console",
    summary:
      "Administrative dashboard for monitoring user activity and financial KPIs, giving the management team real-time operational insight.",
    tags: ["React.js", "Dashboards", "Data Viz"],
    role: "UI Engineer",
  },
  {
    title: "GO SWIM — Online Training",
    summary:
      "Swim coaching platform with instructional video streaming and personalized resources for swimmers of all levels.",
    tags: ["React.js", "Node.js", "MongoDB", "REST APIs"],
    role: "Frontend & QA",
  },
  {
    title: "Employee Absence Tracking",
    summary:
      "Leave management system with employee requests, manager approvals, secure auth and real-time form validation.",
    tags: ["React.js", "Material UI", "Node.js", "MongoDB"],
    role: "Full-stack",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="text-xs font-mono text-primary tracking-widest uppercase">/ 04 — Selected work</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Projects I'm proud of.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A snapshot of products I've shipped — from gaming platforms to internal tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group relative glass rounded-3xl p-8 overflow-hidden shadow-card hover:border-primary/40 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-xs font-mono text-muted-foreground">
                    {String(i + 1).padStart(2, "0")} / {p.role}
                  </div>
                  <div className="w-10 h-10 rounded-full glass grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="mt-6 font-display text-2xl font-semibold leading-tight">
                  {p.title}
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{p.summary}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary/60 text-muted-foreground border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
