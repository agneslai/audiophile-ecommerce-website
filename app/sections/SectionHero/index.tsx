import styles from './index.module.scss';
import Container from '@/app/components/Container';
import Button from '@/app/components/Button';

const SectionHero = () => {
  return (
    <section className={styles.sectionHero}>
      <Container className={styles.sectionHero__container}>
        <div className={styles.sectionHero__wrapper}>
          <div className={styles.sectionHero__intro}>
            <div className={styles.sectionHero__intro__text}>
              <h2>NEW PRODUCT</h2>
              <h1>XX99 Mark II Headphones</h1>
              <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            </div>
            <Button>See Product</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SectionHero;