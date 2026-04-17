import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "RKS Properties | Residential Rentals",
  description: "Premium residential properties available for lease",
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
        <footer className="border-t border-slate-700 bg-slate-950 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-slate-300 text-sm">
            <p className="mb-3">RKS Properties © 2026</p>
            <p className="text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
              The properties listed on this website are managed by RKS Properties. Each property operates independently under its own separate limited liability company (LLC). This website is for informational purposes only and does not imply joint ownership or control over individual properties.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
