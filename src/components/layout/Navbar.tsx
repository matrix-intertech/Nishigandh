"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Determine if the current page has a dark hero image AT THE TOP UNDERNEATH the navbar
  // Only the root page "/" is a full-bleed hero. All other pages use pt-24.
  const hasDarkHero = pathname === "/";
  
  const isTransparent = !isScrolled && !mobileMenuOpen;
  const textColor = isTransparent 
    ? (hasDarkHero ? "text-white" : "text-primary") 
    : "text-primary";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-background shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-24">
        <Link href="/" className="transition-opacity hover:opacity-80 flex items-center shrink-0">
          <Image 
            src="/nishigandh logo navbar.png" 
            alt="Nishigandh Farms" 
            width={115} 
            height={48} 
            className="w-[98px] md:w-[115px] h-[41px] md:h-[48px] object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { label: "Resort", href: "/resort" },
            { label: "Stay", href: "/accommodation" },
            { label: "Activities", href: "/activities" },
            { label: "Experiences", href: "/experiences" },
            { label: "Nature", href: "/nature" },
            { label: "Restaurant", href: "/restaurant" },
            { label: "Gallery", href: "/gallery" },
          ].map((item) => {
            const isActive = pathname === item.href;
            return (
            <Link
              key={item.label}
              href={item.href}
              className={`text-sm font-medium tracking-wider uppercase transition-all ${
                isActive ? "border-b border-current pb-0.5" : "hover:opacity-70"
              } ${textColor}`}
            >
              {item.label}
            </Link>
          )})}
          <Link
            href="/booking"
            className={`text-sm tracking-wider uppercase px-6 py-2 border transition-colors ${
              !isScrolled && hasDarkHero
                ? "border-white text-white hover:bg-white hover:text-primary"
                : "border-primary text-primary hover:bg-primary hover:text-white"
            }`}
          >
            Book Your Stay
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className={`w-6 h-6 ${textColor}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center space-y-8">
          {[
            { label: "Resort", href: "/resort" },
            { label: "Stay", href: "/accommodation" },
            { label: "Activities", href: "/activities" },
            { label: "Experiences", href: "/experiences" },
            { label: "Nature", href: "/nature" },
            { label: "Restaurant", href: "/restaurant" },
            { label: "Gallery", href: "/gallery" },
            { label: "Offers", href: "/offers" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-2xl font-heading text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/booking"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg tracking-wider uppercase px-8 py-3 bg-primary text-primary-foreground mt-4"
          >
            Book Your Stay
          </Link>
        </div>
      )}
    </header>
  );
}
