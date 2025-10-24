import React from "react";

export default function WhyUs() {
  const features = [
    {
      title: "Live Project Training",
      img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbXB1dGVyJTIwdHJhaW5pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    },
    {
      title: "Industry Expert Mentors",
      img: "https://media.istockphoto.com/id/1362099193/photo/indian-business-mentor-teaching-business-skill-to-his-employee-with-the-help-of-computer-in.webp?a=1&b=1&s=612x612&w=0&k=20&c=FEGlY4ejvFvO7cOsXAuHigVyZSpJ58V6dJnAnVcqKH4=",
    },
    {
      title: "Internship & Placement Assistance",
      img: "https://media.istockphoto.com/id/2193545978/photo/senior-manager-congratulating-a-young-team-member-during-a-conference-meeting.webp?a=1&b=1&s=612x612&w=0&k=20&c=O52ep8ZMPeXy20ZzkD-teb_l6q0hcNt1c_-HFPgG73c=",
    },
    {
      title: "Hands-on Practical Sessions",
      img: "https://images.unsplash.com/photo-1555747590-6d40108fae52?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW50ZXJuc2hpcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    },
    {
      title: "Recognized Certification",
      img: "https://media.istockphoto.com/id/1415935763/photo/diploma-icon-3d-render-illustration.webp?a=1&b=1&s=612x612&w=0&k=20&c=NCruuO43KOOHQKKqh21hYYOZmB3Sx4_7lXvZcM4y1fY=",
    },
    {
      title: "Career Growth & Guidance",
      img: "https://plus.unsplash.com/premium_photo-1661266819853-ac00dcaf21d2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyZWVyJTIwZ3Jvd3RofGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    },
  ];

  return (
    <section
      id="whyus"
      className="py-20 px-6 text-center bg-gradient-to-b from-[#F3F7FF] to-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#0033A0]">
        Why We Are Better
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        At <span className="font-semibold text-[#0033A0]">Applute Academy</span>
        , we bridge the gap between academic learning and real-world tech
        skills. Our approach ensures you’re{" "}
        <span className="font-semibold">industry-ready</span> from day one.
      </p>

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-md p-4 sm:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
          >
            <div className="w-full h-40 rounded-2xl overflow-hidden mb-4">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-[#0033A0]">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
