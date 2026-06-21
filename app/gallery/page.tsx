import { galleryItems } from "@/data/galleryItems";
import { Container } from "@/components/Container";
import { GalleryShowcase } from "@/components/GalleryShowcase";
import { PageHero } from "@/components/PageHero";

export default function Gallery() {
  return <>
    <PageHero eyebrow="The visual pantry" title="A place for every beautiful angle." copy="A living gallery for bakery photography, short process films, and immersive 360 moments from the case to the crumb." cta="See the menu" href="/menu" visual="banner"/>
    <section className="section bg-white"><Container><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">The gallery</p><h1 className="mt-3 font-serif text-4xl leading-tight tracking-[-.04em] sm:text-5xl">The things worth looking at twice.</h1><p className="mt-5 text-sm leading-7 text-muted">Filter the collection, open any moment for a closer look, or explore a 360 experience when one is available.</p></div><div className="mt-10"><GalleryShowcase items={galleryItems}/></div></Container></section>
    <section className="border-y border-ink/10 bg-[#f8f5ef] py-12"><Container className="grid gap-4 md:grid-cols-3"><p className="font-serif text-2xl">Media-ready by design.</p><p className="text-sm leading-7 text-muted">Photos, locally hosted video, and YouTube 360 embeds can all be added without changing the gallery layout.</p><p className="text-sm leading-7 text-muted">Content setup is documented in <code className="border border-ink/10 bg-white px-2 py-1 text-xs">GALLERY_CONTENT.md</code> for the next update.</p></Container></section>
  </>;
}
