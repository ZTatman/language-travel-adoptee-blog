"use client";

import landingImage from "../../public/landing.jpeg";
import { Button } from "@/components/common/button";

export default function Home() {
  return (
    <main className="h-full">
      {/* Background Image */}
      <div
        className="relative h-full w-full overflow-hidden bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: 'url("/landing.jpeg")' }}
      >
        {/* Dark Overlay */}
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-t from-black/60 to-transparent bg-fixed">
          <div className="flex h-full items-center justify-center">
            {/* Landing Page Text */}
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="mb-3 font-display text-5xl font-bold leading-[1.15] md:text-6xl md:leading-[1.25] md:tracking-wider xl:text-7xl">
                <span className="bg-gradient-to-b from-white from-50% to-transparent to-90% bg-clip-text text-transparent">
                  Language Travel
                  <br />
                  Adoptee
                </span>
              </h1>
              <p className="text-white/85 mx-auto mb-8 mt-0 font-sans text-xs tracking-wide xs:max-w-xs sm:max-w-sm md:max-w-xl md:text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A iusto aspernatur rem pariatur delectus nemo
                vitae itaque, quibusdam, harum ut consequatur sint id minima laboriosam architecto repellat! Deleniti,
                et asperiores!
              </p>
              <Button onClick={() => console.log(":: button clicked!")} rounded filled>
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
