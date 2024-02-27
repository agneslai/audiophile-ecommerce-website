import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';
import Button from '../Button';

interface CategoryProduct {
  index: number;
  image: string | StaticImageData;
  imageAlt: string;
  name: string;
  desc: string;
  newProduct: boolean;
  link?: string;
}

const CategoryProduct = ({ index, image, imageAlt, name, desc, newProduct, link }: CategoryProduct) => {
  return (
    <div className={clsx(styles.categoryProduct, index % 2 !== 0 && styles.mod__reverse)}>
      <Image
        src={image}
        alt={imageAlt}
        className={styles.categoryProduct__image}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
      <div className={styles.categoryProduct__content}>
        <div className={clsx(styles.categoryProduct__contentWrapper, index % 2 !== 0 && styles.mod__paddingRight)}>
          {newProduct && <h3>NEW PRODUCT</h3>}
          <h2>{name}</h2>
          <p>{desc}</p>

          {link &&
            <Link
              href={link}>
              <Button>See Product</Button>
            </Link>
          }
        </div>
      </div>
    </div>
  )
}

export default CategoryProduct