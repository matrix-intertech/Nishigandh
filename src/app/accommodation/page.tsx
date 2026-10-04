import Link from "next/link";
import { accommodations } from "@/data/accommodation";
import { SiteImage } from "@/components/ui/SiteImage";

export const metadata = {
  title: "Stay | Nishigandh Farms",
  description: "A quieter way to stay. Experience our red-brick cottages and forest view villas.",
};

export default function AccommodationPage() {
  const visibleStays = accommodations.filter((acc) => acc.visible);

  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Page Header */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">Stay</span>
        <h1 className="font-heading text-5xl md:text-7xl text-foreground mb-6">A quieter way to stay.</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          The accommodation at Nishigandh Farms is designed to be a natural extension of the landscape. 
          Our red-brick architecture and earthy tones create a seamless transition between the comfort of your room and the great outdoors.
        </p>
      </section>

      {/* Accommodation Collection */}
      <section className="py-12 px-6">
        <div className="container mx-auto space-y-32">
          {visibleStays.map((acc, index) => (
            <div key={acc.slug} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              <div className="w-full md:w-3/5 aspect-[4/3] bg-muted relative overflow-hidden">
                <SiteImage src={acc.images[0]} alt={acc.name} fill placeholderType="landscape" />
              </div>
              <div className="w-full md:w-2/5 space-y-6">
                <h2 className="font-heading text-4xl text-foreground">{acc.name}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {acc.shortDescription}
                </p>
                <ul className="space-y-2 pb-6 border-b border-border">
                  {acc.highlights.map((highlight) => (
                    <li key={highlight} className="text-sm text-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" /> {highlight}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 flex gap-4">
                  <Link href={`/accommodation/${acc.slug}`} className="text-sm tracking-widest uppercase border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors">
                    View Details
                  </Link>
                  <Link href="/booking" className="text-sm tracking-widest uppercase text-accent border-b border-transparent pb-1 hover:border-accent transition-colors">
                    Check Availability
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
