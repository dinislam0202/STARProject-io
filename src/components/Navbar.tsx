"use client";

import { motion } from "framer-motion";
import { Search, UserPlus, Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="max-w-7xl mx-auto glass rounded-3xl px-6 py-4 flex items-center justify-between shadow-lg shadow-black/5"
      >
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-800 hidden md:block">
            STARProject
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">О проекте</Link>
          <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Преимущества</Link>
          <Link href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Как это работает</Link>
          <Link href="#catalog" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Каталог</Link>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors">
            Войти
          </button>
          <button className="btn-primary py-2 px-5 text-sm flex items-center gap-2">
            Начать поиск
          </button>
          <button className="md:hidden p-2 text-gray-600">
            <Menu size={24} />
          </button>
        </div>
      </motion.div>
    </nav>
  );
}
