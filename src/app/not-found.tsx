import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-navy min-h-screen pt-16 flex items-center">
      <div className="max-w-[1100px] mx-auto px-6 py-24 text-center">
        <p className="text-gold font-serif text-8xl font-bold mb-6 leading-none">
          404
        </p>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-white/60 text-lg mb-10 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get
          you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-gold text-navy font-semibold px-8 py-4 rounded text-lg hover:opacity-90 transition-opacity"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white text-white font-semibold px-8 py-4 rounded text-lg hover:bg-white/10 transition-colors"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </section>
  );
}
