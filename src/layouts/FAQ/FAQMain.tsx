import ComponentShowcase from "@/src/components/ComponentShowcase";
import FAQLayout1 from "./FAQLayout1";

export default function FAQMain() {
  return (
    <div className="flex flex-col gap-12 max-w-5xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
          FAQ Layouts
        </h1>
        <p className="text-lg text-gray-400">
          Clean, responsive, and animated frequently asked questions components. Built with Framer Motion.
        </p>
      </div>

      <div className="flex flex-col gap-16">
        <ComponentShowcase
          title="FAQ Layout 1"
          componentPath="layouts/FAQ/FAQLayout1.tsx"
        >
          <FAQLayout1 />
        </ComponentShowcase>
      </div>
    </div>
  );
}
