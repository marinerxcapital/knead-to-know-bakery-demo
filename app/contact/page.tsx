import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/Forms";
import { site } from "@/data/site";
import { ButtonLink } from "@/components/Button";
export const metadata:Metadata={title:"Contact",description:"Contact Knead To Know for bakery questions, pickups, and catering."};
export default function Contact(){return <><PageHero eyebrow="Come say hello" title="We’d love to hear what you’re planning." copy="Questions about a pickup, a special table, or a gift box? Leave a note—or start with catering if your gathering is taking shape." cta="Catering inquiry" href="/catering"/><Container className="section grid gap-12 lg:grid-cols-[1fr_.9fr]"><div><p className="eyebrow">Send a note</p><h2 className="mt-3 font-serif text-4xl">We’re listening.</h2><div className="mt-8"><ContactForm/></div></div><aside className="bg-ivory p-7"><p className="eyebrow">Visit & pickup</p><p className="mt-5 font-serif text-2xl">{site.address}</p><div className="mt-7 space-y-2 text-sm leading-6 text-muted">{site.hours.map(x=><p key={x}>{x}</p>)}<p className="pt-3">{site.email}<br/>{site.phone}</p><p className="pt-3">Instagram · TikTok · Pinterest</p></div><div className="mt-8 grid aspect-[16/9] place-items-center border border-ink/15 bg-beige text-center text-[10px] font-bold uppercase tracking-[.14em] text-muted">Map placeholder<br/>Neighborhood pickup</div><ButtonLink href="/catering" variant="gold" className="mt-6">Plan catering</ButtonLink></aside></Container></>}
