import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/src/components/Sidebar";
import { Header } from "@/src/components/Header";

export const metadata: Metadata = {
  title: "TSFlow UI | Component Library",
  description: "A beautiful, customizable UI component library.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased bg-gray-950 text-white selection:bg-[#FF4E02]/30 min-h-screen font-sans"
        style={{ fontFamily: '"Geist", sans-serif' }}
      >
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <div className="flex-1 flex flex-col min-w-0 overflow-y-auto relative">
            <Header />
            <main className="flex-1">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

