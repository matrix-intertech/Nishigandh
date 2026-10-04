import Link from "next/link";
import { siteConfig } from "@/data/site";
import { SiteImage } from "@/components/ui/SiteImage";
import { images } from "@/data/images";

export const metadata = {
  title: "Location | Nishigandh Farms",
  description: "Find your way to Nishigandh Farms in Koyana.",
};

export default function LocationPage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <section className="py-24 px-6 text-center max-w-3xl mx-auto">
        <h1 className="font-heading text-5xl md:text-7xl text-foreground mb-6">Getting Here.</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Tucked away in the serene landscapes of Koyana.
        </p>
      </section>

      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="w-full aspect-[21/9] bg-muted relative border border-border mb-16">
            <SiteImage src={images.mapLocation.src} alt="Map Location" fill placeholderType="hero" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-center md:text-left">
            <div>
              <h3 className="font-heading text-2xl mb-6">Address</h3>
              {siteConfig.address ? (
                <p className="text-lg text-muted-foreground">{siteConfig.address}</p>
              ) : (
                <p className="text-muted-foreground italic">Location details coming soon.</p>
              )}
            </div>
            <div>
              <h3 className="font-heading text-2xl mb-6">Directions</h3>
              <p className="text-muted-foreground italic">Travel information coming soon.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
