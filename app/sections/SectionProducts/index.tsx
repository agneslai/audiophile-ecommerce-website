import Image from 'next/image';
import styles from './index.module.scss';
import Container from '@/app/components/Container';
import Button from '@/app/components/Button';
import { ImageSpeakerZx9 } from '@/app/assets/images';

const SectionProducts = () => {
  return (
    <section className={styles.sectionProducts}>
      <Container>
        <div className={styles.sectionProducts__wrapper}>
          <div className={styles.sectionProducts__zx9Image}>

          </div>

          <div className={styles.sectionProducts__zx9}>
            <h1>ZX9<br />SPEAKER</h1>
            <p>Upgrade to premium speakers that are<br /> phenomenally built to deliver truly remarkable sound.</p>
            <Button variant='black'>SEE PRODUCT</Button>
          </div>
        </div>
      </Container>
    </section>

  )
}

export default SectionProducts