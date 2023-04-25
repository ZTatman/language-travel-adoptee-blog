// These styles apply to every route in the application
import "../styles/globals.css";
import { Roboto_Flex, Lora, Cinzel, Comforter } from "next/font/google";
import { Navbar, Footer } from "@/componentIndex";

const roboto = Roboto_Flex({
  subsets: ["latin"],
  display: "fallback",
  variable: "--font-roboto",
});

const lora = Lora({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["700"],
  display: "swap",
  variable: "--font-lora",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cinzel",
});

const comforter = Comforter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-comforter",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${lora.variable} ${cinzel.variable} ${comforter.variable} m-0 h-full bg-slate-50`}
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
