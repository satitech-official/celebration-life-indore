"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { services, packages } from "../content/site";
const schema=z.object({name:z.string().min(2,"Please enter your full name."),phone:z.string().regex(/^[0-9+\s-]{10,16}$/,"Enter a valid phone number."),email:z.string().email("Enter a valid email.").or(z.literal("")),eventType:z.string().min(1,"Choose an event type."),eventDate:z.string().optional(),budgetRange:z.string().optional(),location:z.string().optional(),selectedService:z.string().optional(),selectedPackage:z.string().optional(),preferredTheme:z.string().optional(),preferredColors:z.string().optional(),message:z.string().max(1500).optional(),preferredContact:z.string(),consent:z.literal(true,{error:"Consent is required."}),website:z.string().max(0)});
type FormData=z.infer<typeof schema>;
export function BookingForm(){
 const params=useSearchParams(); const router=useRouter(); const [status,setStatus]=useState(""); const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm<FormData>({resolver:zodResolver(schema),defaultValues:{email:"",eventType:params.get("event")||"",selectedService:params.get("service")||"",selectedPackage:params.get("package")||"",preferredContact:"phone",website:""}});
 const submit=async(data:FormData)=>{setStatus("");const res=await fetch("/api/leads",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(data)});if(res.ok){router.push("/thank-you")}else{const body=await res.json() as {error?:string};setStatus(body.error||"We couldn’t submit your enquiry. Please call us directly.");}};
 const field=(name:keyof FormData,label:string,type="text")=><div className="form-field"><label htmlFor={name}>{label}</label><input id={name} type={type} {...register(name)} aria-invalid={!!errors[name]}/>{errors[name]&&<small>{errors[name]?.message}</small>}</div>;
 return <form className="booking-form" onSubmit={handleSubmit(submit)} noValidate>
  {field("name","Full name")}{field("phone","Phone number","tel")}{field("email","Email address","email")}
  <div className="form-field"><label htmlFor="eventType">Event type</label><select id="eventType" {...register("eventType")}><option value="">Select an event</option>{services.slice(0,17).map(s=><option key={s.slug} value={s.title}>{s.title}</option>)}</select>{errors.eventType&&<small>{errors.eventType.message}</small>}</div>
  {field("eventDate","Event date","date")}{field("location","Venue or location")}
  <div className="form-field"><label htmlFor="budgetRange">Budget range</label><select id="budgetRange" {...register("budgetRange")}><option value="">Prefer to discuss</option><option>Under ₹10,000</option><option>₹10,000–₹25,000</option><option>₹25,000–₹50,000</option><option>₹50,000+</option></select></div>
  <div className="form-field"><label htmlFor="selectedPackage">Package</label><select id="selectedPackage" {...register("selectedPackage")}><option value="">Not selected</option>{packages.map(p=><option key={p.name}>{p.name}</option>)}</select></div>
  <div className="form-field"><label htmlFor="selectedService">Selected service</label><select id="selectedService" {...register("selectedService")}><option value="">Choose later</option>{services.map(s=><option key={s.slug} value={s.slug}>{s.title}</option>)}</select></div>
  {field("preferredTheme","Preferred theme or style")}{field("preferredColors","Preferred colours")}
  <div className="form-field"><label htmlFor="preferredContact">Preferred contact</label><select id="preferredContact" {...register("preferredContact")}><option value="phone">Phone</option><option value="email">Email</option></select></div>
  <div className="form-field full"><label htmlFor="message">Tell us about your celebration</label><textarea id="message" {...register("message")}/></div>
  <div className="form-field" style={{display:"none"}} aria-hidden="true"><label htmlFor="website">Website</label><input id="website" tabIndex={-1} autoComplete="off" {...register("website")}/></div>
  <label className="form-consent"><input type="checkbox" {...register("consent")}/> I agree that Celebrate Life may use these details to respond to my enquiry.</label>{errors.consent&&<small>{errors.consent.message}</small>}
  {status&&<div className="form-status" role="alert">{status}</div>}<button className="button button-dark full" disabled={isSubmitting}>{isSubmitting?"Sending enquiry…":"Send booking enquiry"}</button>
 </form>
}
