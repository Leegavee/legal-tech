import '@legavee/styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '@legavee/components/layout';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </UserProvider>
  );
}
