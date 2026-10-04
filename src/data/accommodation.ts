export type Accommodation = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  images: string[];
  amenities: string[];
  highlights: string[];
  featured: boolean;
  visible: boolean;
};

import { images } from "./images";

export const accommodations: Accommodation[] = [
  {
    slug: "premium-cottage",
    name: "Premium Cottage",
    shortDescription: "A rustic retreat nestled within our lush gardens.",
    description: "Experience the charm of our cottages. Designed to harmonize with the natural landscape of Koyana, these spaces offer a peaceful sanctuary with warm earthy tones, traditional architecture, and direct access to the outdoors. A perfect blend of comfort and countryside authenticity.",
    images: [images.cottage1.src, images.cottage2.src],
    amenities: ["En-suite Bathroom", "Private Sit-out"],
    highlights: ["Garden Views", "Rustic Architecture", "Proximity to Nature"],
    featured: true,
    visible: true,
  },
  {
    slug: "elevated-villa",
    name: "Elevated Villa",
    shortDescription: "Elevated stays with views of the Koyana landscape.",
    description: "Wake up to the serene sights and sounds of the environment. Our villas are thoughtfully positioned to offer uninterrupted views of the greenery, providing a truly immersive nature experience.",
    images: [images.cottage2.src],
    amenities: ["Spacious Layout", "En-suite Bathroom"],
    highlights: ["Elevated Views", "Immersive Location", "Quiet Location"],
    featured: true,
    visible: true,
  }
];

export function getAccommodationBySlug(slug: string): Accommodation | undefined {
  return accommodations.find((acc) => acc.slug === slug);
}
