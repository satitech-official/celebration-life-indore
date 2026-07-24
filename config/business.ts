export const businessConfig = {
  name: "Celebrate Life",
  email: "celebratelife4444@gmail.com",
  primaryPhone: "919111546339",
  secondaryPhone: "919340493726",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919111546339",
  instagram:
    "https://www.instagram.com/celebratelife_indore?igsh=aHV6MmZuaDc3cXRl",
  location: "Indore, Madhya Pradesh",
  exactAddress: "",
  googleMapsUrl: "",
  businessHours: "",
};

export const enquiryMessage =
  "Hello Celebrate Life! I am interested in decoration services for an upcoming event. Please share available themes, packages and booking details.";

export const phoneHref = (phone: string) => `tel:+${phone}`;
export const whatsappHref = (details = "") =>
  `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(
    `${enquiryMessage}${details ? `\n\n${details}` : ""}`,
  )}`;
