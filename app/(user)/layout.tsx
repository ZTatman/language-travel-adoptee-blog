// These styles apply to every route in the application
import "../../styles/globals.css";
import { Montserrat, Nunito_Sans, Lora, Cinzel, Comforter } from "next/font/google";
import { Navbar, Footer } from "@/componentIndex";
import { Toaster } from "@/components/ui/toaster";
import { PreviewData } from "next/headers";

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
      <body className="m-0 h-full">
        <div>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
