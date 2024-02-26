import styles from "./page.module.scss";
import SectionHero from "./sections/SectionHero";
import SectionCategories from "./sections/SectionCategories";
import SectionProducts from "./sections/SectionProducts";
import SectionIntro from "./sections/SectionIntro";

export default function Home() {
  return (
    <main className={styles.main}>
      <SectionHero />
      <SectionCategories />
      <SectionProducts />
      <SectionIntro />
    </main>
  );
}
