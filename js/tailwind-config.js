tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['FuturaPT', 'Futura', 'Jost', 'sans-serif'],
                serif: ['FuturaPT', 'Futura', 'Jost', 'sans-serif'], 
            },
            colors: {
                brand: {
                    900: '#686965', 800: '#686965', 700: '#686965',
                    600: '#337566', 300: '#d1d5db', 200: '#e5e7eb',
                    100: '#eff5f4', 50: '#f7f9f9',
                },
                accent: {
                    400: '#c5a028', 500: '#b08d1e',
                }
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'fadeIn': 'fadeIn 0.5s ease-out forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        }
    }
}
