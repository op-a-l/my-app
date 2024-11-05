import { join } from 'path';
import { skeleton } from '@skeletonlabs/tw-plugin';
import type { Config } from 'tailwindcss';
import { myCustomTheme } from './themePerso.ts';

const config = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
  ],
  theme: {
    extend: {
      fontFamily: {
        openSans: ['OpenSans', 'sans-serif'],
      }
    },
  },
  plugins: [
    skeleton({
      themes: {
        preset: [
          'skeleton',       // Thème par défaut de Skeleton
          'modern',         // Autres thèmes disponibles
          'vintage',
          // Ajoute d'autres thèmes ici si souhaité
        ],
        custom: [
          myCustomTheme
        ]
      }
    })
  ],
} satisfies Config;

export default config;
