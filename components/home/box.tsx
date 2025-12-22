import Image from "next/image";
import treeImage from "../../public/images/tree.png"
import usaImage from "../../public/images/usa.png"

const Box = () => {
  return (
    <div className="relative w-full min-h-[68px] md:h-[68px] flex flex-col md:flex-row justify-center items-center gap-4 md:gap-16 py-3 md:py-0 bg-[#F6F5F1] group cursor-pointer">

      {/* Item 1 */}
      <div className="flex  items-center md:flex-row gap-2">
        <Image
          src={usaImage}
          alt="Use"
          width={32}
          height={32}
          className="filter grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <span className=" text-[#585858]  font-roboto md:text-lg">
          Manufactured in the US
        </span>
      </div>

      {/* Item 2 */}
      <div className="flex  items-center md:flex-row gap-2">
        <Image
          src={treeImage}
          alt="Tree"
          width={30}
          height={30}
          className="filter grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <span className=" text-[#585858]  font-roboto md:text-lg">
          Island Tough
        </span>
      </div>

    </div>
  );
};

export default Box;
