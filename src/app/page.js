import Banner from "@/components/homepage/Banner";
import GuideSection from "@/components/homepage/GuideSection";
import TopRatedDoctors from "@/components/homepage/TopRatedDoctors";
import WhyChoose from "@/components/homepage/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <TopRatedDoctors/>
      <WhyChoose/>
      <GuideSection/>
    </div>
  );
}
