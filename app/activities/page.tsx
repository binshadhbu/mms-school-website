import React from "react";

const Activities = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section 
        className="relative text-white text-center py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/common/hero1.jpeg')", backdropFilter: "blur(10px)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>  
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">Co-Scholastic Activities</h1>
          <p className="mt-4 text-lg">
            Encouraging holistic development through sports, clubs, and events.
          </p>
        </div>
      </section>

      {/* Sports & Clubs Section */}
      <section className="w-full py-16 px-6 grid md:grid-cols-2 gap-8 bg-white">
        {/* Sports */}
        <div>
          <h2 className="text-3xl font-semibold mb-6">Sports</h2>
          <p className="text-gray-700 mb-4">
            A structured sports education encourages healthy competition, character building, and physical stamina.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            {["Football", "Badminton", "Volleyball", "Tennis", "Cricket", "Basketball", "Table Tennis", "Athletics"].map((sport) => (
              <li key={sport} className="font-medium">{sport}</li>
            ))}
          </ul>
        </div>

        {/* Clubs */}
        <div>
          <h2 className="text-3xl font-semibold mb-6">Clubs</h2>
          <p className="text-gray-700 mb-4">
            Clubs encourage students to hone their interests and talents.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            {["Performing Arts (Dance and Drama)", "Music (Western and Indian)", "Aesthetics", "Public Speaking", "Chess", "Photography and Videography", "Street Play", "Gymnastics", "Quiz", "Environmental Awareness"].map((club) => (
              <li key={club} className="font-medium">{club}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* House System Section */}
      <section className="w-full py-16 px-6 flex flex-col md:flex-row items-center gap-8 bg-gray-200">
      <div className="flex-1">
          <img src="/common/hero1.jpeg" alt="House System" className="w-full rounded-lg shadow-md" />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-6">House System</h2>
          <p className="text-gray-700">
            Our house system fosters teamwork, leadership, and a sense of belonging.
          </p>
        </div>
        
      </section>

      {/* Events Section */}
      <section className="w-full py-16 px-6 grid md:grid-cols-2 gap-8 bg-white">
        <div className="flex-1">
        <h2 className="text-3xl font-semibold mb-6">Annual Events</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li className="mx-auto">Annual Sports Day</li>
            <li className="mx-auto">Inter-School Competitions</li>
            <li className="mx-auto">Debate and Elocution</li>
            <li className="mx-auto">Cultural Fest</li>
            <li className="mx-auto">Art and Science Exhibitions</li>
          </ul>
        </div>
        <div className="flex-1">
          <img src="/common/hero1.jpeg" alt="Annual Events" className="w-full rounded-lg shadow-md" />
        </div>
      </section>

      {/* Special Programs Section */}
      <section className="w-full py-16 px-6 flex flex-col md:flex-row items-center gap-8 bg-gray-200">

        <div className="flex-1">
          <img src="/common/hero1.jpeg" alt="Special Programs" className="w-full rounded-lg shadow-md" />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-6">Special Programs</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Leadership Development</li>
            <li>Community Service</li>
            <li>Educational Tours</li>
            <li>Workshops and Seminars</li>
            <li>Career Guidance Sessions</li>
          </ul>
       </div>
      </section>
    </div>
  );
};

export default Activities;