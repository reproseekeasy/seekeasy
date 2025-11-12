// src/components/PopupContent.jsx
import { Globe, Phone, Mail, Heart } from "lucide-react";

export default function MapPopupContent({ pin, catByKey }) {
  const norm = (s) => s.toLowerCase();
  const normKeys = (pin.cats || []).map(norm);
  const badgeClass = (key) => {
    const cat = catByKey[key];
    return cat
      ? `inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] ${cat.off}`
      : "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] bg-slate-50 text-slate-700 border-slate-200";
  };

  return (
    <div className="min-w-[280px] max-w-[380px]">
      <h3 className="text-[15px] font-semibold leading-tight break-words">{pin.name}</h3>

      <div className="mt-1 flex flex-wrap gap-1.5">
        {normKeys.map(k => {
          const cat = catByKey[k];
          const BadgeIcon = cat?.icon || Heart;
          return (
            <span key={k} className={badgeClass(k)}>
              <BadgeIcon className="h-3.5 w-3.5" />
              {cat?.label ?? k}
            </span>
          );
        })}
      </div>

      <div className="mt-3 border-t border-slate-200 pt-2 max-h-64 overflow-y-auto pr-1">
        {pin.notes?.length ? (
          <ul className="space-y-1 text-[12px] leading-snug text-slate-700">
            {pin.notes.map((b, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                <span className="break-words">{b}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {(pin.address || pin.website || (pin.phones?.length) || (pin.emails?.length) || (pin.hours?.length)) && (
          <div className="mt-3 space-y-1.5 text-[12px]">
            {pin.address && (
              <div className="break-words">
                <span className="font-medium">Address:</span>{" "}
                <a
                  className="underline text-slate-800"
                  target="_blank"
                  rel="noreferrer"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pin.address)}`}
                >
                  {pin.address}
                </a>
              </div>
            )}

            {pin.website && (
              <div className="break-words">
                <a href={pin.website} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-emerald-700 underline break-all">
                  <Globe className="h-3.5 w-3.5" />
                  Website
                </a>
              </div>
            )}

            {pin.phones?.length ? (
              <div className="flex flex-col gap-1">
                {pin.phones.map((ph, i) => (
                  <a key={i} href={`tel:${ph.replace(/[^\d+x]/gi, "")}`} className="inline-flex items-center gap-1 text-slate-800">
                    <Phone className="h-3.5 w-3.5" />
                    {ph}
                  </a>
                ))}
              </div>
            ) : null}

            {pin.emails?.length ? (
              <div className="flex flex-col gap-1">
                {pin.emails.map((em, i) => (
                  <a key={i} href={`mailto:${em}`} className="inline-flex items-center gap-1 text-slate-800 break-all">
                    <Mail className="h-3.5 w-3.5" />
                    {em}
                  </a>
                ))}
              </div>
            ) : null}

            {pin.hours?.length ? (
              <div className="text-slate-700">
                <span className="font-medium">Hours:</span>{" "}
                <span className="break-words">{pin.hours.join(" · ")}</span>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
