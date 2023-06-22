'use client';
import React, { useState } from 'react';

export default function LanguageToggle() {
    const [lang, setLang] = useState('en');
    return (
        <button
            className="grid grid-cols-2 bg-[#2a2522] text-white rounded-md relative"
            onClick={() => setLang((prev) => (prev === 'en' ? 'ar' : 'en'))}
        >
            <div className="z-10 px-4 py-2 h-full flex justify-center items-center">
                EN
            </div>
            <div className="z-10 px-4 py-2 h-full flex justify-center items-center">
                ع
            </div>
            <div
                className={`bg-accent absolute w-[46%] h-[84%] rounded-lg transition-all top-[8%]  ${
                    lang === 'en' ? 'left-[3px]' : 'right-[3px]'
                }`}
            />
        </button>
    );
}
