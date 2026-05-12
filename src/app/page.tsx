"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Questionnaire from "@/components/Questionnaire";
import Catalog from "@/components/Catalog";
import MatchingSystem from "@/components/MatchingSystem";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section id="hero">
        <Hero />
      </section>

      <section id="stats" className="py-12">
        <Stats />
      </section>

      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            О проекте <span className="text-gradient">STARProject</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Платформа помогает студентам быстро и безопасно находить соседей для совместной аренды жилья, 
            снижая стоимость аренды и упрощая поиск совместимого человека. Мы используем AI-алгоритмы 
            для подбора лучших вариантов на основе ваших привычек.
          </motion.p>
        </div>
      </section>

      <section id="features" className="py-20">
        <Features />
      </section>

      <section id="how-it-works" className="py-20 bg-gray-50/50">
        <HowItWorks />
      </section>

      <section id="matching" className="py-20">
        <MatchingSystem />
      </section>

      <section id="catalog" className="py-20">
        <Catalog />
      </section>

      <section id="form" className="py-20 bg-gray-50/50">
        <Questionnaire />
      </section>

      <section id="testimonials" className="py-20">
        <Testimonials />
      </section>

      <section id="faq" className="py-20">
        <FAQ />
      </section>

      <Footer />
    </main>
  );
}
