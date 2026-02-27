"use client";

import { useState } from "react";
import { Check, Copy, Monitor, Code } from "lucide-react";

interface ClientShowcaseProps {
    code: string;
    title: string;
    children: React.ReactNode;
}

export default function ClientShowcase({
    code,
    title,
    children,
}: ClientShowcaseProps) {
    const [tab, setTab] = useState<"preview" | "code">("preview");
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy code: ", err);
        }
    };

    return (
        <div className="flex flex-col gap-4 my-8 first:mt-0 last:mb-0">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium text-white tracking-tight">
                    {title}
                </h3>
            </div>

            <div className="rounded-xl border border-white/10 bg-gray-950/40 overflow-hidden shadow-2xl">
                {/* Toolbar */}
                <div className="flex items-center justify-between border-b border-white/10 px-4 h-14 bg-gray-900/50">
                    <div className="flex items-center gap-1 bg-gray-950/50 p-1 rounded-lg border border-white/5">
                        <button
                            onClick={() => setTab("preview")}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${tab === "preview"
                                    ? "bg-white/10 text-white shadow-sm"
                                    : "text-gray-400 hover:text-white"
                                }`}
                        >
                            <Monitor className="w-4 h-4" />
                            Preview
                        </button>
                        <button
                            onClick={() => setTab("code")}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${tab === "code"
                                    ? "bg-white/10 text-white shadow-sm"
                                    : "text-gray-400 hover:text-white"
                                }`}
                        >
                            <Code className="w-4 h-4" />
                            Code
                        </button>
                    </div>

                    <div>
                        <button
                            onClick={copyToClipboard}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                        >
                            {copied ? (
                                <>
                                    <Check className="w-4 h-4 text-green-400" />
                                    <span className="text-green-400">Copied!</span>
                                </>
                            ) : (
                                <>
                                    <Copy className="w-4 h-4" />
                                    <span>Copy</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="relative">
                    {tab === "preview" ? (
                        <div className="p-4 sm:p-8 min-h-[400px] flex items-center justify-center bg-[#0a0a0a]">
                            {/* To make it isolated, we could use iframe, but for now we simply render children inline */}
                            <div className="w-full max-w-5xl mx-auto">{children}</div>
                        </div>
                    ) : (
                        <div className="max-h-[600px] overflow-auto bg-[#0d0d0d] p-4 font-mono text-sm leading-relaxed text-gray-300">
                            <pre>
                                <code>{code}</code>
                            </pre>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
