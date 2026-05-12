"use client";

import { Send, Instagram, Twitter, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold">S</div>
              <span className="text-xl font-bold tracking-tight">STARProject</span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
              Современная платформа для поиска соседей среди студентов. Мы делаем аренду доступнее и комфортнее.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all">
                <Send size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Навигация</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Главная</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">О проекте</a></li>
              <li><a href="#catalog" className="hover:text-primary transition-colors">Каталог</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Поддержка</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li className="flex items-center gap-2 italic">
                <Mail size={16} /> help@starproject.ru
              </li>
              <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Условия использования</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2026 STARProject. All rights reserved.</p>
          <div className="flex gap-6 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <span>Made with ❤️ for students</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
