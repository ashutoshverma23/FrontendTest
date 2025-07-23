import React from "react";

const Hero = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <section className="bg-black text-white py-20 px-6 sm:px-12 md:px-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Drive Into the <span className="text-blue-500">Future</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10">
            Experience precision engineering, seamless performance, and iconic
            design—powered by innovation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition">
              Explore Now
            </button>
            <button className="border border-white hover:border-blue-500 hover:text-blue-500 text-white px-6 py-3 rounded-lg font-medium transition">
              Book a Test Drive
            </button>
          </div>
        </div>
      </section>{" "}
    </div>
  );
};

export default Hero;
