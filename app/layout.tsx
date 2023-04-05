// These styles apply to every route in the application
import "../styles/globals.css";
import { Roboto_Flex, Lora, Cinzel } from "next/font/google";
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto.variable} ${lora.variable} ${cinzel.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
