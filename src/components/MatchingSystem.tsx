"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, BrainCircuit, Target, Sparkles } from "lucide-react";

const factors = [
  { label: "Бюджет", value: 98, color: "bg-emerald-500" },
  { label: "Район", value: 95, color: "bg-blue-500" },
  { label: "Привычки", value: 87, color: "bg-purple-500" },
  { label: "Интересы", value: 92, color: "bg-pink-500" }
];

export default function MatchingSystem() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="glass rounded-[3rem] p-8 md:p-16 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <BrainCircuit size={300} className="text-primary" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
              <Zap size={18} fill="currentColor" />
              SMART MATCHING v2.0
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1]">
              Подбор соседей по <span className="text-gradient">совместимости</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Наш алгоритм использует нейронные сети для анализа психологического портрета и образа жизни студентов, 
              чтобы гарантировать 95%+ вероятность успешного сожительства.
            </p>

            <div className="space-y-6">
              {factors.map((factor, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-gray-700">{factor.label}</span>
                    <span className="text-primary font-black">{factor.value}%</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${factor.value}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-full ${factor.color} rounded-full`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ rotate: -5, y: 20, opacity: 0 }}
              whileInView={{ rotate: 0, y: 0, opacity: 1 }}
              className="glass p-8 rounded-[3rem] shadow-2xl border-white/50 relative z-20"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                    <Target size={32} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Top Match</div>
                    <div className="text-2xl font-black text-gray-800">Идеальная пара</div>
                  </div>
                </div>
                <div className="w-20 h-20 rounded-full border-4 border-emerald-500/20 flex items-center justify-center relative">
                   <div className="text-2xl font-black text-emerald-500">97%</div>
                   <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-t-4 border-emerald-500 rounded-full"
                   ></motion.div>
                </div>
              </div>

              <div className="flex justify-between items-center mb-10 bg-gray-50/50 p-6 rounded-[2rem]">
                <div className="text-center">
                   <div className="w-16 h-16 rounded-full border-4 border-white shadow-lg mb-2 mx-auto overflow-hidden">
                      <img src="https://i.pravatar.cc/100?img=11" alt="" />
                   </div>
                   <div className="text-xs font-bold">Вы</div>
                </div>
                <div className="flex flex-col items-center">
                   <Sparkles className="text-amber-400 mb-1" size={24} />
                   <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                </div>
                <div className="text-center">
                   <div className="w-16 h-16 rounded-full border-4 border-white shadow-lg mb-2 mx-auto overflow-hidden">
                      <img src="https://i.pravatar.cc/100?img=49" alt="" />
                   </div>
                   <div className="text-xs font-bold">Мария В.</div>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm font-medium text-gray-600">
                  <CheckCircle2 className="text-emerald-500" size={20} /> Оба студенты ВШЭ
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-gray-600">
                  <CheckCircle2 className="text-emerald-500" size={20} /> Совпадение бюджета 100%
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-gray-600">
                  <CheckCircle2 className="text-emerald-500" size={20} /> Оба "жаворонки"
                </li>
              </ul>

              <button className="w-full mt-10 py-4 bg-gray-900 text-white rounded-[2rem] font-bold hover:bg-black transition-all shadow-xl shadow-black/10">
                Посмотреть детали
              </button>
            </motion.div>
            
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
