import { MdOutlineArrowOutward } from "react-icons/md"
import Image from "next/image"
import Doors from "../../public/images/door22.png"

const Prehung = () => {
  return (
    <div className="w-full px-5 md:px-15 py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="relative w-full min-h-[400px] md:min-h-[420px] bg-[#84684C] rounded-lg overflow-hidden">

          {/* ================= LEFT CONTENT ================= */}
          <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-12 lg:px-16 py-12 md:py-16">
            <div className="max-w-xl">
              <h2 className="font-roboto font-medium text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
                Pre-Hung. Pre-Bored.<br />
                Problem-Solved.
              </h2>

              <p className="font-roboto font-light text-base md:text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
                Forty years of wood and fiberglass doors that fit,
                <br className="hidden md:block" />
                perform, and endure in Hawaii's toughest conditions.
              </p>

              {/* Button */}
              <button className="group relative inline-flex items-center gap-3 overflow-hidden rounded-3xl bg-[#FF6E4A] px-6 md:px-8 py-3 md:py-4 font-roboto text-lg md:text-xl text-white">
                {/* Hover overlay */}
                <span className="absolute inset-0 bg-black origin-bottom scale-y-0 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-y-100" />

                {/* Button content */}
                <span className="relative z-10 flex items-center gap-3">
                  Get a Quote
                  <span className="inline-flex items-center justify-center w-7 h-7 transition-all duration-500 rotate-0 translate-x-1.5 group-hover:rotate-45 group-hover:translate-x-0">
                    <MdOutlineArrowOutward className="text-white text-2xl" />
                  </span>
                </span>
              </button>
            </div>
          </div>

          {/* ================= DESKTOP IMAGE ================= */}
          <div className="absolute right-0 bottom-0 top-18 hidden md:block w-[55%] h-full pr-10">
            <div className="relative w-full h-full">
              <Image
                src={Doors}
                alt="Various door styles in different finishes"
                fill
                priority
                className="object-cover object-bottom" // Cover entire div, align bottom
              />
            </div>
          </div>

          {/* ================= MOBILE IMAGE ================= */}
          <div className="relative md:hidden w-full h-[260px] mt-8">
            <Image
              src={Doors}
              alt="Various door styles in different finishes"
              fill
              priority
              className="object-cover object-bottom" // Cover entire div, align bottom
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Prehung
