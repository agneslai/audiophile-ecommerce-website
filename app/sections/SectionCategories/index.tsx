import styles from './index.module.scss';
import CategoryCard from '@/app/components/CategoryCard';
import Container from '@/app/components/Container';
import { ThumbnailEarphones, ThumbnailHeadphones, ThumbnailSpeakers } from '@/app/assets/images';

const CATEGORIES = [
  {
    title: 'headphones',
    image: ThumbnailHeadphones,
    imageAlt: 'headphone',
  },
  {
    title: 'speakers',
    image: ThumbnailSpeakers,
    imageAlt: 'speakers',
  },
  {
    title: 'earphones',
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
              category={category.title}
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