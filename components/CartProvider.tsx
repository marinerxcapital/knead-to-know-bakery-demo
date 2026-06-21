"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/data/products";
export type CartLine = Product & { quantity:number };
type Cart = {items:CartLine[];add:(product:Product)=>void;remove:(id:string)=>void;update:(id:string,quantity:number)=>void;clear:()=>void;count:number;subtotal:number;tax:number;total:number};
const CartContext=createContext<Cart | null>(null);
export function CartProvider({children}:{children:React.ReactNode}) { const [items,setItems]=useState<CartLine[]>([]); const [loaded,setLoaded]=useState(false);
 useEffect(()=>{try{const saved=localStorage.getItem("ktk-cart");if(saved)setItems(JSON.parse(saved));}catch{} setLoaded(true)},[]);
 useEffect(()=>{if(loaded)localStorage.setItem("ktk-cart",JSON.stringify(items))},[items,loaded]);
 const value=useMemo(()=>{const subtotal=items.reduce((n,i)=>n+i.price*i.quantity,0);const tax=subtotal*.0875;return {items,add:(p:Product)=>setItems(v=>{const found=v.find(i=>i.id===p.id);return found?v.map(i=>i.id===p.id?{...i,quantity:i.quantity+1}:i):[...v,{...p,quantity:1}]}),remove:(id:string)=>setItems(v=>v.filter(i=>i.id!==id)),update:(id:string,q:number)=>setItems(v=>q<1?v.filter(i=>i.id!==id):v.map(i=>i.id===id?{...i,quantity:q}:i)),clear:()=>setItems([]),count:items.reduce((n,i)=>n+i.quantity,0),subtotal,tax,total:subtotal+tax};},[items]); return <CartContext.Provider value={value}>{children}</CartContext.Provider>; }
export function useCart(){const c=useContext(CartContext);if(!c)throw new Error("useCart must be inside CartProvider");return c;}
