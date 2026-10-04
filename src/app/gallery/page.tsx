import { gallery } from "@/data/gallery";
import { SiteImage } from "@/components/ui/SiteImage";

export const metadata = {
  title: "Gallery | Nishigandh Farms",
  description: "A visual journey through Nishigandh Farms.",
};

export default function GalleryPage() {
  const visibleImages = gallery.filter((img) => img.visible);

  return (
    <div className="pt-32 min-h-screen bg-background">
      <div className="container mx-auto px-6 mb-16 text-center max-w-2xl">
        <h1 className="font-heading text-5xl md:text-6xl text-foreground mb-6">Gallery</h1>
        <p className="text-lg text-muted-foreground">
          Moments captured around the property—from the quiet mornings by the lake to the evening gatherings at the cottages.
        </p>
      </div>

      <div className="container mx-auto px-6 pb-32">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {visibleImages.map((img, i) => (
            <div key={i} className={`relative bg-muted break-inside-avoid ${i % 3 === 0 ? 'aspect-square' : (i % 2 === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]')}`}>
              <SiteImage src={img.src} alt={img.alt} fill placeholderType="gallery" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
