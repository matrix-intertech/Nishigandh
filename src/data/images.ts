export type SiteImageDef = {
  src: string;
  alt: string;
  category: "hero" | "accommodation" | "resort" | "nature" | "activities" | "experiences" | "restaurant" | "gallery" | "destination";
  priority?: boolean;
};

export const images: Record<string, SiteImageDef> = {
  // Hero
  homeHero: { src: "/images/hero/NF-HERO-01.jpg", alt: "Nishigandh Farms Homepage Hero", category: "hero", priority: true },
  resortHero: { src: "/images/real/sunset-over-nishigandh-resort-cottages.jpg", alt: "Resort wide landscape", category: "hero", priority: true },
  natureHero: { src: "/images/real/misty-forest-valley-at-nishigandh-resort.jpg", alt: "Nature landscape", category: "hero", priority: true },
  koyanaHero: { src: "/images/real/nishigandh-river-valley-view.jpg", alt: "Explore Koyana Destination", category: "hero", priority: true },
  restaurantHero: { src: "/images/real/nishigandh-resort-pavilion-restored.jpg", alt: "Restaurant and dining", category: "hero", priority: true },
  
  // Resort
  resortArchitecture: { src: "/images/real/nishigandh-resort-framed-by-forest-hills.jpg", alt: "Property architecture", category: "resort" },
  resortDetail1: { src: "/images/real/nishigandh-resort-courtyard-with-hills.jpg", alt: "Architectural detail", category: "resort" },
  resortDetail2: { src: "/images/real/refreshed-garden-path-at-nishigandh.jpg", alt: "Garden pathway", category: "resort" },
  resortDetail3: { src: "/images/real/lush-tidy-lawn-at-nishigandh-resort.jpg", alt: "Outdoor living", category: "resort" },
  resortDetail4: { src: "/images/real/nishigandh-resort-cabins-and-paving.jpg", alt: "Property atmosphere", category: "resort" },
  contactImage: { src: "/images/real/sunlit-red-cottages-and-courtyard.jpg", alt: "Reception and open space", category: "resort" },
  
  // Accommodation
  cottage1: { src: "/images/real/nishigandh-cottages-by-the-river.jpg", alt: "Premium Cottage exterior", category: "accommodation" },
  cottage2: { src: "/images/real/nishigandh-cabin-in-a-landscaped-garden.jpg", alt: "Elevated Villa exterior", category: "accommodation" },
  cottageInterior: { src: "/images/real/bright-resort-bedroom-with-checked-bedding.jpg", alt: "Accommodation interior", category: "accommodation" },
  
  // Nature & Destination
  natureDetail: { src: "/images/real/cloudy-mountain-forest-at-nishigandh.jpg", alt: "Nature flora and garden detail", category: "nature" },
  mapLocation: { src: "/images/real/nishigandh-valley-and-winding-river.jpg", alt: "Destination landscape map", category: "destination" },
  
  // Activities & Experiences
  activity1: { src: "/images/real/friends-enjoying-the-nishigandh-resort-pool.jpg", alt: "Swimming pool", category: "activities" },
  activity2: { src: "/images/real/trampoline-fun-at-nishigandh-resort.jpg", alt: "Trampoline", category: "activities" },
  experience1: { src: "/images/real/nishigandh-family-pool-retreat.jpg", alt: "Family pool retreat", category: "experiences" },
  experience2: { src: "/images/real/nishigandh-resort-night-event.jpg", alt: "Evening outdoor gathering", category: "experiences" },
  
  // Homepage Categories
  homeCategoryWater: { src: "/images/real/friends-enjoying-the-nishigandh-resort-pool.jpg", alt: "Water and Adventure", category: "activities" },
  homeCategoryFamily: { src: "/images/real/families-enjoying-nishigandh-resort-playground.jpg", alt: "Family and Kids", category: "activities" },
  homeCategoryNature: { src: "/images/real/lush-lawn-overlooking-the-valley.jpg", alt: "Outdoor and Nature", category: "activities" },
  homeCategoryIndoor: { src: "/images/real/nishigandh-resort-pavilion-restored.jpg", alt: "Indoor Entertainment", category: "activities" },
};

// Gallery curated from unique gallery specific items and re-using other shots for visual variety
export const galleryImages: SiteImageDef[] = [
  { src: "/images/real/bright-resort-bedroom-with-checked-bedding.jpg", alt: "Bright resort bedroom with checked bedding", category: "gallery" },
  { src: "/images/real/brightened-nishigandh-resort-cabin-interior.jpg", alt: "Brightened Nishigandh Resort Cabin Interior", category: "gallery" },
  { src: "/images/real/child-in-blue-swim-ring.jpg", alt: "Child in blue swim ring", category: "gallery" },
  { src: "/images/real/children-on-the-nishigandh-resort-merry-go-round.jpg", alt: "Children on the Nishigandh resort merry-go-round", category: "gallery" },
  { src: "/images/real/clean-gray-tiled-resort-bathroom.jpg", alt: "Clean gray-tiled resort bathroom", category: "gallery" },
  { src: "/images/real/cloudy-dusk-over-nishigandh-cottages.jpg", alt: "Cloudy dusk over Nishigandh cottages", category: "gallery" },
  { src: "/images/real/cloudy-mountain-forest-at-nishigandh.jpg", alt: "Cloudy mountain forest at Nishigandh", category: "gallery" },
  { src: "/images/real/dusk-path-to-the-resort-cottage.jpg", alt: "Dusk path to the resort cottage", category: "gallery" },
  { src: "/images/real/families-enjoying-nishigandh-resort-playground.jpg", alt: "Families enjoying Nishigandh resort playground", category: "gallery" },
  { src: "/images/real/five-tents-beside-the-night-pool.jpg", alt: "Five tents beside the night pool", category: "gallery" },
  { src: "/images/real/freshly-maintained-nishigandh-resort-playground.jpg", alt: "Freshly Maintained Nishigandh Resort Playground", category: "gallery" },
  { src: "/images/real/friends-enjoying-the-nishigandh-resort-pool.jpg", alt: "Friends enjoying the Nishigandh resort pool", category: "gallery" },
  { src: "/images/real/garden-path-facing-the-red-pavilion.jpg", alt: "Garden Path Facing the Red Pavilion", category: "gallery" },
  { src: "/images/real/illuminated-nishigandh-resort-cottages-at-night.jpg", alt: "Illuminated Nishigandh Resort Cottages at Night", category: "gallery" },
  { src: "/images/real/lined-farm-pond-amid-hillside-greenery.jpg", alt: "Lined Farm Pond Amid Hillside Greenery", category: "gallery" },
  { src: "/images/real/lush-lawn-overlooking-the-valley.jpg", alt: "Lush Lawn Overlooking the Valley", category: "gallery" },
  { src: "/images/real/lush-tidy-lawn-at-nishigandh-resort.jpg", alt: "Lush, Tidy Lawn at Nishigandh Resort", category: "gallery" },
  { src: "/images/real/misty-forest-valley-at-nishigandh-resort.jpg", alt: "Misty Forest Valley at Nishigandh Resort", category: "gallery" },
  { src: "/images/real/moonlit-nishigandh-resort-garden-path.jpg", alt: "Moonlit Nishigandh Resort Garden Path", category: "gallery" },
  { src: "/images/real/moonlit-resort-slopes-and-cottages.jpg", alt: "Moonlit Resort Slopes and Cottages", category: "gallery" },
  { src: "/images/real/nishigandh-cabin-in-a-landscaped-garden.jpg", alt: "Nishigandh Cabin in a Landscaped Garden", category: "gallery" },
  { src: "/images/real/nishigandh-cottage-garden-path.jpg", alt: "Nishigandh Cottage Garden Path", category: "gallery" },
  { src: "/images/real/nishigandh-cottage-garden-retreat.jpg", alt: "Nishigandh Cottage Garden Retreat", category: "gallery" },
  { src: "/images/real/nishigandh-cottage-garden-in-bloom.jpg", alt: "Nishigandh Cottage Garden in Bloom", category: "gallery" },
  { src: "/images/real/nishigandh-cottages-by-the-garden.jpg", alt: "Nishigandh Cottages by the Garden", category: "gallery" },
  { src: "/images/real/nishigandh-family-pool-retreat.jpg", alt: "Nishigandh Family Pool Retreat", category: "gallery" },
  { src: "/images/real/nishigandh-garden-with-red-paths.jpg", alt: "Nishigandh Garden with Red Paths", category: "gallery" },
  { src: "/images/real/nishigandh-night-cottage-courtyard.jpg", alt: "Nishigandh Night Cottage Courtyard", category: "gallery" },
  { src: "/images/real/nishigandh-resort-cabins-and-paving.jpg", alt: "Nishigandh Resort Cabins and Paving", category: "gallery" },
  { src: "/images/real/nishigandh-resort-courtyard-with-hills.jpg", alt: "Nishigandh Resort Courtyard with Hills", category: "gallery" },
  { src: "/images/real/nishigandh-resort-event-lawn.jpg", alt: "Nishigandh Resort Event Lawn", category: "gallery" },
  { src: "/images/real/nishigandh-resort-framed-by-forest-hills.jpg", alt: "Nishigandh Resort Framed by Forest Hills", category: "gallery" },
  { src: "/images/real/nishigandh-resort-night-event-lawn.jpg", alt: "Nishigandh Resort Night Event Lawn", category: "gallery" },
  { src: "/images/real/nishigandh-resort-night-event1.jpg", alt: "Nishigandh Resort Night Event", category: "gallery" },
  { src: "/images/real/nishigandh-resort-night-garden.jpg", alt: "Nishigandh Resort Night Garden", category: "gallery" },
  { src: "/images/real/nishigandh-resort-night-stage-gathering.jpg", alt: "Nishigandh Resort Night Stage Gathering", category: "gallery" },
  { src: "/images/real/nishigandh-resort-pavilion-restored.jpg", alt: "Nishigandh Resort Pavilion, Restored", category: "gallery" },
  { src: "/images/real/nishigandh-resort-pool-overview.jpg", alt: "Nishigandh Resort Pool Overview", category: "gallery" },
  { src: "/images/real/nishigandh-resort-poolside-terraced-hills.jpg", alt: "Nishigandh Resort Poolside Terraced Hills", category: "gallery" },
  { src: "/images/real/nishigandh-resort-under-string-lights.jpg", alt: "Nishigandh Resort Under String Lights", category: "gallery" },
  { src: "/images/real/nishigandh-resort-night-playground.jpg", alt: "Nishigandh Resort night playground", category: "gallery" },
  { src: "/images/real/nishigandh-resort-river-valley-view.jpg", alt: "Nishigandh Resort river valley view", category: "gallery" },
  { src: "/images/real/nishigandh-resorts-refreshed-garden-view.jpg", alt: "Nishigandh Resort’s Refreshed Garden View", category: "gallery" },
  { src: "/images/real/nishigandh-river-valley-view.jpg", alt: "Nishigandh River Valley View", category: "gallery" },
  { src: "/images/real/nishigandh-riverside-cottage-courtyard.jpg", alt: "Nishigandh Riverside Cottage Courtyard", category: "gallery" },
  { src: "/images/real/nishigandh-cabin-washbasin-vanity.jpg", alt: "Nishigandh cabin washbasin vanity", category: "gallery" },
  { src: "/images/real/nishigandh-cabins-above-the-river.jpg", alt: "Nishigandh cabins above the river", category: "gallery" },
  { src: "/images/real/nishigandh-cottages-at-peaceful-dusk.jpg", alt: "Nishigandh cottages at peaceful dusk", category: "gallery" },
  { src: "/images/real/nishigandh-cottages-by-the-river.jpg", alt: "Nishigandh cottages by the river", category: "gallery" },
  { src: "/images/real/nishigandh-resort-cottage-garden-at-night.jpg", alt: "Nishigandh resort cottage garden at night", category: "gallery" },
  { src: "/images/real/nishigandh-resort-night-event.jpg", alt: "Nishigandh resort night event", category: "gallery" },
  { src: "/images/real/nishigandh-resort-pool-and-wooded-hills.jpg", alt: "Nishigandh resort pool and wooded hills", category: "gallery" },
  { src: "/images/real/nishigandh-valley-and-winding-river.jpg", alt: "Nishigandh valley and winding river", category: "gallery" },
  { src: "/images/real/rain-dance-at-nishigandh-resort.jpg", alt: "Rain Dance at Nishigandh Resort", category: "gallery" },
  { src: "/images/real/red-cabins-framing-a-restored-garden.jpg", alt: "Red Cabins Framing a Restored Garden", category: "gallery" },
  { src: "/images/real/red-cottage-courtyard-by-the-river.jpg", alt: "Red Cottage Courtyard by the River", category: "gallery" },
  { src: "/images/real/red-paths-at-nishigandh-resort.jpg", alt: "Red Paths at Nishigandh Resort", category: "gallery" },
  { src: "/images/real/red-pavilion-at-nishigandh-resort.jpg", alt: "Red Pavilion at Nishigandh Resort", category: "gallery" },
  { src: "/images/real/red-cabins-among-garden-paths.jpg", alt: "Red cabins among garden paths", category: "gallery" },
  { src: "/images/real/refreshed-garden-path-at-nishigandh.jpg", alt: "Refreshed garden path at Nishigandh", category: "gallery" },
  { src: "/images/real/refreshed-hillside-path-at-nishigandh-resort.jpg", alt: "Refreshed hillside path at Nishigandh Resort", category: "gallery" },
  { src: "/images/real/refreshed-resort-pool-in-soft-daylight.jpg", alt: "Refreshed resort pool in soft daylight", category: "gallery" },
  { src: "/images/real/sunlit-nishigandh-resort-lawn.jpg", alt: "Sunlit Nishigandh Resort Lawn", category: "gallery" },
  { src: "/images/real/sunlit-red-cottages-and-courtyard.jpg", alt: "Sunlit red cottages and courtyard", category: "gallery" },
  { src: "/images/real/sunset-over-nishigandh-resort-cottages.jpg", alt: "Sunset over Nishigandh Resort Cottages", category: "gallery" },
  { src: "/images/real/three-chair-veranda-overlooking-the-valley.jpg", alt: "Three-Chair Veranda Overlooking the Valley", category: "gallery" },
  { src: "/images/real/trampoline-fun-at-nishigandh-resort.jpg", alt: "Trampoline fun at Nishigandh resort", category: "gallery" },
];
