"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Анна Петрова",
    role: "МГУ, 3 курс",
    content: "Нашла идеальную соседку за 2 дня. Мы обе любим готовить и учимся в одном университете. Очень удобный сервис!",
    avatar: "https://i.pravatar.cc/150?img=32"
  },
  {
    name: "Иван Сергеев",
    role: "ВШЭ, 1 курс",
    content: "Переживал, что будет сложно найти жилье в Москве. STARProject помог найти ребят, с которыми мы теперь снимаем отличную трешку.",
    avatar: "https://i.pravatar.cc/150?img=12"
  },
  {
    name: "Марина Ким",
    role: "СПбГУ, 4 курс",
    content: "Главное преимущество — верификация. Я уверена в людях, с которыми начинаю общение на платформе.",
    avatar: "https://i.pravatar.cc/150?img=44"
  }
];

export default function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Отзывы <span className="text-gradient">студентов</span></h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass p-8 rounded-[2.5rem] shadow-xl relative"
          >
            <div className="flex gap-1 mb-6">
              {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-amber-400 text-amber-400" />)}
            </div>
            <p className="text-gray-600 mb-8 italic leading-relaxed">"{item.content}"</p>
            <div className="flex items-center gap-4">
              <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full border-2 border-primary/20" />
              <div>
                <div className="font-bold text-gray-800">{item.name}</div>
                <div className="text-xs text-gray-500">{item.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
