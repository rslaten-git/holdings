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
        <footer className="border-t border-slate-700 bg-slate-900/50 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-8">
              <h3 className="font-bold text-white mb-4">Property Contacts</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                <div>
                  <p className="font-semibold text-white mb-1">Lillie 1 LLC</p>
                  <a href="mailto:lillie1@rksproperties.io" className="text-blue-400 hover:text-blue-300">lillie1@rksproperties.io</a>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Masters 1 LLC</p>
                  <a href="mailto:masters1@rksproperties.io" className="text-blue-400 hover:text-blue-300">masters1@rksproperties.io</a>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Clinton I LLC</p>
                  <a href="mailto:clinton1@rksproperties.io" className="text-blue-400 hover:text-blue-300">clinton1@rksproperties.io</a>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Wyndham Meadows 1 LLC</p>
                  <a href="mailto:wyndham1@rksproperties.io" className="text-blue-400 hover:text-blue-300">wyndham1@rksproperties.io</a>
                </div>
              </div>
            </div>
            <div className="border-t border-slate-700 pt-8">
              <p className="text-sm text-slate-400 mb-4">
                The properties listed on this website are managed by RKS Properties. Each property operates independently under its own separate limited liability company (LLC). This website is for informational purposes only and does not imply joint ownership or control over individual properties.
              </p>
              <p className="text-xs text-slate-500">
                General inquiries: <a href="mailto:info@rksproperties.io" className="text-blue-400 hover:text-blue-300">info@rksproperties.io</a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
