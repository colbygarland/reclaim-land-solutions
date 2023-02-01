import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import { PageHead } from '../components/PageHead';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageHead />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
