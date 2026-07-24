"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";
import { eventImages } from "../content/site";
const cats=["All","Birthday","Wedding","Haldi","Proposal","Balloon Decoration","Corporate","Kids","Baby Shower","Anniversary","Room Decoration","Stage Decoration"];
export function GalleryBrowser(){
 const [cat,setCat]=useState("All"); const [selected,setSelected]=useState<(typeof eventImages)[number]|null>(null);
 const shown=eventImages.filter(x=>cat==="All"||x.category===cat);
 return <><div className="toolbar">{cats.map(c=><button className={cat===c?"button button-dark":"button"} key={c} onClick={()=>setCat(c)}>{c}</button>)}</div>{shown.length?<div className="gallery-grid">{shown.map((item)=><article className="gallery-item" key={item.src}><button className="gallery-preview" onClick={()=>setSelected(item)} aria-label={`Preview ${item.title}`}><Image src={item.src} fill sizes="(max-width:700px) 90vw, 33vw" alt={item.title}/></button><div><small>{item.category}</small><h2>{item.title}</h2><span>{item.source}</span><Link href={`/book?event=${encodeURIComponent(item.category)}`}>Enquire for a similar setup →</Link></div></article>)}</div>:<div className="empty-state"><h2>No media in this category yet</h2><p>New celebration photographs will be added here soon.</p></div>}{selected&&<div className="lightbox" role="dialog" aria-modal="true" aria-label={`${selected.title} preview`} onClick={()=>setSelected(null)}><button onClick={()=>setSelected(null)} aria-label="Close image preview"><X/></button><div onClick={e=>e.stopPropagation()}><Image src={selected.src} fill sizes="90vw" alt={selected.title}/><footer><div><small>{selected.category}</small><h2>{selected.title}</h2><p>{selected.source}</p></div><Link className="button" href={`/book?event=${encodeURIComponent(selected.category)}`}>Book a similar setup</Link></footer></div></div>}</>
}
