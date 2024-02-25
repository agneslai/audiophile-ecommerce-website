import Image from "next/image";
import styles from "./page.module.scss";
import Button from "@/app/components/Button";
import Container from "@/app/components/Container";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Container>
        
        <Button>See Product</Button>

      </Container>
    </main>
  );
}
