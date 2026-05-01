import { useEffect, useState } from "react";
import { ArrowDown, MapPin } from "lucide-react";

const lines = [
  { p: "$", t: "whoami" },
  { p: ">", t: "Jawahar Babu D — UI Engineer (5+ yrs)" },
  { p: "$", t: "cat skills.json" },
  { p: ">", t: "{ react, typescript, node, mongo, aws }" },
  { p: "$", t: "echo $STATUS" },
  { p: ">", t: "available_for_hire = true" },
];

const Hero = () => {
  const [typed, setTyped] = useState<string[]>([]);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    let cancelled = false;
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    const run = async () => {
      for (let i = 0; i < lines.length; i++) {
        const full = `${lines[i].p}  ${lines[i].t}`;
        for (let c = 0; c <= full.length; c++) {
          if (cancelled) return;
          await new Promise<void>((res) => {
            const id = setTimeout(() => res(), lines[i].p === "$" ? 28 : 18);
            timeouts.push(id);
          });
          setCurrent(full.slice(0, c));
        }
        if (cancelled) return;
        setTyped((prev) => [...prev, full]);
        setCurrent("");
        await new Promise<void>((res) => {
          const id = setTimeout(() => res(), 250);
          timeouts.push(id);
        });
      }
    };
    run();
    return () => { cancelled = true; timeouts.forEach(clearTimeout); };
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-grid-paper">
      <div className="container relative">
        {/* Top metadata strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground brutal-flat mb-8 text-[10px] md:text-xs font-mono">
          {[
            { k: "ROLE", v: "UI ENGINEER" },
            { k: "BASED", v: "COIMBATORE, IN" },
            { k: "EXP", v: "5+ YEARS" },
            { k: "STACK", v: "REACT · NODE · MONGO" },
          ].map((m) => (
            <div key={m.k} className="bg-background px-3 py-2">
              <div className="text-muted-foreground">{m.k}</div>
              <div className="font-semibold mt-0.5">{m.v}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: huge headline */}
          <div className="lg:col-span-7">
            <div className="text-xs font-mono text-muted-foreground mb-4">[ PORTFOLIO / 2025 ]</div>
            <h1 className="font-mono font-bold tracking-tighter leading-[0.85] text-[14vw] md:text-[9vw] lg:text-[7.5vw]">
              <span className="block">JAWAHAR</span>
              <span className="block">BABU<span className="text-primary">.</span></span>
              <span className="block font-serif-display font-normal tracking-tight text-[10vw] md:text-[7vw] lg:text-[5.5vw]">
                building things,
              </span>
              <span className="block font-serif-display font-normal tracking-tight text-[10vw] md:text-[7vw] lg:text-[5.5vw]">
                <span className="underline decoration-primary decoration-[6px] underline-offset-[10px]">on the web</span>.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Full-stack developer (frontend-leaning) crafting fast, accessible React apps —
              from polished UIs to Node.js APIs and cloud integrations.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#projects"
                className="inline-flex items-center gap-2 brutal-lg bg-primary text-primary-foreground px-6 py-3 font-bold text-sm uppercase tracking-wider">
                See the work <ArrowDown className="w-4 h-4" />
              </a>
              <a href="#contact"
                className="inline-flex items-center gap-2 brutal px-6 py-3 font-bold text-sm uppercase tracking-wider">
                Say hello
              </a>
              <span className="ml-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                <MapPin className="w-3.5 h-3.5" /> Coimbatore, IN
              </span>
            </div>
          </div>

          {/* Right: terminal */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="brutal-lg overflow-hidden">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-foreground text-background">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                <span className="ml-3 text-[11px] font-mono opacity-80">~/jawahar — zsh</span>
              </div>
              <div className="p-4 md:p-5 bg-background min-h-[260px] text-[13px] font-mono leading-relaxed">
                {typed.map((l, i) => (
                  <div key={i} className={l.startsWith("$") ? "" : "text-primary-foreground bg-foreground inline-block px-1 my-0.5"}>
                    {l.startsWith("$") ? (
                      <><span className="text-primary mr-1">{l.slice(0, 1)}</span>{l.slice(1)}</>
                    ) : l}
                  </div>
                ))}
                {current && (
                  <div className={current.startsWith("$") ? "blink-caret" : "text-primary-foreground bg-foreground inline-block px-1 blink-caret"}>
                    {current.startsWith("$") ? (
                      <><span className="text-primary mr-1">{current.slice(0, 1)}</span>{current.slice(1)}</>
                    ) : current}
                  </div>
                )}
              </div>
            </div>

            {/* stats */}
            <div className="grid grid-cols-2 mt-4 gap-3">
              {[
                { k: "10+", v: "PROJECTS SHIPPED" },
                { k: "5+", v: "YEARS BUILDING" },
                { k: "MBA", v: "INFO SYSTEMS" },
                { k: "∞", v: "CUPS OF CHAI" },
              ].map((s) => (
                <div key={s.v} className="brutal p-3">
                  <div className="text-2xl font-bold">{s.k}</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
