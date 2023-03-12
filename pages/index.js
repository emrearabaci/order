/* Next API */
import Head from 'next/head';

/* Styles */
import styles from '@/styles/pages/Index.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage | Order</title>
      </Head>

      <div className={styles.container}>
        <p>Order</p>
      </div>
    </>
  );
}
