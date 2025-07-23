import React from "react";
import Navbar from "./Navbar";
import CarCanvas from "../../components/CarCanvas";
import Hero from "./Hero";
import Footer from "./Footer";
import AdvancedFeatures from "./AdvancedFeatures"; // Assuming this is another component you have

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <main className="pt-20 flex flex-col items-center">
          <h1 className="text-4xl font-bold text-gray-800 mt-10 mb-4">
            Explore the Future of Driving
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Stunning design. Intelligent engineering. Test drive today.
          </p>
          <CarCanvas />
          <Hero />
          <AdvancedFeatures />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Home;
