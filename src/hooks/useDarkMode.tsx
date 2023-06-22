'use client';
import { useState, useEffect } from 'react';

export default function useDarkMode() {
    const [theme, setTheme] = useState('light');
    const oppositeTheme = theme === 'dark' ? 'light' : 'dark';

    useEffect(() => {
        setTheme(localStorage.theme);
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(oppositeTheme);
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme, oppositeTheme]);

    const toggleTheme = () => {
        setTheme(oppositeTheme);
    };

    return { theme, toggleTheme };
}
