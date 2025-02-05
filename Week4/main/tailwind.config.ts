import type { Config } from "tailwindcss";

export default {
  mode: 'jit',
  darkMode: ['selector', '[data-mantine-color-scheme="dark"]'],
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'ttss': "url('/images/ttsslogo.svg')",
      },
    },
  },
  plugins: [],
} satisfies Config;