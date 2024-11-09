// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import { ColorModeProvider } from '../contexts/ColorModeContext';
import ColorModeToggle from '../components/ColorMode';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ColorModeProvider>
      <Component {...pageProps} />
      <ColorModeToggle />
    </ColorModeProvider>
  );
}