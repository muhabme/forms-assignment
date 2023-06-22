'use client';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useEffect, useRef, useState } from 'react';

export default function AccountDropdown() {
    const [dropdownActive, setDropdownActive] = useState(false);

    const name = 'John Doe';
    const getInitials = (name: string) => {
        var names = name.split(' '),
            initials = names[0].substring(0, 1).toUpperCase();

        if (names.length > 1) {
            initials += names[names.length - 1].substring(0, 1).toUpperCase();
        }
        return initials;
    };
    // Handling Click Outside of Dropdown
    const dropdownRef = useRef<HTMLInputElement | null>(null);
    useEffect(() => {
        const handler = (event: MouseEvent) => {
            if (!(dropdownRef as any).current.contains(event.target)) {
                setDropdownActive(false);
            }
        };
        document.addEventListener('click', handler);
        return () => {
            document.removeEventListener('click', handler);
        };
    });
    return (
        <div className="relative dark:text-white text-grey">
            {/* Button */}
            <button
                onClick={() => {
                    setDropdownActive((prev) => !prev);
                }}
                className="flex items-center justify-center gap-2 border-2 border-light rounded-lg p-2"
            >
                <div className="bg-primary p-2 text-white rounded-lg">
                    {getInitials(name)}
                </div>
                <div className="flex flex-col items-start dark:text-white text-grey">
                    <span className="text-xs">Welcome!</span>
                    <span className="p-0">{name}</span>
                </div>
                <div>
                    <MdKeyboardArrowDown size={28} />
                </div>
            </button>
            {/* Dropdown Menu */}
            <div
                ref={dropdownRef}
                className={`${
                    dropdownActive ? 'flex' : 'hidden'
                } flex-col gap-2 w-full absolute top-[110%] left-0 border-2 bg-white shadow-2xl rounded px-2 py-2 z-50`}
            >
                <div className="self-center text-primary font-bold">
                    {name}
                    <div className="w-full border-t-2" />
                </div>
                <button className="text-left text-grey">Change User</button>
                <div className="w-full border-t-2" />
                <button className="text-red-500">Sign Out</button>
            </div>
        </div>
    );
}
