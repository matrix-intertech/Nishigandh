import Link from "next/link";
import { experiences } from "@/data/experiences";
import { SiteImage } from "@/components/ui/SiteImage";

export const metadata = {
  title: "Experiences | Nishigandh Farms",
  description: "Curated moments and experiences to help you reconnect with nature.",
};

export default function ExperiencesPage() {
  const visibleExperiences = experiences.filter((e) => e.visible);

  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Header */}
      <section className="py-24 px-6 text-center max-w-3xl mx-auto">
        <h1 className="font-heading text-5xl md:text-7xl text-foreground mb-6">Experience the quiet.</h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          At Nishigandh Farms, true luxury lies in the space to breathe. 
          Discover the moments we've crafted to help you slow down and reconnect with the simple joys of nature.
        </p>
      </section>

      {/* Experience List */}
      <section className="pb-32 px-6">
        <div className="container mx-auto space-y-24">
          {visibleExperiences.map((exp, idx) => (
            <div key={exp.slug} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}>
              <div className="w-full md:w-1/2 aspect-square bg-muted relative overflow-hidden">
                <SiteImage src={exp.image} alt={exp.title} fill placeholderType="portrait" />
              </div>
              <div className="w-full md:w-1/2">
                <span className="text-accent uppercase tracking-widest text-xs font-semibold mb-4 block">Experience</span>
                <h2 className="font-heading text-4xl md:text-5xl mb-6">{exp.title}</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {exp.description}
                </p>
                <div className="space-y-3 border-l-2 border-primary/20 pl-6">
                  {exp.highlights.map((h) => (
                    <p key={h} className="text-foreground tracking-wide font-medium">{h}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Activities CTA */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="font-heading text-3xl md:text-4xl mb-6">Looking for more?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Beyond these curated moments, discover our full range of recreational facilities, indoor games, and outdoor adventures.
          </p>
          <Link href="/activities" className="inline-block text-primary border-b border-primary pb-1 uppercase tracking-widest text-sm hover:text-accent hover:border-accent transition-colors">
            Discover All Activities
          </Link>
        </div>
      </section>
    </div>
  );
}
