import type { Config } from "tailwindcss";

export default {
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
        smsSky: "#C3EBFA",
        smsSkyLight: "#EDF9FD",
        smsPurple: "#CFCEFF",
        smsPurpleLight: "#F1F0FF",
        smsYellow: "#FAE27C",
        smsYellowLight: "#FEFCE8",
      },
    },
  },
  plugins: [],
} satisfies Config;
