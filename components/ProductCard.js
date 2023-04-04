/* Components */
import Icon from '@/components/Icon';

/* Styles */
import styles from '@/styles/components/ProductCard.module.scss';

/* Fonts */
import { Cormorant } from 'next/font/google';
const cormorant = Cormorant({ subsets: ['latin'] });

export default function ProductCard({ icon, header, description }) {
  return (
    <>
      <div className={styles.container}>
        <Icon
          src={icon}
          width={32}
          height={32}
          alt={'order'}
          quality={80}
          priority={true}
        />
        <span className={`${cormorant.className} ${styles.header}`}>
          {header}
        </span>
        <span className={styles.description}>{description}</span>
      </div>
    </>
  );
}
