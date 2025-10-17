import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: '#0a0e27',
        color: 'white',
      },
    },
  },
  colors: {
    brand: {
      50: '#E3F2FD',
      100: '#BBDEFB',
      200: '#90CAF9',
      300: '#64B5F6',
      400: '#42A5F5',
      500: '#0D47A1',
      600: '#1565C0',
      700: '#0D47A1',
      800: '#0a0e27',
      900: '#050814',
    },
    dark: {
      bg: '#0a0e27',
      bgAlt: '#0f1535',
      border: '#1a2142',
      text: '#e0e7ff',
      textAlt: '#94a3b8',
    },
    blue: {
      neon: '#00d4ff',
      glow: '#0ea5e9',
      deep: '#0c4a6e',
    },
  },
  fonts: {
    heading: `'Inter', 'Archivo', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
    body: `'Inter', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
  },
});

export default theme;
