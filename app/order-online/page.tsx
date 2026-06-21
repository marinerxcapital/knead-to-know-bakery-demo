"use client";
import { useMemo,useState } from "react";
import { products, type Category } from "@/data/products";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { ProductGrid } from "@/components/ProductCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { CartSummary } from "@/components/CartSummary";
import { EmptyState } from "@/components/EmptyState";
export default function OrderOnline(){const [active,setActive]=useState<"All"|Category>("All"),[search,setSearch]=useState("");const list=useMemo(()=>products.filter(p=>(active==="All"||p.category===active)&&p.name.toLowerCase().includes(search.toLowerCase())),[active,search]);return <><PageHero eyebrow="Order online" title="Your next bakery run, composed." copy="Choose your favorites, save them in your bag, and walk through the demo checkout. No payment required."/><Container className="section"><div className="grid gap-8 lg:grid-cols-[1fr_330px]"><div><div className="mb-8 space-y-5"><label className="block max-w-md text-xs font-bold uppercase tracking-[.1em]">Find something good<input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search the menu" className="mt-2 normal-case tracking-normal"/></label><CategoryFilter active={active} onChange={setActive}/></div>{list.length?<ProductGrid products={list}/>:<EmptyState title="Nothing matches just yet." copy="Try a different search term or browse another category."/>}</div><div className="lg:sticky lg:top-24 lg:h-fit"><CartSummary/></div></div></Container></>}
