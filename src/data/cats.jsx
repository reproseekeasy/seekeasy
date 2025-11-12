import { Heart, Sparkles, MessageSquare, Baby, Shield, HeartPulse, Home, ArrowRight } from "lucide-react";

const CATS = [
  {
    key: "abortion",
    label: "Abortion",
    icon: ArrowRight,
    hex: "#059669", // emerald-600
    on: "bg-emerald-600 text-white border-emerald-600",
    off: "bg-emerald-50 text-emerald-800 border-emerald-200"
  },
  {
    key: "birth control",
    label: "Birth Control",
    icon: ArrowRight,
    hex: "#C026D3", // fuchsia-600
    on: "bg-fuchsia-600 text-white border-fuchsia-600",
    off: "bg-fuchsia-50 text-fuchsia-800 border-fuchsia-200"
  },
  {
    key: "gender/trans resources",
    label: "Gender/Trans Resources",
    icon: ArrowRight,
    hex: "#0369A1", // sky-700
    on: "bg-sky-700 text-white border-sky-700",
    off: "bg-sky-50 text-sky-800 border-sky-200"
  },
  {
    key: "pregnancy",
    label: "Pregnancy",
    icon: ArrowRight,
    hex: "#D97706", // amber-600
    on: "bg-amber-600 text-white border-amber-600",
    off: "bg-amber-50 text-amber-900 border-amber-200"
  },
  {
    key: "sexual assault",
    label: "Sexual Assault",
    icon: ArrowRight,
    hex: "#57534E", // stone-600
    on: "bg-stone-600 text-white border-stone-600",
    off: "bg-stone-50 text-stone-800 border-stone-200"
  },
  {
    key: "sti/stbbi",
    label: "STI/STBBI",
    icon: ArrowRight,
    hex: "#4F46E5", // indigo-600
    on: "bg-indigo-600 text-white border-indigo-600",
    off: "bg-indigo-50 text-indigo-800 border-indigo-200"
  },
  {
    key: "shelter",
    label: "Shelter",
    icon: ArrowRight,
    hex: "#9333EA", // purple-600
    on: "bg-purple-600 text-white border-purple-600",
    off: "bg-purple-50 text-purple-800 border-purple-200"
  }
];

export default CATS;