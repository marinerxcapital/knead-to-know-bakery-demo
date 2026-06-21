import Link from "next/link";
import { products } from "@/data/products";
import { testimonials } from "@/data/testimonials";
import { assets, videos } from "@/lib/assets";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { NewsletterForm } from "@/components/Forms";
import { ProductGrid } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";

const collections = [
  { number: "01", name: "Sourdough", note: "The slow, good kind.", href: "/sourdough" },
  { number: "02", name: "Cookies", note: "A little theatrical.", href: "/cookies" },
  { number: "03", name: "Pastries", note: "Made before the city wakes.", href: "/pastries" },
  { number: "04", name: "Gift Boxes", note: "Arrive with something lovely.", href: "/order-online" }
];

export default function Home() {
  const featured = products.filter(product => product.featured).slice(0, 6);

  return <>
    <section className="border-b border-ink/10 bg-white py-2.5 text-center">
      <p className="text-[9px] font-bold uppercase tracking-[.2em] text-muted">Small-batch bakes / thoughtfully made for pickup</p>
    </section>

    <section className="relative overflow-hidden bg-[#f9f8f5]">
      <div className="pointer-events-none absolute inset-0 opacity-60" style={{ backgroundImage: "radial-gradient(circle at 80% 18%, rgba(164,123,53,.12), transparent 23%), radial-gradient(circle at 9% 88%, rgba(233,224,208,.72), transparent 28%)" }}/>
      <Container className="relative grid min-h-[690px] items-center gap-12 py-14 lg:grid-cols-[.92fr_1.08fr] lg:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Artisan bakery / Est. 2024</p>
          <h1 className="mt-5 font-serif text-5xl leading-[.94] tracking-[-.055em] text-ink sm:text-6xl lg:text-[5.55rem]">The everyday bake,<br/><em className="font-serif font-normal text-gold">made extraordinary.</em></h1>
          <p className="mt-7 max-w-lg text-[15px] leading-7 text-muted">Naturally leavened sourdough, composed sweets, and generous bakery boxes for people who believe the details are the point.</p>
          <div className="mt-9 flex flex-wrap gap-3"><ButtonLink href="/order-online">Reserve your pickup</ButtonLink><ButtonLink href="/menu" variant="light">Explore the menu</ButtonLink></div>
          <div className="mt-12 flex items-center gap-7 border-t border-ink/12 pt-5 text-[10px] font-bold uppercase tracking-[.14em] text-muted"><span>Slow fermented</span><span className="h-1 w-1 rounded-full bg-gold"/><span>Small batch</span><span className="h-1 w-1 rounded-full bg-gold"/><span>Made to gather</span></div>
        </div>

        <div className="home-hero-media mx-auto w-full max-w-2xl">
          <div className="home-hero-video-frame relative aspect-[16/10] w-full overflow-hidden border border-gold/40 bg-white shadow-[0_24px_70px_rgba(49,38,25,.11)]">
            <video className="h-full w-full object-cover" src={videos.hero} poster={assets.banner} autoPlay loop muted playsInline preload="metadata" disablePictureInPicture controlsList="nodownload noplaybackrate noremoteplayback"/>
          </div>
          <div className="home-hero-ritual-card mt-5 border border-ink/10 bg-white px-5 py-4 shadow-soft sm:ml-auto sm:max-w-sm sm:px-6 sm:py-5 lg:-mr-6"><p className="eyebrow">This week&apos;s ritual</p><p className="mt-2 font-serif text-xl leading-tight sm:text-2xl">Country loaf, cultured butter, good company.</p></div>
        </div>
      </Container>
    </section>

    <section className="bg-white py-7"><Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><p className="font-serif text-2xl tracking-[-.025em]">A bakery with a quieter kind of confidence.</p><Link href="/about" className="text-[10px] font-bold uppercase tracking-[.15em] text-gold underline underline-offset-4">Our story</Link></Container></section>

    <section className="border-y border-ink/10 bg-[#fcfbf8] py-4"><Container className="grid grid-cols-2 divide-x divide-y divide-ink/10 border-l border-t border-ink/10 lg:grid-cols-4 lg:divide-y-0">{collections.map(collection => <Link href={collection.href} key={collection.name} className="group min-h-36 border-b border-r border-ink/10 p-5 transition hover:bg-[#f4efe6] sm:p-6"><p className="eyebrow">{collection.number}</p><h2 className="mt-5 font-serif text-2xl leading-none">{collection.name}</h2><p className="mt-2 text-xs text-muted">{collection.note}</p><span className="mt-4 block text-[10px] font-bold uppercase tracking-[.12em] text-gold">Discover</span></Link>)}</Container></section>

    <section className="section bg-white"><Container><div className="flex flex-wrap items-end justify-between gap-6"><SectionHeading eyebrow="The house favorites" title="Made for the first bite, and the last crumb." copy="A few things we would never want you to miss."/><Link href="/menu" className="text-[10px] font-bold uppercase tracking-[.15em] text-gold underline underline-offset-4">See all bakes</Link></div><div className="mt-10"><ProductGrid products={featured}/></div></Container></section>

    <section className="overflow-hidden bg-[#f4f0e9] py-16 sm:py-24"><Container className="grid items-center gap-12 lg:grid-cols-[.72fr_1.28fr]"><div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden border border-gold/50 bg-white p-2"><video className="h-full w-full object-cover" src={videos.gifting} poster={assets.banner} autoPlay loop muted playsInline preload="metadata"/></div><div><p className="eyebrow">The art of slow</p><h2 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.05] tracking-[-.04em] sm:text-5xl">Some things improve when you give them time.</h2><p className="mt-6 max-w-xl text-sm leading-7 text-muted">We begin with a living starter, use excellent butter and chocolate, and make in smaller quantities than is probably sensible. The result is bread with real character, sweets with clarity, and a bakery worth seeking out.</p><div className="mt-9 grid gap-7 sm:grid-cols-3"><FeatureCard number="01" title="Leavened">Time makes a more expressive loaf.</FeatureCard><FeatureCard number="02" title="Limited">We make enough to do it well.</FeatureCard><FeatureCard number="03" title="Finished">Every order gets a final touch.</FeatureCard></div></div></Container></section>

    <section className="section bg-white"><Container><div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]"><div><p className="eyebrow">A note for the table</p><blockquote className="mt-5 max-w-xl font-serif text-3xl leading-tight tracking-[-.03em] sm:text-4xl">&ldquo;The country loaf has the kind of crust you hear before you taste.&rdquo;</blockquote><p className="mt-6 text-[10px] font-bold uppercase tracking-[.15em] text-gold">Maya R. / Weekend regular</p></div><div className="grid gap-4 sm:grid-cols-2">{testimonials.slice(1).map(testimonial => <figure key={testimonial.name} className="border border-ink/10 bg-[#fcfbf8] p-6"><blockquote className="font-serif text-xl leading-7">&ldquo;{testimonial.quote}&rdquo;</blockquote><figcaption className="mt-7 text-[10px] font-bold uppercase tracking-[.13em] text-gold">{testimonial.name}<span className="text-muted"> / {testimonial.detail}</span></figcaption></figure>)}</div></div></Container></section>

    <section className="border-y border-ink/10 bg-[#f9f8f5] py-16"><Container className="grid items-center gap-8 lg:grid-cols-[1fr_.8fr]"><div><p className="eyebrow">The seasonal list</p><h2 className="mt-3 font-serif text-4xl tracking-[-.035em]">Good things, before they&apos;re gone.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-muted">An occasional note about limited bakes, holiday boxes, and the weeks that call for something extra.</p></div><NewsletterForm/></Container></section>
    <CTASection eyebrow="A table worth setting" title="Bring home something beautifully made." copy="Order a considered bakery box, a warm loaf, or a little too many cookies."/>
  </>;
}
