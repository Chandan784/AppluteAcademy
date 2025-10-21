import React from "react";
import { useNavigate } from "react-router-dom";
import { courses } from "../Coursedata.js";
import { FaClock, FaRupeeSign } from "react-icons/fa";

export default function Courses() {
  const navigate = useNavigate();
  //jhjg

  return (
    <section
      id="courses"
      className="py-20 px-6 bg-gradient-to-b from-[#e8f0ff] via-white to-[#f5f8ff]"
    >
      <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold text-[#0043ce] tracking-wide drop-shadow-sm">
          Our Courses
        </h2>
        <p className="text-gray-700 mt-3 max-w-2xl mx-auto text-lg">
          Learn with Applute Academy’s industry experts and boost your tech
          career with real-world skills.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {courses.map((c, index) => (
          <div
            key={c.id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-500 border border-[#cdd9ff] flex flex-col"
            style={{
              animation: `fadeInUp 0.8s ease forwards`,
              animationDelay: `${index * 0.2}s`,
              opacity: 0,
            }}
          >
            {/* Image Section */}
            <div className="overflow-hidden rounded-t-3xl">
              <img
                src={c.img}
                alt={c.name}
                className="h-56 w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#002b7f] mb-3">
                  {c.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {c.description}
                </p>

                {/* Duration & Price */}
                <div className="flex justify-between items-center mb-4 text-gray-700 font-semibold text-sm sm:text-base">
                  <div className="flex items-center gap-1">
                    <FaClock className="text-[#0043ce]" />
                    <span>{c.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaRupeeSign className="text-[#0043ce]" />
                    <span>{c.price}</span>
                  </div>
                </div>
              </div>

              {/* Details Button */}
              <div className="text-center mt-3">
                <button
                  onClick={() => navigate(`/course/${c.id}`)}
                  className="bg-gradient-to-r from-[#0043ce] to-[#007bff] text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:from-[#003bb0] hover:to-[#0060e0] transition-all duration-300 w-full sm:w-auto"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
}
