import { useState, useEffect, useRef } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const NAV_LINKS = ["About", "Projects", "Experience", "Contact"];

const SKILLS = [
  { name: "React", level: 95, icon: "⚛️" },
  { name: "JavaScript", level: 92, icon: "🟨" },
  { name: "Node.js", level: 88, icon: "🟢" },
  { name: "MongoDB", level: 78, icon: "🍃" },
  { name: "PostgreSQL", level: 75, icon: "🐘" },
  { name: "Python", level: 70, icon: "🐍" },
  { name: "Figma", level: 80, icon: "🎨" },
 
];

const PROJECTS = [
  {
    title: "Kaali Global",
    desc: "Full-stack shopping app with real-time cart and admin dashboard with analytics.",
    tags: ["React", "Node.js", "MongoDB"],
    live: "https://kaaliglobal.com/",
    gradient: "linear-gradient(135deg, #667eea, #764ba2)",
    icon: "🛒",
  },
  {
    title: "Shanmugam Associates",
desc: "Premium construction and architectural company website showcasing luxury projects, modern infrastructure solutions, client portfolios, and seamless project inquiry management with a clean and responsive user experience.",    tags: ["Next.js", "TypeScript", "OpenAI", "Prisma"],
    live: "https://associatesshanmugam.in/",
    gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
    icon: "🤖",
  },
  {
    title: "Gain Wisdom",
desc: "Interactive e-learning platform designed to enhance knowledge and skill development through engaging video lectures, audio lessons, smart quizzes, and practice-based assessments with instant feedback for effective anytime learning.",    tags: ["React", "Socket.io", "PostgreSQL", "Redis"],
    live: "https://gainwissdom.in/",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
    icon: "📋",
  },
  {
    title: "Mozhimate",
desc: "Ancient Tamil and Sanskrit meaning dictionary application designed to help users explore traditional words, translations, cultural meanings, and linguistic connections through a simple and intelligent search experience.",    tags: ["React", "D3.js", "OpenWeather API"],
    live: "https://github.com/Ashok-achu/MOZHIMATE-APP",
    gradient: "linear-gradient(135deg, #43e97b, #38f9d7)",
    icon: "🌤️",
  },
  {
    title: "Hindusthan Hospitals",
desc: "Ongoing hospital management and healthcare website project focused on delivering a modern digital experience with patient services, department management, appointment systems, and responsive healthcare solutions.",    tags: ["Next.js", "Sanity.io", "TypeScript"],
  
    gradient: "linear-gradient(135deg, #fa709a, #fee140)",
    icon: "📝",
  },
];

const EXPERIENCE = [
   {
    role: "Senior Full-Stack  Developer",
    company: "Free-Lancer",
    period: " May,2024 – Present",
    location: "Coimbatore, TN",
    bullets: [
      "Has done many projects with Top clients around Coimbatore",
      "Reduced page load time by 60% via code splitting, lazy loading, and CDN tuning.",
      "Have a large team to work with multiple project from Scratch to Hosting",
    ],
    type: "work",
    color: "#7B6FFF",
  },

  {
    role: "Senior Full-Stack  Developer",
    company: "Hindusthan educational Institutions",
    period: " Jul,2024 – May,2025",
    location: "Coimbatore, TN",
    bullets: [
      "Architected React dashboards serving 50,000+ monthly active users.",
      "Reduced page load time by 60% via code splitting, lazy loading, and CDN tuning.",
      "Mentored a team of 4 junior developers and led bi-weekly design reviews.",
    ],
    type: "work",
    color: "#7B6FFF",
  },
  {
    role: "Frontend Developer",
    company: "Infinite Technology Services",
    period: "2023 – 2024",
    location: "Remote",
    bullets: [
      "Delivered 5+ pixel-perfect client websites from Figma designs.",
      "Integrated REST APIs and managed app state with Redux Toolkit.",
      "Built a reusable component library adopted across 3 client projects.",
    ],
    type: "work",
    color: "#00E5CC",
  },
  {
    role: "B.TECH. Information Technology",
    company: "Coimbatore Institute of Engineering and Technology",
    period: "2020 – 2024",
    location: "Coimbatore, TN",
    bullets: [
      "Graduated with First Class Distinction — CGPA 8.7/10.",
      "Final year project: Real-time face recognition attendance system (IEEE published).",
      
    ],
    type: "edu",
    color: "#FFB547",
  },
];

const STATS = [
  { num: "3+", label: "Years of Experience" },
  { num: "10+", label: "Projects Shipped" },
  { num: "8+", label: "Happy Clients" },
  { num: "5K+", label: "GitHub Commits" },
];

// ─── GLOBAL CSS ───────────────────────────────────────────────────────────────

const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Outfit:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #05050d;
    --bg2: #08081a;
    --surface: #0d0d20;
    --card: #111128;
    --card-h: #161635;
    --border: rgba(255,255,255,0.06);
    --border2: rgba(255,255,255,0.12);
    --a1: #7B6FFF;
    --a2: #FF6B9D;
    --a3: #00E5CC;
    --a4: #FFB547;
    --text: #F0F0FF;
    --text2: #9999BB;
    --text3: #555570;
    --fd: 'Syne', sans-serif;
    --fb: 'Outfit', sans-serif;
    --ease: cubic-bezier(0.16, 1, 0.3, 1);
    --r: 16px;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--fb);
    line-height: 1.7;
    overflow-x: hidden;
    cursor: none;
  }

  a, button { cursor: none; }

  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: linear-gradient(var(--a1), var(--a2)); border-radius: 2px; }
  ::selection { background: rgba(123,111,255,0.3); }

  /* Custom cursor */
  #cur {
    width: 10px; height: 10px; background: var(--a1);
    border-radius: 50%; position: fixed; top: 0; left: 0;
    pointer-events: none; z-index: 9999;
    transition: width 0.3s var(--ease), height 0.3s var(--ease), background 0.3s, transform 0.15s;
    mix-blend-mode: screen;
  }
  #cur.big { width: 44px; height: 44px; background: var(--a2); transform: translate(-17px,-17px); }

  /* Noise grain */
  body::after {
    content: '';
    position: fixed; inset: 0; z-index: 998; pointer-events: none;
    opacity: 0.025;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 180px;
  }

  /* Reveal animation */
  .rv { opacity: 0; transform: translateY(36px); transition: opacity 0.75s var(--ease), transform 0.75s var(--ease); }
  .rv.on { opacity: 1; transform: none; }
  .rv.d1 { transition-delay: 0.1s; }
  .rv.d2 { transition-delay: 0.2s; }
  .rv.d3 { transition-delay: 0.3s; }
  .rv.d4 { transition-delay: 0.4s; }

  /* Shimmer text */
  @keyframes shimmer {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
  }
  .shimmer {
    background: linear-gradient(90deg, var(--a1), var(--a3), var(--a2), var(--a4), var(--a1));
    background-size: 200% auto;
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    animation: shimmer 5s linear infinite;
  }

  /* Float */
  @keyframes float {
    0%,100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  /* Pulse dot */
  @keyframes pulseDot {
    0%,100% { box-shadow: 0 0 0 0 rgba(0,229,204,0.5); }
    50% { box-shadow: 0 0 0 8px rgba(0,229,204,0); }
  }

  /* Blink cursor */
  @keyframes blink { 0%,100%{opacity:1}50%{opacity:0} }

  /* Spin border */
  @keyframes spin { to { transform: rotate(360deg); } }

  /* Bar grow */
  @keyframes grow { from { width: 0; } }

  /* Gradient drift */
  @keyframes drift {
    0%,100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .field {
    width: 100%; padding: 14px 18px;
    background: rgba(255,255,255,0.04); border: 1px solid var(--border2);
    border-radius: 12px; color: var(--text); font-size: 14px;
    font-family: var(--fb); outline: none;
    transition: border-color 0.25s, background 0.25s;
  }
  .field:focus { border-color: var(--a1); background: rgba(123,111,255,0.05); }
  .field::placeholder { color: var(--text3); }

  @media(max-width:900px) {
    .deskonly { display: none !important; }
    .two-col { grid-template-columns: 1fr !important; }
  }
  @media(max-width:600px) {
    .two-sm { grid-template-columns: 1fr !important; }
    .flex-col-sm { flex-direction: column !important; align-items: stretch !important; }
  }
`;

// ─── CURSOR ───────────────────────────────────────────────────────────────────

function Cursor() {
  const ref = useRef(null);
  useEffect(() => {
    const move = (e) => {
      if (!ref.current) return;
      ref.current.style.left = e.clientX - 5 + "px";
      ref.current.style.top = e.clientY - 5 + "px";
    };
    window.addEventListener("mousemove", move);
    const grow = () => ref.current?.classList.add("big");
    const shrink = () => ref.current?.classList.remove("big");
    document.querySelectorAll("a,button,[data-hover]").forEach(el => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <div id="cur" ref={ref} />;
}

// ─── PARTICLES CANVAS ─────────────────────────────────────────────────────────

function Particles() {
  const canRef = useRef(null);
  useEffect(() => {
    const c = canRef.current;
    const ctx = c.getContext("2d");
    let w = c.width = window.innerWidth;
    let h = c.height = window.innerHeight;
    const pts = Array.from({ length: 55 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.4 + 0.4,
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(123,111,255,0.55)";
        ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(123,111,255,${0.1 * (1 - d / 110)})`;
            ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => { w = c.width = window.innerWidth; h = c.height = window.innerHeight; };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);
  return <canvas ref={canRef} style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", opacity: 0.55 }} />;
}

// ─── TYPING TEXT ──────────────────────────────────────────────────────────────

function TypingText({ words }) {
  const [text, setText] = useState("");
  const [wi, setWi] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[wi];
    let t;
    if (!del && text === word) t = setTimeout(() => setDel(true), 2000);
    else if (del && text === "") { setDel(false); setWi(i => (i + 1) % words.length); }
    else t = setTimeout(() => setText(del ? text.slice(0, -1) : word.slice(0, text.length + 1)), del ? 45 : 80);
    return () => clearTimeout(t);
  }, [text, del, wi, words]);
  return <span>{text}<span style={{ animation: "blink 1s infinite", color: "var(--a1)" }}>|</span></span>;
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────

function Navbar({ active }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 500,
        height: 68, padding: "0 clamp(16px,5%,80px)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(5,5,13,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        transition: "all 0.4s var(--ease)",
      }}>
        <a href="#hero" style={{
          fontFamily: "var(--fd)", fontWeight: 800, fontSize: 24,
          textDecoration: "none", letterSpacing: "-1px",
          background: "linear-gradient(135deg, var(--a1), var(--a3))",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>AM.</a>

        {/* Desktop */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="deskonly">
          {NAV_LINKS.map(n => {
            const isActive = active === n.toLowerCase();
            return (
              <a key={n} href={`#${n.toLowerCase()}`} style={{
                fontFamily: "var(--fd)", fontSize: 13, fontWeight: 600,
                color: isActive ? "#fff" : "var(--text2)", textDecoration: "none",
                padding: "7px 16px", borderRadius: 8, letterSpacing: "0.02em",
                background: isActive ? "rgba(123,111,255,0.15)" : "transparent",
                border: isActive ? "1px solid rgba(123,111,255,0.3)" : "1px solid transparent",
                transition: "all 0.25s",
              }}
              onMouseEnter={e => { if (!isActive) { e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; } }}
              onMouseLeave={e => { if (!isActive) { e.currentTarget.style.color = "var(--text2)"; e.currentTarget.style.background = "transparent"; } }}
              >{n}</a>
            );
          })}
          <a href="#contact" style={{
            fontFamily: "var(--fd)", fontSize: 13, fontWeight: 700, color: "#fff",
            textDecoration: "none", padding: "9px 22px", borderRadius: 10, marginLeft: 8,
            background: "linear-gradient(135deg, var(--a1), var(--a2))",
            boxShadow: "0 4px 16px rgba(123,111,255,0.35)",
            transition: "opacity 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(123,111,255,0.5)"; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(123,111,255,0.35)"; }}
          >Hire Me ✦</a>
        </div>

        {/* Burger */}
        <button onClick={() => setOpen(!open)} style={{
          background: "none", border: "none", display: "none", flexDirection: "column", gap: 5, padding: 6,
        }} className="burg" aria-label="menu">
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: "block", width: 24, height: 2, background: "var(--text)", borderRadius: 2,
              transition: "transform 0.3s",
              transform: open && i===0 ? "rotate(45deg) translate(5px,5px)" : open && i===1 ? "scaleX(0)" : open && i===2 ? "rotate(-45deg) translate(5px,-5px)" : "none",
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile overlay */}
      <div style={{
        position: "fixed", inset: 0, top: 68, zIndex: 499,
        background: "rgba(5,5,13,0.97)", backdropFilter: "blur(24px)",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 36,
        opacity: open ? 1 : 0, pointerEvents: open ? "all" : "none",
        transition: "opacity 0.35s",
      }}>
        {[...NAV_LINKS, "Contact"].map(n => (
          <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)} style={{
            fontSize: "clamp(28px,8vw,44px)", fontFamily: "var(--fd)", fontWeight: 800,
            color: "var(--text)", textDecoration: "none", letterSpacing: "-1.5px",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.color = "var(--a1)"}
          onMouseLeave={e => e.currentTarget.style.color = "var(--text)"}
          >{n}</a>
        ))}
      </div>
      <style>{`@media(max-width:900px){.burg{display:flex!important;}}`}</style>
    </>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="hero" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", padding: "100px clamp(16px,5%,80px) 80px",
      position: "relative", overflow: "hidden",
    }}>
      <Particles />

      {/* Mesh blobs */}
      {[
        { w:"65vw", h:"65vw", top:"-20%", left:"-15%", c:"rgba(123,111,255,0.14)" },
        { w:"55vw", h:"55vw", bottom:"-15%", right:"-10%", c:"rgba(255,107,157,0.11)" },
        { w:"45vw", h:"45vw", top:"30%", right:"15%", c:"rgba(0,229,204,0.07)" },
      ].map((b, i) => (
        <div key={i} style={{
          position: "absolute", width: b.w, height: b.h, borderRadius: "50%",
          top: b.top, left: b.left, bottom: b.bottom, right: b.right,
          background: `radial-gradient(ellipse, ${b.c} 0%, transparent 65%)`,
          filter: "blur(48px)", pointerEvents: "none", zIndex: 0,
          maxWidth: 800, maxHeight: 800,
        }} />
      ))}

      <div style={{ maxWidth: 900, width: "100%", position: "relative", zIndex: 1, textAlign: "center" }}>
        {/* Availability badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 40,
          padding: "10px 24px", borderRadius: 999,
          background: "rgba(0,229,204,0.07)", border: "1px solid rgba(0,229,204,0.22)",
          fontSize: 13, color: "var(--a3)", fontFamily: "var(--fd)", fontWeight: 600,
          letterSpacing: "0.04em", animation: "float 5s ease-in-out infinite",
        }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--a3)", animation: "pulseDot 2s infinite", display: "inline-block" }} />
          Open to new opportunities
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: "var(--fd)", fontWeight: 700,
          fontSize: "clamp(3.2rem,10vw,6.5rem)",
          lineHeight: 0.95, letterSpacing: "-3px", marginBottom: 12,
        }}>
          Hi, I'm{" "}
          <span className="shimmer">Ashok Manjeeswaran</span>
        </h1>

        {/* Role typing */}
        <div style={{
          fontFamily: "var(--fd)", fontWeight: 600,
          fontSize: "clamp(1.3rem,3.5vw,2.4rem)",
          color: "var(--text2)", letterSpacing: "-0.5px",
          marginBottom: 30, minHeight: "1.4em",
        }}>
          <TypingText words={["Full-Stack Developer", "UI/UX Enthusiast", "React Specialist", "Open Source Lover"]} />
        </div>

        <p style={{
          fontSize: "clamp(15px,2vw,17px)", color: "var(--text2)",
          maxWidth: 560, margin: "0 auto 52px", lineHeight: 1.85,
        }}>
          Building fast, accessible, and beautiful web applications — from pixel-perfect UIs to scalable backends. Based in Coimbatore, India 🇮🇳
        </p>

        {/* CTA */}
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 80 }} className="flex-col-sm">
          <a href="#projects" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "linear-gradient(135deg, var(--a1), var(--a2))",
            color: "#fff", padding: "16px 40px", borderRadius: 14,
            fontSize: 15, fontWeight: 700, textDecoration: "none", fontFamily: "var(--fd)",
            boxShadow: "0 8px 32px rgba(123,111,255,0.35)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform="translateY(-3px) scale(1.03)"; e.currentTarget.style.boxShadow="0 16px 48px rgba(123,111,255,0.5)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform=""; e.currentTarget.style.boxShadow="0 8px 32px rgba(123,111,255,0.35)"; }}
          >View My Work <span style={{fontSize:18}}>→</span></a>
          <a href="/resume.pdf" download style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "transparent", color: "var(--text)",
            padding: "16px 40px", borderRadius: 14,
            border: "1px solid var(--border2)", fontSize: 15, fontWeight: 700,
            textDecoration: "none", fontFamily: "var(--fd)",
            transition: "border-color 0.25s, background 0.25s, transform 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor="var(--a1)"; e.currentTarget.style.background="rgba(123,111,255,0.08)"; e.currentTarget.style.transform="translateY(-3px)"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor="var(--border2)"; e.currentTarget.style.background="transparent"; e.currentTarget.style.transform=""; }}
          >⬇ Download CV</a>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, maxWidth: 700, margin: "0 auto" }} className="stats-g">
          {STATS.map(({ num, label }) => (
            <div key={label} style={{
              padding: "22px 12px", borderRadius: 16,
              background: "rgba(255,255,255,0.025)", border: "1px solid var(--border)",
              textAlign: "center", transition: "border-color 0.25s, background 0.25s, transform 0.25s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(123,111,255,0.35)"; e.currentTarget.style.background="rgba(123,111,255,0.07)"; e.currentTarget.style.transform="translateY(-4px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.background="rgba(255,255,255,0.025)"; e.currentTarget.style.transform=""; }}
            >
              <div style={{ fontFamily: "var(--fd)", fontSize: "clamp(22px,4vw,32px)", fontWeight: 800, color: "var(--text)", letterSpacing: "-1px" }}>{num}</div>
              <div style={{ fontSize: 11, color: "var(--text2)", marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:600px){.stats-g{grid-template-columns:repeat(2,1fr)!important;} .flex-col-sm a{justify-content:center;}}`}</style>
    </section>
  );
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────

// ─── ABOUT ────────────────────────────────────────────────────────────────────

function About() {
  const barsRef = useRef([]);
  const secRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          barsRef.current.forEach((b, i) => {
            if (b) {
              setTimeout(() => {
                b.style.transition = "width 1s var(--ease)";
                b.style.width = b.dataset.w + "%";
              }, i * 50);
            }
          });
        }
      },
      { threshold: 0.15 }
    );

    if (secRef.current) obs.observe(secRef.current);

    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={secRef}
      style={{
        padding: "110px clamp(16px,5%,80px)",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <SectionHeader label="Who I Am" title="About Me" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.3fr",
          gap: 72,
          marginTop: 72,
          alignItems: "start",
        }}
        className="two-col"
      >
        {/* Avatar column */}
    {/* Avatar column */}
{/* Avatar column */}
<div className="rv">

  <div
    style={{
      width: "100%",
      maxWidth: 420,
      height: 520,
      margin: "0 auto",
      borderRadius: 28,
      overflow: "hidden",
      border: "1px solid var(--border)",
      background: "var(--card)",
      position: "relative",
    }}
  >
    <img
      src="/ashok.jpg"
      alt="Ashok Kumar"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
      }}
    />
  </div>

</div>
          

          {/* Info chips */}
          
              
          
        

        {/* Bio + skills */}
        <div>
          <div className="rv d1">
            <p
              style={{
                fontSize: 16,
                color: "var(--text2)",
                lineHeight: 1.9,
                marginBottom: 20,
              }}
            >
              I'm a passionate full-stack developer who loves turning
              complex problems into clean, elegant solutions. I thrive at
              the intersection of great engineering and beautiful design.
            </p>

            <p
              style={{
                fontSize: 16,
                color: "var(--text2)",
                lineHeight: 1.9,
                marginBottom: 44,
              }}
            >
              When I'm not pushing pixels or wrangling APIs, you'll find
              me contributing to open source, exploring the hills around
              Coimbatore, or obsessing over typography.
            </p>
          </div>

          <div className="rv d2">
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.14em",
                color: "var(--a1)",
                fontFamily: "var(--fd)",
                marginBottom: 24,
              }}
            >
              SKILLS & PROFICIENCY
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {SKILLS.map(({ name, level, icon }, i) => (
                <div key={name}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 7,
                      fontSize: 13,
                    }}
                  >
                    <span
                      style={{
                        color: "var(--text2)",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <span>{icon}</span>
                      {name}
                    </span>

                    <span
                      style={{
                        color: "var(--a3)",
                        fontWeight: 700,
                        fontFamily: "var(--fd)",
                      }}
                    >
                      {level}%
                    </span>
                  </div>

                  <div
                    style={{
                      height: 6,
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: 999,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      ref={(el) => (barsRef.current[i] = el)}
                      data-w={level}
                      style={{
                        height: "100%",
                        width: 0,
                        borderRadius: 999,
                        background:
                          i % 3 === 0
                            ? "linear-gradient(90deg, var(--a1), var(--a2))"
                            : i % 3 === 1
                            ? "linear-gradient(90deg, var(--a3), var(--a1))"
                            : "linear-gradient(90deg, var(--a2), var(--a4))",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// ─── PROJECTS ─────────────────────────────────────────────────────────────────

function Projects() {
  const [filter, setFilter] = useState("All");
  const allTags = ["All", ...new Set(PROJECTS.flatMap(p => p.tags))].slice(0, 9);
  const shown = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.tags.includes(filter));

  return (
    <section id="projects" style={{
      padding: "110px clamp(16px,5%,80px)",
      background: "var(--surface)", position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        width: "80vw", height: "80vw", maxWidth: 700, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(255,107,157,0.04) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <SectionHeader label="My Work" title="Featured Projects" />

        {/* Filter */}
        <div className="rv" style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", margin: "44px 0 60px" }}>
          {allTags.map(t => (
            <button key={t} onClick={() => setFilter(t)} style={{
              padding: "8px 20px", borderRadius: 999, border: "none",
              fontSize: 12, fontWeight: 700, fontFamily: "var(--fd)", letterSpacing: "0.04em",
              background: filter === t ? "linear-gradient(135deg,var(--a1),var(--a2))" : "var(--card)",
              color: filter === t ? "#fff" : "var(--text2)",
              border: filter === t ? "none" : "1px solid var(--border)",
              boxShadow: filter === t ? "0 4px 20px rgba(123,111,255,0.35)" : "none",
              transition: "all 0.25s",
            }}>{t}</button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,330px),1fr))", gap: 24 }}>
          {shown.map(p => <ProjectCard key={p.title} {...p} />)}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  desc,
  tags,
  live,
  github,
  gradient,
  icon,
}) {
  const [hov, setHov] = useState(false);

  return (
    <div
      className="rv"
      style={{
        background: "var(--card)",
        border: `1px solid ${
          hov
            ? "rgba(123,111,255,0.35)"
            : "var(--border)"
        }`,
        borderRadius: 22,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition:
          "transform 0.35s var(--ease), box-shadow 0.35s, border-color 0.25s",
        transform: hov ? "translateY(-8px)" : "none",
        boxShadow: hov
          ? "0 24px 60px rgba(0,0,0,0.4)"
          : "0 4px 20px rgba(0,0,0,0.2)",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Gradient banner */}
      <div
        style={{
          height: 150,
          background: gradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 54,
          position: "relative",
          overflow: "hidden",
          transition: "filter 0.35s",
          filter: hov
            ? "brightness(1.15) saturate(1.2)"
            : "brightness(0.85)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%)",
          }}
        />

        <span
          style={{
            position: "relative",
            zIndex: 1,
            filter:
              "drop-shadow(0 4px 16px rgba(0,0,0,0.35))",
            transition: "transform 0.35s",
            transform: hov
              ? "scale(1.15)"
              : "scale(1)",
          }}
        >
          {icon}
        </span>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "24px 26px 28px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--fd)",
            fontWeight: 700,
            fontSize: 18,
            marginBottom: 10,
            color: "var(--text)",
            letterSpacing: "-0.3px",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontSize: 14,
            color: "var(--text2)",
            lineHeight: 1.75,
            flex: 1,
            marginBottom: 20,
          }}
        >
          {desc}
        </p>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            marginBottom: 24,
          }}
        >
          {tags.map((t) => (
            <span
              key={t}
              style={{
                fontSize: 11,
                padding: "4px 12px",
                borderRadius: 999,
                background:
                  "rgba(123,111,255,0.1)",
                color: "var(--a1)",
                border:
                  "1px solid rgba(123,111,255,0.22)",
                fontFamily: "var(--fd)",
                fontWeight: 600,
                letterSpacing: "0.03em",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: 10 }}>

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                textAlign: "center",
                padding: "11px",
                background:
                  "linear-gradient(135deg, var(--a1), var(--a2))",
                color: "#fff",
                borderRadius: 12,
                textDecoration: "none",
                fontSize: 12,
                fontWeight: 700,
                fontFamily: "var(--fd)",
                boxShadow:
                  "0 4px 16px rgba(123,111,255,0.3)",
                transition:
                  "opacity 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity =
                  "0.85";

                e.currentTarget.style.boxShadow =
                  "0 6px 24px rgba(123,111,255,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";

                e.currentTarget.style.boxShadow =
                  "0 4px 16px rgba(123,111,255,0.3)";
              }}
            >
              Live Demo ↗
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                textAlign: "center",
                padding: "11px",
                background: "transparent",
                color: "var(--text2)",
                border:
                  "1px solid var(--border2)",
                borderRadius: 12,
                textDecoration: "none",
                fontSize: 12,
                fontWeight: 700,
                fontFamily: "var(--fd)",
                transition:
                  "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  "var(--a1)";

                e.currentTarget.style.color =
                  "var(--text)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  "var(--border2)";

                e.currentTarget.style.color =
                  "var(--text2)";
              }}
            >
              ⌥ GitHub
            </a>
          )}

        </div>
      </div>
    </div>
  );
}

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────

function Experience() {
  return (
    <section id="experience" style={{ padding: "110px clamp(16px,5%,80px)" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <SectionHeader label="My Journey" title="Experience & Education" />
        <div style={{ marginTop: 72, position: "relative" }}>
          <div style={{
            position: "absolute", left: 23, top: 0, bottom: 0, width: 2,
            background: "linear-gradient(to bottom, var(--a1), var(--a2), var(--a3))",
            opacity: 0.2, borderRadius: 2,
          }} />
          {EXPERIENCE.map((item, i) => (
            <div key={i} className={`rv d${i}`} style={{ display: "flex", gap: 28, marginBottom: 36 }}>
              <div style={{
                width: 48, height: 48, borderRadius: "50%", flexShrink: 0,
                background: `${item.color}22`, border: `2px solid ${item.color}55`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20, zIndex: 1, marginTop: 4,
                boxShadow: `0 0 28px ${item.color}33`,
              }}>{item.type === "work" ? "💼" : "🎓"}</div>

              <div style={{
                flex: 1, background: "var(--card)", border: "1px solid var(--border)",
                borderRadius: 20, padding: "28px 30px",
                transition: "border-color 0.3s, transform 0.3s var(--ease)",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = item.color + "44"; e.currentTarget.style.transform = "translateX(8px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = ""; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10, marginBottom: 8 }}>
                  <div>
                    <h3 style={{ fontFamily: "var(--fd)", fontWeight: 700, fontSize: 19, color: "var(--text)", letterSpacing: "-0.4px" }}>{item.role}</h3>
                    <p style={{ fontSize: 14, color: item.color, fontWeight: 600, marginTop: 3 }}>{item.company}</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 5, alignItems: "flex-end" }}>
                    <span style={{
                      fontSize: 11, color: "var(--text2)", padding: "4px 14px",
                      background: "var(--surface)", borderRadius: 999, border: "1px solid var(--border)",
                      fontFamily: "var(--fd)", whiteSpace: "nowrap",
                    }}>{item.period}</span>
                    <span style={{ fontSize: 11, color: "var(--text3)" }}>📍 {item.location}</span>
                  </div>
                </div>
                <ul style={{ paddingLeft: 18, marginTop: 14 }}>
                  {item.bullets.map((b, j) => (
                    <li key={j} style={{ fontSize: 14, color: "var(--text2)", marginBottom: 8, lineHeight: 1.75 }}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handle = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  // WHATSAPP SUBMIT
  const submit = (e) => {
    e.preventDefault();

    setLoading(true);

    const whatsappMessage = `Hello Ashok,

Name: ${form.name}
Email: ${form.email}

Message:
${form.message}`;

    const whatsappURL = `https://wa.me/916380015975?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    setTimeout(() => {
      setLoading(false);

      setStatus("ok");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 800);
  };

  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/Ashok-achu",
      icon: "🐙",
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: "💼",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/916380015975",
      icon: "💬",
    },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: "110px clamp(16px,5%,80px)",
        background: "var(--surface)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "-25%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70vw",
          height: "70vw",
          maxWidth: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(123,111,255,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <SectionHeader
          label="Get In Touch"
          title={"Let's Build Something\nAmazing Together"}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 60,
            marginTop: 72,
          }}
          className="two-col"
        >
          {/* LEFT */}
          <div className="rv">
            <p
              style={{
                fontSize: 16,
                color: "var(--text2)",
                lineHeight: 1.9,
                marginBottom: 44,
              }}
            >
              Have a project in mind, a collaboration idea, or just want
              to say hello? Reach out anytime through WhatsApp.
            </p>

            {[
              {
                label: "Mail",
                val: "ashokkumarmanjeeswaran@gmail.com",
                col: "var(--a1)",
              },
              {
                label: "Location",
                val: "Coimbatore, Tamil Nadu 🇮🇳",
                col: "var(--a2)",
              },
              {
                label: "Status",
                val: "✅ Open to opportunities",
                col: "var(--a3)",
              },
            ].map(({ label, val, col }) => (
              <div
                key={label}
                style={{
                  padding: "18px 22px",
                  borderRadius: 14,
                  marginBottom: 12,
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  transition: "border-color 0.25s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = col + "44")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "var(--border)")
                }
              >
                <p
                  style={{
                    fontSize: 10,
                    color: "var(--text3)",
                    letterSpacing: "0.12em",
                    marginBottom: 5,
                    fontFamily: "var(--fd)",
                  }}
                >
                  {label.toUpperCase()}
                </p>

                <p
                  style={{
                    fontSize: 15,
                    color: col,
                    fontWeight: 600,
                  }}
                >
                  {val}
                </p>
              </div>
            ))}

            {/* SOCIALS */}
            <div style={{ marginTop: 32 }}>
              <p
                style={{
                  fontSize: 11,
                  color: "var(--text3)",
                  letterSpacing: "0.1em",
                  fontFamily: "var(--fd)",
                  marginBottom: 14,
                }}
              >
                FIND ME ON
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 10,
                  flexWrap: "wrap",
                }}
              >
                {socials.map(({ name, href, icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={name}
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 13,
                      background: "var(--card)",
                      border: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 20,
                      textDecoration: "none",
                      transition:
                        "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--a1)";
                      e.currentTarget.style.transform =
                        "translateY(-5px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 24px rgba(123,111,255,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor =
                        "var(--border)";
                      e.currentTarget.style.transform = "";
                      e.currentTarget.style.boxShadow = "";
                    }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="rv d2">
            <form
              onSubmit={submit}
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 24,
                padding: "40px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                }}
                className="two-sm"
              >
                <div>
                  <label
                    style={{
                      fontSize: 10,
                      color: "var(--text3)",
                      letterSpacing: "0.1em",
                      display: "block",
                      marginBottom: 8,
                      fontFamily: "var(--fd)",
                    }}
                  >
                    YOUR NAME
                  </label>

                  <input
                    className="field"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handle}
                    required
                  />
                </div>

                <div>
                  <label
                    style={{
                      fontSize: 10,
                      color: "var(--text3)",
                      letterSpacing: "0.1em",
                      display: "block",
                      marginBottom: 8,
                      fontFamily: "var(--fd)",
                    }}
                  >
                    EMAIL
                  </label>

                  <input
                    className="field"
                    type="email"
                    name="email"
                    placeholder="john@email.com"
                    value={form.email}
                    onChange={handle}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    fontSize: 10,
                    color: "var(--text3)",
                    letterSpacing: "0.1em",
                    display: "block",
                    marginBottom: 8,
                    fontFamily: "var(--fd)",
                  }}
                >
                  MESSAGE
                </label>

                <textarea
                  className="field"
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handle}
                  required
                  style={{ resize: "vertical" }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  background: loading
                    ? "rgba(123,111,255,0.4)"
                    : "linear-gradient(135deg, var(--a1), var(--a2))",
                  color: "#fff",
                  border: "none",
                  borderRadius: 14,
                  padding: "16px 32px",
                  fontSize: 15,
                  fontWeight: 700,
                  fontFamily: "var(--fd)",
                  letterSpacing: "0.03em",
                  boxShadow:
                    "0 6px 24px rgba(123,111,255,0.35)",
                  transition: "transform 0.2s, opacity 0.2s",
                }}
              >
                {loading ? "Opening WhatsApp..." : "Send via WhatsApp ✦"}
              </button>

              {status === "ok" && (
                <div
                  style={{
                    padding: "14px 20px",
                    borderRadius: 12,
                    background: "rgba(0,229,204,0.08)",
                    border:
                      "1px solid rgba(0,229,204,0.3)",
                    color: "var(--a3)",
                    fontSize: 14,
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  ✅ Redirected to WhatsApp successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      padding: "36px clamp(16px,5%,80px)",
      display: "flex", justifyContent: "space-between",
      alignItems: "center", flexWrap: "wrap", gap: 16,
    }}>
      <span style={{
        fontFamily: "var(--fd)", fontWeight: 800, fontSize: 22, letterSpacing: "-1px",
        background: "linear-gradient(135deg, var(--a1), var(--a3))",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
      }}>AM.</span>
      <p style={{ fontSize: 13, color: "var(--text3)" }}>
        Built with ❤️ by <span style={{ color: "var(--a1)", fontWeight: 600 }}>Ashok Manjeeswaran</span> · {new Date().getFullYear()}
      </p>
      <a href="#hero" style={{
        fontSize: 12, fontFamily: "var(--fd)", fontWeight: 700,
        color: "var(--text2)", textDecoration: "none",
        padding: "8px 18px", borderRadius: 8, border: "1px solid var(--border)",
        transition: "border-color 0.2s, color 0.2s",
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor="var(--a1)"; e.currentTarget.style.color="var(--text)"; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.color="var(--text2)"; }}
      >↑ Back to top</a>
    </footer>
  );
}

// ─── SHARED SECTION HEADER ────────────────────────────────────────────────────

function SectionHeader({ label, title }) {
  return (
    <div className="rv" style={{ textAlign: "center" }}>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 18,
        fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
        color: "var(--a3)", fontFamily: "var(--fd)",
        padding: "6px 18px", borderRadius: 999,
        background: "rgba(0,229,204,0.07)", border: "1px solid rgba(0,229,204,0.22)",
      }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--a3)", animation: "pulseDot 2s infinite", display: "inline-block" }} />
        {label}
      </div>
      <h2 style={{
        fontFamily: "var(--fd)", fontWeight: 800,
        fontSize: "clamp(2rem,5vw,3.8rem)",
        letterSpacing: "-2px", color: "var(--text)", lineHeight: 1.05,
        whiteSpace: "pre-line",
      }}>{title}</h2>
    </div>
  );
}

// ─── SCROLL REVEAL ────────────────────────────────────────────────────────────

function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("on"); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".rv").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  });
}

// ─── APP ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [active, setActive] = useState("hero");
  useScrollReveal();

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = GLOBAL_CSS;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    const ids = ["hero", ...NAV_LINKS.map(n => n.toLowerCase())];
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.35 }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Cursor />
      <Navbar active={active} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}