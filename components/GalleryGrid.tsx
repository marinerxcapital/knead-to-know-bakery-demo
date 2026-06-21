import { galleryItems } from "@/data/galleryItems";

export function GalleryGrid() {
  return <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{galleryItems.map((item, index) => <div className={`relative flex aspect-[4/5] flex-col justify-end overflow-hidden border border-ink/10 p-5 ${index % 3 === 0 ? "bg-[#ded2c0]" : index % 3 === 1 ? "bg-[#f4efe6]" : "bg-[#cbb694]"}`} key={item.id}><div className="absolute inset-4 border border-white/60"/><div className="relative"><p className="text-[10px] font-bold uppercase tracking-[.16em] text-ink/60">{item.category}</p><p className="mt-2 font-serif text-2xl">{item.title}</p></div></div>)}</div>;
}
