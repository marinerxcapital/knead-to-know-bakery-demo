import { products } from "@/data/products";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { ProductGrid } from "@/components/ProductCard";
import { CTASection } from "@/components/CTASection";
export default function Pastries(){return <><PageHero eyebrow="Morning pastry" title="The case is small on purpose." copy="Our pastry menu is made in limited batches, early and by hand. Once it’s gone, it has had a good day."/><Container className="section"><ProductGrid products={products.filter(p=>p.category==="Pastries")}/></Container><section className="section bg-ivory"><Container className="grid gap-8 md:grid-cols-2"><div><p className="eyebrow">Seasonal pastry box</p><h2 className="mt-4 font-serif text-4xl">For a slow, excellent morning.</h2></div><p className="text-sm leading-7 text-muted">The Weekend Breakfast Box pairs a country loaf, pastries, cookies, and house jam. It’s the table plan you did not know you needed.</p></Container></section><CTASection title="Catch the morning bake." copy="Order early for the best chance at your favorite laminated things." href="/order-online" label="Order pastries"/></>}
