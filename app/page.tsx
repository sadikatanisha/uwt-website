import Banner from "@/components/home/Banner";
import Campaigns from "@/components/home/Campaigns";
import HomeAbout from "@/components/home/HomeAbout";
import HomeProjects from "@/components/home/HomeProjects";
import OurWork from "@/components/home/OurWork";
import WhoWeAre from "@/components/home/WhoWeAre";
import Faqs from "@/components/shared/faqs";

export default async function Home() {
  return (
    <div className={`px-4 lg:px-7`}>
      <Banner />
      <HomeAbout />
      <WhoWeAre />
      <OurWork />
      <HomeProjects />

      {/* <ImageGrid /> */}
      <Campaigns />
      <Faqs />
    </div>
  );
}
