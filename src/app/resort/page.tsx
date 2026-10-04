import Link from "next/link";

export const metadata = {
  title: "The Resort | Nishigandh Farms",
  description: "Discover the philosophy, architecture, and hospitality behind Nishigandh Farms.",
};

import { SiteImage } from "@/components/ui/SiteImage";
import { images } from "@/data/images";

export default function ResortPage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Hero */}
      <section className="relative w-full h-[70vh] bg-muted flex items-end pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SiteImage src={images.resortHero.src} alt="Resort Hero" fill priority placeholderType="hero" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent z-10" />
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-7xl text-foreground mb-6">A Return to Authenticity.</h1>
          <p className="text-xl text-muted-foreground font-light">
            More than just a place to stay—a destination crafted to honor the surrounding landscape.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5 md:col-start-2">
            <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-6 block">Our Philosophy</span>
            <h2 className="font-heading text-4xl leading-snug mb-8 text-foreground">
              Built with respect for the land, designed for peace of mind.
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Nishigandh Farms was born out of a desire to create a retreat that feels completely native to the Koyana region. 
                Instead of imposing on nature, our architecture—characterized by earthy red-brick cottages and open pavilions—sits quietly within it.
              </p>
              <p>
                We believe in genuine hospitality that feels like home, food that warms the soul, and surroundings that invite you to slow down.
              </p>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[4/5] bg-muted relative">
              <SiteImage src={images.resortArchitecture.src} alt="Rustic Architecture" fill placeholderType="portrait" />
            </div>
          </div>
        </div>
      </section>

      {/* Image Strip */}
      <section className="w-full grid grid-cols-2 md:grid-cols-4 h-64 md:h-96">
        {[1,2,3,4].map((i) => (
          <div key={i} className={`relative ${i % 2 === 0 ? 'bg-primary/10' : 'bg-secondary/10'}`}>
            <SiteImage src={[images.resortDetail1.src, images.resortDetail2.src, images.resortDetail3.src, images.resortDetail4.src][i-1]} alt={`Detail ${i}`} fill placeholderType="portrait" />
          </div>
        ))}
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-background text-center px-6">
        <h2 className="font-heading text-4xl md:text-5xl mb-12">Experience Nishigandh for yourself.</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link href="/accommodation" className="px-8 py-4 border border-foreground text-foreground text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors">
            View Accommodations
          </Link>
          <Link href="/booking" className="px-8 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-accent transition-colors">
            Book Your Stay
          </Link>
        </div>
      </section>
    </div>
  );
}
