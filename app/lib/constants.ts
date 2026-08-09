export const COMPANY = {
  name: "Roy Swazey's Roofing",
  tagline: "Asphalt & Metal",
  phone: "(506) 273-1609",
  phoneHref: "tel:+15062731609",
  email: "royswazey@gmail.com",
  emailHref: "mailto:royswazey@gmail.com",
  address: "140 Renshaw Rd, Rothesay, NB E2H 1R6",
  serviceAreas: ["Fredericton", "Saint John", "Rothesay"],
  certifications: ["B.P. Certified Roofer", "Extended Warranties"],
  rating: 5.0,
  facebook:
    "https://www.facebook.com/p/Roy-Swazeys-Roofing-100069930351745/",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const SERVICES = [
  {
    title: "Asphalt Roofing",
    description:
      "Durable shingle installations and repairs built for New Brunswick weather — from full replacements to targeted fixes.",
    icon: "home" as const,
  },
  {
    title: "Metal Roofing",
    description:
      "Long-lasting metal systems with clean lines and superior protection. Ideal for residential and commercial projects.",
    icon: "shield" as const,
  },
  {
    title: "Roof Repairs",
    description:
      "Fast response for leaks, storm damage, and wear. Free estimates so you know the cost before work begins.",
    icon: "wrench" as const,
  },
] as const;

export const HIGHLIGHTS = [
  "Free Estimates",
  "24/7 Availability",
  "B.P. Certified",
  "Extended Warranties",
] as const;
