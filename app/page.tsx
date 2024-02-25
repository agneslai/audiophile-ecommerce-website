import styles from "./page.module.scss";
import SectionHero from "./sections/SectionHero";

export default function Home() {
  return (
    <main className={styles.main}>
      <SectionHero />
    </main>
  );
}
