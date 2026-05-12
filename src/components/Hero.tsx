"use client";

import { motion } from "framer-motion";
import { Search, UserPlus, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 border border-primary/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            AI-POWERED MATCHING
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6">
            Найди <span className="text-gradient">идеального</span> соседа для аренды
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
            Студенческий сервис поиска соседей для совместного проживания. Мы подберем человека, с которым вам будет комфортно.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary flex items-center gap-2">
              <UserPlus size={20} />
              Заполнить анкету
            </button>
            <button className="btn-secondary flex items-center gap-2">
              <Search size={20} />
              Найти соседа
            </button>
          </div>

          <div className="mt-12 flex items-center gap-4 text-sm text-gray-500">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-white font-bold text-[10px]">
                +100
              </div>
            </div>
            <p>Уже <span className="font-bold text-gray-800">500+ студентов</span> нашли жилье</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/20">
             {/* Abstract UI representation */}
            <div className="bg-white/80 backdrop-blur-xl p-8 aspect-square flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="glass-dark p-4 rounded-2xl w-48 animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
                <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center rotate-12">
                   <ArrowRight className="text-secondary" />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1 glass p-6 rounded-3xl shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-secondary"></div>
                    <div>
                       <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                       <div className="h-3 bg-gray-100 rounded w-16"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-100 rounded w-full"></div>
                    <div className="h-2 bg-gray-100 rounded w-5/6"></div>
                    <div className="h-2 bg-gray-100 rounded w-4/6"></div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                    <div className="flex gap-1">
                      {[1,2,3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-primary/20"></div>)}
                    </div>
                    <div className="text-xs font-bold text-primary italic">98% Match</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10"></div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute top-1/2 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
