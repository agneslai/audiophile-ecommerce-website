'use client';

import Image from "next/image";
import Link from "next/link";
import styles from './index.module.scss';
import Button from "../Button";
import data from '../../data.json';

interface Props {
  image: string;
  name: string;
  slug: string;
}

const ProductCard = ({ image, name, slug }: Props) => {
  const getLink = () => {
    const product = data.find(item => item.slug === slug);
    return `/${product?.category}/${slug}`
  }

  return (
    <div className={styles.productCard}>
      <div className={styles.productCard__imageWrapper}>
        <Image
          src={image}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <p>{name}</p>
      <Link href={getLink()}>
        <Button>See Products</Button>
      </Link>
    </div>
  )
}

export default ProductCard