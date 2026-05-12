"use client";

import { motion } from "framer-motion";
import { Upload, CheckCircle, Sparkles, User, MapPin, Wallet, BookOpen, Heart, Activity } from "lucide-react";
import { useState } from "react";

export default function Questionnaire() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-6 text-center py-20">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass p-12 rounded-[3rem] shadow-2xl"
        >
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl font-bold mb-4">Анкета отправлена!</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Наш AI уже анализирует твои данные. Подходящие кандидаты появятся в каталоге в течение нескольких минут.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="btn-primary"
          >
            Вернуться
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Создай свою <span className="text-gradient">анкету</span></h2>
        <p className="text-gray-600">Чем подробнее ты заполнишь данные, тем точнее будет мэтч.</p>
      </div>

      <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Section 1 */}
          <div className="glass p-8 rounded-[2.5rem] shadow-xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <User className="text-primary" size={20} /> Личные данные
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-2">Имя</label>
                <input type="text" required placeholder="Имя Фамилия" className="w-full px-5 py-3 rounded-2xl border border-gray-100 focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-2">Возраст</label>
                <input type="number" required placeholder="20" className="w-full px-5 py-3 rounded-2xl border border-gray-100 focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-2">Университет</label>
                <input type="text" required placeholder="МГУ, ВШЭ..." className="w-full px-5 py-3 rounded-2xl border border-gray-100 focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-2">Курс</label>
                <select className="w-full px-5 py-3 rounded-2xl border border-gray-100 focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                  <option>1 курс</option>
                  <option>2 курс</option>
                  <option>3 курс</option>
                  <option>4 курс</option>
                  <option>Магистратура</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="glass p-8 rounded-[2.5rem] shadow-xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <MapPin className="text-secondary" size={20} /> Жилье и Бюджет
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-2">Бюджет (₽/мес)</label>
                <input type="text" required placeholder="30,000" className="w-full px-5 py-3 rounded-2xl border border-gray-100 focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-2">Предпочтительный район</label>
                <input type="text" required placeholder="Центральный" className="w-full px-5 py-3 rounded-2xl border border-gray-100 focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="glass p-8 rounded-[2.5rem] shadow-xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Activity className="text-amber-500" size={20} /> Образ жизни
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <label className="text-sm font-bold text-gray-700 ml-2">Отношение к курению</label>
                <div className="flex gap-4">
                  {["Негативное", "Нейтральное", "Курю"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 text-sm">
                      <input type="radio" name="smoke" className="text-primary focus:ring-primary" /> {opt}
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-sm font-bold text-gray-700 ml-2">Домашние животные</label>
                <div className="flex gap-4">
                  {["Нет", "Есть", "Планирую"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 text-sm">
                      <input type="radio" name="pets" className="text-primary focus:ring-primary" /> {opt}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Photo Upload */}
          <div className="glass p-8 rounded-[2.5rem] shadow-xl text-center">
            <h3 className="text-xl font-bold mb-6">Фото профиля</h3>
            <div className="border-2 border-dashed border-gray-200 rounded-3xl p-10 hover:border-primary/50 transition-colors cursor-pointer bg-gray-50/50 group">
              <Upload className="mx-auto text-gray-400 mb-4 group-hover:text-primary transition-colors" size={40} />
              <p className="text-sm font-bold text-gray-500">Перетащи фото сюда</p>
              <p className="text-xs text-gray-400 mt-2">или нажми для выбора</p>
            </div>
            <p className="text-[10px] text-gray-400 mt-4 uppercase font-bold tracking-widest italic flex items-center justify-center gap-1">
              <Sparkles size={12} className="text-amber-400" /> обязательная загрузка
            </p>
          </div>

          {/* About */}
          <div className="glass p-8 rounded-[2.5rem] shadow-xl">
            <h3 className="text-xl font-bold mb-6">О себе</h3>
            <textarea 
              rows={5} 
              placeholder="Расскажи немного о себе, своих интересах и ожиданиях..."
              className="w-full px-5 py-3 rounded-2xl border border-gray-100 focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
            ></textarea>
          </div>

          <button type="submit" className="w-full py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-[2rem] font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all active:scale-95">
            Опубликовать анкету
          </button>
        </div>
      </form>
    </div>
  );
}
