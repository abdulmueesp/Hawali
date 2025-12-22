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
            "linear-gradient(90deg, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.70) 50%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl w-full px-6 md:px-12">
          <div className="max-w-xl text-white">
            {/* Heading */}
            <h1 className="text-3xl md:text-[58px] font-playfair leading-tight">
              A Door Designed <br /> for Paradise.
            </h1>

            {/* Description */}
            <h3 className="mt-5 text-sm md:text-xl text-[#C6C6C6] font-roboto">
              Island-crafted, precision-machined, and made to thrive in
              Hawaii&apos;s climate for generations.
            </h3>

            {/* Button */}
            <button className="mt-7 inline-flex items-center gap-3 rounded-3xl border border-[#FF6E4A] bg-[#FF6E4A] px-5 py-2  font-roboto text-xl text-white  transition">
              Build Your Door
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
