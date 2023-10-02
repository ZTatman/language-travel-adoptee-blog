import { Montserrat, Lora, Cinzel, Comforter } from "next/font/google";

import { Navbar, Footer, NewsletterSignup } from "@/componentIndex";
import "../globals.css";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-montserrat",
});

const lora = Lora({
    subsets: ["latin"],
    style: ["italic"],
    weight: ["400", "700"],
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
    weight: ["400"],
    variable: "--font-comforter",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${montserrat.variable} ${lora.variable} ${cinzel.variable} ${comforter.variable} m-0 h-full bg-white font-sans text-slate-700 scroll-smooth scroll-pt-[55px]`}
        >
            {/* pt-[77px] and fixed are needed to prevent <Navbar /> from overlapping page content */}
            <body className="m-0 h-full pt-[77px]">
                <div className="fixed top-0 z-[999] w-full">
                    <Navbar />
                </div>
                {children}
                <NewsletterSignup />
                <Footer />
            </body>
        </html>
    );
}
