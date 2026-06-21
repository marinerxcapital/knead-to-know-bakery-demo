import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductGrid } from "@/components/ProductCard";
import { FeatureCard } from "@/components/FeatureCard";
import { CTASection } from "@/components/CTASection";
import { NewsletterForm } from "@/components/Forms";

const categories = [
  ["Sourdough", "Slow-fermented, deeply flavored loaves.", "/sourdough"],
  ["Cookies", "Gourmet classics with serious intention.", "/cookies"],
  ["Pastries", "Laminated, seasonal, made for mornings.", "/pastries"],
  ["Seasonal Boxes", "The easiest way to give something good.", "/order-online"],
];

export default function Home() {
  return <>
    <section className="relative overflow-hidden bg-ivory">
      <Container className="grid min-h-[610px] items-center gap-10 py-14 md:grid-cols-[.92fr_1.08fr]">
        <div className="relative z-10">
          <p className="eyebrow">Knead To Know / Sweet & Sour</p>
          <h1 className="display mt-5 max-w-3xl">Small-Batch Sourdough. Gourmet Cookies. Baked With Intention.</h1>
          <p className="mt-6 max-w-xl text-sm leading-7 text-muted">Knead To Know is a premium artisan bakery crafting naturally leavened breads, refined sweets, and seasonal bakery boxes.</p>
          <div className="mt-8 flex flex-wrap gap-3"><ButtonLink href="/order-online">Order online</ButtonLink><ButtonLink href="/menu" variant="light">View menu</ButtonLink></div>
        </div>
        <div className="relative mx-auto aspect-[16/10] w-full overflow-hidden border border-gold/40 bg-white shadow-soft">
          <Image src="/assets/knead-to-know-bakery-banner.jpg" alt="Knead To Know bakery banner with sourdough and wheat" fill priority className="object-cover"/>
        </div>
      </Container>
    </section>

    <section className="section"><Container><SectionHeading eyebrow="The collection" title="A thoughtful bakery, from the first fold to the final ribbon."/>
      <div className="mt-10 grid gap-px border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">{categories.map(([name, description, href], index) => <Link href={href} key={name} className="group bg-white p-6 transition hover:bg-ivory"><p className="eyebrow">0{index + 1}</p><h3 className="mt-7 font-serif text-2xl">{name}</h3><p className="mt-3 text-sm leading-6 text-muted">{description}</p><span className="mt-8 block text-[10px] font-bold uppercase tracking-[.12em] text-gold">Explore</span></Link>)}</div>
    </Container></section>

    <section className="section bg-ivory"><Container><div className="flex flex-wrap items-end justify-between gap-5"><SectionHeading eyebrow="Fresh from the oven" title="A few favorites, for now."/><Link href="/menu" className="text-[11px] font-bold uppercase tracking-[.14em] underline underline-offset-4">Full menu</Link></div><div className="mt-10"><ProductGrid products={products.filter(product => product.featured).slice(0, 6)}/></div></Container></section>

    <section className="section"><Container><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><SectionHeading eyebrow="The good kind of slow" title="Built around fermentation, craft, and timing." copy="We think the best things arrive with a little patience. Every bake begins with a living starter and ends when it is actually ready."/><div className="grid gap-8 sm:grid-cols-2"><FeatureCard number="01" title="Naturally leavened">Our breads get the long, quiet fermentation they deserve.</FeatureCard><FeatureCard number="02" title="Small batch">We bake with focus, keeping every run deliberately limited.</FeatureCard><FeatureCard number="03" title="Carefully finished">Texture, balance, and beauty get equal attention.</FeatureCard><FeatureCard number="04" title="Ready for pickup">The good part: a beautifully made order, waiting for you.</FeatureCard></div></div></Container></section>

    <section className="bg-[#e9e0d0] py-16"><Container className="grid items-center gap-10 md:grid-cols-2"><div className="border border-gold/40 bg-white p-8 sm:p-12"><p className="eyebrow">Gifting, beautifully handled</p><h2 className="mt-4 font-serif text-4xl leading-tight">A very good reason to arrive with a box.</h2><p className="mt-5 text-sm leading-7 text-muted">Cookie boxes, bread bags, catering trays, and seasonal gifts, finished with the same restraint and care as what is inside.</p><ButtonLink href="/catering" variant="gold" className="mt-7">Plan a spread</ButtonLink></div><div className="relative mx-auto aspect-square w-full max-w-sm border border-ink/20 bg-ink"><Image src="/assets/knead-to-know-logo-v1.png" alt="Knead To Know packaging mark" fill className="object-contain p-12 brightness-0 invert"/></div></Container></section>

    <section className="section"><Container><SectionHeading eyebrow="From the table" title="The kind words we keep close." center/><div className="mt-10 grid gap-4 md:grid-cols-3">{testimonials.map(testimonial => <figure className="border border-ink/10 p-6" key={testimonial.name}><blockquote className="font-serif text-xl leading-8">&ldquo;{testimonial.quote}&rdquo;</blockquote><figcaption className="mt-8 text-[10px] font-bold uppercase tracking-[.13em] text-gold">{testimonial.name} <span className="text-muted">/ {testimonial.detail}</span></figcaption></figure>)}</div></Container></section>

    <section className="bg-ivory py-16"><Container className="max-w-3xl text-center"><SectionHeading eyebrow="Keep in the loop" title="The seasonal list." copy="A brief, lovely note when a limited bake, market weekend, or seasonal box is worth knowing about." center/><div className="mx-auto max-w-md"><NewsletterForm/></div></Container></section>
    <CTASection/>
  </>;
}
