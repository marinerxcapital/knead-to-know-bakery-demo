import type { Metadata } from "next";
import { cateringPackages } from "@/data/cateringPackages";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { CateringForm } from "@/components/Forms";

export const metadata: Metadata = { title: "Catering", description: "Thoughtful bakery catering, gifting, and event spreads by Knead To Know." };

export default function Catering() {
  return <>
    <PageHero eyebrow="Catering & gifting" title="A well-fed room is a better room." copy="From office mornings to celebration tables, we make abundant, polished bakery spreads that land beautifully." cta="Start an inquiry" href="#inquiry" visual="banner"/>
    <Container className="section"><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{cateringPackages.map((item, index) => <article className="border border-ink/10 p-6" key={item.name}><p className="eyebrow">0{index + 1} / {item.serves}</p><h2 className="mt-5 font-serif text-2xl">{item.name}</h2><p className="mt-3 text-sm leading-6 text-muted">{item.description}</p><p className="mt-6 font-serif text-xl">{item.price}</p></article>)}</div></Container>
    <section className="bg-ivory py-16"><Container><p className="eyebrow">Made for gathering</p><h2 className="mt-3 font-serif text-4xl">Office mornings / client gifts / celebrations / seasonal tables</h2></Container></section>
    <Container className="section max-w-4xl" id="inquiry"><p className="eyebrow">Tell us the shape of it</p><h2 className="mt-3 font-serif text-4xl">Start a catering inquiry.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-muted">This demo form is ready to show the flow; nothing is sent externally.</p><div className="mt-8"><CateringForm/></div></Container>
  </>;
}
