import { images } from "./images";

export type Experience = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  highlights: string[];
  visible: boolean;
};

export const experiences: Experience[] = [
  {
    slug: "slow-mornings",
    title: "Slow Mornings",
    shortDescription: "Start your day with the quiet sounds of nature.",
    description: "At Nishigandh Farms, mornings are meant to be savored. Wake up to the gentle chirping of birds, enjoy a warm cup of tea by the garden, and let the crisp countryside air rejuvenate your senses. There is no rush here—only the quiet rhythm of nature.",
    image: images.experience1.src,
    highlights: ["Birdwatching", "Garden Walks", "Fresh Countryside Air"],
    visible: true,
  },
  {
    slug: "outdoor-gatherings",
    title: "Outdoor Gatherings",
    shortDescription: "Reconnect with loved ones under the open sky.",
    description: "Our expansive outdoor spaces provide the perfect setting for meaningful connections. Whether it's an evening gathering on the lawns or a quiet conversation by the lake, the natural surroundings elevate every shared moment.",
    image: images.experience2.src,
    highlights: ["Lawn Spaces", "Starlit Evenings", "Community Feel"],
    visible: true,
  }
];
