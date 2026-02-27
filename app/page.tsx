import { Layers, MousePointerClick } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">

      <div className="mb-8 relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-2xl shadow-brand-primary/20">
        <Image src="/logo.png" alt="TSFlow Logo" fill className="object-cover" />
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 bg-linear-to-r from-brand-primary via-brand-accent-2 to-brand-secondary bg-clip-text text-transparent">
        TSFlow UI Components Playground
      </h1>

      <p className="text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
        This environment is designed purely for testing and previewing dynamic React components.
        Select a component from the sidebar to test its functionality, view variants, and copy the raw source code.
      </p>

      <div className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-white/5 border border-white/10 max-w-lg w-full">
        <MousePointerClick className="w-10 h-10 text-brand-primary mb-2" />
        <h3 className="text-xl font-semibold text-white">Select a Component</h3>
        <p className="text-gray-400 mb-4 text-sm">Click one of the components below to preview the source code and interactive demo.</p>

        <div className="flex gap-4 w-full">
          <Link href="/components/button" className="flex-1 bg-brand-primary/10 text-brand-primary border border-brand-primary/20 hover:bg-brand-primary hover:text-white transition-all py-3 rounded-lg font-medium">
            Test Button
          </Link>
          <Link href="/layouts/faq" className="flex-1 bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all py-3 rounded-lg font-medium">
            Test FAQ Layout
          </Link>
        </div>
      </div>
    </div>
  );
}
