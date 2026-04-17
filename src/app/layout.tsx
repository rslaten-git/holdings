import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "RKS Properties Holdings, LLC | DFW Rentals",
  description: "Professional residential property management in Dallas-Fort Worth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} bg-slate-900 text-white`}>
        {children}
        <footer className="border-t border-slate-700 bg-slate-900 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
            <p className="text-slate-300 text-sm mb-2">For more information: <a href="mailto:info@rksproperties.io" className="text-blue-400 hover:text-blue-300 transition-colors">info@rksproperties.io</a></p>
            <p className="text-slate-500 text-xs mb-2">RKS Properties Holdings, LLC © 2026</p>
            <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Each property operates independently under its own separate LLC. This website is for informational purposes only.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
