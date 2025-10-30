import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Navbar from "./components/Navabar";
import Slider from "./components/Slider";
import WhyUs from "./components/WhyUs";
import Courses from "./components/Courses";
import About from "./components/About";
import Feedback from "./components/Feedback";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CourseDetails from "./components/pages/CourseDetails";
import LiveTraining from "./components/LiveTraining";
import IntershipPlacement from "./components/IntershipPlacement";
import PaymentSection from "./components/PaymentSection";



export default function App() {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto w-full">
        <Navbar />

       <Outlet/>

        <Footer />
      </div>
    </div>
  );
}
