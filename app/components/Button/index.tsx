"use client";

import Image from 'next/image';
import styles from './index.module.scss';
import { clsx } from 'clsx';
import { IconArrowRight } from '@/app/assets/images';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'transparent';
}

const Button = ({ variant = 'primary', children, onClick }: ButtonProps) => {
  const getVarientStyle = () => {
    switch (variant) {
      case 'primary':
        return styles.mod__primary;
      case 'secondary':
        return styles.mod__secondary;
      case 'transparent':
        return styles.mod__transparent;
      default:
        return styles.mod__primary;
    }
  }

  return (
    <button className={clsx(styles.button, getVarientStyle())} onClick={onClick}>
      {children}
      {variant === 'transparent' &&
        <span><Image src={IconArrowRight} alt="icon arrow right" width={5} height={10} /></span>
      }
    </button>
  )
}

export default Button;