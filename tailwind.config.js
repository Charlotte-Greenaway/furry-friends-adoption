/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'background': 'var(--background)',
        'foreground': 'var(--foreground)',
        'card': 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        'popover': 'var(--popover)',
        'popover-foreground': 'var(--popover-foreground)',
        'primary': 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        'secondary': 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',
        'muted': 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        'accent': 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        'destructive': 'var(--destructive)',
        'destructive-foreground': 'var(--destructive-foreground)',
        'border': 'var(--border)',
        'input': 'var(--input)',
        'ring': 'var(--ring)',
      },
      borderRadius: {
        'default': 'var(--radius)', // For general use
      },
    },
  },
  plugins: [],
};