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
      <body className={`${geist.variable} ${geistMono.variable} bg-[#0a0a0a] text-white`}>
        {children}
        <footer className="border-t border-[#C5A55A]/20 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
            <div className="gold-divider mb-8 max-w-xs mx-auto" />
            <p className="text-[#f5f0e8] text-sm mb-2">
              For more information:{" "}
              <a href="mailto:info@rksproperties.io" className="text-[#C5A55A] hover:text-[#D4B96A] transition-colors">
                info@rksproperties.io
              </a>
            </p>
            <p className="text-[#888] text-xs mb-3">RKS Properties Holdings, LLC © 2026</p>
            <p className="text-xs text-[#555] max-w-2xl mx-auto leading-relaxed">
              The properties listed on this website are managed by RKS Properties Holdings, LLC. Each property operates independently under its own separate limited liability company (LLC). This website is for informational purposes only and does not imply joint ownership or control over individual properties.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
