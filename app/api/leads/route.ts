import { z } from "zod";
import { getDb } from "../../../db";
import { leads } from "../../../db/schema";
const schema=z.object({name:z.string().trim().min(2).max(100),phone:z.string().trim().regex(/^[0-9+\s-]{10,16}$/),email:z.string().trim().email().or(z.literal("")),eventType:z.string().trim().min(1).max(120),eventDate:z.string().optional(),budgetRange:z.string().max(80).optional(),location:z.string().trim().max(250).optional(),selectedService:z.string().max(120).optional(),selectedPackage:z.string().max(80).optional(),preferredTheme:z.string().max(120).optional(),preferredColors:z.string().max(120).optional(),message:z.string().trim().max(1500).optional(),preferredContact:z.enum(["phone","email"]),consent:z.literal(true),website:z.string().max(0)});
const requests=new Map<string,{count:number;reset:number}>();
function rateLimited(request:Request){const ip=request.headers.get("cf-connecting-ip")||"local";const now=Date.now();const current=requests.get(ip);if(!current||current.reset<now){requests.set(ip,{count:1,reset:now+60_000});return false}current.count++;return current.count>5}
export async function POST(request:Request){
 if(rateLimited(request))return Response.json({error:"Too many attempts. Please wait a moment and try again."},{status:429});
 try{
  const parsed=schema.safeParse(await request.json());if(!parsed.success)return Response.json({error:"Please review the highlighted fields."},{status:400});
  const d=parsed.data;const db=getDb();await db.insert(leads).values({name:d.name,phone:d.phone,email:d.email||null,eventType:d.eventType,eventDate:d.eventDate||null,budgetRange:d.budgetRange||null,location:d.location||null,selectedPackage:d.selectedPackage||null,message:[d.selectedService&&`Service: ${d.selectedService}`,d.preferredTheme&&`Theme: ${d.preferredTheme}`,d.preferredColors&&`Colours: ${d.preferredColors}`,d.message].filter(Boolean).join("\n"),preferredContact:d.preferredContact});
  const key=process.env.RESEND_API_KEY;const from=process.env.ENQUIRY_FROM_EMAIL;
  if(key&&from)await fetch("https://api.resend.com/emails",{method:"POST",headers:{authorization:`Bearer ${key}`,"content-type":"application/json"},body:JSON.stringify({from,to:["celebratelife4444@gmail.com"],subject:`New Celebrate Life enquiry — ${d.eventType}`,text:`Name: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email||"Not provided"}\nEvent: ${d.eventType}\nDate: ${d.eventDate||"Not provided"}\nLocation: ${d.location||"Not provided"}\nPackage: ${d.selectedPackage||"Not selected"}\n\n${d.message||""}`})});
  return Response.json({ok:true},{status:201});
 }catch{return Response.json({error:"We couldn’t save your enquiry right now. Please call Celebrate Life directly."},{status:500})}
}
