// app/community/page.tsx
import { Users, MonitorPlay, Code2 } from "lucide-react";
import Link from "next/link";

export default function CommunityPage() {
  const stats = [
    {
      value: "10K+",
      label: "Active Members",
      icon: <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />,
    },
    {
      value: "500+",
      label: "Weekly Events",
      icon: <MonitorPlay className="w-8 h-8 text-blue-500 mx-auto mb-2" />,
    },
    {
      value: "50+",
      label: "Tech Communities",
      icon: <Code2 className="w-8 h-8 text-blue-500 mx-auto mb-2" />,
    },
  ];

  const features = [
    {
      title: "Peer Learning Groups",
      description:
        "Join specialized groups based on your interests and learn together with peers who share your passion for technology.",
      icon: <Users className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Live Coding Sessions",
      description:
        "Participate in live coding sessions, code reviews, and pair programming with experienced developers.",
      icon: <Code2 className="w-6 h-6 text-blue-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-base text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-300 mb-4">
            Join Our Thriving Community
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Connect, Learn, and Grow Together
          </p>
          <div className="mt-8 h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-chase p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
            >
              {stat.icon}
              <p className="text-4xl font-bold text-blue-600 mb-2">
                {stat.value}
              </p>
              <p className="text-lg text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-chase p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Link href={"https://discord.gg/awQNSdk2"} target="blank">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-150 ease-in-out transform hover:scale-105">
              Join Community Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
