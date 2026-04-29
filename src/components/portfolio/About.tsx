const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <div className="text-xs font-mono text-primary tracking-widest uppercase">/ 01 — About</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
              A frontend developer who cares about the details.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a UI Engineer currently at <span className="text-foreground">United Interactive LLC / iPro Games</span>,
              where I build interactive interfaces for casino gaming and segmentation admin consoles using React and jQuery.
            </p>
            <p>
              My approach is grounded in component-driven architecture, performance, and tight collaboration with
              designers and backend teams. I enjoy turning ambiguous requirements into clean, accessible UIs that
              real users — and stakeholders — actually love.
            </p>
            <p>
              Outside of shipping features, I review code, run usability tests, and obsess over making dashboards
              feel responsive and trustworthy.
            </p>

            <div className="pt-6 grid sm:grid-cols-2 gap-4">
              <div className="glass rounded-2xl p-5">
                <div className="text-xs text-muted-foreground">Education</div>
                <div className="mt-1 font-medium">MBA — Information Systems</div>
                <div className="text-sm text-muted-foreground">Bharathiyar University · 2021–2023</div>
              </div>
              <div className="glass rounded-2xl p-5">
                <div className="text-xs text-muted-foreground">Foundation</div>
                <div className="mt-1 font-medium">B.Sc. Computer Science</div>
                <div className="text-sm text-muted-foreground">Dr G R Damodaran College · 2017–2020</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
