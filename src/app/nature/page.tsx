import Link from "next/link";

export const metadata = {
  title: "Nature | Nishigandh Farms",
  description: "Immerse yourself in the pristine landscape, lake, and forest of Koyana.",
};

import { SiteImage } from "@/components/ui/SiteImage";
import { images } from "@/data/images";

export default function NaturePage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Full bleed immersive hero */}
      <section className="relative w-full h-[80vh] bg-primary flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SiteImage src={images.natureHero.src} alt="Forest and Lake" fill priority placeholderType="hero" />
        </div>
        <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply z-10" />
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-heading text-6xl md:text-8xl text-primary-foreground mb-6">Surrounded by Life.</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light tracking-wide">
            Where the forest meets the water.
          </p>
        </div>
      </section>

      {/* Editorial Split Screen */}
      <section className="py-32 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="space-y-8">
            <span className="text-accent uppercase tracking-widest text-sm font-semibold">The Environment</span>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground leading-tight">
              A landscape defined by quiet waters and dense canopies.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Nishigandh Farms, nature is not just a backdrop; it is the core of the experience. 
              The property sits seamlessly within the Koyana landscape, offering uninterrupted views 
              of rural beauty, lush gardens, and mature trees. 
            </p>
          </div>
          <div className="aspect-[3/4] bg-muted relative overflow-hidden">
             <SiteImage src={images.natureDetail.src} alt="Garden Detail" fill placeholderType="portrait" />
          </div>
        </div>
      </section>

      {/* Full width quote */}
      <section className="py-24 bg-primary text-primary-foreground text-center px-6">
        <div className="container mx-auto max-w-4xl">
          <h3 className="font-heading text-3xl md:text-5xl leading-relaxed italic">
            "There is a profound stillness here that you can't find in the city. The rhythm of the days is dictated by the sun and the trees."
          </h3>
        </div>
      </section>
      
      {/* Next Step CTA */}
      <section className="py-32 text-center px-6">
        <h2 className="font-heading text-4xl mb-8">Discover our accommodations</h2>
        <Link href="/accommodation" className="inline-block border-b border-foreground pb-1 text-sm uppercase tracking-widest hover:text-primary hover:border-primary transition-colors">
          View Stays
        </Link>
      </section>
    </div>
  );
}
