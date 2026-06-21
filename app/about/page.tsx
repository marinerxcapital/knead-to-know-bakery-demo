import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { FeatureCard } from "@/components/FeatureCard";

export const metadata: Metadata = { title: "About", description: "The story and bakery philosophy behind Knead To Know Sweet & Sour." };

export default function About() {
  return <>
    <PageHero eyebrow="Our story" title="A bakery for people who notice the details." copy="Knead To Know began with a simple conviction: daily bread and a very good cookie should still feel special." cta="See the menu" href="/menu" visual="banner"/>
    <Container className="section grid gap-12 lg:grid-cols-2"><div className="relative aspect-square border border-gold/40 bg-ivory"><Image src="/assets/knead-to-know-logo-v1.png" alt="Knead To Know bakery logo" fill className="object-contain p-12"/></div><div><p className="eyebrow">Founder&apos;s note</p><h2 className="mt-3 font-serif text-4xl">A quiet standard, held every day.</h2><p className="mt-6 text-sm leading-7 text-muted">Knead To Know is imagined as a modern neighborhood bakery: warm but exacting, generous but never overdone. We make room for the ritual of a morning loaf, the delight of a dressed-up cookie, and the ease of arriving somewhere with something beautiful in hand.</p><p className="mt-4 text-sm leading-7 text-muted">The work begins with honest ingredients and time. The rest is attention: how a crust shatters, how a gift is packed, how a table feels when everyone reaches for one more piece.</p></div></Container>
    <section className="section bg-ivory"><Container><div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"><FeatureCard number="01" title="Ingredient-led">We choose ingredients for flavor first, and let them do their thing.</FeatureCard><FeatureCard number="02" title="Small batch">Limited runs keep the work close, fresh, and considered.</FeatureCard><FeatureCard number="03" title="Good neighbors">We imagine every bake moving through our local community.</FeatureCard><FeatureCard number="04" title="No shortcuts">Quality lives in fermentation, butter, timing, and care.</FeatureCard></div></Container></section>
  </>;
}
