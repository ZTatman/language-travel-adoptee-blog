import { Montserrat, Nunito_Sans, Lora, Cinzel, Comforter } from "next/font/google";
import { previewData } from "next/headers";

import "../../styles/globals.css";
import { Navbar, Footer, NewsletterSignup } from "@/componentIndex";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "block",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  fallback: ["system-ui", "arial"],
  variable: "--font-montserrat",
});

const lora = Lora({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "700"],
  display: "block",
  variable: "--font-lora",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  display: "block",
  variable: "--font-cinzel",
});

const comforter = Comforter({
  subsets: ["latin"],
  display: "block",
  weight: ["400"],
  variable: "--font-comforter",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${lora.variable} ${cinzel.variable} ${comforter.variable} m-0 h-full bg-white font-sans text-slate-700`}
    >
      <body className="h-full m-0">
        <div>
          <div className="sticky top-0 z-50">
            {previewData() && (
              <div className="w-full p-2 text-center text-white bg-amber-500">
                <p className="text-sm">In Preview Mode</p>
              </div>
            )}
            <Navbar />
          </div>
          {children}
          <NewsletterSignup />
          <Footer />
        </div>
      </body>
    </html>
  );
}
