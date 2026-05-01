const items = [
  "React.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Tailwind",
  "Redux",
  "REST APIs",
  "AWS",
  "Stripe",
  "Figma",
  "Next-gen UI",
  "Performance",
];

const Marquee = () => {
  return (
    <div className="relative overflow-hidden border-y border-border/60 bg-card/40 backdrop-blur-sm py-5">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <div className="flex gap-12 marquee-track whitespace-nowrap">
        {[...items, ...items, ...items].map((it, i) => (
          <span
            key={i}
            className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-muted-foreground/70 hover:text-primary transition-colors flex items-center gap-12"
          >
            {it}
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
