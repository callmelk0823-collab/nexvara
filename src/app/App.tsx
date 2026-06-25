import { useState, useEffect, useRef } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import {
  Zap, Shield, Globe, Layers, BarChart3, Lock, ArrowRight,
  ChevronDown, Star, Check, Menu, X, Cpu, Database, Cloud,
  Sparkles, TrendingUp, Users, Award, MessageSquare, Mail,
  Phone, MapPin, Twitter, Github, Linkedin, ChevronLeft, ChevronRight
} from "lucide-react";

// ── Utility ────────────────────────────────────────────────────────────────
function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

// ── Nav ────────────────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = ["Features", "Services", "Pricing", "Testimonials", "FAQ", "Contact"];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-xl bg-[rgba(4,4,15,0.85)] border-b border-[rgba(79,110,247,0.15)] shadow-[0_4px_30px_rgba(79,110,247,0.05)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4f6ef7] to-[#7c3aed] flex items-center justify-center shadow-[0_0_20px_rgba(79,110,247,0.5)]">
            <Zap size={16} className="text-white" />
          </div>
          <span style={{ fontFamily: "'Exo 2', sans-serif" }} className="text-white font-bold text-lg tracking-tight">
            Nexvara
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[#7b80a8] hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {l}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#7b80a8] hover:text-white text-sm font-medium transition-colors px-4 py-2">
            Sign in
          </button>
          <button className="relative group px-5 py-2 rounded-lg text-sm font-semibold text-white overflow-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <div className="absolute inset-0 bg-gradient-to-r from-[#4f6ef7] to-[#7c3aed] group-hover:opacity-90 transition-opacity" />
            <span className="relative">Get Started</span>
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden backdrop-blur-xl bg-[rgba(4,4,15,0.95)] border-b border-[rgba(79,110,247,0.15)] px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-[#7b80a8] hover:text-white text-base font-medium transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {l}
            </a>
          ))}
          <button className="mt-2 w-full py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#4f6ef7] to-[#7c3aed]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}

// ── GlowOrb ────────────────────────────────────────────────────────────────
function GlowOrb({ color, size, top, left, opacity = 0.18 }: { color: string; size: number; top: string; left: string; opacity?: number }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        background: color,
        width: size,
        height: size,
        top,
        left,
        filter: `blur(${size * 0.45}px)`,
        opacity,
      }}
    />
  );
}

// ── Hero ───────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <GlowOrb color="#4f6ef7" size={700} top="-15%" left="-10%" opacity={0.22} />
      <GlowOrb color="#7c3aed" size={500} top="20%" left="60%" opacity={0.18} />
      <GlowOrb color="#06b6d4" size={400} top="60%" left="10%" opacity={0.12} />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(79,110,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(79,110,247,0.04) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(79,110,247,0.3)] bg-[rgba(79,110,247,0.08)] mb-8">
          <Sparkles size={13} className="text-[#4f6ef7]" />
          <span style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#4f6ef7] text-xs font-semibold tracking-widest uppercase">
            Next-Gen Platform — Now Live
          </span>
        </div>

        <h1
          style={{ fontFamily: "'Exo 2', sans-serif" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-6"
        >
          Build the
          <br />
          <span className="bg-gradient-to-r from-[#4f6ef7] via-[#a855f7] to-[#06b6d4] bg-clip-text text-transparent">
            Future
          </span>
          <br />
          Faster
        </h1>

        <p
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          className="text-[#7b80a8] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Nexvara is the enterprise-grade platform that unifies AI infrastructure, real-time analytics, and
          bulletproof security into one seamless experience.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="relative group w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-white overflow-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <div className="absolute inset-0 bg-gradient-to-r from-[#4f6ef7] to-[#7c3aed] transition-opacity group-hover:opacity-85" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-[#4f6ef7] via-[#a855f7] to-[#06b6d4]" />
            <span className="relative flex items-center justify-center gap-2">
              Start Building Free <ArrowRight size={16} />
            </span>
          </button>
          <button
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-medium text-white border border-[rgba(255,255,255,0.12)] hover:border-[rgba(79,110,247,0.4)] hover:bg-[rgba(79,110,247,0.06)] transition-all duration-200 backdrop-blur-sm"
          >
            Watch Demo
          </button>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-[rgba(79,110,247,0.1)] rounded-2xl overflow-hidden border border-[rgba(79,110,247,0.12)]">
          {[
            { value: "14.2M+", label: "API requests / day" },
            { value: "99.99%", label: "Uptime SLA" },
            { value: "8,400+", label: "Companies served" },
            { value: "<12ms", label: "Global latency" },
          ].map((s) => (
            <div key={s.label} className="bg-[rgba(4,4,15,0.8)] px-6 py-6 text-center">
              <div style={{ fontFamily: "'Exo 2', sans-serif" }} className="text-2xl md:text-3xl font-bold text-white mb-1">
                {s.value}
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#7b80a8] text-xs font-medium tracking-wide uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Features ───────────────────────────────────────────────────────────────
const featureData = [
  {
    icon: Cpu,
    title: "AI-Native Infrastructure",
    desc: "Run fine-tuned models at scale with auto-provisioned GPU clusters, zero cold-starts, and built-in vector search.",
    color: "#4f6ef7",
  },
  {
    icon: Shield,
    title: "Zero-Trust Security",
    desc: "End-to-end encryption, role-based access, real-time threat detection, and SOC 2 Type II compliance out of the box.",
    color: "#7c3aed",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    desc: "Sub-second dashboards over petabyte-scale datasets. Stream, query, and visualize without ETL overhead.",
    color: "#06b6d4",
  },
  {
    icon: Globe,
    title: "Edge-First Delivery",
    desc: "250+ PoPs worldwide. Requests resolve at the nearest node with automatic failover and smart routing.",
    color: "#a855f7",
  },
  {
    icon: Database,
    title: "Managed Data Layer",
    desc: "Postgres, Redis, and object storage — provisioned, replicated, and backed up automatically across regions.",
    color: "#38bdf8",
  },
  {
    icon: Layers,
    title: "Composable API Surface",
    desc: "REST, GraphQL, and gRPC endpoints with automatic versioning, SDK generation, and developer portal.",
    color: "#f472b6",
  },
];

function Features() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      <GlowOrb color="#4f6ef7" size={400} top="30%" left="80%" opacity={0.1} />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(79,110,247,0.25)] bg-[rgba(79,110,247,0.06)] mb-5">
            <span style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#4f6ef7] text-xs font-semibold tracking-widest uppercase">
              Features
            </span>
          </div>
          <h2 style={{ fontFamily: "'Exo 2', sans-serif" }} className="text-4xl md:text-5xl font-black text-white mb-4">
            Everything you need to ship
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#7b80a8] text-lg max-w-xl mx-auto">
            One platform. Every capability you need from prototype to petabyte-scale production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featureData.map((f) => (
            <div
              key={f.title}
              className="group relative p-7 rounded-2xl border border-[rgba(79,110,247,0.1)] bg-[rgba(12,12,32,0.6)] backdrop-blur-sm hover:border-[rgba(79,110,247,0.3)] transition-all duration-300 overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, ${f.color}0d 0%, transparent 60%)` }}
              />
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${f.color}18`, boxShadow: `0 0 20px ${f.color}22` }}
              >
                <f.icon size={20} style={{ color: f.color }} />
              </div>
              <h3
                style={{ fontFamily: "'Exo 2', sans-serif" }}
                className="text-lg font-bold text-white mb-2"
              >
                {f.title}
              </h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#7b80a8] text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Services bento ─────────────────────────────────────────────────────────
function Services() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <GlowOrb color="#7c3aed" size={500} top="0%" left="-5%" opacity={0.12} />
      <GlowOrb color="#06b6d4" size={350} top="60%" left="75%" opacity={0.1} />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(124,58,237,0.3)] bg-[rgba(124,58,237,0.06)] mb-5">
            <span style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#a855f7] text-xs font-semibold tracking-widest uppercase">
              Services
            </span>
          </div>
          <h2 style={{ fontFamily: "'Exo 2', sans-serif" }} className="text-4xl md:text-5xl font-black text-white mb-4">
            Solutions for every scale
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#7b80a8] text-lg max-w-xl mx-auto">
            Whether you are a solo developer or a Fortune 500 engineering team, Nexvara adapts.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(180px,auto)]">
          {/* Wide card */}
          <div className="md:col-span-7 row-span-2 relative rounded-2xl overflow-hidden border border-[rgba(79,110,247,0.15)] group">
            <img
              src="https://images.unsplash.com/photo-1639762681057-408e52192e55?w=900&h=600&fit=crop&auto=format"
              alt="AI cloud infrastructure visualization"
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04040f] via-[rgba(4,4,15,0.6)] to-transparent" />
            <div className="relative p-8 h-full flex flex-col justify-end">
              <div className="flex items-center gap-2 mb-3">
                <Cloud size={18} className="text-[#4f6ef7]" />
                <span style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#4f6ef7] text-xs font-semibold tracking-widest uppercase">
                  Cloud Infra
                </span>
              </div>
              <h3 style={{ fontFamily: "'Exo 2', sans-serif" }} className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
                Multi-cloud by default, single-pane control
              </h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#7b80a8] text-sm leading-relaxed max-w-md">
                Provision across AWS, GCP, and Azure from one API. Intelligent placement routes workloads to the cheapest or fastest region automatically.
              </p>
            </div>
          </div>

          {/* Tall right */}
          <div className="md:col-span-5 relative rounded-2xl overflow-hidden border border-[rgba(124,58,237,0.2)] bg-[rgba(12,12,32,0.7)] p-7 flex flex-col justify-between">
            <div>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(124,58,237,0.15)", boxShadow: "0 0 24px rgba(124,58,237,0.2)" }}
              >
                <Lock size={22} className="text-[#a855f7]" />
              </div>
              <h3 style={{ fontFamily: "'Exo 2', sans-serif" }} className="text-xl font-bold text-white mb-2">
                Enterprise Security Suite
              </h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#7b80a8] text-sm leading-relaxed">
                SIEM integration, RBAC, secrets management, and automated vulnerability scanning with one-click remediation.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {["SOC 2", "ISO 27001", "HIPAA", "GDPR"].map((b) => (
                <span
                  key={b}
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  className="px-2.5 py-1 rounded-md text-[10px] font-medium text-[#a855f7] border border-[rgba(168,85,247,0.25)] bg-[rgba(168,85,247,0.06)]"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom-right short */}
          <div className="md:col-span-5 relative rounded-2xl border border-[rgba(6,182,212,0.2)] bg-[rgba(6,182,212,0.05)] p-7">
            <TrendingUp size={22} className="text-[#06b6d4] mb-4" />
            <h3 style={{ fontFamily: "'Exo 2', sans-serif" }} className="text-xl font-bold text-white mb-2">
              Observability & APM
            </h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#7b80a8] text-sm leading-relaxed">
              Distributed tracing, log aggregation, and anomaly detection powered by ML — before your users notice issues.
            </p>
          </div>

          {/* Bottom-left 2 cards */}
          <div className="md:col-span-4 relative rounded-2xl border border-[rgba(79,110,247,0.15)] bg-[rgba(12,12,32,0.6)] p-7">
            <Users size={20} className="text-[#4f6ef7] mb-4" />
            <h3 style={{ fontFamily: "'Exo 2', sans-serif" }} className="text-lg font-bold text-white mb-2">
              Team Collaboration
            </h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#7b80a8] text-xs leading-relaxed">
              Shared workspaces, branching environments, and granular audit logs for every action your team takes.
            </p>
          </div>

          <div className="md:col-span-3 relative rounded-2xl border border-[rgba(244,114,182,0.2)] bg-[rgba(12,12,32,0.6)] p-7">
            <Award size={20} className="text-[#f472b6] mb-4" />
            <h3 style={{ fontFamily: "'Exo 2', sans-serif" }} className="text-lg font-bold text-white mb-2">
              SLA Guarantee
            </h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#7b80a8] text-xs leading-relaxed">
              99.99% uptime backed by financial SLA credits and 24/7 priority support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Testimonials ───────────────────────────────────────────────────────────
const testimonials = [
  {
    name: "Priya Kapoor",
    role: "CTO, Luminary Health",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop&auto=format",
    quote: "Nexvara cut our infra spend by 34% in the first quarter while doubling our deployment velocity. It is the single best infrastructure decision we have made.",
    stars: 5,
  },
  {
    name: "Marcus Chen",
    role: "VP Engineering, FlowState AI",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&auto=format",
    quote: "The observability stack alone is worth it. We caught a subtle memory regression before it hit production — that one alert paid for a year of the platform.",
    stars: 5,
  },
  {
    name: "Sofia Andreou",
    role: "Lead Architect, Titan Commerce",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&auto=format",
    quote: "Multi-cloud routing was the deal-breaker for us. We went from two weeks of ops work per region launch to a single API call. This is what modern infrastructure should feel like.",
    stars: 5,
  },
  {
    name: "James Okafor",
    role: "Founder, Sentinel Labs",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&auto=format",
    quote: "Security compliance was the reason we chose Nexvara. Having SOC 2, HIPAA, and GDPR handled natively removed months of pre-sales friction with enterprise customers.",
    stars: 5,
  },
];

function Testimonials() {
  const [idx, setIdx] = useState(0);
  const total = testimonials.length;
  const t = testimonials[idx];

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <GlowOrb color="#4f6ef7" size={500} top="10%" left="40%" opacity={0.1} />
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(79,110,247,0.25)] bg-[rgba(79,110,247,0.06)] mb-5">
            <span style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#4f6ef7] text-xs font-semibold tracking-widest uppercase">
              Testimonials
            </span>
          </div>
          <h2 style={{ fontFamily: "'Exo 2', sans-serif" }} className="text-4xl md:text-5xl font-black text-white mb-4">
            Trusted by builders worldwide
          </h2>
        </div>

        <div className="relative rounded-3xl border border-[rgba(79,110,247,0.15)] bg-[rgba(12,12,32,0.7)] backdrop-blur-xl p-10 md:p-14">
          <div className="flex gap-1 mb-8">
            {Array.from({ length: t.stars }).map((_, i) => (
              <Star key={i} size={16} className="fill-[#f59e0b] text-[#f59e0b]" />
            ))}
          </div>

          <blockquote
            style={{ fontFamily: "'Exo 2', sans-serif" }}
            className="text-xl md:text-2xl font-semibold text-white leading-relaxed mb-10"
          >
            "{t.quote}"
          </blockquote>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-[rgba(79,110,247,0.4)]"
              />
              <div>
                <div style={{ fontFamily: "'Exo 2', sans-serif" }} className="text-white font-bold">{t.name}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#7b80a8] text-sm">{t.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIdx((idx - 1 + total) % total)}
                className="w-10 h-10 rounded-full border border-[rgba(79,110,247,0.2)] flex items-center justify-center text-[#7b80a8] hover:text-white hover:border-[rgba(79,110,247,0.5)] transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <div style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-[#7b80a8] text-xs">
                {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </div>
              <button
                onClick={() => setIdx((idx + 1) % total)}
                className="w-10 h-10 rounded-full border border-[rgba(79,110,247,0.2)] flex items-center justify-center text-[#7b80a8] hover:text-white hover:border-[rgba(79,110,247,0.5)] transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Pricing ────────────────────────────────────────────────────────────────
const plans = [
  {
    name: "Starter",
    monthly: 49,
    annual: 39,
    desc: "For indie developers and small teams getting started.",
    features: ["5M API calls / month", "3 environments", "Basic analytics", "Community support", "100 GB storage"],
    highlight: false,
    accent: "#4f6ef7",
  },
  {
    name: "Growth",
    monthly: 199,
    annual: 159,
    desc: "For scaling teams that need reliability and insight.",
    features: ["50M API calls / month", "Unlimited environments", "Advanced analytics", "Priority support (4h SLA)", "1 TB storage", "RBAC & audit logs", "Multi-region deploy"],
    highlight: true,
    accent: "#7c3aed",
  },
  {
    name: "Enterprise",
    monthly: null,
    annual: null,
    desc: "Custom pricing for large organizations with specific needs.",
    features: ["Unlimited API calls", "Dedicated infra", "Custom SLA", "24/7 white-glove support", "Unlimited storage", "SSO & SAML", "On-premise option"],
    highlight: false,
    accent: "#06b6d4",
  },
];

function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      <GlowOrb color="#7c3aed" size={600} top="20%" left="50%" opacity={0.1} />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(79,110,247,0.25)] bg-[rgba(79,110,247,0.06)] mb-5">
            <span style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#4f6ef7] text-xs font-semibold tracking-widest uppercase">
              Pricing
            </span>
          </div>
          <h2 style={{ fontFamily: "'Exo 2', sans-serif" }} className="text-4xl md:text-5xl font-black text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#7b80a8] text-lg max-w-lg mx-auto mb-8">
            No hidden fees. No surprise bills. Cancel any time.
          </p>

          <div className="inline-flex items-center gap-3 p-1 rounded-xl border border-[rgba(79,110,247,0.15)] bg-[rgba(12,12,32,0.6)]">
            <button
              onClick={() => setAnnual(false)}
              className={cn(
                "px-5 py-2 rounded-lg text-sm font-semibold transition-all",
                !annual ? "bg-gradient-to-r from-[#4f6ef7] to-[#7c3aed] text-white" : "text-[#7b80a8] hover:text-white"
              )}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={cn(
                "px-5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2",
                annual ? "bg-gradient-to-r from-[#4f6ef7] to-[#7c3aed] text-white" : "text-[#7b80a8] hover:text-white"
              )}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Annual
              <span className="text-[10px] font-bold text-[#4ade80] bg-[rgba(74,222,128,0.15)] px-1.5 py-0.5 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              className={cn(
                "relative rounded-2xl border p-8 flex flex-col transition-transform duration-300 hover:-translate-y-1",
                p.highlight
                  ? "border-[rgba(124,58,237,0.5)] bg-[rgba(12,12,32,0.9)]"
                  : "border-[rgba(79,110,247,0.12)] bg-[rgba(12,12,32,0.6)]"
              )}
            >
              {p.highlight && (
                <>
                  <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ background: "radial-gradient(ellipse at top, rgba(124,58,237,0.12) 0%, transparent 60%)" }} />
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-lg text-[11px] font-bold text-white tracking-widest uppercase" style={{ background: "linear-gradient(90deg, #4f6ef7, #7c3aed)", fontFamily: "'DM Sans', sans-serif" }}>
                    Most Popular
                  </div>
                </>
              )}

              <div style={{ fontFamily: "'Exo 2', sans-serif" }} className="text-lg font-bold text-white mb-1">{p.name}</div>
              <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#7b80a8] text-sm mb-6">{p.desc}</p>

              <div className="mb-8">
                {p.monthly !== null ? (
                  <>
                    <span style={{ fontFamily: "'Exo 2', sans-serif" }} className="text-4xl font-black text-white">
                      ${annual ? p.annual : p.monthly}
                    </span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#7b80a8] text-sm ml-1">/mo</span>
                  </>
                ) : (
                  <span style={{ fontFamily: "'Exo 2', sans-serif" }} className="text-3xl font-black text-white">Custom</span>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${p.accent}1a` }}
                    >
                      <Check size={11} style={{ color: p.accent }} />
                    </div>
                    <span style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#7b80a8] text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={cn(
                  "w-full py-3 rounded-xl text-sm font-semibold transition-all",
                  p.highlight
                    ? "text-white"
                    : "border border-[rgba(255,255,255,0.1)] text-white hover:border-[rgba(79,110,247,0.4)] hover:bg-[rgba(79,110,247,0.06)]"
                )}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  ...(p.highlight ? { background: "linear-gradient(90deg, #4f6ef7, #7c3aed)" } : {}),
                }}
              >
                {p.monthly !== null ? "Get Started" : "Talk to Sales"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FAQ ────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "How does the 14-day free trial work?",
    a: "You get full access to the Growth plan features for 14 days with no credit card required. At the end of the trial, choose a plan or your account converts to the free-tier Starter automatically.",
  },
  {
    q: "Can I change plans at any time?",
    a: "Yes. Upgrades take effect immediately and are prorated to your billing cycle. Downgrades take effect at the start of your next billing period.",
  },
  {
    q: "Where is my data stored?",
    a: "By default, data is stored in the AWS us-east-1 region. You can choose your primary region and add secondary regions for redundancy. Enterprise customers can specify custom data residency requirements.",
  },
  {
    q: "What compliance certifications do you hold?",
    a: "Nexvara is SOC 2 Type II, ISO 27001, HIPAA, and GDPR compliant. Audit reports are available under NDA for Enterprise customers.",
  },
  {
    q: "Do you offer self-hosted or on-premise deployment?",
    a: "Yes, as part of our Enterprise plan. We provide a Kubernetes Helm chart and a dedicated solutions engineer to assist with the deployment.",
  },
  {
    q: "What does your SLA guarantee cover?",
    a: "Our 99.99% uptime SLA covers all API endpoints and the control plane. In the event of a breach, we provide service credits calculated as a multiple of the affected hours.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="relative py-32 overflow-hidden">
      <GlowOrb color="#4f6ef7" size={400} top="50%" left="85%" opacity={0.09} />
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(79,110,247,0.25)] bg-[rgba(79,110,247,0.06)] mb-5">
            <span style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#4f6ef7] text-xs font-semibold tracking-widest uppercase">
              FAQ
            </span>
          </div>
          <h2 style={{ fontFamily: "'Exo 2', sans-serif" }} className="text-4xl md:text-5xl font-black text-white mb-4">
            Common questions
          </h2>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-3">
          {faqs.map((item, i) => (
            <Accordion.Item
              key={i}
              value={String(i)}
              className="rounded-xl border border-[rgba(79,110,247,0.12)] bg-[rgba(12,12,32,0.6)] overflow-hidden backdrop-blur-sm"
            >
              <Accordion.Trigger className="group flex w-full items-center justify-between px-6 py-5 text-left gap-4">
                <span style={{ fontFamily: "'Exo 2', sans-serif" }} className="text-white font-semibold text-base group-data-[state=open]:text-[#4f6ef7] transition-colors">
                  {item.q}
                </span>
                <ChevronDown
                  size={18}
                  className="text-[#7b80a8] group-data-[state=open]:text-[#4f6ef7] group-data-[state=open]:rotate-180 transition-all duration-300 flex-shrink-0"
                />
              </Accordion.Trigger>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-[accordion-down_0.25s_ease] data-[state=closed]:animate-[accordion-up_0.25s_ease]">
                <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="px-6 pb-5 text-[#7b80a8] text-sm leading-relaxed">
                  {item.a}
                </p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}

// ── Contact ────────────────────────────────────────────────────────────────
function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <GlowOrb color="#7c3aed" size={500} top="30%" left="-5%" opacity={0.12} />
      <GlowOrb color="#06b6d4" size={400} top="10%" left="75%" opacity={0.09} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(79,110,247,0.25)] bg-[rgba(79,110,247,0.06)] mb-6">
              <span style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#4f6ef7] text-xs font-semibold tracking-widest uppercase">
                Contact
              </span>
            </div>
            <h2 style={{ fontFamily: "'Exo 2', sans-serif" }} className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              Ready to launch?
              <br />
              <span className="bg-gradient-to-r from-[#4f6ef7] to-[#06b6d4] bg-clip-text text-transparent">
                Let's talk.
              </span>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#7b80a8] text-lg leading-relaxed mb-10">
              Our solutions team will get back to you within one business hour. No sales scripts — just a real conversation about your infrastructure.
            </p>

            <div className="space-y-5">
              {[
                { icon: Mail, label: "hello@nexvara.io", sub: "General inquiries" },
                { icon: Phone, label: "+1 (415) 820-3491", sub: "Sales & Enterprise" },
                { icon: MapPin, label: "San Francisco, CA", sub: "Headquarters" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(79,110,247,0.1)] flex items-center justify-center flex-shrink-0">
                    <c.icon size={17} className="text-[#4f6ef7]" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-white font-medium text-sm">{c.label}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#7b80a8] text-xs">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[rgba(79,110,247,0.15)] bg-[rgba(12,12,32,0.7)] backdrop-blur-xl p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-[rgba(79,110,247,0.15)] flex items-center justify-center mb-5 border border-[rgba(79,110,247,0.3)]">
                  <Check size={28} className="text-[#4f6ef7]" />
                </div>
                <h3 style={{ fontFamily: "'Exo 2', sans-serif" }} className="text-2xl font-bold text-white mb-2">Message sent!</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#7b80a8] text-sm">
                  {"We'll reach out within one business hour."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label style={{ fontFamily: "'DM Sans', sans-serif" }} className="block text-[#7b80a8] text-xs font-medium mb-2 uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Rivera"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[rgba(79,110,247,0.06)] border border-[rgba(79,110,247,0.12)] text-white placeholder-[#3a3f60] text-sm focus:outline-none focus:border-[rgba(79,110,247,0.4)] transition-colors"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'DM Sans', sans-serif" }} className="block text-[#7b80a8] text-xs font-medium mb-2 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.io"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[rgba(79,110,247,0.06)] border border-[rgba(79,110,247,0.12)] text-white placeholder-[#3a3f60] text-sm focus:outline-none focus:border-[rgba(79,110,247,0.4)] transition-colors"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontFamily: "'DM Sans', sans-serif" }} className="block text-[#7b80a8] text-xs font-medium mb-2 uppercase tracking-wider">Company</label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[rgba(79,110,247,0.06)] border border-[rgba(79,110,247,0.12)] text-white placeholder-[#3a3f60] text-sm focus:outline-none focus:border-[rgba(79,110,247,0.4)] transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>

                <div>
                  <label style={{ fontFamily: "'DM Sans', sans-serif" }} className="block text-[#7b80a8] text-xs font-medium mb-2 uppercase tracking-wider">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your infrastructure needs..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[rgba(79,110,247,0.06)] border border-[rgba(79,110,247,0.12)] text-white placeholder-[#3a3f60] text-sm focus:outline-none focus:border-[rgba(79,110,247,0.4)] transition-colors resize-none"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 group"
                  style={{ background: "linear-gradient(90deg, #4f6ef7, #7c3aed)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  Send Message <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="relative border-t border-[rgba(79,110,247,0.1)] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4f6ef7] to-[#7c3aed] flex items-center justify-center shadow-[0_0_20px_rgba(79,110,247,0.4)]">
                <Zap size={16} className="text-white" />
              </div>
              <span style={{ fontFamily: "'Exo 2', sans-serif" }} className="text-white font-bold text-lg">Nexvara</span>
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#7b80a8] text-sm leading-relaxed mb-6 max-w-xs">
              Enterprise infrastructure for teams that cannot afford downtime.
            </p>
            <div className="flex items-center gap-3">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-lg border border-[rgba(79,110,247,0.15)] flex items-center justify-center text-[#7b80a8] hover:text-white hover:border-[rgba(79,110,247,0.4)] transition-all"
                >
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {[
            { title: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap", "Status"] },
            { title: "Company", links: ["About", "Blog", "Careers", "Press", "Contact"] },
            { title: "Legal", links: ["Privacy", "Terms", "Security", "DPA", "Cookies"] },
          ].map((col) => (
            <div key={col.title}>
              <div style={{ fontFamily: "'Exo 2', sans-serif" }} className="text-white font-bold text-sm mb-4">{col.title}</div>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#7b80a8] hover:text-white text-sm transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-[rgba(79,110,247,0.08)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#7b80a8] text-xs">
            © 2026 Nexvara, Inc. All rights reserved.
          </p>
          <p style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-[#3a3f60] text-[10px]">
            Uptime: 99.99% · 14 regions · 250+ PoPs
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── App ────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-[#04040f] text-[#e2e4f0]" style={{ scrollBehavior: "smooth" }}>
      <style>{`
        :root { --font-size: 16px; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(79,110,247,0.2); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(79,110,247,0.4); }
        @keyframes accordion-down { from { height: 0 } to { height: var(--radix-accordion-content-height) } }
        @keyframes accordion-up { from { height: var(--radix-accordion-content-height) } to { height: 0 } }
      `}</style>
      <Nav />
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
