import { reviews } from "@/data/reviews";

export const metadata = {
  title: "Guest Stories | Nishigandh Farms",
  description: "Read about the experiences of our guests.",
};

export default function ReviewsPage() {
  const visibleReviews = reviews.filter((r) => r.visible);

  return (
    <div className="pt-24 min-h-screen bg-background">
      <section className="py-24 px-6 text-center max-w-3xl mx-auto">
        <h1 className="font-heading text-5xl md:text-7xl text-foreground mb-6">Guest Stories.</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          The true essence of Nishigandh Farms is best described by those who have spent time with us.
        </p>
      </section>

      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-4xl">
          {visibleReviews.length > 0 ? (
            <div className="space-y-12">
              {visibleReviews.map((review, i) => (
                <div key={i} className="text-center border-b border-border pb-12 last:border-0">
                  <p className="text-2xl font-heading italic leading-relaxed mb-6">"{review.text}"</p>
                  <p className="text-sm tracking-widest uppercase text-muted-foreground">— {review.author}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 border border-border bg-muted/30">
              <p className="text-muted-foreground italic text-lg">Guest stories will appear here.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
