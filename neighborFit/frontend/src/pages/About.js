// src/pages/AboutPage.js
import React from 'react';

export default function AboutPage() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/about.jpg')" }}
    >
      {/* Dark blur overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>

      {/* Centered text */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-6">
        <div className="text-center text-white max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About NeighborFit</h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-100">
            <strong>NeighborFit</strong> is a personalized neighborhood recommendation platform designed to help individuals find the best areas to live based on their unique lifestyle preferences. Unlike traditional real estate platforms that focus solely on property listings, NeighborFit goes a step further by considering factors that truly impact day-to-day life.
            <br /><br />
            🔍 Whether you're relocating, searching for your next rental, or exploring new cities, NeighborFit helps you make smarter, data-informed housing decisions — not just based on listings, but on livability.
             <br /><br />
            This project is backed by rigorous research and user analysis, addressing limitations in current solutions by
            focusing on safety, affordability, commute, internet access, and other quality-of-life factors.
            <br /><br />
            Built entirely with free tools, the platform demonstrates strong problem-solving skills, data handling, and
            system thinking. 
          </p>
        </div>
      </div>
    </section>
  );
}
