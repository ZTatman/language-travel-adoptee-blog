// These styles apply to every route in the application
import "../styles/globals.css";
import { Roboto_Flex, Nunito_Sans, Lora, Cinzel, Comforter } from "next/font/google";
import { Navbar, Footer } from "@/componentIndex";

const roboto = Roboto_Flex({
  subsets: ["latin"],
  display: "block",
  fallback: ["system-ui", "arial"],
  variable: "--font-roboto",
});

const lora = Lora({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["700"],
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
      className={`${roboto.variable} ${lora.variable} ${cinzel.variable} ${comforter.variable} m-0 h-full bg-slate-50 font-sans text-slate-700`}
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
