"use client";
import type React from 'react';
import { useEffect } from 'react';
import '../../styles/HomePage.css';
import AuthenticationTitle from '../../libs/AuthTitle/AuthenicationTitle';
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
        <div className="container">
            <div className="background" />
            <div className="content animate-class">
            <AuthenticationTitle />

            </div>
        </div>

    );
};

export default HomePage;
