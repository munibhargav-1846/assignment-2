/* Tailwind CDN theme config — must load right after the Tailwind script */
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0E7490',     /* Horizon Teal */
          primaryHover: '#0891B2',
          secondary: '#10B981',   /* Emerald Success */
          secondaryHover: '#059669',
          tertiary: '#EAB308',    /* Sunbeam Gold Accent */
          neutral: '#64748B',     /* Cool Slate */
          dark: '#0F172A',
          lightBg: '#F8FAFC',
          cardBg: '#FFFFFF',
          border: '#E2E8F0'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        'custom': '18px',
      },
      boxShadow: {
        'soft': '0 10px 25px -5px rgba(14, 116, 144, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
        'floating': '0 20px 35px -10px rgba(15, 23, 42, 0.15)',
      }
    }
  }
}
