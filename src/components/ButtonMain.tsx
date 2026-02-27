import ComponentShowcase from "./ComponentShowcase";
import { Button } from "./Button";
import { Zap, Activity } from "lucide-react";

export default function ButtonMain() {
    return (
        <div className="flex flex-col gap-12 max-w-5xl mx-auto pb-20">
            <div>
                <h1 className="text-3xl font-bold mb-4">Button Component</h1>
                <p className="text-gray-400">
                    A customizable, accessible, and highly animated button component powered by Framer Motion.
                    Ready to be dropped right into your project.
                </p>
            </div>

            <ComponentShowcase componentPath="components/Button.tsx" title="Animated Button">
                <div className="flex flex-col gap-8 w-full">

                    <div className="flex flex-col gap-3">
                        <h3 className="text-sm font-medium text-gray-400">Variants</h3>
                        <div className="flex flex-wrap items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl">
                            <Button variant="solid">Solid</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="link">Link</Button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h3 className="text-sm font-medium text-gray-400">Sizes</h3>
                        <div className="flex flex-wrap items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl">
                            <Button size="sm">Small</Button>
                            <Button size="md">Medium</Button>
                            <Button size="lg">Large</Button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h3 className="text-sm font-medium text-gray-400">States & Icons</h3>
                        <div className="flex flex-wrap items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl">
                            <Button isLoading>Loading</Button>
                            <Button leftIcon={<Zap className="w-4 h-4" />}>Left Icon</Button>
                            <Button rightIcon={<Activity className="w-4 h-4" />} variant="outline">Right Icon</Button>
                            <Button disabled variant="solid">Disabled</Button>
                        </div>
                    </div>

                </div>
            </ComponentShowcase>
        </div>
    );
}
