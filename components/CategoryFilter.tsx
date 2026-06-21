"use client";
import type { Category } from "@/data/products";
export function CategoryFilter({active,onChange}:{active:"All"|Category;onChange:(v:"All"|Category)=>void}){const list:["All"|Category,...("All"|Category)[]]=["All","Sourdough","Cookies","Pastries","Seasonal Boxes","Catering","Drinks"];return <div className="flex flex-wrap gap-2">{list.map(c=><button onClick={()=>onChange(c)} className={`border px-3 py-2 text-[10px] font-bold uppercase tracking-[.1em] transition ${active===c?"border-ink bg-ink text-white":"border-ink/15 hover:border-gold"}`} key={c}>{c}</button>)}</div>}
