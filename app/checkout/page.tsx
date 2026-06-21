"use client";
import { useRouter } from "next/navigation";
import { Container } from "@/components/Container";
import { CheckoutForm } from "@/components/Forms";
import { CartSummary } from "@/components/CartSummary";
import { useCart } from "@/components/CartProvider";
import { EmptyState } from "@/components/EmptyState";
export default function Checkout(){const router=useRouter();const {items}=useCart();return <Container className="section"><p className="eyebrow">Checkout demo</p><h1 className="mt-3 font-serif text-5xl">Almost to the good part.</h1>{items.length===0?<div className="mt-10"><EmptyState title="Your demo order needs a few things first."/></div>:<div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]"><div><CheckoutForm onComplete={()=>router.push("/confirmation")}/></div><CartSummary compact/></div>}</Container>}
