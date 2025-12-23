import Image from "next/image";

import Buildit from "../../public/images/build.png";
import Review from "../../public/images/review.png";
import Submit from "../../public/images/submit.png";
import Yourdoor from "../../public/images/yourdoor.png";
import Greenarrow from "../../public/images/greenarrow.png";
import Downarrow from "../../public/images/downarrow.png"
const stepBox =
  "flex flex-col items-center text-center px-4 pt-0 md:pt-10 md:pb-10 w-full max-w-[260px] mx-auto";

const StepsDoor = () => {
  return (
    <section className="w-full pt-10 pb-5 md:py-5 bg-white">
      <div className="max-w-7xl md:max-w-full mx-auto min-h-[520px] px-4 sm:px-6 md:px-[60px] flex flex-col justify-center">

        {/* HEADING */}
        <div className="mb-12 md:mb-8 text-center md:text-left ">
          <h2 className="text-2xl md:text-5xl font-roboto text-black font-medium">
            How To Order Doors
          </h2>
          <p className="mt-2 md:mt-3 text-gray-600 text-sm md:text-base font-roboto max-w-xl px-2">
            Four easy steps to get your perfect premium door delivered
          </p>
        </div>

        {/* GRID (HOVER PARENT) */}
        <div className="group w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 md:gap-12 items-start font-roboto">

          {/* STEP 1 */}
          <div className="relative flex flex-col justify-center items-center overflow-visible ">

            <div className={stepBox}>
              <Image
                src={Buildit}
                alt="Build It"
                width={170}
                height={170}
                className="w-[90px] sm:w-[140px] md:w-[170px] h-auto mb-5 md:mb-6 grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <h4 className="text-xl font-medium">Build It</h4>
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
          <div className="relative flex flex-col justify-center items-center overflow-visible ">
            <div className={stepBox}>
              <Image
                src={Review}
                alt="Review"
                width={100}
                height={100}
                className=" w-[70px] sm:w-[80px] md:w-[100px] h-auto mb-5 md:mb-6 grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <h4 className="text-xl font-medium">Review</h4>
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
          <div className="relative flex flex-col justify-center items-center overflow-visible ">
            <div className={stepBox}>
              <Image
                src={Submit}
                alt="Submit"
                width={210}
                height={210}
                className="w-[110px] sm:w-[170px] md:w-[210px] h-auto mb-5 md:mb-6 grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <h4 className="text-xl font-medium">Submit</h4>
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
                className="w-[70px] sm:w-[90px] md:w-[120px] h-auto mb-5 md:mb-6 grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <h4 className="text-xl font-medium">Get Your Door</h4>
              <p className="mt-2 text-[#3B3B3B] text-sm md:text-base">
                We price it, prep it, and get it ready.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StepsDoor;
