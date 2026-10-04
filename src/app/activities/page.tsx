import { activities } from "@/data/activities";
import { SiteImage } from "@/components/ui/SiteImage";

export const metadata = {
  title: "Activities | Nishigandh Farms",
  description: "Outdoor activities and moments at Nishigandh Farms.",
};

export default function ActivitiesPage() {
  const visibleActivities = activities.filter((a) => a.visible);

  return (
    <div className="pt-24 min-h-screen bg-background">
      <section className="py-24 px-6 text-center max-w-3xl mx-auto">
        <h1 className="font-heading text-5xl md:text-7xl text-foreground mb-6">Activities.</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Engage with the natural rhythm of the farm and the surrounding landscape.
        </p>
      </section>

      <section className="pb-32 px-6">
        <div className="container mx-auto">
          {visibleActivities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleActivities.map((activity) => (
                <div key={activity.slug} className="group">
                  <div className="aspect-square bg-muted relative overflow-hidden mb-6">
                    <SiteImage src={activity.image} alt={activity.title} fill placeholderType="portrait" className="transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="font-heading text-2xl mb-3">{activity.title}</h3>
                  <p className="text-muted-foreground">{activity.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 border border-border bg-muted/30">
              <p className="text-muted-foreground italic text-lg">Activity details coming soon.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
