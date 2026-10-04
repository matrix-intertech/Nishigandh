import { offers } from "@/data/offers";

export const metadata = {
  title: "Offers | Nishigandh Farms",
  description: "Seasonal experiences and special stays at Nishigandh Farms.",
};

export default function OffersPage() {
  const visibleOffers = offers.filter((o) => o.visible);

  return (
    <div className="pt-24 min-h-screen bg-background">
      <section className="py-24 px-6 text-center max-w-3xl mx-auto">
        <h1 className="font-heading text-5xl md:text-7xl text-foreground mb-6">Offers & Packages</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Enhance your retreat with our thoughtfully curated experiences and seasonal stays.
        </p>
      </section>

      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-5xl">
          {visibleOffers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {visibleOffers.map((offer) => (
                <div key={offer.slug} className="border border-border p-8 bg-card">
                  <h3 className="font-heading text-2xl mb-4">{offer.title}</h3>
                  <p className="text-muted-foreground mb-6">{offer.description}</p>
                  <span className="text-xs tracking-widest uppercase text-accent font-semibold">{offer.validity}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 border border-border bg-muted/30">
              <p className="text-muted-foreground italic text-lg">Seasonal experiences will be announced here.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
