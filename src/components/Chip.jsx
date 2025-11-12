// src/components/Chip.jsx
import { Check } from "lucide-react";

export default function Chip({ active, onClick, Icon, label, onClass, offClass, fullWidth = false }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={[
        "h-10 px-3 inline-flex items-center justify-between gap-2 rounded-lg border text-sm font-medium shadow-sm transition",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300",
        fullWidth ? "w-full" : "w-auto",
        active ? onClass : offClass,
      ].join(" ")}
    >
      <span className="inline-flex items-center gap-2 whitespace-nowrap">
        <Icon className="h-4 w-4 shrink-0" />
        <span>{label}</span>
      </span>
      <span className="w-4 h-4 grid place-items-center shrink-0">
        <Check className={`h-4 w-4 transition-opacity ${active ? "opacity-100" : "opacity-0"}`} />
      </span>
    </button>
  );
}
