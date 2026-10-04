import { notFound } from "next/navigation";
import Link from "next/link";
import { getAccommodationBySlug, accommodations } from "@/data/accommodation";
import { SiteImage } from "@/components/ui/SiteImage";

export async function generateStaticParams() {
  return accommodations.map((acc) => ({
    slug: acc.slug,
  }));
}

export default async function AccommodationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const accommodation = getAccommodationBySlug(slug);

  if (!accommodation || !accommodation.visible) {
    notFound();
  }

  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Hero */}
      <section className="w-full h-[60vh] md:h-[70vh] relative bg-muted flex items-end">
        <div className="absolute inset-0 z-0">
          <SiteImage src={accommodation.images[0]} alt={accommodation.name} fill priority placeholderType="hero" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10" />
        <div className="relative z-10 container mx-auto px-6 pb-16 md:pb-24">
          <h1 className="font-heading text-5xl md:text-7xl text-foreground mb-4">{accommodation.name}</h1>
          <p className="text-xl text-foreground/80 max-w-2xl">{accommodation.shortDescription}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          
          <div className="md:col-span-8 space-y-12">
            <div>
              <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">About the stay</span>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {accommodation.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {accommodation.images.slice(1).map((img, i) => (
                <div key={i} className="aspect-[4/5] bg-muted relative">
                  <SiteImage src={img} alt={`Detail ${i}`} fill placeholderType="portrait" />
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 space-y-12">
            <div className="bg-muted/50 p-8 border border-border">
              <h3 className="font-heading text-2xl mb-6">Reserve</h3>
              <p className="text-muted-foreground text-sm mb-8">
                Ready to escape to the Koyana landscape? Check availability for this cottage.
              </p>
              <Link href="/booking" className="block text-center w-full bg-primary text-primary-foreground py-4 uppercase tracking-widest text-sm hover:bg-foreground transition-colors">
                Check Availability
              </Link>
            </div>

            <div>
              <h3 className="font-heading text-2xl mb-6 border-b border-border pb-4">Highlights</h3>
              <ul className="space-y-4">
                {accommodation.highlights.map((item) => (
                  <li key={item} className="flex items-center text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {accommodation.amenities.length > 0 && (
              <div>
                <h3 className="font-heading text-2xl mb-6 border-b border-border pb-4">Amenities</h3>
                <ul className="space-y-4">
                  {accommodation.amenities.map((item) => (
                    <li key={item} className="flex items-center text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary/20 mr-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
