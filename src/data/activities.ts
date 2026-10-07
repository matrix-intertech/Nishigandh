

export type ActivityCategory =
  | "Water & Adventure"
  | "Family & Kids"
  | "Outdoor & Nature"
  | "Indoor Entertainment"
  | "Dining & Stay"
  | "Events & Group Experiences";

export type Activity = {
  slug: string;
  title: string;
  category: ActivityCategory;
  description?: string;
  image?: string;
  visible: boolean;
};

export const activities: Activity[] = [
  // A. Water & Adventure
  { slug: "swimming", title: "Swimming", category: "Water & Adventure", image: "/images/real/friends-enjoying-the-nishigandh-resort-pool.jpg", visible: true },
  { slug: "boating", title: "Boating", category: "Water & Adventure", image: "/images/real/nishigandh-valley-and-winding-river.jpg", visible: true },
  { slug: "lake-boating", title: "Lake Boating", category: "Water & Adventure", image: "/images/real/lined-farm-pond-amid-hillside-greenery.jpg", visible: true },
  { slug: "rain-dance", title: "Rain Dance", category: "Water & Adventure", image: "/images/real/rain-dance-at-nishigandh-resort.jpg", visible: true },
  { slug: "river-fishing", title: "River Fishing", category: "Water & Adventure", image: "/images/real/nishigandh-valley-and-winding-river.jpg", visible: true },
  { slug: "river-point", title: "River Point", category: "Water & Adventure", image: "/images/real/nishigandh-resort-river-valley-view.jpg", visible: true },
  { slug: "jungle-safari", title: "Jungle Safari", category: "Water & Adventure", image: "/images/real/cloudy-mountain-forest-at-nishigandh.jpg", visible: true },
  { slug: "sunset-point", title: "Sunset Point", category: "Water & Adventure", image: "/images/real/sunset-over-nishigandh-resort-cottages.jpg", visible: true },

  // B. Family & Kids
  { slug: "childrens-playground", title: "Children’s Playground", category: "Family & Kids", image: "/images/real/families-enjoying-nishigandh-resort-playground.jpg", visible: true },
  { slug: "trampoline", title: "Trampoline (Jumping Japang)", category: "Family & Kids", image: "/images/real/trampoline-fun-at-nishigandh-resort.jpg", visible: true },
  { slug: "slide", title: "Slide", category: "Family & Kids", image: "/images/real/freshly-maintained-nishigandh-resort-playground.jpg", visible: true },
  { slug: "family-swing", title: "Family Swing", category: "Family & Kids", image: "/images/real/children-on-the-nishigandh-resort-merry-go-round.jpg", visible: true },
  { slug: "various-swings", title: "Various Types of Swings", category: "Family & Kids", image: "/images/real/nishigandh-resort-night-playground.jpg", visible: true },

  // C. Outdoor & Nature
  { slug: "lawn-with-stage", title: "Lawn with Stage", category: "Outdoor & Nature", image: "/images/real/nishigandh-resort-night-stage-gathering.jpg", visible: true },
  { slug: "bird-house", title: "Bird House", category: "Outdoor & Nature", image: "/images/real/nishigandh-cottage-garden-in-bloom.jpg", visible: true },
  { slug: "shiv-srushti", title: "Shiv Srushti", category: "Outdoor & Nature", visible: true },
  { slug: "bonfire", title: "Bonfire", category: "Outdoor & Nature", image: "/images/experiences/NF-EXP-02.jpg", visible: true },
  
  // D. Indoor Entertainment
  { slug: "indoor-games", title: "Indoor Games", category: "Indoor Entertainment", image: "/images/real/nishigandh-resort-pavilion-restored.jpg", visible: true },
  { slug: "indoor-cricket-badminton", title: "Indoor Cricket / Badminton", category: "Indoor Entertainment", image: "/images/real/nishigandh-resort-pavilion-restored.jpg", visible: true },
  { slug: "karaoke", title: "Karaoke Music System", category: "Indoor Entertainment", image: "/images/real/nishigandh-resort-night-stage-gathering.jpg", visible: true },

  // E. Dining & Stay
  { slug: "open-dining", title: "Open Dining", category: "Dining & Stay", image: "/images/real/red-pavilion-at-nishigandh-resort.jpg", visible: true },
  { slug: "open-dining-food", title: "Open Dining Food Arrangement", category: "Dining & Stay", image: "/images/real/nishigandh-resort-pavilion-restored.jpg", visible: true },
  { slug: "row-bungalows", title: "Row Bungalows", category: "Dining & Stay", image: "/images/real/nishigandh-resort-cabins-and-paving.jpg", visible: true },
  { slug: "tents", title: "Tents", category: "Dining & Stay", image: "/images/real/five-tents-beside-the-night-pool.jpg", visible: true },

  // Events & Group Experiences
  { slug: "wedding-ceremonies", title: "Wedding Ceremonies", category: "Events & Group Experiences", image: "/images/real/nishigandh-resort-night-event-lawn.jpg", visible: true },
  { slug: "family-functions", title: "Family Functions", category: "Events & Group Experiences", image: "/images/real/nishigandh-resort-event-lawn.jpg", visible: true },
  { slug: "party-receptions", title: "Party Receptions", category: "Events & Group Experiences", image: "/images/real/nishigandh-resort-night-event.jpg", visible: true },
  { slug: "conference-meetings", title: "Conference Meetings", category: "Events & Group Experiences", image: "/images/real/nishigandh-resort-pavilion-restored.jpg", visible: true },
  { slug: "get-togethers", title: "Get-Togethers", category: "Events & Group Experiences", image: "/images/real/nishigandh-resort-night-stage-gathering.jpg", visible: true },
  { slug: "educational-trips", title: "Educational Trips", category: "Events & Group Experiences", image: "/images/real/misty-forest-valley-at-nishigandh-resort.jpg", visible: true },
];
