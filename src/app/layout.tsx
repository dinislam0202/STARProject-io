import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "STARProject | Найди идеального соседа",
  description: "Студенческий сервис поиска соседей для совместного проживания",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-secondary/10 rounded-full blur-[100px]" />
        </div>
        {children}
      </body>
    </html>
  );
}
