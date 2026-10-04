export const metadata = {
  title: "Dining | Nishigandh Farms",
  description: "Experience warm, rustic, and social dining in Koyana.",
};

import { SiteImage } from "@/components/ui/SiteImage";
import { images } from "@/data/images";

export default function RestaurantPage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Hero */}
      <section className="relative w-full h-[60vh] md:h-[70vh] bg-primary flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SiteImage src={images.restaurantHero.src} alt="Restaurant Atmosphere" fill priority placeholderType="hero" />
        </div>
        <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply z-10" />
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl md:text-7xl text-primary-foreground mb-6">Dining at Nishigandh.</h1>
          <p className="text-xl text-primary-foreground/90 font-light tracking-wide">
            A taste of local heritage.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-6 text-center max-w-3xl mx-auto">
        <h2 className="font-heading text-4xl mb-6">Honest, rustic flavors.</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          Meals at Nishigandh Farms are meant to be shared. We focus on authentic preparations, local produce, and a warm dining atmosphere that brings our guests together.
        </p>
      </section>

      {/* Menu / Coming soon */}
      <section className="py-24 px-6 bg-muted">
        <div className="container mx-auto text-center max-w-2xl">
          <h3 className="font-heading text-3xl mb-8">Our Menu</h3>
          <div className="bg-background border border-border p-12">
            <p className="text-muted-foreground italic">Menu details coming soon.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
