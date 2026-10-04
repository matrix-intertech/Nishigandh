import { galleryImages } from "./images";

export type GalleryImage = {
  src: string;
  alt: string;
  visible: boolean;
};

// We will curate the images for the gallery page
export const gallery: GalleryImage[] = galleryImages.map(img => ({
  src: img.src,
  alt: img.alt,
  visible: true,
}));
