import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import bannerimg from "../../public/banner.png";

export default function BannerSection() {
  return (
    <section className="relative w-full h-[60vh] md:h-[100vh]">
      {/* Background Image */}
      <Image
        src={bannerimg}
        alt="Door Banner"
        fill
        priority
        className="object-center"
      />

      {/* Dark overlay: smooth fade from 70% dark to clear */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl w-full px-6 md:px-12">
          <div className="max-w-xl text-white">
            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-playfair leading-tight">
              A Door Designed <br /> for Paradise.
            </h1>

            {/* Description */}
            <p className="mt-5 text-sm md:text-base text-gray-200 font-roboto">
              Island-crafted, precision-machined, and made to thrive in
              Hawaii&apos;s climate for generations.
            </p>

            {/* Button */}
            <button className="mt-7 inline-flex items-center gap-3 rounded-md border border-orange-500 bg-orange-500 px-6 py-3 font-medium text-white hover:bg-orange-600 transition">
              Build Your Door
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
