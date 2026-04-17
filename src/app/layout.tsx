import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "RKS Properties Holdings",
  description: "Residential Properties Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} bg-gray-50`}>
        <nav className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <h1 className="text-2xl font-bold text-gray-900">
                RKS Properties Holdings
              </h1>
              <div className="flex gap-4">
                <a href="/" className="text-gray-700 hover:text-gray-900">
                  Properties
                </a>
                <a href="#contact" className="text-gray-700 hover:text-gray-900">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-900 text-white mt-16 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold mb-4">Lillie 1 LLC</h3>
                <p className="text-sm text-gray-400">lillie1@rksproperties.io</p>
              </div>
              <div>
                <h3 className="font-bold mb-4">Masters 1 LLC</h3>
                <p className="text-sm text-gray-400">masters1@rksproperties.io</p>
              </div>
              <div>
                <h3 className="font-bold mb-4">Clinton I LLC</h3>
                <p className="text-sm text-gray-400">clinton1@rksproperties.io</p>
              </div>
              <div>
                <h3 className="font-bold mb-4">Wyndham Meadows 1 LLC</h3>
                <p className="text-sm text-gray-400">wyndham1@rksproperties.io</p>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-sm text-gray-400 mb-4">
                The properties listed on this website are managed by RKS Properties Holdings, LLC. Each property operates independently under its own separate limited liability company (LLC). This website is for informational purposes only and does not imply joint ownership or control over the individual properties.
              </p>
              <p className="text-xs text-gray-500">
                General inquiries: <a href="mailto:info@rksproperties.io" className="text-blue-400 hover:underline">info@rksproperties.io</a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
