import styles from "./page.module.scss";
import SectionHero from "./sections/SectionHero";
import SectionCategories from "./sections/SectionCategories";

export default function Home() {
  return (
    <main className={styles.main}>
      <SectionHero />
      <SectionCategories />
    </main>
  );
}
