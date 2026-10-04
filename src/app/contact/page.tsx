import { siteConfig } from "@/data/site";
import Link from "next/link";
import { SiteImage } from "@/components/ui/SiteImage";
import { images } from "@/data/images";

export const metadata = {
  title: "Contact Us | Nishigandh Farms",
  description: "Get in touch with us to plan your retreat.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <section className="py-24 px-6 text-center max-w-3xl mx-auto">
        <h1 className="font-heading text-5xl md:text-7xl text-foreground mb-6">Reach Out.</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Whether you have a question about our accommodations or want to plan a special gathering, we are here to help.
        </p>
      </section>

      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h3 className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">Reservations</h3>
              <p className="text-muted-foreground mb-4">
                To check availability or book a stay, please use our booking gateway.
              </p>
              <Link href="/booking" className="inline-block border-b border-foreground pb-1 uppercase tracking-widest text-sm hover:text-primary transition-colors">
                Book Your Stay
              </Link>
            </div>
            
            <div>
              <h3 className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">General Enquiries</h3>
              <div className="space-y-4 text-lg">
                {siteConfig.email ? (
                  <p><a href={`mailto:${siteConfig.email}`} className="hover:text-primary">{siteConfig.email}</a></p>
                ) : (
                  <p className="text-muted-foreground italic text-base">Email coming soon.</p>
                )}
                {siteConfig.phone ? (
                  <p><a href={`tel:${siteConfig.phone}`} className="hover:text-primary">{siteConfig.phone}</a></p>
                ) : (
                  <p className="text-muted-foreground italic text-base">Phone coming soon.</p>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">Address</h3>
              {siteConfig.address ? (
                <p className="text-lg leading-relaxed max-w-xs">{siteConfig.address}</p>
              ) : (
                <p className="text-muted-foreground italic text-base">Location details coming soon.</p>
              )}
            </div>
          </div>

          <div className="aspect-square bg-muted relative border border-border">
            <SiteImage src={images.contactImage.src} alt="Contact Us" fill placeholderType="portrait" />
          </div>
        </div>
      </section>
    </div>
  );
}
