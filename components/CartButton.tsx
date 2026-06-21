"use client";
import Link from "next/link";
import { useCart } from "./CartProvider";
export function CartButton(){const {count}=useCart();return <Link href="/cart" aria-label={`Cart, ${count} items`} className="relative inline-flex h-10 items-center gap-2 border-l border-ink/10 pl-4 text-xs font-bold uppercase tracking-[.12em]"><span aria-hidden>Bag</span><span className="grid h-5 min-w-5 place-items-center rounded-full bg-ink px-1 text-[10px] text-white">{count}</span></Link>}
