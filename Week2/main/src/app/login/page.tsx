"use client";
import type React from 'react';
import { useEffect } from 'react';
import AuthenticationTitle from '@/components/AuthTitle/AuthenicationTitle';
import { Navbar } from '@/components';

const HomePage: React.FC = () => {
    useEffect(() => {
        const elements = document.querySelectorAll(".animate-class");
        for (const el of elements) {
            el.classList.add("show");
        }
    }, []);

    const handleClick = () => {
        window.location.href = '/dashboard';
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <Navbar />
            <div className="content animate-class">
                <AuthenticationTitle />
            </div>
        </div>

    );
};

export default HomePage;
