import type { Metadata } from "next";
import { GalleryBrowser } from "../../components/GalleryBrowser";
import { PageHero } from "../../components/PageHero";
export const metadata:Metadata={title:"Gallery",description:"Explore curated event-decoration inspiration from Celebrate Life Indore."};
export default function Gallery(){return <><PageHero eyebrow="Curated project showcase" title="Beautifully transformed spaces." copy="Browse celebration directions by event type. Original client media can be added through the editable gallery system."/><section className="page-content"><GalleryBrowser/></section></>}
