import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#f5f5f5] text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-4 py-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-green-600 text-center mb-6">🌱 About Us</h1>
        <p className="text-lg text-center mb-8">
          Welcome to <span className="font-semibold text-green-600">Plant Companion Tracker</span> – your trusted partner in nurturing a thriving, healthy plant collection.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-2 text-center">Why We Created This</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Never Miss a Care Date:</strong> Get reminders for watering, fertilizing, and more.</li>
              <li><strong>Simplified Journaling:</strong> Track your plants’ growth, health, and history over time.</li>
              <li><strong>Effortless Management:</strong> Add, edit, and sort plants with ease.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-2 text-center">Meet the Team</h2>
            <p><strong>Mirul Moktadir Khan</strong> – Frontend Developer & Designer</p>
            <p className="ml-4 text-sm text-gray-600 dark:text-gray-400">Loves building intuitive UIs and taking care of plants.</p>
            <p><strong>Backend Lead</strong> – (TBD)</p>
            <p className="ml-4 text-sm text-gray-600 dark:text-gray-400">Handles secure backend and Firebase auth.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-2 text-center">How It Works</h2>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Add your plants with names, images, and care info.</li>
              <li>Set up care schedules and receive smart reminders.</li>
              <li>Log progress and monitor plant growth with notes and images.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-2 text-center">Our Promise</h2>
            <p>We're plant lovers building for plant lovers. No ads, no clutter — just a simple, helpful tracker.</p>
          </div>

        </div>
        <div className="py-5 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-green-600 mb-2 text-center">Let’s Grow Together 🌿</h2>
            <p className="text-center">We’d love your feedback. Email us at <a className="text-green-600 underline">support@plantcompaniontracker.com</a></p>
          </div>
      </div>
    </div>
  );
};

export default AboutUs;
