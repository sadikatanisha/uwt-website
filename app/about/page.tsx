import AboutIntro from "@/components/about/aboutIntro";
import GlobalCommunity from "@/components/about/globalCommunity";
import MissionAndVision from "@/components/about/missionAndVision";
import OurStory from "@/components/about/ourStory";
import UWTTeamComponent from "@/components/about/team";
import Journey from "@/components/shared/Journey";
import {
  Handshake,
  Globe,
  Heart,
  Users,
  Award,
  Target,
  TrendingUp,
  MapPin,
  Calendar,
  DollarSign,
} from "lucide-react";

const values = [
  {
    icon: <Handshake size={28} />,
    title: "Compassion",
    description: "We serve with empathy and kindness to empower communities.",
  },
  {
    icon: <Globe size={28} />,
    title: "Global Impact",
    description:
      "Our projects span continents, creating sustainable change worldwide.",
  },
  {
    icon: <Heart size={28} />,
    title: "Well-being",
    description:
      "Promoting health and happiness through community-driven initiatives.",
  },
];

const stats = [
  { number: "250K+", label: "Lives Impacted", icon: <Users size={24} /> },
  { number: "47", label: "Countries Reached", icon: <MapPin size={24} /> },
  { number: "15", label: "Years of Service", icon: <Calendar size={24} /> },
  {
    number: "92%",
    label: "Direct Impact Fund",
    icon: <DollarSign size={24} />,
  },
];

const recognitions = [
  { title: "UN SDG Champion", year: "2023" },
  { title: "Global Impact Award", year: "2022" },
  { title: "Community Choice Excellence", year: "2021" },
];

const page = () => {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <AboutIntro />
      <MissionAndVision />
      <GlobalCommunity />
      <OurStory />
      <UWTTeamComponent />

      {/* Impact Stats */}
      <section className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-[#BC4749] rounded-lg text-white group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-[#BC4749] text-white rounded-full text-sm font-medium">
              Our Story
            </div>
            <h2 className="text-5xl font-bold text-black leading-tight">
              Building Bridges,
              <br />
              Changing Lives
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              What began as a local initiative has blossomed into a global
              movement. We combine grassroots understanding with evidence-based
              strategies to create sustainable development in education,
              healthcare, and economic empowerment.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our approach puts community leadership at the forefront of every
              solution, ensuring that change comes from within and lasts for
              generations.
            </p>
            <div className="flex space-x-4">
              <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium">
                Our Impact Report
              </button>
              <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors font-medium">
                Get Involved
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Users size={48} className="mx-auto mb-4" />
                  <p className="text-sm">Community Impact Photo</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#BC4749] text-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm">Years of Impact</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every action we
              take in our mission to create positive change.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item) => (
              <div
                key={item.title}
                className="group relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-black text-white rounded-xl mb-6 group-hover:bg-[#BC4749] transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <Journey />

      {/* Recognition */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Recognition & Awards
          </h2>
          <p className="text-xl text-gray-600">
            Our work has been recognized by leading organizations worldwide
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {recognitions.map((award, index) => (
            <div
              key={index}
              className="text-center p-8 border border-gray-200 rounded-xl hover:border-[#BC4749] transition-colors"
            >
              <div className="w-16 h-16 bg-[#BC4749] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                {award.title}
              </h3>
              <p className="text-gray-600">{award.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-black py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Together, we can create sustainable change that transforms
            communities and empowers individuals worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-[#BC4749] text-white rounded-lg hover:bg-[#BC4749]/80 transition-colors font-medium text-lg">
              Donate Now
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition-colors font-medium text-lg">
              Volunteer With Us
            </button>
            <button className="px-8 py-4 text-white hover:text-gray-300 transition-colors font-medium text-lg underline">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
