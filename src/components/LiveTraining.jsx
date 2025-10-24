import React from "react";
import { motion } from "framer-motion";
import { SiZoom, SiGooglemeet } from "react-icons/si";
import { FiCalendar } from "react-icons/fi";
import { MdComputer } from "react-icons/md";

export default function LiveTraining() {
  return (
    <section className="max-w-4xl mx-auto p-6 sm:p-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-r from-sky-50 to-blue-100 rounded-3xl shadow-lg border border-slate-200 p-10 text-center backdrop-blur-md"
      >
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
        >
          Live Remote Training Sessions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto"
        >
          We provide{" "}
          <span className="font-semibold text-sky-700">
            online live training
          </span>{" "}
          on
          <span className="text-emerald-700 font-medium">
            {" "}
            Google Meet{" "}
          </span>{" "}
          and
          <span className="text-sky-700 font-medium"> Zoom </span> platforms.
          Join us from anywhere and learn with real-time interaction and
          guidance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <div className="flex flex-col items-center bg-white shadow-md rounded-2xl px-6 py-4 w-64 hover:shadow-lg transition-transform hover:-translate-y-1">
            <SiGooglemeet className="w-10 h-10 text-emerald-600 mb-2" />
            <h3 className="font-semibold text-slate-800">
              Google Meet Sessions
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Morning & Evening Batches
            </p>
          </div>

          <div className="flex flex-col items-center bg-white shadow-md rounded-2xl px-6 py-4 w-64 hover:shadow-lg transition-transform hover:-translate-y-1">
            <SiZoom className="w-10 h-10 text-sky-600 mb-2" />
            <h3 className="font-semibold text-slate-800">Zoom Sessions</h3>
            <p className="text-sm text-slate-600 mt-1">
              Morning & Evening Batches
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4 text-slate-700"
        >
          <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-sm">
            <FiCalendar className="text-sky-600" /> Monday to Friday
          </div>
          <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-sm">
            <MdComputer className="text-emerald-600" /> Morning & Evening
            Batches
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
