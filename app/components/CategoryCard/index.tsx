import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';
import Button from '../Button';

interface Props {
  image: StaticImageData;
  imageAlt: string;
  category: string;
}

const CategoryCard = ({ image, imageAlt, category }: Props) => {
  return (
    <div className={styles.categoryCard}>
      <div className={styles.categoryCard__image}>
        <Image src={image} alt={imageAlt} />
      </div>
      <p className={styles.categoryCard__title}>{category}</p>
      <Link href={`/${category}`}><Button variant='transparent' icon>SHOP</Button></Link>
    </div>
  )
}

export default CategoryCard