"use client";

import Image from "next/image";
import headshot from "../public/headshot.jpg";
import { Button } from "@/components/common/button";

export default function Home() {
  return (
    <main>
      {/* Hero Image */}
      <section
        className="relative h-[648px] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/landing.jpg")' }}
      >
        {/* Hero Overlay */}
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-t from-black/70 to-transparent bg-fixed">
          <div className="flex h-full flex-col items-center justify-center">
            {/* Hero Text */}
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="mb-8 font-display  text-5xl font-bold leading-[1.15] md:mb-4 md:text-6xl md:leading-[1.25] md:tracking-wider xl:text-7xl">
                <span>
                  Language Travel
                  <br />
                  Adoptee
                </span>
              </h1>
              <p className="mx-auto mb-12 mt-0 font-sans text-sm tracking-widest text-white/80 xs:max-w-xs sm:max-w-sm md:mb-8 md:max-w-xl md:text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A iusto aspernatur rem pariatur delectus nemo
                vitae itaque, quibusdam, harum ut consequatur sint id minima laboriosam architecto repellat! Deleniti,
                et asperiores!
              </p>
            </div>
            <div className="align-center flex flex-col justify-center space-y-8 md:flex-row md:space-x-8 md:space-y-0">
              <Button onClick={() => console.log(":: button clicked!")} rounded variant="primary">
                Read More
              </Button>
              <Button onClick={() => console.log(":: button clicked!")} rounded variant="secondary">
                Download My Free Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="align-center flex justify-center">
        <div className="h-96 w-96">
          <Image src={headshot} alt="Emily" className="h-full object-contain" priority />
        </div>
      </section>
    </main>
  );
}
