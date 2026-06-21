export const site = {
  name: "Knead To Know", tagline: "Sweet & Sour", email: "hello@kneadtoknowbakery.com", phone: "(555) 014-2024",
  address: "123 Market Street, Your City, CA", hours: ["Wednesday–Friday: 8am–4pm", "Saturday: 8am–2pm", "Sunday–Tuesday: Closed"],
  nav: [
    ["Home", "/"], ["Menu", "/menu"], ["Sourdough", "/sourdough"], ["Cookies", "/cookies"], ["Catering", "/catering"], ["About", "/about"], ["Contact", "/contact"]
  ] as [string, string][],
  footerNav: [
    ["Home", "/"], ["Menu", "/menu"], ["Order Online", "/order-online"], ["Sourdough", "/sourdough"],
    ["Cookies", "/cookies"], ["Pastries", "/pastries"], ["Catering", "/catering"], ["Gallery", "/gallery"],
    ["About", "/about"], ["FAQ", "/faq"], ["Contact", "/contact"]
  ] as [string, string][]
};
