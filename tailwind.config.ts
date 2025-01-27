import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          rose: '#FF8C42',
          orange: '#FFC371',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
        },
        background: {
          DEFAULT: 'var(--background)',
          secondary: 'var(--background-secondary)',
          surface: 'var(--surface)',
          'surface-secondary': 'var(--surface-secondary)',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, var(--gradient-start), var(--gradient-end))',
      },
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
            '--tw-prose-body': 'var(--text-primary)',
            '--tw-prose-headings': 'var(--text-primary)',
            '--tw-prose-lead': 'var(--text-secondary)',
            '--tw-prose-links': 'var(--text-primary)',
            '--tw-prose-bold': 'var(--text-primary)',
            '--tw-prose-counters': 'var(--text-secondary)',
            '--tw-prose-bullets': 'var(--text-secondary)',
            '--tw-prose-hr': 'var(--text-secondary)',
            '--tw-prose-quotes': 'var(--text-primary)',
            '--tw-prose-quote-borders': 'var(--text-secondary)',
            '--tw-prose-captions': 'var(--text-secondary)',
            '--tw-prose-code': 'var(--text-primary)',
            '--tw-prose-pre-code': 'var(--text-primary)',
            '--tw-prose-pre-bg': 'var(--background-secondary)',
            '--tw-prose-th-borders': 'var(--text-secondary)',
            '--tw-prose-td-borders': 'var(--text-secondary)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
