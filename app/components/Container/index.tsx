import clsx from 'clsx';
import styles from './index.module.scss';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({children, className}: ContainerProps) => {
  return (
    <div className={clsx(styles.container, className)}>{children}</div>
  )
}

export default Container