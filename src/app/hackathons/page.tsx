import Link from "next/link";

// app/page.tsx
export default function HackathonsPage() {
  const hackathons = [
    {
      title: "AI Innovation Challenge",
      duration: "48 Hours",
      description: "Build innovative AI solutions for real-world problems",
      status: "LIVE NOW",
      statusColor: "bg-blue-100 text-blue-800",
      borderColor: "border-blue-500",
      buttonColor: "bg-blue-600 hover:bg-blue-700 text-white",
      buttonText: "Register Now",
      url: "https://www.hackerearth.com/challenges/hackathon/lyzr/",
    },
    {
      title: "Hiring Challenges",
      duration: "72 Hours",
      description: "Create decentralized applications for the future",
      status: "UPCOMING",
      statusColor: "bg-green-300 text-green-800",
      borderColor: "border-green-400",
      buttonColor: "bg-green-500 hover:bg-green-600 text-gray-800",
      buttonText: "Join Waitlist",
      url: "https://unstop.com/hiring-challenges?oppstatus=open&domain=2&course=6&specialization=Computer%20Science%20and%20Engineering&usertype=students&passingOutYear=2025",
    },
    {
      title: "Cloud Computing Challenge",
      duration: "36 Hours",
      description: "Design scalable cloud solutions",
      status: "UPCOMING",
      statusColor: "bg-pink-100 text-pink-800",
      borderColor: "border-pink-500",
      buttonColor: "bg-pink-600 hover:bg-pink-500 text-gray-800",
      buttonText: "Join Waitlist",
      url: "https://www.hackerearth.com/challenges/hackathon/lyzr/",
    },
  ];

  return (
    <div className="bg-base min-h-screen flex flex-col justify-center items-start text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 text-start pl-20 mt-10">
        <p className="text-lg font-normal text-gray-300">
          At UniHive, we believe that innovation thrives in a community of
          curious minds, creative problem solvers, and passionate technologists.
          Our hackathons are not just competitions — they're launchpads for
          ideas, a space to learn, collaborate, and build the future.
        </p>
        <p className="text-lg font-normal text-gray-300">
          Whether you're an AI enthusiast, a blockchain builder, a cloud
          architect, or a complete beginner eager to explore tech — our
          hackathons are designed for everyone. Each challenge is carefully
          crafted to simulate real-world scenarios, pushing your skills while
          offering ample guidance, mentorship, and resources.
        </p>
        <p className="text-lg font-bold">
          Get ready to build. Get ready to shine. Welcome to UniHive Hackathons
          — where ideas take flight.
        </p>
      </div>
      <div className="max-w-7xl mx-auto mt-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-500 mb-2">
            Upcoming Hackathons
          </h1>
          <p className="text-lg text-gray-300">
            Join exciting challenges and showcase your innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathons.map((hackathon, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md overflow-hidden border-l-4 ${hackathon.borderColor}`}
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      {hackathon.title}
                    </h2>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <span>{hackathon.duration}</span>
                    </div>
                    <p className="text-gray-700">{hackathon.description}</p>
                  </div>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${hackathon.statusColor}`}
                  >
                    {hackathon.status}
                  </span>
                </div>
                <Link href={hackathon.url}>
                  <button
                    className={`mt-4 w-full ${hackathon.buttonColor} font-medium py-2 px-6 rounded-md transition duration-150 ease-in-out`}
                  >
                    {hackathon.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
