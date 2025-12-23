import Image from "next/image";
import Buildit from "../../public/images/build.png";
import Review from "../../public/images/review.png";
import Submit from "../../public/images/submit.png";
import Yourdoor from "../../public/images/yourdoor.png";
import Greenarrow from "../../public/images/greenarrow.png";
import Downarrow from "../../public/images/downarrow.png"
import Truck from "../../public/images/truck.png"
import { MdOutlineArrowOutward } from "react-icons/md";
const stepBox =
  "flex flex-col items-center text-center px-2 pt-0 md:pt-10 md:pb-10 w-full max-w-[260px] mx-auto";

const StepsDoor = () => {
  return (
    <section className="w-full pt-10 pb-5  bg-white ">
     <div className="max-w-7xl md:max-w-full mx-auto px-4 sm:px-6 md:px-[60px] flex flex-col">


        {/* HEADING */}
        <div className="mb-12 md:mb-8 text-center md:text-left">
          <h2 className="text-2xl md:text-5xl font-roboto text-black font-medium">
            How To Order Doors
          </h2>
          <p className="mt-2 md:mt-3 text-gray-600 text-sm md:text-base font-roboto max-w-xl px-2">
            Four easy steps to get your perfect premium door delivered
          </p>
        </div>

        {/* GRID (HOVER PARENT) */}
        <div className="group w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 md:gap-12 items-start font-roboto ">

          {/* STEP 1 */}
          <div className="relative flex flex-col justify-center items-center overflow-visible">

            <div className={stepBox}>
              <Image
                src={Buildit}
                alt="Build It"
                width={170}
                height={170}
                className="w-[140px] md:w-[170px] h-auto mb-5 md:mb-6 grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <h4 className="text-xl font-medium text-black">Build It</h4>
              <p className="mt-2 text-[#3B3B3B] text-sm md:text-base">
                Build your perfect door with our easy, interactive builder.
              </p>
            </div>

            <div className="flex md:hidden justify-center mb-6">
              <Image src={Downarrow} alt="Down Arrow" width={20} height={20} className="grayscale group-hover:grayscale-0 transition-all duration-300" />
            </div>

            <div className="hidden md:flex absolute right-[-60px] top-1/3 -translate-y-1/2">
              <Image
                src={Greenarrow}
                alt="Arrow"
                width={60}
                height={60}
                className="
                grayscale
                group-hover:grayscale-0
                transition-transform
                duration-300
                ease-out
                transform
                group-hover:translate-y-1
              "
              />
            </div>

          </div>

          {/* STEP 2 */}
          <div className="relative flex flex-col justify-center items-center overflow-visible">
            <div className={stepBox}>
              <Image
                src={Review}
                alt="Review"
                width={100}
                height={100}
                className=" w-[80px] md:w-[100px] h-auto mb-5 md:mb-6 grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <h4 className="text-xl font-medium text-black">Review</h4>
              <p className="mt-2 text-[#3B3B3B] text-sm md:text-base">
                Add your details and review your quote.
              </p>
            </div>
            <div className="flex md:hidden justify-center mb-6 ">
              <Image src={Downarrow} alt="Down Arrow" width={20} height={20} className="grayscale group-hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="hidden md:flex absolute right-[-10px] top-1/3 -translate-y-1/2">
              <Image
                src={Greenarrow}
                alt="Arrow"
                width={60}
                height={60}
                className="
      grayscale
      group-hover:grayscale-0
      transition-transform
      duration-300
      ease-out
      transform
      group-hover:translate-y-1
    "
              />
            </div>
          </div>

          {/* STEP 3 */}
          <div className="relative flex flex-col justify-center items-center overflow-visible">
            <div className={stepBox}>
              <Image
                src={Submit}
                alt="Submit"
                width={210}
                height={210}
                className="w-[160px] md:w-[210px] h-auto mb-5 md:mb-6 grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <h4 className="text-xl font-medium text-black">Submit</h4>
              <p className="mt-2 text-[#3B3B3B] text-sm md:text-base">
                Confirm your specs and Submit your quote.
              </p>
            </div>
            <div className="flex md:hidden justify-center mb-6">
              <Image src={Downarrow} alt="Down Arrow" width={20} height={20} className="grayscale group-hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="hidden md:flex absolute right-[-60px] top-1/3 -translate-y-1/2">
              <Image
                src={Greenarrow}
                alt="Arrow"
                width={60}
                height={60}
                className="
                grayscale
                group-hover:grayscale-0
                transition-transform
                duration-300
                ease-out
                transform
                group-hover:translate-y-1
              "
              />
            </div>
          </div>

          {/* STEP 4 */}
          <div className="flex justify-center">
            <div className={stepBox}>
              <Image
                src={Yourdoor}
                alt="Your Door"
                width={120}
                height={120}
                className="w-[90px] md:w-[120px] h-auto mb-5 md:mb-6 grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <h4 className="text-xl font-medium text-black">Get Your Door</h4>
              <p className="mt-2 text-[#3B3B3B] text-sm md:text-base">
                We price it, prep it, and get it ready.
              </p>
            </div>
          </div>

        </div>
      </div>
      <div className="w-full flex justify-center items-center ">

        <button className="group relative  inline-flex items-center gap-3 overflow-hidden rounded-3xl bg-[#FF6E4A] px-5 py-2 font-roboto text-xl text-white mt-10 md:mt-4  mb-[25px] md:mb-[62px]">

          {/* WhatsApp-style black reveal */}
          <span
            className="
    absolute inset-0
    bg-black
    origin-bottom
    scale-y-0
    transition-transform duration-900 ease-[cubic-bezier(0.4,0,0.2,1)]
    group-hover:scale-y-100
  "
          />

          {/* Content */}
          <span className="relative z-10 flex items-center gap-3 text-[15px] md:text-lg">
          Start Building Your Door Now

            {/* Arrow (your previous working animation) */}
            <span
              className="
      inline-flex items-center justify-center w-7 h-7
      transform
      transition-all duration-500 ease-in-out
      rotate-0 translate-x-1.5
      group-hover:rotate-45 group-hover:translate-x-0
    "
            >
              <MdOutlineArrowOutward className="text-white text-2xl" />
            </span>
          </span>
        </button>
      </div>
      <div className="relative w-full min-h-[68px] md:h-[68px] flex flex-col md:flex-row justify-center items-center gap-4 md:gap-16 py-3 md:py-0 bg-[#F6F5F1] group cursor-pointer">

{/* Item 1 */}
<div className="flex  items-center md:flex-row gap-2">
  <Image
    src={Truck}
    alt="Use"
    width={32}
    height={32}
    className="filter grayscale group-hover:grayscale-0 transition-all duration-500"
  />
  <span className=" text-[#585858]  font-roboto md:text-lg">
    Manufactured in the US
  </span>
</div>



</div>
    </section>
  );
};

export default StepsDoor;
