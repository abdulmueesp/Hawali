import Image from "next/image";
import treeImage from "../../public/images/tree.png"
import usaImage from "../../public/images/usa.png"

const Box = () => {
  return (
    <div className="w-full h-[80px] flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 bg-[#F6F5F1] group cursor-pointer">

      {/* Item 1 */}
      <div className="flex flex-col items-center md:flex-row gap-2">
        <Image
          src={usaImage}
          alt="Use"
          width={32}
          height={32}
          className="filter grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <span className=" text-gray-700 font-medium font-roboto text-lg">
          Manufactured in the US
        </span>
      </div>

      {/* Item 2 */}
      <div className="flex flex-col items-center md:flex-row gap-2">
        <Image
          src={treeImage}
          alt="Tree"
          width={30}
          height={30}
          className="filter grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <span className=" text-gray-700  font-roboto text-lg">
          Island Tough
        </span>
      </div>

    </div>
  );
};

export default Box;
