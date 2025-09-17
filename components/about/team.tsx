import { TeamMember } from "./teamCard";
import { TeamCard } from "./teamCard";
interface UWTTeamComponentProps {
  data?: TeamMember[];
}

const UWTTeamComponent: React.FC<UWTTeamComponentProps> = ({ data }) => {
  const team: TeamMember[] = data ?? [
    {
      id: "kazi-unysah-nabi",
      name: "Kazi Unysah Nabi",
      role: "Head of HR",
      education: "Biomedical Science, King’s College London",
      location: "London, UK",
      shortBio:
        "A people-focused leader supporting people-centered projects and organizational development both within UWT and professionally.",
      background:
        "I graduated with a degree in Biomedical Science from King’s College London and currently work for the UK government, where I support people-focused projects and organisational development. Alongside this, I’ve built experience in forensic research, policies around refugee reunification, administration and developing a strong foundation in teamwork, problem-solving, and people management.",
      motivation:
        "I joined UWT because I wanted to be part of something bigger than myself. I started here when I was doing my A levels; nearly 5 years later UWT has given me opportunities to grow personally and professionally while working with a caring, passionate team.",
      achievements:
        "As Head of HR, I’ve helped shape a positive and collaborative culture at UWT — building initiatives to strengthen teamwork and streamlining processes so every voice is heard.",
      personal:
        "Outside of work, you can usually find me experimenting with new recipes, planning travel adventures, or vlogging about life as a young professional navigating London. Find me on YouTube @unysah.",
      social: { youtube: "@unysah", linkedin: "" },
      image: {
        src: "https://images.pexels.com/photos/28491540/pexels-photo-28491540.jpeg",
        alt: "Kazi Unysah Nabi",
      },
    },
    {
      id: "adrita-mutsuddi",
      name: "Adrita Mutsuddi",
      role: "Head of Social Media Team",
      education:
        "Economics & Finance (undergrad), Toronto Metropolitan University",
      location: "Toronto, Canada",
      shortBio:
        "Creative lead for UWT's social presence — started as a content writer and grew into strategy and campaigns.",
      background:
        "I’m currently pursuing my undergraduate degree in Economics and Finance at Toronto Metropolitan University. I have experience in financial accounting knowledge, team management and communication, plus content writing and social media work.",
      motivation:
        "I joined UWT during COVID as a content writer because I wanted to work for gender equality and women empowerment. Over time, being part of UWT shaped me both personally and professionally.",
      achievements:
        "One proud accomplishment is collaborating on 'Conquer', a fundraising event to support future UWT projects.",
      personal:
        "You’ll find me with my nose in a book or binge-watching Chinese dramas. I enjoy digital art and graphic designing — catch my posts on Instagram @_artisim.",
      social: { instagram: "@_artisim", linkedin: "" },
      image: {
        src: "https://images.pexels.com/photos/10252635/pexels-photo-10252635.jpeg",
        alt: "Adrita Mutsuddi",
      },
    },
    {
      id: "samin-yasar-haque",
      name: "Samin Yasar Haque",
      role: "Project Coordinator — Personal Enhancement Program (PEP)",
      education:
        "Marketing & Supply Chain Management (undergrad), North South University",
      location: "Dhaka, Bangladesh",
      shortBio:
        "Project coordinator managing PEP workshops across Dhaka; experienced in events, logistics and community outreach.",
      background:
        "I’ve worked with AashaBD, TurnUp PR, and With Love from KL and volunteered with Moshal, Asroy, Cancer Together Dhaka and Footsteps Bangladesh. These experiences developed my skills in marketing, content creation, customer service and project coordination.",
      motivation:
        "UWT gave me a platform to connect my passion for gender equity, mental health and climate action with real change. The team feels like family and has helped me grow.",
      achievements:
        "As Project Coordinator I manage PEP workshops, coordinated UWT's first fundraiser 'CONQUER' and received the Best Member Award (2022). I’ve contributed to Project Maya, FunAid and Plantifying Schools.",
      personal: "Proud cat mom to Maiza and Sky.",
      social: { linkedin: "" },
      image: {
        src: "https://images.pexels.com/photos/30181412/pexels-photo-30181412.jpeg",
        alt: "Samin Yasar Haque",
      },
    },
    {
      id: "zarin-tasnim",
      name: "Zarin Tasnim",
      role: "Project Coordinator — Mental Health",
      education: "Economics & Finance (undergrad), University of Sydney",
      location: "Sydney, Australia",
      shortBio:
        "Mental health project coordinator passionate about SRHR and GBV advocacy; experienced in youth engagement and workshops.",
      background:
        "I’ve worked as a debate coach, teaching assistant for economics and held leadership roles in youth organisations. These roles strengthened my communication, critical thinking and team management skills.",
      motivation:
        "I joined UWT in 2021 to contribute to social change, particularly SRHR and GBV work. Personal experience and UWT’s #voiceyourstory work motivated me to take a stand.",
      achievements:
        "Hosted a PEP workshop in Dhaka and facilitated student engagement on important topics, contributing to their awareness and compassion.",
      personal:
        "I love to rant about history, politics, consumerism and pop culture — and joke that my cats hate everyone but me.",
      social: { linkedin: "" },
      image: {
        src: "https://images.pexels.com/photos/30865003/pexels-photo-30865003.jpeg",
        alt: "Zarin Tasnim",
      },
    },
    {
      id: "labiba-sharar-tanvir",
      name: "Labiba Sharar Tanvir",
      role: "Head of Graphics & Illustration",
      education: "A-Level candidate, Glenrich International School, Uttara",
      location: "Dhaka, Bangladesh",
      shortBio:
        "Young creative leading UWT's visual identity; experienced with NGO campaigns and design under tight deadlines.",
      background:
        "High school senior with design experience at Agamir Hashi and GirlUp, internship at Evercare Hospital Dhaka, and research volunteering. Skilled in creative expression and community engagement.",
      motivation:
        "Joined UWT in September 2023 to work on mental health advocacy and create infographics that drive social conversations.",
      achievements:
        "Led graphics for project 'ঐক্য চক্র' (2024) with Foundation 21, BodolBd and Wreetu, coordinating designers and delivering polished campaign assets.",
      personal:
        "Loves music and dancing, big NCT fan, and has a habit of twirling her hair when deep in thought (even under her hijab).",
      social: { instagram: "" },
      image: {
        src: "https://images.pexels.com/photos/30864999/pexels-photo-30864999.jpeg",
        alt: "Labiba Sharar Tanvir",
      },
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <header className="mb-6">
        <div className="flex flex-col items-start justify-center md:pr-8">
          <div>
            <h1 className="leading-none">
              <span className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                OUR
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl  font-medium tracking-tight mt-1">
                TEAM
              </span>
            </h1>

            {/* subtle rule */}
            <div className="hidden md:block h-px w-48 bg-gray-200 mt-8" />
          </div>
        </div>
        <p className="mt-2 text-gray-600 max-w-2xl">
          A youth-led team working across advocacy, mental health and community
          programs.
        </p>
      </header>

      <div className="divide-y divide-gray-200">
        {team.map((member, idx) => (
          <div key={member.id ?? idx} className="px-0 md:px-2">
            <TeamCard member={member} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default UWTTeamComponent;
