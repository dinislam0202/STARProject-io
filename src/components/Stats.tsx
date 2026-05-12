"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Анкет студентов", value: "1,500+", suffix: "" },
  { label: "Успешных мэтчей", value: "450+", suffix: "" },
  { label: "Университетов", value: "40", suffix: "+" },
  { label: "Доступ", value: "24/7", suffix: "" }
];

export default function Stats() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="glass-dark rounded-[3rem] p-12 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center border-white/40">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl md:text-5xl font-black text-gradient mb-2 tracking-tighter">
              {stat.value}
            </div>
            <div className="text-gray-500 font-medium text-sm uppercase tracking-widest">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
