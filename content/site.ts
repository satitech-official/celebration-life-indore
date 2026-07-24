export type Service = {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  featured: boolean;
};

const serviceSeed = [
  ["balloon-decoration", "Balloon Decoration", "Signature", "Sculptural balloon styling shaped around your space and colour story."],
  ["birthday-decoration", "Birthday Decoration", "Milestones", "Personal birthday settings that make every age feel beautifully celebrated."],
  ["anniversary-decoration", "Anniversary Decoration", "Romantic", "Warm, intimate details for a milestone shared together."],
  ["baby-shower-decoration", "Baby Shower Decoration", "Milestones", "Soft, joyful settings designed for a beautiful new beginning."],
  ["haldi-decoration", "Haldi Decoration", "Wedding", "Sunlit marigold-inspired styling with a vibrant traditional spirit."],
  ["wedding-decoration", "Wedding Decoration", "Wedding", "Layered celebration spaces designed around your wedding story."],
  ["engagement-decoration", "Engagement Decoration", "Wedding", "Elegant settings for the moment your next chapter begins."],
  ["proposal-decoration", "Proposal Decoration", "Romantic", "Private, atmospheric setups designed around one unforgettable question."],
  ["ring-ceremony-decoration", "Ring Ceremony Decoration", "Wedding", "Polished stage and guest-area styling for a meaningful family occasion."],
  ["bride-to-be-decoration", "Bride-to-Be Decoration", "Wedding", "Playful, photo-ready details for the bride and her favourite people."],
  ["groom-to-be-decoration", "Groom-to-Be Decoration", "Wedding", "Contemporary celebration styling with personality and polish."],
  ["welcome-decoration", "Welcome Decoration", "Signature", "Thoughtful entrances that set the tone before the celebration begins."],
  ["corporate-events", "Corporate Events", "Corporate", "Brand-aware decoration for launches, milestones and team celebrations."],
  ["office-decoration", "Office Decoration", "Corporate", "Smart, efficient transformations for workplace celebrations."],
  ["festival-decoration", "Festival Decoration", "Seasonal", "Festive installations tailored to your space and occasion."],
  ["kids-theme-parties", "Kids’ Theme Parties", "Kids", "Imaginative, colourful settings built around a child’s favourite world."],
  ["romantic-room-decoration", "Romantic Room Decoration", "Romantic", "Intimate room transformations with refined, warm details."],
  ["car-decoration", "Car Decoration", "Specialty", "Tasteful floral and ribbon styling for memorable arrivals."],
  ["house-decoration", "House Decoration", "Spaces", "Celebration styling adapted carefully to the scale of your home."],
  ["hotel-room-decoration", "Hotel Room Decoration", "Spaces", "Elegant surprise setups coordinated with the venue where permitted."],
  ["reception-decoration", "Reception Decoration", "Wedding", "A sophisticated welcome for your first celebration as newlyweds."],
  ["stage-decoration", "Stage Decoration", "Signature", "Statement backdrops with depth, balance and camera-ready composition."],
  ["mandap-decoration", "Mandap Decoration", "Wedding", "Ceremony-centred styling shaped by your colours and traditions."],
  ["photography-setup", "Photography Setup Decoration", "Specialty", "Purpose-built corners that make every frame feel considered."],
  ["custom-theme-decoration", "Custom Theme Decoration", "Signature", "A creative concept developed from your own references and ideas."],
  ["surprise-decoration", "Surprise Decoration", "Specialty", "Discreetly coordinated details for a reveal they will remember."],
  ["luxury-event-planning", "Luxury Event Planning", "Planning", "A cohesive creative direction for celebrations requiring more coordination."],
] as const;

export const services: Service[] = serviceSeed.map((item, index) => ({
  id: String(index + 1),
  slug: item[0],
  title: item[1],
  category: item[2],
  shortDescription: item[3],
  fullDescription: `${item[1]} by Celebrate Life begins with your occasion, venue and visual preferences. The concept is shaped for the space, with every confirmed element planned to feel cohesive rather than simply added.`,
  features: ["Colour-led concept", "Space-aware styling", "Customisation on request", "Coordinated setup"],
  featured: index < 8,
}));

export const packages = [
  { name: "Silver", tone: "silver", ideal: "A focused, elegant setup", features: ["Backdrop concept", "Balloon arrangement", "Personalised detail", "Coordinated setup"] },
  { name: "Gold", tone: "gold", ideal: "A fuller celebration moment", features: ["Layered backdrop", "Expanded balloon styling", "Cake-table styling", "Theme customisation"] },
  { name: "Premium", tone: "rose", ideal: "A complete photo-ready setting", features: ["Statement backdrop", "Premium styling mix", "Lighting accents", "Welcome detail"] },
  { name: "Luxury", tone: "purple", ideal: "An immersive event experience", features: ["Multi-zone styling", "Custom creative direction", "Floral accents", "Photography corner"] },
  { name: "VIP", tone: "dark", ideal: "A bespoke celebration concept", features: ["End-to-end concept", "Venue-wide visual language", "Speciality props", "Dedicated planning"] },
];

export const faqs = [
  ["Which types of events do you decorate?", "Celebrate Life works across birthdays, weddings, baby showers, proposals, anniversaries, corporate celebrations and many custom occasions. Final availability is confirmed during consultation."],
  ["Do you provide customized themes?", "Yes. Share your preferred colours, references and venue details so the team can discuss a concept suited to your occasion."],
  ["How early should I book?", "Booking windows vary by event scale, date and material availability. Enquire with your preferred date for current availability."],
  ["Do you provide decoration outside Indore?", "Travel availability and any related charges need to be confirmed for each location."],
  ["Can I share an inspiration image?", "Yes. The booking form includes an inspiration-image field so you can communicate the direction you have in mind."],
  ["Are packages customizable?", "Packages are editable planning frameworks. Confirmed inclusions and customisation are provided in your quotation."],
  ["How is a booking confirmed?", "Confirmation terms, advance requirements and final scope are shared directly by the team. No booking is assumed until those details are agreed."],
];

export const eventImages = [
  { id: "birthday-emerald", src: "/events/birthday.jpg", category: "Birthday", title: "Emerald Birthday Celebration", source: "Pexels · Natalia S" },
  { id: "wedding-stage", src: "/events/wedding-stage.jpg", category: "Wedding", title: "Elegant Floral Wedding Stage", source: "Pexels · Prashanti Nilam" },
  { id: "baby-shower-soft", src: "/events/baby-shower.jpg", category: "Baby Shower", title: "Soft-Tone Baby Shower", source: "Pexels · Adriana Coulson" },
  { id: "outdoor-wedding", src: "/events/outdoor-wedding.jpg", category: "Wedding", title: "Garden Wedding Experience", source: "Pexels · The Visionary Vows" },
  { id: "kids-pastel", src: "/events/kids-theme.jpg", category: "Kids", title: "Pastel Kids’ Theme Setup", source: "Pexels · Amanda Cavalcante" },
  { id: "birthday-pink", src: "/events/pink-birthday.jpg", category: "Birthday", title: "Pink Balloon Birthday", source: "Pexels · Hanna Auramenka" },
  { id: "anniversary-rose", src: "/events/birthday-roses.jpg", category: "Anniversary", title: "Rose & Balloon Celebration", source: "Pexels · Daniil Kondrashin" },
  { id: "kids-colourful", src: "/events/kids-celebration.jpg", category: "Kids", title: "Colourful Kids’ Celebration", source: "Pexels · Bigmass Media" },
  { id: "haldi-stage", src: "/events/outdoor-wedding.jpg", category: "Haldi", title: "Sunlit Haldi Celebration", source: "Curated event inspiration" },
  { id: "proposal-romantic", src: "/events/birthday-roses.jpg", category: "Proposal", title: "Romantic Proposal Setup", source: "Curated event inspiration" },
  { id: "balloon-signature", src: "/events/pink-birthday.jpg", category: "Balloon Decoration", title: "Signature Balloon Installation", source: "Curated event inspiration" },
  { id: "corporate-stage", src: "/events/wedding-stage.jpg", category: "Corporate", title: "Premium Corporate Stage", source: "Curated event inspiration" },
  { id: "room-romantic", src: "/events/birthday-roses.jpg", category: "Room Decoration", title: "Romantic Room Surprise", source: "Curated event inspiration" },
  { id: "stage-premium", src: "/events/wedding-stage.jpg", category: "Stage Decoration", title: "Premium Statement Stage", source: "Curated event inspiration" },
];

const serviceImageMap: Record<string, string> = {
  "balloon-decoration": "/events/pink-birthday.jpg",
  "birthday-decoration": "/events/birthday.jpg",
  "anniversary-decoration": "/events/birthday-roses.jpg",
  "baby-shower-decoration": "/events/baby-shower.jpg",
  "haldi-decoration": "/events/outdoor-wedding.jpg",
  "wedding-decoration": "/events/wedding-stage.jpg",
  "engagement-decoration": "/events/outdoor-wedding.jpg",
  "proposal-decoration": "/events/birthday-roses.jpg",
  "ring-ceremony-decoration": "/events/wedding-stage.jpg",
  "bride-to-be-decoration": "/events/pink-birthday.jpg",
  "groom-to-be-decoration": "/events/outdoor-wedding.jpg",
  "welcome-decoration": "/events/wedding-stage.jpg",
  "corporate-events": "/events/outdoor-wedding.jpg",
  "office-decoration": "/events/wedding-stage.jpg",
  "festival-decoration": "/events/outdoor-wedding.jpg",
  "kids-theme-parties": "/events/kids-theme.jpg",
  "romantic-room-decoration": "/events/birthday-roses.jpg",
  "car-decoration": "/events/outdoor-wedding.jpg",
  "house-decoration": "/events/birthday.jpg",
  "hotel-room-decoration": "/events/birthday-roses.jpg",
  "reception-decoration": "/events/wedding-stage.jpg",
  "stage-decoration": "/events/wedding-stage.jpg",
  "mandap-decoration": "/events/outdoor-wedding.jpg",
  "photography-setup": "/events/kids-celebration.jpg",
  "custom-theme-decoration": "/events/kids-theme.jpg",
  "surprise-decoration": "/events/pink-birthday.jpg",
  "luxury-event-planning": "/events/wedding-stage.jpg",
};

export function getServiceImage(slug: string) {
  return serviceImageMap[slug] || "/events/outdoor-wedding.jpg";
}

export const nav = [
  ["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Gallery", "/gallery"],
  ["Packages", "/packages"], ["Testimonials", "/testimonials"], ["FAQ", "/#faq"], ["Contact", "/contact"],
] as const;
