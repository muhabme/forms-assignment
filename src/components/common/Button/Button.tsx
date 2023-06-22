import Link from 'next/link';
import React from 'react';

interface Props {
    rounded?: boolean;
    circle?: boolean;
    square?: boolean;
    primary?: boolean;
    accent?: boolean;
    white?: boolean;
    transparent?: boolean;
    borderPrimary?: boolean;
    giant?: boolean;
    onClick?: () => void;
    linkTo?: string;
    children?: React.ReactNode;
}

export default function Button({
    rounded,
    circle,
    square,
    primary,
    accent,
    white,
    transparent,
    borderPrimary,
    giant,
    onClick,
    linkTo,
    children,
}: Props) {
    let styles = 'flex items-center gap-2 text-left';
    if (rounded) {
        styles += ' px-4 py-2 rounded-md';
    } else if (circle) {
        styles += ' px-4 py-2 rounded-full';
    } else if (square) {
        styles += ' aspect-square p-3';
    }
    if (giant) {
        styles += ' px-16 py-4 font-bold';
    } else {
        styles += ' px-4 py-4 font-bold';
    }
    if (borderPrimary) {
        styles += ' border-2 border-primary';
    }
    if (primary) {
        styles += ' bg-primary text-white';
    } else if (accent) {
        styles += ' bg-accent text-white';
    } else if (white) {
        styles += ' bg-white text-primary shadow-lg';
    } else if (transparent) {
        styles += ' bg-transparent px-2';
    } else {
        styles += ' bg-primary text-white';
    }
    if (linkTo) {
        return (
            <Link href={linkTo}>
                <button className={styles}>{children}</button>
            </Link>
        );
    }
    return (
        <button className={styles} onClick={onClick}>
            {children}
        </button>
    );
}
