/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: () => ({
                'dark-gradient':
                    'linear-gradient(to left bottom, #253b5e, #243157, #24264f, #241c45, #25103b);',
            }),
        },
    },
    plugins: [],
}
