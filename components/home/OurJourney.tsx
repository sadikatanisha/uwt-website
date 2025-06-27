import { MapPin, Users, Gift, Award, Globe } from "lucide-react";

interface JourneyEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const journey: JourneyEvent[] = [
  {
    year: "2010",
    title: "Founded",
    description:
      "Our nonprofit was officially established in Dhaka, Bangladesh.",
    icon: <MapPin className="w-6 h-6 text-gray-600" />,
  },
  {
    year: "2013",
    title: "First Project",
    description: "Launched vocational training for 100+ women artisans.",
    icon: <Users className="w-6 h-6 text-gray-600" />,
  },
  {
    year: "2016",
    title: "Global Outreach",
    description: "Expanded community programs to 5 new regions.",
    icon: <Globe className="w-6 h-6 text-gray-600" />,
  },
  {
    year: "2019",
    title: "Major Donation",
    description: "Raised $500k for infrastructure and equipment.",
    icon: <Gift className="w-6 h-6 text-gray-600" />,
  },
  {
    year: "2022",
    title: "Awarded",
    description: "Recognized with the National Social Impact Award.",
    icon: <Award className="w-6 h-6 text-gray-600" />,
  },
];

export default function OurJourney() {
  return (
    <section className=" dark:bg-neutral-900 py-16 px-4">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-3xl font-bold">Our Journey</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Milestones that shaped our mission and impact over the years.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 "></div>

        <ul className="space-y-12">
          {journey.map((event, idx) => (
            <li
              key={event.year}
              className="flex flex-col md:flex-row items-center md:items-start"
            >
              <div className="md:w-1/2 md:pr-8 text-right md:text-right">
                {idx % 2 === 0 && (
                  <div className="inline-block p-3 bg-white  rounded-full shadow-md">
                    {event.icon}
                  </div>
                )}
              </div>

              <div className="md:w-1/2 md:pl-8">
                {idx % 2 !== 0 && (
                  <div className="inline-block p-3 bg-white  rounded-full shadow-md mb-2">
                    {event.icon}
                  </div>
                )}
                <time className="text-sm font-semibold text-[#BC4749] ">
                  {event.year}
                </time>
                <h3 className="text-xl font-bold mt-1 mb-2">{event.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {event.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
