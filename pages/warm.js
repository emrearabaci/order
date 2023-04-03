/* Next API */
import Head from 'next/head';

/* Components */
import ProductCard from '@/components/ProductCard';

/* Styles */
import styles from '@/styles/pages/Warm.module.scss';

const menuItems = [
  {
    id: 0,
    icon: '/icon-cup-hot.svg',
    header: 'Black Coffee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    products: [
      {
        id: 0,
        name: 'Espresso'
      },
      {
        id: 1,
        name: 'Americano'
      },
      {
        id: 2,
        name: 'Filter'
      }
    ]
  },
  {
    id: 1,
    icon: '/icon-cup-hot.svg',
    header: 'Chocolate',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    products: [
      {
        id: 0,
        name: 'Mocha'
      },
      {
        id: 1,
        name: 'Hot Chocolate'
      }
    ]
  },
  {
    id: 2,
    icon: '/icon-cup-hot.svg',
    header: 'Milk',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    products: [
      {
        id: 0,
        name: 'Latte'
      },
      {
        id: 1,
        name: 'Cappuccino'
      },
      {
        id: 2,
        name: 'Flat White'
      },
      {
        id: 3,
        name: 'Cortado'
      }
    ]
  },
  {
    id: 3,
    icon: '/icon-cup-hot.svg',
    header: 'Iced',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    products: [
      {
        id: 0,
        name: 'Iced Latte'
      },
      {
        id: 1,
        name: 'Iced Americano'
      },
      {
        id: 2,
        name: 'Iced Mocha'
      }
    ]
  },
  {
    id: 4,
    icon: '/icon-cup-hot.svg',
    header: 'Tea',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    products: [
      {
        id: 0,
        name: 'Earl Grey'
      },
      {
        id: 1,
        name: 'Green Jasmin'
      }
    ]
  }
];

export default function Warm() {
  return (
    <>
      <Head>
        <title>Warm | Order</title>
      </Head>

      <div className={styles.container}>
        {menuItems.map((item, index) => (
          <div key={index}>
            <ProductCard
              icon={item.icon}
              header={item.header}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </>
  );
}
