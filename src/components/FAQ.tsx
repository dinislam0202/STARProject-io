"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Это бесплатно для студентов?",
    a: "Да, базовый поиск и регистрация на платформе абсолютно бесплатны для всех верифицированных студентов."
  },
  {
    q: "Как работает алгоритм подбора?",
    a: "Наш AI анализирует более 20 параметров: от режима дня и любви к животным до музыкальных предпочтений и уровня чистоты в доме."
  },
  {
    q: "Кто может зарегистрироваться?",
    a: "Сервис доступен только студентам действующих ВУЗов. При регистрации потребуется подтверждение статуса."
  },
  {
    q: "Насколько это безопасно?",
    a: "Мы проверяем каждую анкету вручную. Все пользователи проходят верификацию по соцсетям и студенческим билетам."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Часто задаваемые <span className="text-gradient">вопросы</span></h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="glass rounded-3xl overflow-hidden shadow-lg shadow-black/5">
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-6 text-left flex justify-between items-center hover:bg-white/50 transition-colors"
            >
              <span className="font-bold text-lg">{faq.q}</span>
              {openIndex === index ? <Minus className="text-primary" /> : <Plus className="text-primary" />}
            </button>
            <motion.div
              initial={false}
              animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100/10">
                {faq.a}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
