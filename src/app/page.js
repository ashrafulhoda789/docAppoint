import Banner from "@/components/homepage/Banner";
import TopRatedDoctors from "@/components/homepage/TopRatedDoctors";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <TopRatedDoctors/>
    </div>
  );
}
