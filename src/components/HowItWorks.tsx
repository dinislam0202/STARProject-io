"use client";

import { motion } from "framer-motion";
import { ClipboardList, MapPin, UserCheck, MessageSquare } from "lucide-react";

const steps = [
  {
    icon: <ClipboardList className="text-white" />,
    title: "Заполни анкету",
    desc: "Расскажи о себе, своих привычках и пожеланиях к соседу.",
    color: "bg-blue-500"
  },
  {
    icon: <MapPin className="text-white" />,
    title: "Укажи бюджет и район",
    desc: "Мы отфильтруем варианты, которые подходят тебе по локации и цене.",
    color: "bg-purple-500"
  },
  {
    icon: <UserCheck className="text-white" />,
    title: "Получи варианты",
    desc: "AI-алгоритм предложит список студентов с максимальной совместимостью.",
    color: "bg-indigo-500"
  },
  {
    icon: <MessageSquare className="text-white" />,
    title: "Начни общение",
    desc: "Напиши подходящему кандидату и договорись о встрече.",
    color: "bg-pink-500"
  }
];

export default function HowItWorks() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Как это <span className="text-gradient">работает</span></h2>
        <p className="text-gray-600">Всего 4 простых шага до идеального жилья.</p>
      </div>

      <div className="relative">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-100 to-pink-100 -translate-y-1/2 hidden lg:block -z-10"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className={`w-20 h-20 ${step.color} rounded-[2rem] flex items-center justify-center shadow-xl shadow-${step.color.split('-')[1]}-500/20 mb-8 border-4 border-white`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
