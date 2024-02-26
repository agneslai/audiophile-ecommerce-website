import { ImageBestGear } from "@/app/assets/images";
import Image from "next/image";
import styles from './index.module.scss';
import Container from "@/app/components/Container";

const SectionIntro = () => {
  return (
    <div className={styles.sectionIntro}>
      <Container>
        <div className={styles.sectionIntro__wrapper}>

          <div className={styles.sectionIntro__content}>
            <div>
              <h3>Bringing you the <span>best</span> audio gear</h3>
              <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
          </div>

          <Image src={ImageBestGear} alt="man listening music with earphone" className={styles.sectionIntro__image} />
        </div>
      </Container>
    </div>
  )
}

export default SectionIntro;