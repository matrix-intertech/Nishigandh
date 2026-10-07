import { activities, ActivityCategory } from "@/data/activities";
import { SiteImage } from "@/components/ui/SiteImage";

export const metadata = {
  title: "Fun & Entertainment | Nishigandh Farms",
  description: "Swimming, boating, jungle adventures, family activities, indoor games, bonfires and more — discover the many ways to enjoy your time at Nishigandh Farms.",
};

export default function ActivitiesPage() {
  const visibleActivities = activities.filter((a) => a.visible);

  const funCategories: ActivityCategory[] = [
    "Water & Adventure",
    "Family & Kids",
    "Outdoor & Nature",
    "Indoor Entertainment",
    "Dining & Stay",
  ];

  const funActivities = visibleActivities.filter((a) => funCategories.includes(a.category));
  const eventActivities = visibleActivities.filter((a) => a.category === "Events & Group Experiences");

  return (
    <div className="pt-24 min-h-screen bg-background">
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">Fun & Entertainment</span>
        <h1 className="font-heading text-5xl md:text-7xl text-foreground mb-6">More Than a Stay.</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Engage with the natural rhythm of the farm and the surrounding landscape. Swimming, boating, jungle adventures, family activities, indoor games, bonfires and more.
        </p>
      </section>

      {/* Fun & Entertainment Categories */}
      <section className="pb-24 px-6">
        <div className="container mx-auto">
          {funCategories.map((category) => {
            const categoryActivities = funActivities.filter((a) => a.category === category);
            if (categoryActivities.length === 0) return null;

            return (
              <div key={category} className="mb-24 last:mb-0 border-t border-border pt-16">
                <div className="flex flex-col md:flex-row gap-12">
                  <div className="md:w-1/3">
                    <h2 className="font-heading text-3xl md:text-4xl text-foreground sticky top-32">
                      {category}
                    </h2>
                  </div>
                  <div className="md:w-2/3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 mb-12">
                      {categoryActivities.filter(a => a.image).map((activity) => (
                        <div key={activity.slug} className="group">
                          <div className="aspect-[4/3] bg-muted relative overflow-hidden mb-6">
                            <SiteImage 
                              src={activity.image!} 
                              alt={activity.title} 
                              fill 
                              placeholderType="landscape" 
                              className="transition-transform duration-700 group-hover:scale-105" 
                            />
                          </div>
                          <h3 className="font-heading text-2xl mb-2">{activity.title}</h3>
                          {activity.description && (
                            <p className="text-muted-foreground">{activity.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
                    {/* List for activities without images */}
                    {categoryActivities.filter(a => !a.image).length > 0 && (
                      <div className="border-t border-border pt-8">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                          {categoryActivities.filter(a => !a.image).map((activity) => (
                            <li key={activity.slug} className="flex items-center gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/40 block"></span>
                              <span className="font-medium text-lg text-foreground/90">{activity.title}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Events / Group Experiences Section */}
      {eventActivities.length > 0 && (
        <section className="py-32 px-6 bg-muted">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">Occasions</span>
              <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-6">Events & Group Experiences</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Excellent arrangements for dining and accommodation amidst scenic natural surroundings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventActivities.map((activity) => (
                <div key={activity.slug} className={`group bg-background p-6 border border-border/50 transition-colors hover:border-primary/20 ${!activity.image ? 'flex items-center justify-center min-h-[160px]' : ''}`}>
                  {activity.image && (
                    <div className="aspect-square bg-muted relative overflow-hidden mb-6">
                      <SiteImage 
                        src={activity.image} 
                        alt={activity.title} 
                        fill 
                        placeholderType="portrait" 
                        className="transition-transform duration-700 group-hover:scale-105" 
                      />
                    </div>
                  )}
                  <h3 className="font-heading text-xl md:text-2xl text-center">{activity.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
