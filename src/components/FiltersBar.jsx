// src/components/FiltersBar.jsx
import { Filter, ChevronDown } from "lucide-react";
import Chip from "./Chip";

export default function FiltersBar({ CATS, allOn, activeSet, toggleAll, toggleCat, openMobile, setOpenMobile }) {
  const selectedTags = allOn
    ? [{ key: "all", label: "All", color: "bg-slate-600 text-white border-slate-600" }]
    : CATS.filter(c => activeSet.has(c.key)).map(c => ({ key: c.key, label: c.label, color: c.on }));

  return (
    <div className="px-4 py-4 border-b border-slate-200 bg-slate-50">
      {/* Desktop */}
      <div className="hidden md:flex md:flex-wrap md:items-center md:gap-2">
        <Chip
          active={allOn}
          onClick={toggleAll}
          Icon={Filter}
          label="All"
          onClass="bg-slate-600 text-white border-slate-600"
          offClass="bg-white text-slate-800 border-slate-300 hover:bg-slate-50"
        />
        {CATS.map(({ key, label, icon: Icon, on, off }) => (
          <Chip
            key={key}
            active={!allOn && activeSet.has(key)}
            onClick={() => toggleCat(key)}
            Icon={Icon}
            label={label}
            onClass={on}
            offClass={off}
          />
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          {selectedTags.map(t => (
            <span key={t.key} className={`whitespace-nowrap text-xs rounded-lg border px-2.5 py-1 ${t.color}`}>
              {t.label}
            </span>
          ))}
        </div>

        <button
          onClick={() => setOpenMobile(v => !v)}
          aria-expanded={openMobile}
          className="w-full inline-flex items-center justify-between rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm font-medium text-slate-900 shadow-sm hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
        >
          <span className="inline-flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Choose categories
          </span>
          <ChevronDown className={`h-5 w-5 transition-transform ${openMobile ? "rotate-180" : ""}`} />
        </button>

        {openMobile && (
          <div className="mt-3 space-y-2">
            <Chip
              active={allOn}
              onClick={toggleAll}
              Icon={Filter}
              label="All"
              onClass="bg-slate-600 text-white border-slate-600"
              offClass="bg-white text-slate-800 border-slate-300 hover:bg-slate-50"
              fullWidth
            />
            {CATS.map(({ key, label, icon: Icon, on, off }) => (
              <Chip
                key={key}
                active={!allOn && activeSet.has(key)}
                onClick={() => toggleCat(key)}
                Icon={Icon}
                label={label}
                onClass={on}
                offClass={off}
                fullWidth
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}