import { faqs } from "@/data/faqs";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { FAQAccordion } from "@/components/FAQAccordion";
export default function FAQ(){return <><PageHero eyebrow="Questions, answered" title="A few practical things, before the good part." copy="Ordering, pickup, ingredients, catering, and the care of a beautiful loaf." cta="Contact us" href="/contact"/><Container className="section max-w-4xl"><FAQAccordion items={faqs}/></Container></>}
