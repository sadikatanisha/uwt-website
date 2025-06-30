import Banner from "@/components/home/Banner";
import HomeAbout from "@/components/home/HomeAbout";
import HomeProjects from "@/components/home/HomeProjects";
import ImageGrid from "@/components/home/ImageGrid";
import JoinUs from "@/components/home/JoinUs";
import Stats from "@/components/home/Stats";
import Journey from "@/components/shared/Journey";

export default async function Home() {
  return (
    <div className={`px-4 lg:px-7`}>
      <Banner />
      <HomeAbout />
      <HomeProjects />
      <Stats />
      <JoinUs />
      <Journey />
      <ImageGrid />
    </div>
  );
}
