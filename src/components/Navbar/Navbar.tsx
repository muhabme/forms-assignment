'use client';
import React, { useEffect, useState } from 'react';
import Button from '../common/Button/Button';
import ThemeToggle from './ThemeToggle/ThemeToggle';
import LanguageToggle from './LanguageToggle/LanguageToggle';
import AccountDropdown from './AccountDropdown/AccountDropdown';
import { CgClose } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import usePreventScroll from '@/hooks/usePreventScroll';

export default function Navbar() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [blockScroll, allowScroll] = usePreventScroll();
    useEffect(() => {
        if (mobileNavOpen) {
            blockScroll();
        } else {
            allowScroll();
        }
    }, [mobileNavOpen]);

    return (
        <nav className="flex items-center justify-end px-6 py-4 lg:px-8">
            <div
                className={`flex flex-col-reverse lg:flex-row items-center justify-center gap-4 h-screen lg:h-auto transition-all fixed lg:relative right-0 top-0 z-40 bg-light dark:bg-grey dark:bg-opacity-25 bg-opacity-90 dark:lg:bg-transparent lg:bg-transparent ${
                    mobileNavOpen
                        ? 'w-[min(75vw,400px)] visible opacity-100'
                        : 'w-0 invisible opacity-0 lg:w-auto lg:visible lg:opacity-100'
                }`}
            >
                <Button rounded>Individual Investor</Button>
                <ThemeToggle />
                <LanguageToggle />
                <AccountDropdown />
            </div>
            <div className="flex-center lg:hidden text-xl text-theme z-50">
                {mobileNavOpen ? (
                    <CgClose
                        onClick={() => {
                            setMobileNavOpen(false);
                        }}
                    />
                ) : (
                    <GiHamburgerMenu
                        onClick={() => {
                            setMobileNavOpen(true);
                        }}
                    />
                )}
            </div>
            <div
                onClick={() => {
                    setMobileNavOpen(false);
                }}
                className={`w-screen h-screen fixed left-0 top-0 backdrop-blur-sm z-30 transition-all ${
                    mobileNavOpen
                        ? 'visible opacity-100'
                        : 'invisible opacity-0 -z-50'
                }`}
            />
        </nav>
    );
}
