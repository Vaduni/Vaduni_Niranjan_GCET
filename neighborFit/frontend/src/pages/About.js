import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/about.jpg')",
      }}
    >
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">About NeighborFit</h2>
        <p className="text-lg leading-relaxed text-gray-100">
          <strong>NeighborFit</strong> is a full-stack web application created
          to match individuals with neighborhoods that suit their lifestyle
          preferences. Developed in just two weeks with no budget, it uses
          real-world data and a custom matching algorithm to provide
          personalized suggestions.
          <br />
          <br />
          This project is backed by rigorous research and user analysis,
          addressing limitations in current solutions by focusing on safety,
          affordability, commute, internet access, and other quality-of-life
          factors.
          <br />
          <br />
          Built entirely with free tools, the platform demonstrates strong
          problem-solving skills, data handling, and system thinking. It is
          fully functional and deployed, with documented code and design
          rationale available on GitHub.
        </p>
      </div>
    </section>
  );
}
