

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
  { slug: "swimming", title: "Swimming", category: "Water & Adventure", image: "/images/real/Friends enjoying the Nishigandh resort pool.jpg", visible: true },
  { slug: "boating", title: "Boating", category: "Water & Adventure", image: "/images/real/Nishigandh valley and winding river.jpg", visible: true },
  { slug: "lake-boating", title: "Lake Boating", category: "Water & Adventure", image: "/images/real/Lined Farm Pond Amid Hillside Greenery.jpg", visible: true },
  { slug: "rain-dance", title: "Rain Dance", category: "Water & Adventure", image: "/images/real/Rain Dance at Nishigandh Resort.jpg", visible: true },
  { slug: "river-fishing", title: "River Fishing", category: "Water & Adventure", image: "/images/real/Nishigandh valley and winding river.jpg", visible: true },
  { slug: "river-point", title: "River Point", category: "Water & Adventure", image: "/images/real/Nishigandh Resort river valley view.jpg", visible: true },
  { slug: "jungle-safari", title: "Jungle Safari", category: "Water & Adventure", image: "/images/real/Cloudy mountain forest at Nishigandh.jpg", visible: true },
  { slug: "sunset-point", title: "Sunset Point", category: "Water & Adventure", image: "/images/real/Sunset over Nishigandh Resort Cottages.jpg", visible: true },

  // B. Family & Kids
  { slug: "childrens-playground", title: "Children’s Playground", category: "Family & Kids", image: "/images/real/Families enjoying Nishigandh resort playground.jpg", visible: true },
  { slug: "trampoline", title: "Trampoline (Jumping Japang)", category: "Family & Kids", image: "/images/real/Trampoline fun at Nishigandh resort.jpg", visible: true },
  { slug: "slide", title: "Slide", category: "Family & Kids", image: "/images/real/Freshly Maintained Nishigandh Resort Playground.jpg", visible: true },
  { slug: "family-swing", title: "Family Swing", category: "Family & Kids", image: "/images/real/Children on the Nishigandh resort merry-go-round.jpg", visible: true },
  { slug: "various-swings", title: "Various Types of Swings", category: "Family & Kids", image: "/images/real/Nishigandh Resort night playground.jpg", visible: true },

  // C. Outdoor & Nature
  { slug: "lawn-with-stage", title: "Lawn with Stage", category: "Outdoor & Nature", image: "/images/real/Nishigandh Resort Night Stage Gathering.jpg", visible: true },
  { slug: "bird-house", title: "Bird House", category: "Outdoor & Nature", image: "/images/real/Nishigandh Cottage Garden in Bloom.jpg", visible: true },
  { slug: "shiv-srushti", title: "Shiv Srushti", category: "Outdoor & Nature", visible: true },
  { slug: "bonfire", title: "Bonfire", category: "Outdoor & Nature", image: "/images/experiences/NF-EXP-02.jpg", visible: true },
  
  // D. Indoor Entertainment
  { slug: "indoor-games", title: "Indoor Games", category: "Indoor Entertainment", image: "/images/real/Nishigandh Resort Pavilion, Restored.jpg", visible: true },
  { slug: "indoor-cricket-badminton", title: "Indoor Cricket / Badminton", category: "Indoor Entertainment", image: "/images/real/Nishigandh Resort Pavilion, Restored.jpg", visible: true },
  { slug: "karaoke", title: "Karaoke Music System", category: "Indoor Entertainment", image: "/images/real/Nishigandh Resort Night Stage Gathering.jpg", visible: true },

  // E. Dining & Stay
  { slug: "open-dining", title: "Open Dining", category: "Dining & Stay", image: "/images/real/Red Pavilion at Nishigandh Resort.jpg", visible: true },
  { slug: "open-dining-food", title: "Open Dining Food Arrangement", category: "Dining & Stay", image: "/images/real/Nishigandh Resort Pavilion, Restored.jpg", visible: true },
  { slug: "row-bungalows", title: "Row Bungalows", category: "Dining & Stay", image: "/images/real/Nishigandh Resort Cabins and Paving.jpg", visible: true },
  { slug: "tents", title: "Tents", category: "Dining & Stay", image: "/images/real/Five tents beside the night pool.jpg", visible: true },

  // Events & Group Experiences
  { slug: "wedding-ceremonies", title: "Wedding Ceremonies", category: "Events & Group Experiences", image: "/images/real/Nishigandh Resort Night Event Lawn.jpg", visible: true },
  { slug: "family-functions", title: "Family Functions", category: "Events & Group Experiences", image: "/images/real/Nishigandh Resort Event Lawn.jpg", visible: true },
  { slug: "party-receptions", title: "Party Receptions", category: "Events & Group Experiences", image: "/images/real/Nishigandh resort night event.jpg", visible: true },
  { slug: "conference-meetings", title: "Conference Meetings", category: "Events & Group Experiences", image: "/images/real/Nishigandh Resort Pavilion, Restored.jpg", visible: true },
  { slug: "get-togethers", title: "Get-Togethers", category: "Events & Group Experiences", image: "/images/real/Nishigandh Resort Night Stage Gathering.jpg", visible: true },
  { slug: "educational-trips", title: "Educational Trips", category: "Events & Group Experiences", image: "/images/real/Misty Forest Valley at Nishigandh Resort.jpg", visible: true },
];
