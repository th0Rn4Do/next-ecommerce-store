import Image from 'next/image';
import styles from './layout.module.scss';

export default function HomePage() {
  return (
    <main>
      <div className={styles.headingAlignment}>
        Welcome to the Artner & Artner art gallery!
      </div>
      <br />
      <br />
      <br />
      <section className={styles.paintingsArrangement}>
        <div className={styles.paintingFrame}>
          <Image
            src="/images/No. 1 - 2023.png"
            alt='Remake of the Wedding at Cana - by "Dall-e Veronese" - scenery: Brooklyn Bridge'
            width="256"
            height="256"
          />
        </div>
      </section>
    </main>
  );
}
