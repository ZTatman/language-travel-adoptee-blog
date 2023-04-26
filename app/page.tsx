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
            <div className="px-6 text-center md:px-12">
              <h1 className="mb-8 font-display  text-5xl font-bold leading-[1] tracking-wide text-white/90 md:mb-4 md:text-6xl md:tracking-wider xl:text-7xl">
                <span>
                  Language Travel
                  <br />
                  Adoptee
                </span>
              </h1>
              <p className="mx-auto mb-12 mt-0 max-w-sm font-sans text-xs leading-[inherit] tracking-widest text-white/90 md:max-w-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A iusto aspernatur rem pariatur delectus nemo
                vitae itaque, quibusdam, harum ut consequatur sint id minima laboriosam architecto repellat! Deleniti,
                et asperiores!
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-8 md:flex-row md:space-x-8 md:space-y-0">
              <Button onClick={() => console.log(":: button clicked!")} rounded>
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
      <section className="md:spac-y-0 flex w-full flex-col items-center justify-center space-y-2 bg-section px-9 py-6 md:flex-row md:space-x-12 md:py-9">
        <h1 className="text-center font-decorative text-7xl text-sky-600 md:hidden">About</h1>
        <div>
          <Image
            className="mx-auto my-0 aspect-square max-w-[16rem] object-contain mix-blend-multiply md:max-w-xs"
            src={headshot}
            alt="About Me Image"
            priority
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="hidden text-center font-decorative text-7xl text-sky-600 md:block md:text-8xl md:tracking-wide xl:text-9xl xl:tracking-wider">
            About
          </h1>
          <div className="max-w-sm">
            <h3 className="font-heading text-xl font-bold italic text-slate-900 md:text-2xl">Hi, I am Emily</h3>
            <p className="mb-4 text-left font-sans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
              tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
              erat.
            </p>
            <Button onClick={() => console.log(":: button clicked!")} rounded>
              More About Me
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
