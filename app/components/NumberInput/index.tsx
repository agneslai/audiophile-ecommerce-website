'use client'

import { useEffect, useState } from 'react';
import styles from './index.module.scss';

interface Props {
  onChangeValue: (v: number) => void;
}

const NumberInput = ({ onChangeValue }: Props) => {
  const [value, setValue] = useState<number>(0);

  const handleDecreament = () => {
    if (value === 0) { return }
    setValue(pre => pre - 1);
  }
  const handleIncreament = () => {
    setValue(pre => pre + 1);
  }

  useEffect(() => {
    onChangeValue(value);
  }, [value, onChangeValue])

  return (
    <div className={styles.numberInput}>
      <div className={styles.numberInput__wrapper}>
        <button onClick={handleDecreament}>-</button>
        <input
          type='number'
          min={0}
          placeholder='0'
          value={value}
          onChange={(e) =>setValue(parseInt(e.target.value))}
        />
        <button onClick={handleIncreament}>+</button>
      </div>
    </div>
  )
}

export default NumberInput;