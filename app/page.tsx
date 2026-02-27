import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Blocks, Zap, Palette } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium mb-8 border border-brand-primary/20">
        <span className="flex h-2 w-2 rounded-full bg-brand-primary animate-pulse"></span>
        TSFlow UI v0.1.0 is now live
      </div>

      <div className="mb-6 relative w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-2xl shadow-brand-primary/20">
        <Image src="/logo.png" alt="TSFlow Logo" fill className="object-cover" />
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-linear-to-r from-brand-primary via-brand-accent-2 to-brand-secondary bg-clip-text text-transparent">
        Build stunning apps <br className="hidden md:block" />
        <span className="text-white">at lightspeed.</span>
      </h1>

      <p className="text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
        Beautifully designed, fully customizable components built with React,
        Tailwind CSS, and Framer Motion. Copy and paste into your apps.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
        <Link
          href="/layouts/faq"
          className="bg-white text-black px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors"
        >
          Browse Components
          <ArrowRight className="w-4 h-4" />
        </Link>
        <a
          href="https://github.com/yourusername/tsflow-ui"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/5 border border-white/10 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-white/10 transition-colors"
        >
          View on GitHub
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl text-left">
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-primary/30 transition-colors group">
          <Blocks className="w-8 h-8 text-brand-primary mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-semibold mb-2">Copy & Paste</h3>
          <p className="text-gray-400">
            No bloated npm packages. Zero dependencies required. Just copy the code
            straight into your project.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-accent-2/30 transition-colors group">
          <Palette className="w-8 h-8 text-brand-accent-2 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-semibold mb-2">Highly Customizable</h3>
          <p className="text-gray-400">
            Every component is built cleanly, making it extremely easy to tweak
            styles to match your unique brand.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-secondary/30 transition-colors group">
          <Zap className="w-8 h-8 text-brand-secondary mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-semibold mb-2">Framer Motion</h3>
          <p className="text-gray-400">
            Components are brought to life with perfectly timed, buttery smooth
            micro-animations.
          </p>
        </div>
      </div>
    </div>
  );
}
