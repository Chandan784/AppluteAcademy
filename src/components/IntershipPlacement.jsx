import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaBriefcase } from "react-icons/fa";

export default function IntershipPlacement() {
  return (
    <section className="max-w-5xl mx-auto p-6 sm:p-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-r from-indigo-50 to-blue-100 rounded-3xl shadow-lg border border-slate-200 p-10 text-center backdrop-blur-md"
      >
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
        >
          Internship & Placement Program
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto"
        >
          We provide{" "}
          <span className="font-semibold text-indigo-700">100% internship</span>{" "}
          opportunities directly from our company and offer
          <span className="font-semibold text-sky-700">
            {" "}
            lifetime placement support
          </span>{" "}
          to help you grow your career with confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          {/* Internship Card */}
          <div className="flex flex-col items-center bg-white shadow-md rounded-2xl px-6 py-6 w-72 hover:shadow-lg transition-transform hover:-translate-y-1">
            <FaUserGraduate className="w-12 h-12 text-indigo-700 mb-3" />
            <h3 className="font-semibold text-slate-900 text-lg">
              100% Internship
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Gain hands-on experience on live projects with our in-house
              internship program and build real-world skills.
            </p>
          </div>

          {/* Placement Card */}
          <div className="flex flex-col items-center bg-white shadow-md rounded-2xl px-6 py-6 w-72 hover:shadow-lg transition-transform hover:-translate-y-1">
            <FaBriefcase className="w-12 h-12 text-sky-700 mb-3" />
            <h3 className="font-semibold text-slate-900 text-lg">
              Lifetime Placement Support
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Receive continuous guidance and support throughout your career
              with job updates and mentoring from our experts.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
