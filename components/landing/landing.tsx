import Navbar from "../navigation/navbar";
import landingImage from "../../public/landing.jpeg";

export default function landing() {
  return (
    <header>
      <div
        className="relative h-[600px] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/landing.jpeg")' }}
      >
        {/* Dark Overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center font-display text-white md:px-12">
              <h1 className="mb-12  text-5xl font-bold tracking-tight md:text-6xl md:tracking-wide xl:text-7xl">
                Language Travel <br />
                <span>Adoptee</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
