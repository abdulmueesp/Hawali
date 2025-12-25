import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import BannerSection from "@/components/home/Banner";
import Box from "@/components/home/box";
import DoorCategories from "@/components/home/Doorcategories";
import Gallerysection from "@/components/home/Gallery";
import Measure from "@/components/home/measure";
import Prehung from "@/components/home/prehung";
import StepsDoor from "@/components/home/Steps";
import Testimonial from "@/components/home/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header />
    <BannerSection />
  <Box />
  <StepsDoor />
  <DoorCategories />
  <Gallerysection />
  <Measure />
  <Testimonial />
  <Prehung />
  <Footer />
    </>
  );
}
