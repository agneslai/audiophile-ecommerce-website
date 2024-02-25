import styles from './index.module.scss';
import CategoryCard from '@/app/components/CategoryCard';
import Container from '@/app/components/Container';
import { ThumbnailEarphones, ThumbnailHeadphones, ThumbnailSpeakers } from '@/app/assets/images';

const CATEGORIES = [
  {
    title: 'HEADPHONES',
    image: ThumbnailHeadphones,
    imageAlt: 'headphone',
  },
  {
    title: 'SPEAKERS',
    image: ThumbnailSpeakers,
    imageAlt: 'speakers',
  },
  {
    title: 'EARPHONES',
    image: ThumbnailEarphones,
    imageAlt: 'earphones',
  },
]

const SectionCategories = () => {
  return (
    <section className={styles.sectionCategories}>
      <Container>
        <div className={styles.sectionCategories__wrapper}>
          {CATEGORIES.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              image={category.image}
              imageAlt={category.imageAlt}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default SectionCategories