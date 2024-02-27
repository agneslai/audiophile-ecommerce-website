import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';
import Button from '../Button';

interface Props {
  image: StaticImageData;
  imageAlt: string;
  title: string;
}

const CategoryCard = ({ image, imageAlt, title }: Props) => {
  return (
    <div className={styles.categoryCard}>
      <div className={styles.categoryCard__image}>
        <Image src={image} alt={imageAlt} />
      </div>
      <p className={styles.categoryCard__title}>{title}</p>
      <Link href={`./${title}`}><Button variant='transparent' icon>SHOP</Button></Link>
    </div>
  )
}

export default CategoryCard