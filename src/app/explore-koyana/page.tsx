export const metadata = {
  title: "Explore Koyana | Nishigandh Farms",
  description: "Discover the pristine destination of Koyana.",
};

import { SiteImage } from "@/components/ui/SiteImage";
import { images } from "@/data/images";

export default function ExploreKoyanaPage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <section className="relative w-full h-[60vh] bg-primary flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SiteImage src={images.koyanaHero.src} alt="Koyana Landscape" fill priority placeholderType="hero" />
        </div>
        <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply z-10" />
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl md:text-7xl text-primary-foreground mb-6">Explore Koyana.</h1>
          <p className="text-xl text-primary-foreground/90 font-light tracking-wide">
            A destination waiting to be discovered.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-4xl mb-8">The untamed beauty of Maharashtra.</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Koyana is defined by its deep forests, expansive waterways, and dramatic valleys. It remains one of the most serene and untouched regions, offering a sanctuary for those looking to disconnect from the modern world.
        </p>
      </section>

      <section className="py-24 px-6 bg-muted text-center">
        <div className="container mx-auto">
           <h2 className="font-heading text-3xl mb-12">Destination Highlights</h2>
           <div className="bg-background border border-border p-16 max-w-2xl mx-auto">
             <p className="text-muted-foreground italic text-lg">Destination details coming soon.</p>
           </div>
        </div>
      </section>
    </div>
  );
}
