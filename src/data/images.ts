export type SiteImageDef = {
  src: string;
  alt: string;
  category: "hero" | "accommodation" | "resort" | "nature" | "activities" | "experiences" | "restaurant" | "gallery" | "destination";
  priority?: boolean;
};

export const images: Record<string, SiteImageDef> = {
  // Hero
  homeHero: { src: "/images/hero/NF-HERO-01.jpg", alt: "Nishigandh Farms Homepage Hero", category: "hero", priority: true },
  resortHero: { src: "/images/real/Sunset over Nishigandh Resort Cottages.jpg", alt: "Resort wide landscape", category: "hero", priority: true },
  natureHero: { src: "/images/real/Misty Forest Valley at Nishigandh Resort.jpg", alt: "Nature landscape", category: "hero", priority: true },
  koyanaHero: { src: "/images/real/Nishigandh River Valley View.jpg", alt: "Explore Koyana Destination", category: "hero", priority: true },
  restaurantHero: { src: "/images/real/Nishigandh Resort Pavilion, Restored.jpg", alt: "Restaurant and dining", category: "hero", priority: true },
  
  // Resort
  resortArchitecture: { src: "/images/real/Nishigandh Resort Framed by Forest Hills.jpg", alt: "Property architecture", category: "resort" },
  resortDetail1: { src: "/images/real/Nishigandh Resort Courtyard with Hills.jpg", alt: "Architectural detail", category: "resort" },
  resortDetail2: { src: "/images/real/Refreshed garden path at Nishigandh.jpg", alt: "Garden pathway", category: "resort" },
  resortDetail3: { src: "/images/real/Lush, Tidy Lawn at Nishigandh Resort.jpg", alt: "Outdoor living", category: "resort" },
  resortDetail4: { src: "/images/real/Nishigandh Resort Cabins and Paving.jpg", alt: "Property atmosphere", category: "resort" },
  contactImage: { src: "/images/real/Sunlit red cottages and courtyard.jpg", alt: "Reception and open space", category: "resort" },
  
  // Accommodation
  cottage1: { src: "/images/real/Nishigandh cottages by the river.jpg", alt: "Premium Cottage exterior", category: "accommodation" },
  cottage2: { src: "/images/real/Nishigandh Cabin in a Landscaped Garden.jpg", alt: "Elevated Villa exterior", category: "accommodation" },
  cottageInterior: { src: "/images/real/Bright resort bedroom with checked bedding.jpg", alt: "Accommodation interior", category: "accommodation" },
  
  // Nature & Destination
  natureDetail: { src: "/images/real/Cloudy mountain forest at Nishigandh.jpg", alt: "Nature flora and garden detail", category: "nature" },
  mapLocation: { src: "/images/real/Nishigandh valley and winding river.jpg", alt: "Destination landscape map", category: "destination" },
  
  // Activities & Experiences
  activity1: { src: "/images/real/Friends enjoying the Nishigandh resort pool.jpg", alt: "Swimming pool", category: "activities" },
  activity2: { src: "/images/real/Trampoline fun at Nishigandh resort.jpg", alt: "Trampoline", category: "activities" },
  experience1: { src: "/images/real/Nishigandh Family Pool Retreat.jpg", alt: "Family pool retreat", category: "experiences" },
  experience2: { src: "/images/real/Nishigandh resort night event.jpg", alt: "Evening outdoor gathering", category: "experiences" },
  
  // Homepage Categories
  homeCategoryWater: { src: "/images/real/Friends enjoying the Nishigandh resort pool.jpg", alt: "Water and Adventure", category: "activities" },
  homeCategoryFamily: { src: "/images/real/Families enjoying Nishigandh resort playground.jpg", alt: "Family and Kids", category: "activities" },
  homeCategoryNature: { src: "/images/real/Lush Lawn Overlooking the Valley.jpg", alt: "Outdoor and Nature", category: "activities" },
  homeCategoryIndoor: { src: "/images/real/Nishigandh Resort Pavilion, Restored.jpg", alt: "Indoor Entertainment", category: "activities" },
};

// Gallery curated from unique gallery specific items and re-using other shots for visual variety
export const galleryImages: SiteImageDef[] = [
  { src: "/images/real/Bright resort bedroom with checked bedding.jpg", alt: "Bright resort bedroom with checked bedding", category: "gallery" },
  { src: "/images/real/Brightened Nishigandh Resort Cabin Interior.jpg", alt: "Brightened Nishigandh Resort Cabin Interior", category: "gallery" },
  { src: "/images/real/Child in blue swim ring.jpg", alt: "Child in blue swim ring", category: "gallery" },
  { src: "/images/real/Children on the Nishigandh resort merry-go-round.jpg", alt: "Children on the Nishigandh resort merry-go-round", category: "gallery" },
  { src: "/images/real/Clean gray-tiled resort bathroom.jpg", alt: "Clean gray-tiled resort bathroom", category: "gallery" },
  { src: "/images/real/Cloudy dusk over Nishigandh cottages.jpg", alt: "Cloudy dusk over Nishigandh cottages", category: "gallery" },
  { src: "/images/real/Cloudy mountain forest at Nishigandh.jpg", alt: "Cloudy mountain forest at Nishigandh", category: "gallery" },
  { src: "/images/real/Dusk path to the resort cottage.jpg", alt: "Dusk path to the resort cottage", category: "gallery" },
  { src: "/images/real/Families enjoying Nishigandh resort playground.jpg", alt: "Families enjoying Nishigandh resort playground", category: "gallery" },
  { src: "/images/real/Five tents beside the night pool.jpg", alt: "Five tents beside the night pool", category: "gallery" },
  { src: "/images/real/Freshly Maintained Nishigandh Resort Playground.jpg", alt: "Freshly Maintained Nishigandh Resort Playground", category: "gallery" },
  { src: "/images/real/Friends enjoying the Nishigandh resort pool.jpg", alt: "Friends enjoying the Nishigandh resort pool", category: "gallery" },
  { src: "/images/real/Garden Path Facing the Red Pavilion.jpg", alt: "Garden Path Facing the Red Pavilion", category: "gallery" },
  { src: "/images/real/Illuminated Nishigandh Resort Cottages at Night.jpg", alt: "Illuminated Nishigandh Resort Cottages at Night", category: "gallery" },
  { src: "/images/real/Lined Farm Pond Amid Hillside Greenery.jpg", alt: "Lined Farm Pond Amid Hillside Greenery", category: "gallery" },
  { src: "/images/real/Lush Lawn Overlooking the Valley.jpg", alt: "Lush Lawn Overlooking the Valley", category: "gallery" },
  { src: "/images/real/Lush, Tidy Lawn at Nishigandh Resort.jpg", alt: "Lush, Tidy Lawn at Nishigandh Resort", category: "gallery" },
  { src: "/images/real/Misty Forest Valley at Nishigandh Resort.jpg", alt: "Misty Forest Valley at Nishigandh Resort", category: "gallery" },
  { src: "/images/real/Moonlit Nishigandh Resort Garden Path.jpg", alt: "Moonlit Nishigandh Resort Garden Path", category: "gallery" },
  { src: "/images/real/Moonlit Resort Slopes and Cottages.jpg", alt: "Moonlit Resort Slopes and Cottages", category: "gallery" },
  { src: "/images/real/Nishigandh Cabin in a Landscaped Garden.jpg", alt: "Nishigandh Cabin in a Landscaped Garden", category: "gallery" },
  { src: "/images/real/Nishigandh Cottage Garden Path.jpg", alt: "Nishigandh Cottage Garden Path", category: "gallery" },
  { src: "/images/real/Nishigandh Cottage Garden Retreat.jpg", alt: "Nishigandh Cottage Garden Retreat", category: "gallery" },
  { src: "/images/real/Nishigandh Cottage Garden in Bloom.jpg", alt: "Nishigandh Cottage Garden in Bloom", category: "gallery" },
  { src: "/images/real/Nishigandh Cottages by the Garden.jpg", alt: "Nishigandh Cottages by the Garden", category: "gallery" },
  { src: "/images/real/Nishigandh Family Pool Retreat.jpg", alt: "Nishigandh Family Pool Retreat", category: "gallery" },
  { src: "/images/real/Nishigandh Garden with Red Paths.jpg", alt: "Nishigandh Garden with Red Paths", category: "gallery" },
  { src: "/images/real/Nishigandh Night Cottage Courtyard.jpg", alt: "Nishigandh Night Cottage Courtyard", category: "gallery" },
  { src: "/images/real/Nishigandh Resort Cabins and Paving.jpg", alt: "Nishigandh Resort Cabins and Paving", category: "gallery" },
  { src: "/images/real/Nishigandh Resort Courtyard with Hills.jpg", alt: "Nishigandh Resort Courtyard with Hills", category: "gallery" },
  { src: "/images/real/Nishigandh Resort Event Lawn.jpg", alt: "Nishigandh Resort Event Lawn", category: "gallery" },
  { src: "/images/real/Nishigandh Resort Framed by Forest Hills.jpg", alt: "Nishigandh Resort Framed by Forest Hills", category: "gallery" },
  { src: "/images/real/Nishigandh Resort Night Event Lawn.jpg", alt: "Nishigandh Resort Night Event Lawn", category: "gallery" },
  { src: "/images/real/Nishigandh Resort Night Event(1).jpg", alt: "Nishigandh Resort Night Event", category: "gallery" },
  { src: "/images/real/Nishigandh Resort Night Garden.jpg", alt: "Nishigandh Resort Night Garden", category: "gallery" },
  { src: "/images/real/Nishigandh Resort Night Stage Gathering.jpg", alt: "Nishigandh Resort Night Stage Gathering", category: "gallery" },
  { src: "/images/real/Nishigandh Resort Pavilion, Restored.jpg", alt: "Nishigandh Resort Pavilion, Restored", category: "gallery" },
  { src: "/images/real/Nishigandh Resort Pool Overview.jpg", alt: "Nishigandh Resort Pool Overview", category: "gallery" },
  { src: "/images/real/Nishigandh Resort Poolside Terraced Hills.jpg", alt: "Nishigandh Resort Poolside Terraced Hills", category: "gallery" },
  { src: "/images/real/Nishigandh Resort Under String Lights.jpg", alt: "Nishigandh Resort Under String Lights", category: "gallery" },
  { src: "/images/real/Nishigandh Resort night playground.jpg", alt: "Nishigandh Resort night playground", category: "gallery" },
  { src: "/images/real/Nishigandh Resort river valley view.jpg", alt: "Nishigandh Resort river valley view", category: "gallery" },
  { src: "/images/real/Nishigandh Resort’s Refreshed Garden View.jpg", alt: "Nishigandh Resort’s Refreshed Garden View", category: "gallery" },
  { src: "/images/real/Nishigandh River Valley View.jpg", alt: "Nishigandh River Valley View", category: "gallery" },
  { src: "/images/real/Nishigandh Riverside Cottage Courtyard.jpg", alt: "Nishigandh Riverside Cottage Courtyard", category: "gallery" },
  { src: "/images/real/Nishigandh cabin washbasin vanity.jpg", alt: "Nishigandh cabin washbasin vanity", category: "gallery" },
  { src: "/images/real/Nishigandh cabins above the river.jpg", alt: "Nishigandh cabins above the river", category: "gallery" },
  { src: "/images/real/Nishigandh cottages at peaceful dusk.jpg", alt: "Nishigandh cottages at peaceful dusk", category: "gallery" },
  { src: "/images/real/Nishigandh cottages by the river.jpg", alt: "Nishigandh cottages by the river", category: "gallery" },
  { src: "/images/real/Nishigandh resort cottage garden at night.jpg", alt: "Nishigandh resort cottage garden at night", category: "gallery" },
  { src: "/images/real/Nishigandh resort night event.jpg", alt: "Nishigandh resort night event", category: "gallery" },
  { src: "/images/real/Nishigandh resort pool and wooded hills.jpg", alt: "Nishigandh resort pool and wooded hills", category: "gallery" },
  { src: "/images/real/Nishigandh valley and winding river.jpg", alt: "Nishigandh valley and winding river", category: "gallery" },
  { src: "/images/real/Rain Dance at Nishigandh Resort.jpg", alt: "Rain Dance at Nishigandh Resort", category: "gallery" },
  { src: "/images/real/Red Cabins Framing a Restored Garden.jpg", alt: "Red Cabins Framing a Restored Garden", category: "gallery" },
  { src: "/images/real/Red Cottage Courtyard by the River.jpg", alt: "Red Cottage Courtyard by the River", category: "gallery" },
  { src: "/images/real/Red Paths at Nishigandh Resort.jpg", alt: "Red Paths at Nishigandh Resort", category: "gallery" },
  { src: "/images/real/Red Pavilion at Nishigandh Resort.jpg", alt: "Red Pavilion at Nishigandh Resort", category: "gallery" },
  { src: "/images/real/Red cabins among garden paths.jpg", alt: "Red cabins among garden paths", category: "gallery" },
  { src: "/images/real/Refreshed garden path at Nishigandh.jpg", alt: "Refreshed garden path at Nishigandh", category: "gallery" },
  { src: "/images/real/Refreshed hillside path at Nishigandh Resort.jpg", alt: "Refreshed hillside path at Nishigandh Resort", category: "gallery" },
  { src: "/images/real/Refreshed resort pool in soft daylight.jpg", alt: "Refreshed resort pool in soft daylight", category: "gallery" },
  { src: "/images/real/Sunlit Nishigandh Resort Lawn.jpg", alt: "Sunlit Nishigandh Resort Lawn", category: "gallery" },
  { src: "/images/real/Sunlit red cottages and courtyard.jpg", alt: "Sunlit red cottages and courtyard", category: "gallery" },
  { src: "/images/real/Sunset over Nishigandh Resort Cottages.jpg", alt: "Sunset over Nishigandh Resort Cottages", category: "gallery" },
  { src: "/images/real/Three-Chair Veranda Overlooking the Valley.jpg", alt: "Three-Chair Veranda Overlooking the Valley", category: "gallery" },
  { src: "/images/real/Trampoline fun at Nishigandh resort.jpg", alt: "Trampoline fun at Nishigandh resort", category: "gallery" },
];
