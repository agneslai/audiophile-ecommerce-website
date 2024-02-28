'use client';

import { useCallback, useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './page.module.scss';
import Container from '@/app/components/Container';
import Button from '@/app/components/Button';
import CategoryProduct from '@/app/components/CategoryProduct';
import ProductCard from '@/app/components/ProductCard';
import { Product } from "@/app/utils/types";
import SectionIntro from '@/app/sections/SectionIntro';
import SectionCategories from '@/app/sections/SectionCategories';
import data from '../../data.json';

const Product = () => {
  const { category, product } = useParams<{ category: string; product: string }>();
  const router = useRouter();

  const [productDetails, setProductDetails] = useState<Product>();

  const getProduct = useCallback(() => {
    return data.find((item) => item.slug === product);
  }, [product]);

  useEffect(() => {
    const product = getProduct();
    setProductDetails(product);

  }, [product, getProduct])

  return (
    <div>
      <Container>
        <div className={styles.product__backButtonWrapper}>
          <Button variant="transparent" onClick={() => router.back()}>
            <span style={{ textTransform: 'capitalize' }}>Go Back</span>
          </Button>
        </div>

        {productDetails &&
          <CategoryProduct
            index={0}
            newProduct={productDetails?.new}
            image={productDetails?.image.desktop}
            imageAlt={productDetails?.name}
            name={productDetails?.name}
            desc={productDetails?.description}
            price={productDetails?.price}
          />
        }

        <div className={styles.product__feature}>
          <div className={styles.product__featureText}>
            <h3>FEATURE</h3>
            <p>{productDetails?.features}</p>
          </div>

          <div className={styles.product__featureIncludes}>
            <h3>IN THE BOX</h3>
            <ul>
              {productDetails?.includes.map((item) => (
                <li key={item.item}><span>{item.quantity}x</span>{item.item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.product__gallery}>
          <Image src={productDetails?.gallery.first.desktop || ''}
            alt=''
            width={0}
            height={0}
            sizes="100vw"
          />
          <Image src={productDetails?.gallery.second.desktop || ''}
            alt=''
            width={0}
            height={0}
            sizes="100vw"
          />
          <Image src={productDetails?.gallery.third.desktop || ''}
            alt=''
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>

        <div className={styles.product__other}>
          <h2>YOU MAY ALSO LIKE</h2>
          <div className={styles.product__otherWrapper}>
            {productDetails?.others.map((item) => (
              <ProductCard
                key={item.slug}
                name={item.name}
                image={item.image.desktop}
                slug={item.slug}
              />
            ))}
          </div>
        </div>
      </Container>

      <SectionCategories />
      <SectionIntro />
    </div>
  )
}

export default Product