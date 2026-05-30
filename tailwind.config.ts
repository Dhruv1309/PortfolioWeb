import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts,svx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F6F3EE',
        ink: '#1A1008',
        muted: '#756B61',
        accent: '#B96F45',
        rule: '#D9D2C7'
      },
      fontFamily: {
        serif: ['Fraunces', 'Lora', 'Georgia', 'serif'],
        sans: ['DM Sans', 'Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      maxWidth: {
        editorial: '88rem'
      }
    }
  },
  plugins: []
} satisfies Config;
