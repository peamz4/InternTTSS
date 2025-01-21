"use client";
import type React from 'react';
import { useEffect } from 'react';
import '../styles/HomePage.css';
import { HeroBullets } from '@/libs/Hero/HeroBullets';

const HomePage: React.FC = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-class");
    for (const el of elements) {
      el.classList.add("show");
    }
  }, []);

  const handleClick = () => {
    window.location.href = '/login';
  };

  return (
    <div className="container">
      <div className="background" />
      <HeroBullets />
    </div>

  );
};

export default HomePage;
