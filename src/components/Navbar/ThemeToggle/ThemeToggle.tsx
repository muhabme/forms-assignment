'use client';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
import useDarkMode from '@/hooks/useDarkMode';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useDarkMode();

    return (
        <button className='p-2'
            onClick={() => {
                toggleTheme();
            }}
        >
            {theme === 'dark' ? (
                <HiOutlineSun size={28} />
            ) : (
                <HiOutlineMoon size={28} />
            )}
        </button>
    );
}
