"use client";
import type React from "react";
import { AuthenticationTitle } from "@/components/AuthTitle/AuthenicationTitle";
import { useMantineColorScheme } from "@mantine/core";

const HomePage: React.FC = () => {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <div
      className={`relative w-full h-screen flex flex-col items-center justify-center ${
        isDark ? "bg-slate-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-ttss bg-repeat bg-[length:200px] opacity-20"> </div>

      {/* Authentication Container */}
      <div
        className={`relative z-10 p-8 shadow-lg rounded-2xl ${
          isDark ? "bg-[var(--mantine-color-dark-7)] text-white" : "bg-white text-gray-900"
        }`}
      >
        <h1 className="pt-4 text-4xl font-bold text-center">
          Welcome to TTSS Admin Dashboard!
        </h1>
        <AuthenticationTitle />
      </div>
    </div>
  );
};

export default HomePage;
