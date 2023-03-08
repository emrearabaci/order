/* Next API */
import Head from 'next/head';

/* Styles */
import styles from '@/styles/pages/Index.module.scss';

/* Fonts */
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>order</title>
        <meta name="description" content="quick order" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*
        <link rel="icon" href="/favicon.ico" />
        */}
      </Head>
      <main className={inter.className}>
        <div className={styles.container}>
          <p>Order</p>
        </div>
      </main>
    </>
  );
}
