import Image from 'next/image';
import styles from './index.module.scss';
import Container from '@/app/components/Container';
import Button from '@/app/components/Button';
import { ImageEarphoneYx1, ImageSpeakerZx9, PatternCirle } from '@/app/assets/images';

const SectionProducts = () => {
  return (
    <section className={styles.sectionProducts}>
      <Container>
        <div className={styles.sectionProducts__speaker}>
          <div className={styles['sectionProducts__speaker--imageWrapper']}>
            <Image
              src={PatternCirle}
              alt='circle pattern background'
              className={styles['sectionProducts__speaker--patternBg']}
            />
            <Image
              src={ImageSpeakerZx9}
              alt="Speaker"
              className={styles['sectionProducts__speaker--image']}
            />
          </div>

          <div className={styles['sectionProducts__speaker--text']}>
            <h1>ZX9<br />SPEAKER</h1>
            <p>Upgrade to premium speakers that are<br /> phenomenally built to deliver truly remarkable sound.</p>
            <Button variant='black'>SEE PRODUCT</Button>
          </div>
        </div>

        <div className={styles.sectionProducts__speakerZx7}>
          <p>ZX7 Speaker</p>
          <Button variant='secondary'>See Product</Button>
        </div>

        <div className={styles.sectionProducts__earphone}>
            <Image src={ImageEarphoneYx1} alt='earphone YX1' className={styles['sectionProducts__earphone--image']} />

          <div className={styles['sectionProducts__earphone--textWrapper']}>
            <div>
              <p>YX1 EARPHONES</p>
              <Button variant='secondary'>See Product</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>

  )
}

export default SectionProducts;