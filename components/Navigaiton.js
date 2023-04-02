/* Next API */
import Link from 'next/link';

/* Components */
import Icon from '@/components/Icon';

/* Styles */
import styles from '@/styles/components/Navigation.module.scss';

/* Fonts */
import { Cormorant } from 'next/font/google';
const cormorant = Cormorant({ subsets: ['latin'] });

export default function Navigation() {
  return (
    <>
      <nav className={`${cormorant.className} ${styles.nav}`}>
        {/* Left */}
        <div className={styles.left}>
          <Link className={styles.link} href={'/'}>
            <Icon
              src={'/noSignal.png'}
              width={42}
              height={42}
              alt={'order'}
              quality={80}
              priority={true}
            />
          </Link>
          <span className={styles.header}>The Easiest Way.</span>
        </div>

        {/* Right */}
        <div className={styles.right}>
          <Link className={styles.link} href={'/warm'}>
            <Icon
              src={'/icon-pen.svg'}
              width={24}
              height={24}
              alt={'order'}
              quality={80}
              priority={true}
            />
          </Link>
        </div>
      </nav>
    </>
  );
}
