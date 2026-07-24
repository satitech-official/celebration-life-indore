import type { Metadata } from "next";
import { PageHero } from "../../components/PageHero";
import { ServiceBrowser } from "../../components/ServiceBrowser";
export const metadata:Metadata={title:"Decoration Services",description:"Explore birthday, wedding, balloon, baby shower and event decoration services in Indore."};
export default function Services(){return <><PageHero eyebrow="Decoration services in Indore" title="Every reason to celebrate." copy="Explore flexible decoration directions for intimate surprises, family milestones, weddings, corporate occasions and custom themes."/><section className="page-content"><ServiceBrowser/></section></>}
