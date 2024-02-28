'use client'

import { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';
import Container from '../Container';
import HeaderCartButton from '../HeaderCartButton';
import { Logo } from '@/app/assets/images';

const Header = () => {
  const [showOverlay, setShowOverylay] = useState<boolean>(false);

  const onPressCart = () => {
    setShowOverylay(pre => !pre);
  };

  return (
    <header className={styles.header}>
      <div
        className={clsx(styles.header__fullScreenOverlay, showOverlay && styles.mod__display)}
        onClick={() => setShowOverylay(false)}
      />

      <Container>
        <div className={styles.header__wrapper}>
          <Link href='/'>
            <Image src={Logo} alt='logo' width={165} height={32} />
          </Link>
          <nav className={styles.header__nav}>
            <ul>
              <li><Link href="/">HOME</Link></li>
              <li><Link href="/headphones">HEADPHONES</Link></li>
              <li><Link href="/speakers">SPEAKERS</Link></li>
              <li><Link href="/earphones">EARPHONES</Link></li>
            </ul>
          </nav>
          <HeaderCartButton onPressCart={onPressCart} showPopUp={showOverlay} />
        </div>
      </Container>
    </header>
  )
}

export default Header;