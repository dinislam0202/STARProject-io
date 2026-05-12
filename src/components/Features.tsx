"use client";

import { motion } from "framer-motion";
import { Wallet, ShieldCheck, Zap, Heart, MessageCircle, Search } from "lucide-react";

const features = [
  {
    icon: <Wallet className="text-blue-500" />,
    title: "Экономия на аренде",
    description: "Раздели стоимость квартиры и коммунальных платежей с идеальным соседом.",
    color: "bg-blue-500/10"
  },
  {
    icon: <ShieldCheck className="text-purple-500" />,
    title: "Проверенные студенты",
    description: "Мы верифицируем анкеты через студенческие билеты и социальные сети.",
    color: "bg-purple-500/10"
  },
  {
    icon: <Zap className="text-amber-500" />,
    title: "Быстрый поиск",
    description: "Находите варианты за считанные минуты благодаря умным фильтрам.",
    color: "bg-amber-500/10"
  },
  {
    icon: <Heart className="text-rose-500" />,
    title: "Совместимость",
    description: "AI подбирает соседей на основе ваших привычек, интересов и режима дня.",
    color: "bg-rose-500/10"
  },
  {
    icon: <MessageCircle className="text-emerald-500" />,
    title: "Безопасное общение",
    description: "Встроенный мессенджер позволяет познакомиться до личной встречи.",
    color: "bg-emerald-500/10"
  },
  {
    icon: <Search className="text-sky-500" />,
    title: "Удобный подбор",
    description: "Фильтруйте по бюджету, району, университету и даже отношению к животным.",
    color: "bg-sky-500/10"
  }
];

export default function Features() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Почему выбирают <span className="text-gradient">нас</span></h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Мы создали инструменты, которые делают совместную аренду простой и прозрачной.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="glass p-8 rounded-3xl shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-primary/5 transition-all group"
          >
            <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
