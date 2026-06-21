import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { ProductGrid } from "@/components/ProductCard";
import { products } from "@/data/products";
import { videos } from "@/lib/assets";

export default function Cookies() {
  return <><PageHero eyebrow="Gourmet cookies" title="A little dramatic. Entirely delicious." copy="Brown butter, honest chocolate, bright citrus, toasted sugar: the details have nowhere to hide in a really good cookie." cta="Shop cookies" visual="video" videoSrc={videos.cookies}/><Container className="section"><ProductGrid products={products.filter(product => product.category === "Cookies")}/></Container><section className="bg-[#e9e0d0] py-16"><Container className="grid gap-8 md:grid-cols-2"><div className="border border-ink/15 bg-white p-8"><p className="eyebrow">The cookie box</p><h2 className="mt-4 font-serif text-4xl">A polished little gift.</h2><p className="mt-4 text-sm leading-7 text-muted">Six house cookies in a ribbon-ready box, selected for contrast, comfort, and maximum delight.</p><ButtonLink href="/order-online" className="mt-6">Build a box</ButtonLink></div><div className="p-8"><p className="eyebrow">Seasonal drops</p><h2 className="mt-4 font-serif text-4xl">The fun part is that they move.</h2><p className="mt-4 text-sm leading-7 text-muted">Jam thumbprints, holiday boxes, and bright new flavors make brief appearances. Join the list to catch them.</p></div></Container></section><CTASection eyebrow="Catering cookies" title="A tray that gets the meeting talking." copy="Cookie trays are the easiest way to make an office afternoon feel considered." href="/catering" label="Explore catering"/></>;
}
