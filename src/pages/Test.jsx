// src/pages/Test.jsx (example)
import { useMemo, useState } from "react";
import { MapContainer, TileLayer, ZoomControl, Marker, Popup } from "react-leaflet";
import { Phone, Mail, Globe, LifeBuoy, Shield, Heart, Layers} from "lucide-react";
import PINS from "../data/pins.json";
import CATS from "../data/cats";        
import FiltersBar from "../components/FiltersBar";
import PopupContent from "../components/MapPopupContent";
import { getPinIcon } from "../lib/pinIcon";

const DEFAULT_GRADIENT = ["#10B981", "#9F46E5"];
const norm = (s) => s.toLowerCase();
const catByKey = CATS.reduce((m, c) => (m[c.key] = c, m), {});

function getActiveColors(pinCats, activeSet, allOn) {
  if (allOn || activeSet.size === 0) return [];
  const keys = (pinCats || []).map(norm);
  return keys.filter(k => activeSet.has(k)).map(k => catByKey[k]?.hex).filter(Boolean);
}

export default function Test() {
  const [allOn, setAllOn] = useState(true);
  const [openMobile, setOpenMobile] = useState(false);
  const [activeSet, setActiveSet] = useState(new Set());

  const toggleAll = () => { setAllOn(true); setActiveSet(new Set()); };
  const toggleCat = (key) => {
    setAllOn(false);
    setActiveSet(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const visiblePins = useMemo(() => {
    if (allOn) return PINS;
    if (activeSet.size === 0) return [];
    return PINS.filter(p => p.cats.some(c => activeSet.has(norm(c))));
  }, [allOn, activeSet]);

  const pinIconFor = (pin) => {
    const activeColors = getActiveColors(pin.cats, activeSet, allOn);
    if (activeColors.length === 0) return getPinIcon("gradient", DEFAULT_GRADIENT);
    if (activeColors.length <= 3) return getPinIcon("stripes", activeColors);
    return getPinIcon("gradient", DEFAULT_GRADIENT);
  };

  return (
    <section className="w-full">
      <div className="text-center mb-6 px-4">
        <h1 className="text-4xl font-semibold tracking-tight text-emerald-700">Welcome to SeekEasy</h1>
        <p className="mt-2 text-neutral-600">Find trusted health resources easily.</p>
      </div>

      <div className="w-full max-w-4xl mx-auto rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
        <FiltersBar
          CATS={CATS}
          allOn={allOn}
          activeSet={activeSet}
          toggleAll={toggleAll}
          toggleCat={toggleCat}
          openMobile={openMobile}
          setOpenMobile={setOpenMobile}
        />

        <div className="px-4 py-2 border-b border-slate-200 bg-white text-[11px] text-slate-600 flex items-center gap-1">
          <Layers className="h-3.5 w-3.5" />
          <span>Tip: You can select multiple categories.</span>
        </div>

        <div className="relative z-0">
          <MapContainer
            center={[45.5017, -73.5673]}
            zoom={12}
            scrollWheelZoom
            zoomControl={false}
            className="h-[28rem] w-full z-0"
            style={{ zIndex: 0 }}
          >
            <TileLayer
              attribution="&copy; OpenStreetMap &copy; CARTO"
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />
            <ZoomControl position="bottomright" />

            {visiblePins.map((p) => (
              <Marker key={p.id} position={p.pos} icon={pinIconFor(p)}>
                <Popup>
                  <PopupContent pin={p} catByKey={catByKey} />
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      {/* Online / No-Touch Services */}
      <div className="rounded-3xl border border-neutral-200 bg-white shadow-md mt-10">
        <header className="flex items-center gap-3 p-5 border-b border-neutral-200">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
            <LifeBuoy className="h-5 w-5" aria-hidden="true" />
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-emerald-700">
            Online / No-Touch Services
          </h2>
        </header>

        <div className="p-5 grid gap-5 sm:grid-cols-2">
          {/* Native Women’s Shelter Montreal */}
          <article className="rounded-2xl border border-neutral-200 bg-white/90 p-4 shadow-sm">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-emerald-600" />
              <h3 className="text-lg font-semibold">Native Women’s Shelter Montreal</h3>
            </div>
            <p className="mt-1 text-sm text-neutral-600">
              Sexual Assault • Shelter — For Indigenous women and children
            </p>

            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-neutral-500" />
                <div>
                  <span className="font-medium">Phone:</span>{" "}
                  <a href="tel:+15149334688" className="underline underline-offset-2 hover:text-emerald-700">
                    (514) 933-4688
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-neutral-500" />
                <div>
                  <span className="font-medium">Toll-free:</span>{" "}
                  <a href="tel:+18664034688" className="underline underline-offset-2 hover:text-emerald-700">
                    1-866-403-4688
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-neutral-500" />
                <div>
                  <span className="font-medium">Email:</span>{" "}
                  <a href="mailto:contactus@nwsm.info" className="underline underline-offset-2 hover:text-emerald-700">
                    contactus@nwsm.info
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-neutral-500" />
                <div>
                  <span className="font-medium">Fax:</span> (514) 933-5747
                </div>
              </li>
            </ul>
          </article>

          {/* Sexual Violence Helpline */}
          <article className="rounded-2xl border border-neutral-200 bg-white/90 p-4 shadow-sm">
            <div className="flex items-center gap-2">
              <LifeBuoy className="h-5 w-5 text-emerald-600" />
              <h3 className="text-lg font-semibold">Sexual Violence Helpline</h3>
            </div>
            <p className="mt-1 text-sm text-neutral-600">24/7 confidential support</p>

            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-neutral-500" />
                <div>
                  <span className="font-medium">Phone:</span>{" "}
                  <a href="tel:+18889339007" className="underline underline-offset-2 hover:text-emerald-700">
                    1-888-933-9007
                  </a>{" "}
                  or{" "}
                  <a href="tel:+15149339007" className="underline underline-offset-2 hover:text-emerald-700">
                    (514) 933-9007
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="mt-0.5 h-4 w-4 text-neutral-500" />
                <div>
                  <span className="font-medium">Chat:</span>{" "}
                  <a
                    href="https://sexualviolencehelpline.ca"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2 hover:text-emerald-700"
                  >
                    sexualviolencehelpline.ca
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-3 flex flex-wrap gap-2">
              {["Confidential","Anonymous","Free","FR / EN"].map(x => <Badge key={x}>{x}</Badge>)}
            </div>
          </article>
        </div>
      </div>

      {/* Abortion & Accompaniment */}
      <div className="mt-8 rounded-3xl border border-neutral-200 bg-white shadow-md">
        <header className="flex items-center gap-3 p-5 border-b border-neutral-200">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
            <Heart className="h-5 w-5" aria-hidden="true" />
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-amber-700">
            Abortion & Accompaniment
          </h2>
        </header>

        <div className="p-5 grid gap-5 sm:grid-cols-2">
          {/* Grosses Secours */}
          <article className="rounded-2xl border border-neutral-200 bg-white/90 p-4 shadow-sm">
            <h3 className="text-lg font-semibold">Grosses Secours</h3>
            <p className="mt-1 text-sm text-neutral-600">Greater Montréal</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-neutral-500" />
                <div>
                  <span className="font-medium">Montréal:</span>{" "}
                  <a href="tel:+15142710554" className="underline underline-offset-2 hover:text-amber-700">
                    (514) 271-0554
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-neutral-500" />
                <div>
                  <span className="font-medium">Toll-free:</span>{" "}
                  <a href="tel:+18772710554" className="underline underline-offset-2 hover:text-amber-700">
                    1-877-271-0554
                  </a>
                </div>
              </li>
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              {["No RAMQ needed","FR services","Under 14 w/ parent"].map(x => <Badge key={x}>{x}</Badge>)}
            </div>
          </article>

          {/* Other lines */}
          <article className="rounded-2xl border border-neutral-200 bg-white/90 p-4 shadow-sm">
            <h3 className="text-lg font-semibold">Other Pregnancy / Support Lines</h3>
            <ul className="mt-3 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Globe className="mt-0.5 h-4 w-4 text-neutral-500" />
                <div>
                  <span className="font-medium">Ta Raison:</span>{" "}
                  <a
                    href="https://www.taraison.ca/en/home.html"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2 hover:text-amber-700"
                  >
                    taraison.ca
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-neutral-500" />
                <div>
                  <span className="font-medium">SOS Pregnancy Québec:</span>{" "}
                  <a href="tel:+18776629666" className="underline underline-offset-2 hover:text-amber-700">
                    1-877-662-9666
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-neutral-500" />
                <div>
                  <span className="font-medium">SOS Pregnancy Estrie:</span>{" "}
                  <a href="tel:+18778221181" className="underline underline-offset-2 hover:text-amber-700">
                    1-877-822-1181
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-neutral-500" />
                <div>
                  <span className="font-medium">Pregnancy Helpline Montréal:</span>{" "}
                  <a href="tel:+18772710555" className="underline underline-offset-2 hover:text-amber-700">
                    1-877-271-0555
                  </a>
                </div>
              </li>
            </ul>
          </article>
        </div>
      </div>

    </section>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-700">
      {children}
    </span>
  );
}