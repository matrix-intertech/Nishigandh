import Link from "next/link";
import { SiteImage } from "@/components/ui/SiteImage";
import { images } from "@/data/images";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SiteImage src={images.homeHero.src} alt="Nishigandh Farms" fill priority placeholderType="hero" />
        </div>
        <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply z-10" />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-6 leading-tight">
            Nishigandh <br className="hidden md:block"/> Farms
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light mb-12 max-w-2xl mx-auto tracking-wide">
            A quiet escape into the heart of nature.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/booking" className="px-8 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-background hover:text-primary transition-colors">
              Book Your Stay
            </Link>
            <Link href="/resort" className="px-8 py-4 border border-primary-foreground text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary-foreground hover:text-primary transition-colors">
              Explore Nishigandh
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 md:py-32 px-6 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-8 leading-tight">
            Stay close to nature. <br />
            Wake up to quiet landscapes, green surroundings and the rhythm of the countryside.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nestled in the pristine landscape of Koyana, Nishigandh Farms is a sanctuary for those seeking peace and authenticity. 
            Experience our red-brick cottages, lush gardens, and warm hospitality.
          </p>
        </div>
      </section>

      {/* Stay / Accommodation Preview */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">The Stay</span>
              <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-6">Rustic Elegance</h2>
              <p className="text-muted-foreground text-lg">
                Our red-brick cottages are designed to blur the lines between indoors and out, 
                allowing you to become one with the surrounding greenery.
              </p>
            </div>
            <Link href="/accommodation" className="mt-8 md:mt-0 text-primary border-b border-primary pb-1 uppercase tracking-widest text-sm hover:text-accent hover:border-accent transition-colors">
              Explore Stays
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Editorial asymmetric layout */}
            <div className="md:col-span-8 aspect-[4/3] bg-primary/10 relative overflow-hidden">
              <SiteImage src={images.cottage1.src} alt="Cottage" fill placeholderType="landscape" />
            </div>
            <div className="md:col-span-4 aspect-square bg-secondary/20 relative overflow-hidden mt-8 md:mt-32">
              <SiteImage src={images.natureDetail.src} alt="Garden detail" fill placeholderType="portrait" />
            </div>
          </div>
        </div>
      </section>

      {/* Fun & Entertainment Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">Fun & Entertainment</span>
              <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-6">More Than a Stay</h2>
              <p className="text-muted-foreground text-lg">
                Swimming, boating, jungle adventures, family activities, indoor games, bonfires and more — discover the many ways to enjoy your time at Nishigandh Farms.
              </p>
            </div>
            <Link href="/activities" className="mt-8 md:mt-0 text-primary border-b border-primary pb-1 uppercase tracking-widest text-sm hover:text-accent hover:border-accent transition-colors">
              Explore Fun & Entertainment
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="aspect-[4/5] bg-muted relative overflow-hidden group">
              <SiteImage src={images.homeCategoryWater.src} alt="Water & Adventure" fill placeholderType="portrait" className="transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-heading text-2xl">Water & Adventure</h3>
              </div>
            </div>
            <div className="aspect-[4/5] bg-muted relative overflow-hidden group">
              <SiteImage src={images.homeCategoryFamily.src} alt="Family & Kids" fill placeholderType="portrait" className="transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-heading text-2xl">Family & Kids</h3>
              </div>
            </div>
            <div className="aspect-[4/5] bg-muted relative overflow-hidden group">
              <SiteImage src={images.homeCategoryNature.src} alt="Outdoor & Nature" fill placeholderType="portrait" className="transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-heading text-2xl">Outdoor & Nature</h3>
              </div>
            </div>
            <div className="aspect-[4/5] bg-muted relative overflow-hidden group">
              <SiteImage src={images.homeCategoryIndoor.src} alt="Indoor Entertainment" fill placeholderType="portrait" className="transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-heading text-2xl">Indoor Entertainment</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Booking CTA */}
      <section className="py-32 px-6 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-heading text-4xl md:text-6xl mb-8">Ready to disconnect?</h2>
          <p className="text-lg text-primary-foreground/80 mb-12">
            Join us at Nishigandh Farms for an unforgettable retreat into nature.
          </p>
          <Link href="/booking" className="px-10 py-5 bg-background text-primary text-sm tracking-widest uppercase hover:bg-accent hover:text-accent-foreground transition-colors">
            Check Availability
          </Link>
        </div>
      </section>
    </>
  );
}
