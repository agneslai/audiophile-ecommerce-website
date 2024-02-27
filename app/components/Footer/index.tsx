import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';
import { IconFacebook, IconInstagram, IconTwitter, Logo } from '@/app/assets/images';
import Container from '../Container';


const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.footer__wrapper}>
          <Image src={Logo} alt='logo' />

          <nav className={styles.footer__nav}>
            <ul>
              <li><Link href="/">HOME</Link></li>
              <li><Link href="/headphones">HEADERPHONES</Link></li>
              <li><Link href="/speakers">SPEAKER</Link></li>
              <li><Link href="/earphones">EARPHONES</Link></li>
            </ul>
          </nav>
        </div>

        <div className={styles.footer__wrapper}>
          <p className={styles.footer__desc}>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
          <div className={styles.footer__socialMedia}>
            <Link href="/"><Image src={IconFacebook} alt='Facebook icon'/></Link>
            <Link href="/"><Image src={IconTwitter} alt='Twitter icon'/></Link>
            <Link href="/"><Image src={IconInstagram} alt='Instagram icon'/></Link>
          </div>
        </div>

        <div className={styles.footer__wrapper}>
          <p className={styles.footer__copyright}>Copyright 2024. All Rights Reserved</p>
        </div>
      </Container>
    </div>
  )
}

export default Footer