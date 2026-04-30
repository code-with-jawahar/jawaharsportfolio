const roles = [
  {
    company: "United Interactive LLC · iPro Games India Pvt Ltd",
    role: "UI Engineer",
    location: "Coimbatore, India",
    period: "Dec 2022 — Present",
    bullets: [
      "Developed interactive UIs in React.js & jQuery for the DOND Casino platform and a segmentation admin console.",
      "Designed an administrative dashboard for monitoring user activity and financial metrics in real time.",
      "Optimized application performance and scalability through targeted refactoring and best-practice rollouts.",
      "Translated wireframes into high-quality components in close collaboration with designers and backend developers.",
      "Led code reviews and usability testing, feeding insights back into the product roadmap.",
    ],
  },
  {
    company: "Aximsoft India Pvt Ltd",
    role: "Jr Full-Stack Developer — Applications",
    location: "Coimbatore, India",
    period: "Dec 2020 — Oct 2022",
    bullets: [
      "Built front-end solutions in JavaScript & React, integrating REST APIs backed by MongoDB.",
      "Implemented responsive layouts ensuring cross-browser compatibility and accessibility.",
      "Integrated AWS (S3, CloudFront), Mailchimp, Stripe and Zencoder for end-to-end functionality.",
      "Doubled as a QA tester within an Agile/Scrum team, ensuring high-quality releases.",
      "Contributed to multiple products including agriculture platforms.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono text-primary tracking-widest uppercase">/ 03 — Experience</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
            Where I've built things.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-3 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-border to-transparent" />

          <div className="space-y-12">
            {roles.map((r, i) => (
              <article key={r.company} className="relative pl-12 md:pl-16 group" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="absolute left-0 md:left-1 top-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-background border-2 border-primary grid place-items-center shadow-glow group-hover:scale-110 transition-transform duration-500">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                </div>

                <div className="glass gradient-border rounded-2xl p-6 md:p-8 shadow-card card-hover">
                  <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-semibold">{r.role}</h3>
                      <p className="text-primary text-sm md:text-base mt-1">{r.company}</p>
                    </div>
                    <div className="text-right text-xs font-mono text-muted-foreground">
                      <div>{r.period}</div>
                      <div className="mt-1">{r.location}</div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {r.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-muted-foreground leading-relaxed">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
