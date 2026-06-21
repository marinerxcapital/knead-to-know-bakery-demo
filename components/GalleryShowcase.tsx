"use client";

import { useEffect, useMemo, useState } from "react";
import type { GalleryItem } from "@/data/galleryItems";
import { publicAsset } from "@/lib/assets";

const toneClasses = { ivory: "bg-[#f8f5ef]", beige: "bg-[#e7dccb]", gold: "bg-[#cbb080]", ink: "bg-ink text-white" };
const aspectClasses = { portrait: "sm:row-span-2 aspect-[4/5]", square: "aspect-square", landscape: "sm:col-span-2 aspect-[16/9]" };

function mediaLabel(type: GalleryItem["mediaType"]) {
  return type === "360-video" ? "360 video" : type === "video" ? "Video" : "Photo";
}

function Media({ item, detailed = false }: { item: GalleryItem; detailed?: boolean }) {
  const source = item.src ? publicAsset(item.src) : undefined;
  if (item.embedUrl && detailed) return <iframe className="h-full w-full" src={item.embedUrl} title={item.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>;
  if (source && item.mediaType !== "image") return <video className="h-full w-full object-cover" src={source} controls={detailed} muted playsInline loop autoPlay/>;
  // Gallery sources are user-configured public assets, so the native element is intentional here.
  // eslint-disable-next-line @next/next/no-img-element
  if (source) return <img src={source} alt={item.title} className="h-full w-full object-cover"/>;
  return <div className={`grid h-full w-full place-items-center ${toneClasses[item.tone]}`}><div className="text-center"><span className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-current/30 font-serif text-lg">{item.mediaType === "image" ? "+" : "360"}</span><p className="mt-3 text-[9px] font-bold uppercase tracking-[.16em]">Add {mediaLabel(item.mediaType)}</p></div></div>;
}

export function GalleryShowcase({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const categories = useMemo(() => ["All", ...Array.from(new Set(items.map(item => item.category)))], [items]);
  const visibleItems = active === "All" ? items : items.filter(item => item.category === active);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return <>
    <div className="flex flex-wrap justify-center gap-2">{categories.map(category => <button key={category} onClick={() => setActive(category)} className={`border px-4 py-2 text-[10px] font-bold uppercase tracking-[.12em] transition ${active === category ? "border-ink bg-ink text-white" : "border-ink/15 bg-white hover:border-gold"}`}>{category}</button>)}</div>
    <div className="mt-9 grid auto-rows-[180px] gap-4 sm:auto-rows-[210px] lg:grid-cols-3">{visibleItems.map(item => <button key={item.id} onClick={() => setSelected(item)} className={`group relative overflow-hidden text-left ${aspectClasses[item.aspect]}`} aria-label={`Open ${item.title}`}><Media item={item}/><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent px-5 pb-5 pt-16 text-white"><div className="flex items-center justify-between gap-4"><p className="text-[9px] font-bold uppercase tracking-[.16em] text-white/75">{item.category}</p><span className="border border-white/40 px-2 py-1 text-[8px] font-bold uppercase tracking-[.12em]">{mediaLabel(item.mediaType)}</span></div><h2 className="mt-2 font-serif text-2xl leading-tight">{item.title}</h2></div></button>)}</div>
    {selected && <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-4 sm:p-8" role="dialog" aria-modal="true" aria-label={selected.title}><div className="relative max-h-full w-full max-w-5xl overflow-auto bg-white"><button onClick={() => setSelected(null)} className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center border border-ink/15 bg-white text-xl" aria-label="Close gallery item">×</button><div className="grid min-h-[520px] lg:grid-cols-[1.35fr_.65fr]"><div className="min-h-72 bg-ivory"><Media item={selected} detailed/></div><div className="flex flex-col justify-end p-7 sm:p-10"><p className="eyebrow">{selected.category} / {mediaLabel(selected.mediaType)}</p><h2 className="mt-4 font-serif text-4xl leading-tight">{selected.title}</h2><p className="mt-5 text-sm leading-7 text-muted">{selected.description}</p>{!selected.src && !selected.embedUrl && <p className="mt-8 border border-gold/40 bg-[#faf7f0] p-4 text-xs leading-6 text-muted">This is a media-ready placeholder. Add an approved photo or video file to activate it.</p>}</div></div></div></div>}
  </>;
}
