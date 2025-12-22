import Image from "next/image";

import Buildit from "../../public/images/build.png";
import Review from "../../public/images/review.png";
import Submit from "../../public/images/submit.png";
import Yourdoor from "../../public/images/yourdoor.png";
import Greenarrow from "../../public/images/greenarrow.png";

const StepsDoor = () => {
  return (
    <section className="w-full py-12 bg-white border border-red-700">
      <div className="max-w-7xl px-6 md:px-15">

        {/* HEADING */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-5xl font-roboto text-black font-medium">
            How To Order Doors
          </h2>
          <p className="mt-2 text-gray-600 text-sm md:text-base font-roboto max-w-xl">
            Four easy steps to get your perfect premium door delivered
          </p>
        </div>

        {/* STEPS */}
        <div className="md:ml-[150px] flex flex-col md:flex-row items-center justify-between gap-12 group border ">

          {/* STEP 1 */}
          <div className="flex items-center">
            <div className="flex flex-col items-center text-center max-w-[220px] border">
              <Image
                src={Buildit}
                alt="Build It"
                width={130}
                height={130}
                className="mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <h4 className="text-lg font-semibold text-black">
                Build It
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Build your perfect door with our easy, interactive builder.
              </p>
            </div>

            <div className="hidden md:flex mx-8 relative top-[-12px]">
              <Image
                src={Greenarrow}
                alt="Arrow"
                width={32}
                height={32}
                className="filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* STEP 2 */}
          <div className="flex items-center">
            <div className="flex flex-col items-center text-center max-w-[180px]">
              <Image
                src={Review}
                alt="Review It"
                width={85}
                height={85}
                className="mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <h4 className="text-lg font-semibold text-black">
                Review It
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Review every detail to make sure your door is exactly right.
              </p>
            </div>

            <div className="hidden md:flex mx-8 relative top-[-12px]">
              <Image
                src={Greenarrow}
                alt="Arrow"
                width={32}
                height={32}
                className="filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* STEP 3 */}
          <div className="flex items-center">
            <div className="flex flex-col items-center text-center max-w-[180px]">
              <Image
                src={Submit}
                alt="Submit It"
                width={80}
                height={80}
                className="mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <h4 className="text-lg font-semibold text-black">
                Submit It
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Place your order securely in just a few clicks.
              </p>
            </div>

            <div className="hidden md:flex mx-8 relative top-[-12px]">
              <Image
                src={Greenarrow}
                alt="Arrow"
                width={32}
                height={32}
                className="filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* STEP 4 */}
          <div className="flex items-center">
            <div className="flex flex-col items-center text-center max-w-[180px]">
              <Image
                src={Yourdoor}
                alt="Get Your Door"
                width={95}
                height={95}
                className="mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <h4 className="text-lg font-semibold text-black">
                Get Your Door
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                We craft and deliver your premium door to your location.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StepsDoor;
