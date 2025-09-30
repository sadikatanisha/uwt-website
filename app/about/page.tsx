import AboutIntro from "@/components/about/aboutIntro";
import GlobalCommunity from "@/components/about/globalCommunity";
import MissionAndVision from "@/components/about/missionAndVision";
import OurStory from "@/components/about/ourStory";
import UWTTeamComponent from "@/components/about/team";

const page = () => {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <AboutIntro />
      <MissionAndVision />
      <GlobalCommunity />
      <OurStory />
      <UWTTeamComponent />
    </div>
  );
};

export default page;
