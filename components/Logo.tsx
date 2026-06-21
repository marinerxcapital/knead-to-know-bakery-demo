import Image from "next/image";
import Link from "next/link";
import { assets } from "@/lib/assets";
export function Logo({ light=false }: { light?: boolean }) { return <Link href="/" className="group flex items-center gap-3" aria-label="Knead To Know home"><Image src={assets.logo} width={46} height={46} className={light ? "rounded-full shadow-[0_0_0_1px_rgba(255,255,255,.25)]" : ""} alt="Knead To Know logo" priority /><span className={light ? "hidden sm:block text-[10px] font-bold uppercase tracking-[.18em] text-white" : "hidden sm:block text-[10px] font-bold uppercase tracking-[.18em]"}>Knead To Know<br/><em className="font-serif font-normal tracking-[.3em] text-gold">Sweet & Sour</em></span></Link>; }
