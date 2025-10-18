import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { courses } from "../../Coursedata.js";

export default function CourseDetails() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    state: "",
  });

  if (!course)
    return (
      <h1 className="text-center text-red-600 mt-20">Course not found!</h1>
    );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendToWhatsApp = () => {
    const { name, email, state } = formData;

    if (!name || !email || !state) {
      alert("Please fill all fields before sending enquiry.");
      return;
    }

    const message = `
📘 *Course Enquiry Details*

👤 *Name:* ${name}
📧 *Email:* ${email}
🌍 *State:* ${state}

🎓 *Course Name:* ${course.name}
💰 *Price:* ${course.price}
🕒 *Duration:* ${course.duration}
📄 *Description:* ${course.description}

Please share more details about this course.
    `;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/6370302039?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");

    setShowPopup(false); // close popup after sending
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900 pb-24">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Course Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold mb-3 text-center text-[#0033A0] leading-tight">
          {course.name}
        </h1>
        <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto text-base md:text-lg">
          {course.description}
        </p>

        {/* Demo Video */}
        <div className="w-full mb-8">
          <iframe
            width="100%"
            height="280"
            src={course.demoVideo}
            title="Demo Video"
            className="rounded-xl shadow-lg md:h-[420px]"
            allowFullScreen
          ></iframe>
        </div>

        {/* Course Details */}
        <div className="bg-white p-5 md:p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#0033A0]">
            Course Overview
          </h2>
          <p className="mb-4 text-gray-700 text-justify leading-relaxed">
            {course.longDescription || course.description}
          </p>
          <p className="text-lg font-semibold text-gray-800">
            <span className="text-[#0033A0]">Duration:</span> {course.duration}
          </p>
          <p className="text-lg font-semibold text-gray-800 mt-2">
            <span className="text-[#0033A0]">Price:</span>{" "}
            <span className="text-green-600">{course.price}</span>
          </p>
        </div>

        {/* Syllabus Section */}
        <div className="bg-white p-5 md:p-8 rounded-2xl shadow-md mt-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#0033A0]">
            Syllabus & Modules
          </h2>
          <div className="space-y-4">
            {course.syllabus.map((module, idx) => (
              <div
                key={idx}
                className="bg-blue-50 rounded-lg p-4 border border-blue-100"
              >
                <h3 className="font-semibold text-lg mb-2 text-[#0033A0]">
                  {module.module}
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {module.topics.map((topic, tidx) => (
                    <li key={tidx}>{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-r from-[#0033A0] to-blue-600 text-white p-6 md:p-10 rounded-2xl mt-10 shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-center">
            Why Choose Us?
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base">
            <li>✅ 100% Internship & Job Assistance</li>
            <li>✅ Live Practical Projects</li>
            <li>✅ Expert Mentorship & Career Guidance</li>
            <li>✅ Lifetime Access to Study Materials</li>
            <li>✅ Flexible Learning Mode</li>
            <li>✅ Certification After Completion</li>
          </ul>
        </div>
      </div>

      {/* Fixed Button */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 py-4 shadow-xl z-50">
        <div className="text-center">
          <button
            onClick={() => setShowPopup(true)}
            className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg animate-bounce md:animate-none transition-all duration-300"
          >
            💬 Send Enquiry on WhatsApp
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center z-[100] pointer-events-none">
          <div className="bg-white rounded-2xl p-6 w-11/12 max-w-md shadow-2xl border border-gray-200 pointer-events-auto">
            <h2 className="text-2xl font-bold mb-4 text-center text-[#0033A0]">
              Enquiry Details
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <input
                type="text"
                name="state"
                placeholder="Your State"
                value={formData.state}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setShowPopup(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-5 py-2 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSendToWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md"
              >
                Send Enquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
