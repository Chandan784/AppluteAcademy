import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navabar";
import Slider from "./components/Slider";
import WhyUs from "./components/WhyUs";
import Courses from "./components/Courses";
import About from "./components/About";
import Feedback from "./components/Feedback";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CourseDetails from "./components/pages/CourseDetails";

// Home page containing all sections
const HomePage = () => (
  <>
    <Slider />
    <WhyUs />
    <Courses />
    <About />
    {/* <Feedback /> */}
    <Contact />
  </>
);

export default function App() {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto w-full">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/whyus" element={<WhyUs />} />
          <Route path="/feedback" element={<Feedback />} />
          {/* Dynamic Course Details page */}
          <Route path="/course/:id" element={<CourseDetails />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}
