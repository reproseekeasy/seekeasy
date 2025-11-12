// src/lib/pinIcon.js
import L from "leaflet";

const PIN_SIZE = 48;
const VB = 36;
const iconCache = new Map();

const hash = (s) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i) | 0;
  return (h >>> 0).toString(36);
};

function buildPinSVG({ mode, colors }) {
  const pathD = "M18 2c6.08 0 11 4.92 11 11 0 8.25-11 19-11 19S7 21.25 7 13c0-6.08 4.92-11 11-11z";
  const inset = 2.2;
  const innerW = VB - inset * 2;

  if (mode === "gradient") {
    const gradId = `grad_${hash(colors.join(","))}`;
    const stops = colors
      .map((c, i) => `<stop offset="${(i / (colors.length - 1)) * 100}%" stop-color="${c}" />`)
      .join("");
    return `
<svg width="${VB}" height="${VB}" viewBox="0 0 ${VB} ${VB}" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="0%">${stops}</linearGradient></defs>
  <path d="${pathD}" fill="url(#${gradId})" />
  <path d="${pathD}" fill="none" stroke="#0F172A" stroke-opacity="0.16" stroke-width="0.9"/>
  <circle cx="18" cy="13" r="4.8" fill="white"/>
</svg>`;
  }

  // stripes
  const n = colors.length;
  const bandW = innerW / n;
  const rects = colors.map((c, i) =>
    `<rect x="${(inset + i * bandW).toFixed(3)}" y="0" width="${bandW.toFixed(3)}" height="${VB}" fill="${c}" />`
  ).join("");
  const seps = Array.from({ length: n - 1 }, (_, i) => {
    const x = inset + (i + 1) * bandW;
    return `<line x1="${x.toFixed(3)}" y1="0" x2="${x.toFixed(3)}" y2="${VB}" stroke="white" stroke-opacity="0.9" stroke-width="0.6"/>`;
  }).join("");
  const clipId = `clip_${hash(colors.join(","))}`;

  return `
<svg width="${VB}" height="${VB}" viewBox="0 0 ${VB} ${VB}" xmlns="http://www.w3.org/2000/svg">
  <defs><clipPath id="${clipId}"><path d="${pathD}" /></clipPath></defs>
  <g clip-path="url(#${clipId})">${rects}${seps}</g>
  <path d="${pathD}" fill="none" stroke="#0F172A" stroke-opacity="0.16" stroke-width="0.9"/>
  <circle cx="18" cy="13" r="4.8" fill="white"/>
</svg>`;
}

export function getPinIcon(mode, colors, size = PIN_SIZE) {
  const key = JSON.stringify({ mode, colors, size });
  if (iconCache.has(key)) return iconCache.get(key);

  const svg = buildPinSVG({ mode, colors });
  const icon = L.icon({
    iconUrl: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size - 4],
    popupAnchor: [0, -size + 10],
  });

  iconCache.set(key, icon);
  return icon;
}