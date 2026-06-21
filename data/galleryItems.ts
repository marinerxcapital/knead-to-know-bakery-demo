export type GalleryCategory = "Sourdough" | "Cookies" | "Pastries" | "Packaging" | "Behind the Scenes" | "360 Experience";
export type GalleryMediaType = "image" | "video" | "360-video";

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  title: string;
  description: string;
  mediaType: GalleryMediaType;
  src?: string;
  embedUrl?: string;
  tone: "ivory" | "beige" | "gold" | "ink";
  aspect: "portrait" | "square" | "landscape";
};

// Add your own media by placing files in public/assets/gallery and setting src to
// /assets/gallery/your-file.jpg or /assets/gallery/your-video.mp4. See GALLERY_CONTENT.md.
export const galleryItems: GalleryItem[] = [
  { id: "country-loaf", category: "Sourdough", title: "Country loaf study", description: "Add a hero photo of the daily country loaf.", mediaType: "image", tone: "ivory", aspect: "portrait" },
  { id: "crumb-360", category: "360 Experience", title: "Inside the crumb", description: "Add a 360-degree bakery video or YouTube 360 embed.", mediaType: "360-video", tone: "gold", aspect: "landscape" },
  { id: "brown-butter", category: "Cookies", title: "Brown butter moment", description: "Add a close-up cookie photo with rich, natural texture.", mediaType: "image", tone: "beige", aspect: "square" },
  { id: "morning-pastry", category: "Pastries", title: "First-light pastry", description: "Add a morning pastry photo fresh from the case.", mediaType: "image", tone: "ivory", aspect: "landscape" },
  { id: "ribbon-box", category: "Packaging", title: "A gift, composed", description: "Add gift-box and packaging photography here.", mediaType: "image", tone: "ink", aspect: "portrait" },
  { id: "oven-door", category: "Behind the Scenes", title: "The oven door opens", description: "Add a short bakery process video.", mediaType: "video", tone: "beige", aspect: "landscape" },
  { id: "seeded-loaf", category: "Sourdough", title: "Seeded heritage", description: "Add a styled bread-board photograph.", mediaType: "image", tone: "gold", aspect: "square" },
  { id: "seasonal-box", category: "Packaging", title: "Seasonal box", description: "Add a seasonal collection or client-gifting photo.", mediaType: "image", tone: "ivory", aspect: "landscape" },
  { id: "bake-day-360", category: "360 Experience", title: "A walk through bake day", description: "Add an immersive 360 tour of the kitchen or pastry case.", mediaType: "360-video", tone: "beige", aspect: "portrait" }
];
