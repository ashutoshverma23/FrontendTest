// components/AdvancedFeatures.jsx
import React from "react";
import { FaCarAlt, FaBatteryFull, FaRoute, FaRobot } from "react-icons/fa";
import { div } from "three/tsl";

export default function AdvancedFeatures() {
  const features = [
    {
      title: "AI-Assisted Autopilot",
      desc: "Navigate with next-level intelligence using real-time object detection and adaptive cruise control.",
      icon: <FaRobot className="text-blue-500 text-3xl" />,
    },
    {
      title: "Electric Powertrain",
      desc: "Experience unmatched acceleration and efficiency with zero emissions.",
      icon: <FaBatteryFull className="text-green-500 text-3xl" />,
    },
    {
      title: "Dynamic Route Planning",
      desc: "Get predictive, traffic-aware suggestions with intelligent rerouting.",
      icon: <FaRoute className="text-purple-500 text-3xl" />,
    },
    {
      title: "Futuristic Cockpit",
      desc: "Stay connected with an immersive HUD, voice commands, and gesture controls.",
      icon: <FaCarAlt className="text-yellow-500 text-3xl" />,
    },
  ];

  return (
    <div className="h-screen">
      <section className="bg-gray-950 text-white py-20 px-6 sm:px-12 md:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Next-Gen Innovation
          </h2>
          <p className="text-lg text-gray-400 mb-12">
            Discover the technology that makes your drive futuristic and
            smarter.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-md border border-gray-800 p-6 rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
