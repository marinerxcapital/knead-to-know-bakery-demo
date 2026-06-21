import type { Metadata } from "next";
import { categories, products } from "@/data/products";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { ProductGrid } from "@/components/ProductCard";
export const metadata:Metadata={title:"Menu",description:"Explore the Knead To Know sourdough, cookies, pastries, gifting, and catering menu."};
export default function Menu(){return <><PageHero eyebrow="The full menu" title="Something for the table, the office, or the walk home." copy="Menus shift with the seasons and the oven, but the approach stays steady: exceptional ingredients, slow methods, and a very good finish."/><Container className="section space-y-16">{categories.map(c=><section key={c} id={c.toLowerCase().replace(/ /g,"-")}><div className="mb-6 flex items-end justify-between border-b border-ink/15 pb-4"><h2 className="font-serif text-3xl">{c}</h2><span className="eyebrow">Today’s selection</span></div><ProductGrid products={products.filter(p=>p.category===c)}/></section>)}</Container></>}
