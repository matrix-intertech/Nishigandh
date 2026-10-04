import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center pt-24 px-6">
      <div className="text-center max-w-2xl">
        <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">404</span>
        <h1 className="font-heading text-5xl md:text-7xl text-foreground mb-6">Page not found</h1>
        <p className="text-lg text-muted-foreground mb-12">
          It seems you have wandered off the path. The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="px-8 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-foreground transition-colors">
          Return to the retreat
        </Link>
      </div>
    </div>
  );
}
