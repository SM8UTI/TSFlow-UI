import { Github, Menu, Search } from "lucide-react";

export function Header() {
    return (
        <header className="h-16 border-b border-white/10 bg-gray-950/50 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-4 sm:px-6">
            <div className="flex items-center gap-4">
                <button className="md:hidden text-gray-400 hover:text-white p-2 -ml-2 rounded-md">
                    <Menu className="w-5 h-5" />
                </button>
                <div className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 rounded-md px-3 py-1.5 focus-within:border-white/20 focus-within:bg-white/10 transition-colors w-64">
                    <Search className="w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search documentation..."
                        className="bg-transparent border-none outline-none text-sm text-white placeholder:text-gray-500 w-full"
                    />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <a
                    href="https://github.com/yourusername/tsflow-ui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    <Github className="w-5 h-5" />
                </a>
            </div>
        </header>
    );
}
