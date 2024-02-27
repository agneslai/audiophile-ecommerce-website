'use client';

import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import styles from "./page.module.scss";
import Container from "@/app/components/Container";
import CategoryProduct from "@/app/components/CategoryProduct";
import SectionCategories from "@/app/sections/SectionCategories";
import SectionIntro from "@/app/sections/SectionIntro";
import { Product } from "../utils/types";
import data from '../data.json';

export default function Category() {
  const { category } = useParams<{ category: string }>();

  const [products, setProducts] = useState<Product[]>();

  const getProducts = useCallback(() => {
    return data.filter((product) => product.category === category);
  }, [category]);

  useEffect(() => {
    const products = getProducts();
    setProducts(products);

  }, [category, getProducts])

  return (
    <main className={styles.main}>
      <div className={styles.category__header}>
        <h1>{category}</h1>
      </div>

      <Container>
        <div className={styles.category__products}>
          {products?.map((product, index) => (
            <CategoryProduct
              key={product.id}
              index={index}
              image={product.image.desktop}
              imageAlt={product.name}
              name={product.name}
              desc={product.description}              
              newProduct={product.new}
              link={`/${product.category}/${product.slug}`}
            />
          ))}
        </div>
      </Container>
      <SectionCategories />
      <SectionIntro />
    </main>
  );
}
