import { useEffect, useState } from "react";

const StatusBar = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const opts: Intl.DateTimeFormatOptions = {
        hour: "2-digit", minute: "2-digit", second: "2-digit",
        timeZone: "Asia/Kolkata", hour12: false,
      };
      setTime(new Intl.DateTimeFormat("en-GB", opts).format(d));
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 brutal-flat bg-background/90 backdrop-blur text-[11px] font-mono">
      <div className="container flex items-center justify-between py-1.5 gap-4">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(70_95%_45%)]" style={{ animation: "glow-pulse 2s infinite" }} />
            <span className="font-semibold">ONLINE</span>
          </span>
          <span className="hidden sm:inline text-muted-foreground">v2.0 — portfolio.tsx</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden md:inline text-muted-foreground">COIMBATORE / IST</span>
          <span className="font-semibold tabular-nums">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
