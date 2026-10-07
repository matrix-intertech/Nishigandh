import Link from "next/link";
import { siteConfig } from "@/data/site";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6 inline-block">
              <Image 
                src="/nishigandh logo navbar.png" 
                alt="Nishigandh Farms" 
                width={180} 
                height={72} 
                className="w-[156px] md:w-[180px] h-auto object-contain"
              />
            </div>
            <p className="text-primary-foreground/80 max-w-sm">
              A quiet escape into the heart of nature. Experience the authentic countryside atmosphere of Koyana in our premium nature retreat.
            </p>
          </div>
          <div>
            <h3 className="font-heading text-xl mb-6">Explore</h3>
            <ul className="space-y-4">
              <li><Link href="/resort" className="text-primary-foreground/80 hover:text-white transition-colors">The Resort</Link></li>
              <li><Link href="/accommodation" className="text-primary-foreground/80 hover:text-white transition-colors">Accommodation</Link></li>
              <li><Link href="/activities" className="text-primary-foreground/80 hover:text-white transition-colors">Activities</Link></li>
              <li><Link href="/experiences" className="text-primary-foreground/80 hover:text-white transition-colors">Experiences</Link></li>
              <li><Link href="/restaurant" className="text-primary-foreground/80 hover:text-white transition-colors">Restaurant</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-xl mb-6">Contact</h3>
            <ul className="space-y-4 text-primary-foreground/80">
              {siteConfig.email ? <li>{siteConfig.email}</li> : <li>Contact details coming soon</li>}
              {siteConfig.phone && <li>{siteConfig.phone}</li>}
              <li className="mt-6">
                <Link href="/booking" className="inline-block border border-primary-foreground px-6 py-2 hover:bg-primary-foreground hover:text-primary transition-colors uppercase text-sm tracking-wider">
                  Book Your Stay
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Nishigandh Farms. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
