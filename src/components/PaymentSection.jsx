import React from "react";
import { motion } from "framer-motion";
import { FaRupeeSign, FaMoneyBillWave, FaPiggyBank } from "react-icons/fa";

export default function PaymentSection() {
  return (
    <section className="max-w-5xl mx-auto p-6 sm:p-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-3xl shadow-lg border border-slate-200 p-10 text-center backdrop-blur-md"
      >
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
        >
          Payment Options
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-10"
        >
          We support students with flexible payment options. Pay directly to get
          a<span className="font-semibold text-green-700"> 20% discount </span>{" "}
          on full course fees or choose our EMI plan with a
          <span className="font-semibold text-emerald-700">
            {" "}
            40% down payment{" "}
          </span>{" "}
          and monthly installments. We make learning accessible for everyone.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          {/* Full Payment Card */}
          <div className="flex flex-col items-center bg-white shadow-md rounded-2xl px-6 py-6 w-72 hover:shadow-lg transition-transform hover:-translate-y-1">
            <FaRupeeSign className="w-12 h-12 text-green-600 mb-3" />
            <h3 className="font-semibold text-slate-900 text-lg">
              Full Payment
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Pay the full course fees directly and get a
              <span className="font-semibold text-green-700">
                {" "}
                20% discount{" "}
              </span>{" "}
              instantly.
            </p>
          </div>

          {/* EMI Payment Card */}
          <div className="flex flex-col items-center bg-white shadow-md rounded-2xl px-6 py-6 w-72 hover:shadow-lg transition-transform hover:-translate-y-1">
            <FaMoneyBillWave className="w-12 h-12 text-emerald-600 mb-3" />
            <h3 className="font-semibold text-slate-900 text-lg">EMI Option</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Start with a{" "}
              <span className="font-semibold text-emerald-700">
                40% down payment
              </span>{" "}
              and pay the rest monthly. Flexible and student-friendly.
            </p>
          </div>

          {/* Financial Support Card */}
          <div className="flex flex-col items-center bg-white shadow-md rounded-2xl px-6 py-6 w-72 hover:shadow-lg transition-transform hover:-translate-y-1">
            <FaPiggyBank className="w-12 h-12 text-green-500 mb-3" />
            <h3 className="font-semibold text-slate-900 text-lg">
              Finance Support
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              We provide guidance and support to help you manage your payments
              easily. Your learning journey matters most.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
