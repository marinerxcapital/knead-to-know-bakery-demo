import type { ReactNode } from "react";
export function FeatureCard({number,title,children}:{number?:string;title:string;children:ReactNode}){return <div className="border-l border-gold pl-5"><p className="eyebrow">{number}</p><h3 className="mt-3 font-serif text-2xl">{title}</h3><p className="mt-3 text-sm leading-6 text-muted">{children}</p></div>}
