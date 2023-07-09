import Image from 'next/image';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main>
      <div className={styles.headingAlignment}>
        <h1>Artner & Artner</h1>
        Welcome to the Artner & Artner virtual art gallery!
      </div>
      <br />
      <br />
      <br />
      <section className={styles.paintingsArrangement}>
        <div className={styles.paintingFrame}>
          <Image
            src="/images/No. 1 - 2023.png"
            width="256"
            height="256"
            data-test-id="product-image"
            alt='Remake of the Wedding at Cana - by "Dall-e Veronese" - scenery: Brooklyn Bridge'
          />
        </div>
      </section>
    </main>
  );
}
