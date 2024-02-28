'use client';

import clsx from 'clsx';
import Image from 'next/image';
import styles from './index.module.scss';
import Button from '../Button';
import NumberInput from '../NumberInput';
import { IconCart, ImageEarphoneYx1 } from '@/app/assets/images';

interface Props {
  showPopUp: boolean;
  onPressCart: () => void;
}

const HeaderCartButton = ({ showPopUp, onPressCart }: Props) => {
  const handleOnChange = () => { };

  return (
    <div className={styles.headerCartButton}>
      <Image src={IconCart} alt='cart icon' onClick={onPressCart} />
      
      <div className={clsx(styles.headerCartButton__popup, showPopUp && styles.mod__display)}>
        <div className={styles.headerCartButton__titleWrapper}>
          <p>CART(4)</p>
          <Button variant='transparent'><span>Remove All</span></Button>
        </div>

        <div className={styles.headerCartButton__items}>
          <div className={styles.headerCartButton__item}>
            <div className={styles.headerCartButton__imageWrapper}>
              <Image src={ImageEarphoneYx1} width={64} height={64} alt="" />
              <div>
                <p>XX99 MKII</p>
                <p>$2,999</p>
              </div>
            </div>

            <NumberInput onChangeValue={handleOnChange} />
          </div>
        </div>

        <div className={styles.headerCartButton__totalWrapper}>
          <p>TOTAL</p>
          <p>$6,396</p>
        </div>

        <Button>Checkout</Button>
      </div>
    </div>
  )
}

export default HeaderCartButton;