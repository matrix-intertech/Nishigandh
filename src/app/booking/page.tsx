import Link from "next/link";
import { getBookingUrl } from "@/lib/booking";

export const metadata = {
  title: "Book Your Stay | Nishigandh Farms",
  description: "Reserve your quiet escape into nature.",
};

export default function BookingPage() {
  const bookingUrl = getBookingUrl();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center pt-24 px-6 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-muted/50 rounded-full blur-3xl -z-10" />
      
      <div className="text-center max-w-2xl bg-card border border-border p-12 md:p-16 shadow-xl">
        <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-6 block">Reservations</span>
        <h1 className="font-heading text-4xl md:text-6xl text-foreground mb-8">Ready to disconnect?</h1>
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          Reservations and availability are currently handled through our booking partner. 
          Step into a quieter rhythm and secure your red-brick cottage today.
        </p>
        <Link 
          href={bookingUrl} 
          className="inline-block w-full sm:w-auto px-10 py-5 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-md"
        >
          Check Availability
        </Link>
        <p className="mt-8 text-sm text-muted-foreground">
          For special requests or large groups, please <Link href="/contact" className="underline hover:text-primary">contact us directly</Link>.
        </p>
      </div>
    </div>
  );
}
