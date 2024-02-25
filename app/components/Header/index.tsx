import Image from 'next/image';
import Container from '../Container';
import styles from './index.module.scss';
import { IconCart, Logo } from '@/app/assets/images';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__wrapper}>
          <Image src={Logo} alt='logo' width={165} height={32} />
          <nav className={styles.header__nav}>
            <ul>
              <li><Link href="/">HOME</Link></li>
              <li><Link href="/">HEADPHONES</Link></li>
              <li><Link href="/">SPEAKERS</Link></li>
              <li><Link href="/">EARPHONES</Link></li>
            </ul>
          </nav>
          <button className={styles.header__cartButton}>
            <Image src={IconCart} alt='cart icon' />
          </button>
        </div>
      </Container>
    </header>
  )
}

export default Header