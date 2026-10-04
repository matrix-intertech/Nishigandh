export type SiteImageDef = {
  src: string;
  alt: string;
  category: "hero" | "accommodation" | "resort" | "nature" | "activities" | "experiences" | "restaurant" | "gallery" | "destination";
  priority?: boolean;
};

export const images: Record<string, SiteImageDef> = {
  // Hero
  homeHero: { src: "/images/hero/NF-HERO-01.jpg", alt: "Nishigandh Farms Homepage Hero", category: "hero", priority: true },
  resortHero: { src: "/images/resort/NF-HERO-02.jpg", alt: "Resort wide landscape", category: "hero", priority: true },
  natureHero: { src: "/images/nature/NF-HERO-03.jpg", alt: "Nature landscape", category: "hero", priority: true },
  koyanaHero: { src: "/images/destination/NF-HERO-04.jpg", alt: "Explore Koyana Destination", category: "hero", priority: true },
  restaurantHero: { src: "/images/restaurant/NF-HERO-05.jpg", alt: "Restaurant and dining", category: "hero", priority: true },
  
  // Resort
  resortArchitecture: { src: "/images/resort/NF-RESORT-01.jpg", alt: "Property architecture", category: "resort" },
  resortDetail1: { src: "/images/resort/NF-RESORT-02.jpg", alt: "Architectural detail", category: "resort" },
  resortDetail2: { src: "/images/resort/NF-RESORT-03.jpg", alt: "Garden pathway", category: "resort" },
  resortDetail3: { src: "/images/resort/NF-RESORT-04.jpg", alt: "Outdoor living", category: "resort" },
  resortDetail4: { src: "/images/resort/NF-RESORT-05.jpg", alt: "Property atmosphere", category: "resort" },
  contactImage: { src: "/images/resort/NF-RESORT-06.jpg", alt: "Reception and open space", category: "resort" },
  
  // Accommodation
  cottage1: { src: "/images/accommodation/NF-ACC-01.jpg", alt: "Premium Cottage exterior", category: "accommodation" },
  cottage2: { src: "/images/accommodation/NF-ACC-02.jpg", alt: "Elevated Villa exterior", category: "accommodation" },
  cottageInterior: { src: "/images/accommodation/NF-ACC-03.jpg", alt: "Accommodation interior", category: "accommodation" },
  
  // Nature & Destination
  natureDetail: { src: "/images/nature/NF-NATURE-01.jpg", alt: "Nature flora and garden detail", category: "nature" },
  mapLocation: { src: "/images/destination/NF-DEST-01.jpg", alt: "Destination landscape map", category: "destination" },
  
  // Activities & Experiences
  activity1: { src: "/images/activities/NF-ACT-01.jpg", alt: "Nature walk and forest trail", category: "activities" },
  activity2: { src: "/images/activities/NF-ACT-02.jpg", alt: "Lakeside relaxation", category: "activities" },
  experience1: { src: "/images/experiences/NF-EXP-01.jpg", alt: "Slow morning and quiet nature", category: "experiences" },
  experience2: { src: "/images/experiences/NF-EXP-02.jpg", alt: "Evening outdoor gathering", category: "experiences" },
};

// Gallery curated from unique gallery specific items and re-using other shots for visual variety
export const galleryImages: SiteImageDef[] = [
  { src: "/images/gallery/NF-GAL-01.jpg", alt: "Culinary detail", category: "gallery" },
  { src: "/images/gallery/NF-GAL-02.jpg", alt: "Bathroom detail", category: "gallery" },
  { src: "/images/gallery/NF-GAL-03.jpg", alt: "Monsoon landscape", category: "gallery" },
  { src: "/images/gallery/NF-GAL-04.jpg", alt: "Campfire evening", category: "gallery" },
  { src: "/images/gallery/NF-GAL-05.jpg", alt: "Lake reflections", category: "gallery" },
  { src: "/images/gallery/NF-GAL-06.jpg", alt: "Cottage pathway", category: "gallery" },
  { src: "/images/gallery/NF-GAL-07.jpg", alt: "Destination environment", category: "gallery" },
  { src: "/images/gallery/NF-GAL-08.jpg", alt: "Architecture brick detail", category: "gallery" },
  { src: "/images/gallery/NF-GAL-09.jpg", alt: "Outdoor dining", category: "gallery" },
  { src: "/images/gallery/NF-GAL-10.jpg", alt: "Sunset landscape", category: "gallery" },
  { src: "/images/gallery/NF-GAL-11.jpg", alt: "Guest lifestyle", category: "gallery" },
  
  // Reused pool for more slots
  { src: "/images/resort/NF-RESORT-03.jpg", alt: "Garden pathway", category: "gallery" },
  { src: "/images/resort/NF-RESORT-04.jpg", alt: "Outdoor living", category: "gallery" },
  { src: "/images/accommodation/NF-ACC-03.jpg", alt: "Cottage interior", category: "gallery" },
  { src: "/images/activities/NF-ACT-02.jpg", alt: "Lakeside relaxation", category: "gallery" },
  { src: "/images/experiences/NF-EXP-01.jpg", alt: "Slow morning", category: "gallery" },
  { src: "/images/nature/NF-NATURE-01.jpg", alt: "Nature flora", category: "gallery" },
  { src: "/images/resort/NF-RESORT-01.jpg", alt: "Property architecture", category: "gallery" },
  { src: "/images/resort/NF-RESORT-06.jpg", alt: "Reception", category: "gallery" },
  { src: "/images/experiences/NF-EXP-02.jpg", alt: "Outdoor gathering", category: "gallery" }
];
