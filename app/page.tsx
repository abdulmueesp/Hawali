import Header from "@/components/Common/Header";
import BannerSection from "@/components/home/Banner";
import Box from "@/components/home/box";
import DoorCategories from "@/components/home/Doorcategories";
import StepsDoor from "@/components/home/Steps";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header />
    <BannerSection />
  <Box />
  <StepsDoor />
  <DoorCategories />
  <div className="w-full h-[400px] border " ></div>
    </>
  );
}
