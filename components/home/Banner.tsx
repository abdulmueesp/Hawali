import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import bannerimg from "../../public/banner.png";
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineArrowForward } from "react-icons/md";

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
            <button className="group relative mt-7 inline-flex items-center gap-3 overflow-hidden rounded-3xl border border-[#FF6E4A] hover:border-black bg-[#FF6E4A] px-5 py-2 font-roboto text-xl text-white transition-all duration-500">
  {/* Animated black background - comes from bottom center as circle with slow smooth transition */}
  <span className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-0 w-3 h-0 bg-black rounded-full transition-all duration-700 ease-in-out group-hover:w-[600px] group-hover:h-[600px]" />
  
  {/* Button content */}
  <span className="relative z-10 flex items-center gap-3">
    Build Your Door
    
    {/* Arrow container with transition */}
    <span className="relative inline-flex items-center justify-center w-7 h-7">
      {/* Default Arrow - diagonal up-right, medium bold */}
      <span className="absolute inset-0 flex items-center justify-center transition-all duration-400 ease-in-out opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-75">
        <GoArrowUpRight className="text-white text-2xl font-bold" />
      </span>
      
      {/* Hover Arrow - straight right, medium bold */}
      <span className="absolute inset-0 flex items-center justify-center transition-all duration-400 ease-in-out opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100">
        {/* <FaArrowRight className="text-white text-2xl font-bold" /> */}
        <MdOutlineArrowForward  className="text-white text-2xl font-bold"/>
      </span>
    </span>
  </span>
</button>

          </div>
        </div>
      </div>
    </section>
  );
}
