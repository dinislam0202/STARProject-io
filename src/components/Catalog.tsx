"use client";

import { motion } from "framer-motion";
import { Search, Filter, Heart, MessageCircle, MapPin, Wallet, GraduationCap } from "lucide-react";
import { useState } from "react";

const students = [
  {
    id: 1,
    name: "Алексей Иванов",
    age: 20,
    budget: "25k-35k",
    district: "Центральный",
    uni: "МГУ",
    interests: ["Программирование", "Гитара", "Спорт"],
    avatar: "https://i.pravatar.cc/150?img=11",
    habits: ["Не курю", "Нет животных"]
  },
  {
    id: 2,
    name: "Екатерина Смирнова",
    age: 19,
    budget: "30k-40k",
    district: "Приморский",
    uni: "СПбГУ",
    interests: ["Дизайн", "Йога", "Путешествия"],
    avatar: "https://i.pravatar.cc/150?img=26",
    habits: ["Вегетарианка", "Кот Борис"]
  },
  {
    id: 3,
    name: "Дмитрий Козлов",
    age: 21,
    budget: "20k-30k",
    district: "Василеостровский",
    uni: "ИТМО",
    interests: ["Гейминг", "Кино", "Пицца"],
    avatar: "https://i.pravatar.cc/150?img=13",
    habits: ["Сова", "Курю"]
  },
  {
    id: 4,
    name: "Мария Волкова",
    age: 18,
    budget: "35k-50k",
    district: "Замоскворечье",
    uni: "ВШЭ",
    interests: ["Экономика", "Теннис", "Кофе"],
    avatar: "https://i.pravatar.cc/150?img=49",
    habits: ["Жаворонок", "Без вредных привычек"]
  }
];

export default function Catalog() {
  const [search, setSearch] = useState("");

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Каталог <span className="text-gradient">анкет</span></h2>
          <p className="text-gray-500">Найди своего будущего соседа среди сотен студентов.</p>
        </div>
        
        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Поиск по имени или ВУЗу..."
              className="pl-12 pr-6 py-3 bg-white border border-gray-100 rounded-2xl shadow-sm focus:ring-2 focus:ring-primary/20 outline-none w-full md:w-80 transition-all"
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-100 rounded-2xl shadow-sm hover:bg-gray-50 transition-colors font-semibold text-gray-700">
            <Filter size={18} />
            Фильтры
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {students.map((student, index) => (
          <motion.div
            key={student.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass group rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src={student.avatar} 
                alt={student.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-700 hover:text-rose-500 transition-colors">
                  <Heart size={20} />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                {student.interests.slice(0, 2).map((tag, i) => (
                  <span key={i} className="px-3 py-1 glass-dark text-[10px] font-bold text-white rounded-full uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{student.name}, {student.age}</h3>
                  <div className="flex items-center gap-1 text-gray-500 text-sm font-medium">
                    <GraduationCap size={14} className="text-primary" /> {student.uni}
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin size={16} className="text-gray-400" />
                  <span>{student.district}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Wallet size={16} className="text-gray-400" />
                  <span className="font-bold text-primary">{student.budget} ₽ / мес</span>
                </div>
              </div>

              <button className="w-full btn-primary py-3 text-sm flex items-center justify-center gap-2">
                <MessageCircle size={18} />
                Связаться
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <button className="btn-secondary px-10">
          Показать ещё
        </button>
      </div>
    </div>
  );
}
