/* Next API */
import Head from 'next/head';

/* Components */
import Navigation from '@/components/Navigaiton';

/* Styles */
import styles from '@/styles/components/Layout.module.scss';

/* Fonts */
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="quick order" />
        {/*
        <link rel="icon" href="/favicon.ico" />
        */}
        <title>Order</title>
      </Head>
      <div className={styles.app}>
        <Navigation />
        <main className={inter.className}>{children}</main>
      </div>
    </>
  );
}
