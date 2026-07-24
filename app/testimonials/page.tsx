import type { Metadata } from "next";
import { PageHero } from "../../components/PageHero";
export const metadata:Metadata={title:"Client Stories",description:"Sample client-story presentation for Celebrate Life Indore."};
const reviews=[
 {name:"Aarohi Sharma",event:"Birthday Decoration",text:"The colour palette and balloon backdrop came together beautifully. The setup felt personal, polished and perfect for photographs."},
 {name:"Rohan & Meera",event:"Anniversary Setup",text:"The room transformation felt warm and elegant. Every small detail supported the mood we had imagined."},
 {name:"Neha Verma",event:"Baby Shower",text:"The soft tones and styling made the whole celebration feel joyful and thoughtfully planned."},
 {name:"Kunal Mehta",event:"Proposal Decoration",text:"The setting looked intimate, tasteful and special. It created exactly the atmosphere I wanted for the moment."},
 {name:"Priya Jain",event:"Kids’ Theme Party",text:"The theme felt colourful without becoming crowded, and the photo area was a favourite with everyone."},
 {name:"Aditi & Varun",event:"Wedding Celebration",text:"The stage styling looked cohesive and premium. It gave the celebration a beautiful visual focus."},
];
export default function Testimonials(){return <><PageHero eyebrow="Sample client presentation" title="Stories from the celebration." copy="A preview of how client feedback can appear once real, approved testimonials are supplied."/><section className="page-content"><p className="demo-disclaimer"><strong>Demo content:</strong> The names and reviews below are fictional layout samples and are not customer endorsements.</p><div className="testimonial-grid">{reviews.map((r)=><article className="testimonial-card" key={r.name}><div className="stars" aria-label="Sample five-star rating">★★★★★</div><blockquote>“{r.text}”</blockquote><div><span>{r.name.split(" ").map(x=>x[0]).join("").slice(0,2)}</span><p><strong>{r.name}</strong><small>{r.event}</small></p></div></article>)}</div></section></>}
