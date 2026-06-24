import {
  Cloud,
  BrainCircuit,
  ShieldCheck,
  Smartphone,
  LineChart,
  Layers,
} from "lucide-react";
import workZephyr from "@/assets/work-zephyr.jpg";
import workNexus from "@/assets/work-nexus.jpg";
import workVertex from "@/assets/work-vertex.jpg";
import workAura from "@/assets/work-aura.jpg";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
] as const;

export const services = [
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description:
      "Elastic, serverless systems engineered for 99.99% uptime and global latency optimization.",
  },
  {
    icon: BrainCircuit,
    title: "AI Integration",
    description:
      "Seamless LLM deployment and custom neural networks tailored to your proprietary dataset.",
  },
  {
    icon: Smartphone,
    title: "Product Engineering",
    description:
      "End-to-end web and mobile products built for speed, accessibility, and lasting retention.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    description:
      "Zero-trust infrastructure, encryption, and audit-ready compliance baked in from day one.",
  },
  {
    icon: LineChart,
    title: "Data & Analytics",
    description:
      "Real-time pipelines and dashboards that turn raw signals into confident decisions.",
  },
  {
    icon: Layers,
    title: "Platform Strategy",
    description:
      "Technical roadmaps and architecture audits that keep you scaling without rewrites.",
  },
] as const;

export const projects = [
  {
    name: "Project Zephyr",
    category: "Distributed Cloud Strategy",
    year: "2024",
    image: workZephyr,
  },
  {
    name: "Nexus OS",
    category: "AI Infrastructure Platform",
    year: "2024",
    image: workNexus,
  },
  {
    name: "Vertex Capital",
    category: "Fintech Product Suite",
    year: "2023",
    image: workVertex,
  },
  {
    name: "Aura Systems",
    category: "Realtime Data Visualization",
    year: "2023",
    image: workAura,
  },
] as const;

export const stats = [
  { value: "124+", label: "Shipped Builds" },
  { value: "12M", label: "Users Reached" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "14", label: "Industry Awards" },
] as const;
