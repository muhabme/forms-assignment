/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#004a91',
                accent: '#dcac00',
                light: '#a6c0d9',
                grey: '#64646c',
                bg: '#fff',
                bgdark: '#121212',
            },
        },
    },
    plugins: [],
};
