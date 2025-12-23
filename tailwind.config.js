module.exports = {
    darkMode: 'class',
    content: [
        './*.html',
        './**/*.html',
        './js/**/*.js'
    ],
    theme: {
        extend: {
            colors: {
                'off-white': '#fbfbfe',
                'deep-black': '#050505',
                'accent': '#4f46e5',
                'matte-black': '#101010',
                'neon-lime': '#d9f99d'
            },
            fontFamily: {
                'syne': ['Outfit', 'sans-serif'],
                'inter': ['Space Grotesk', 'sans-serif']
            }
        }
    },
    plugins: []
};