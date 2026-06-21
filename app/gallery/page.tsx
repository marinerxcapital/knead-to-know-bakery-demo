import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { GalleryGrid } from "@/components/GalleryGrid";
export default function Gallery(){return <><PageHero eyebrow="A look around" title="The color, crumb, and quiet work of it." copy="A visual journal of sourdough, sweets, packaging, and the slow rituals that make the bakery tick." cta="Order online"/><Container className="section"><GalleryGrid/><p className="mt-6 text-center text-xs leading-6 text-muted">Gallery concept panels are intentional visual placeholders for this initial demo, ready to be swapped with professional product photography.</p></Container></>}
