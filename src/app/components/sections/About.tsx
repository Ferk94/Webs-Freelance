import styles from './About.module.css';
import Image from 'next/image';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/img-kaganovicz.jpeg"
            alt="Foto de Fernando Kaganovicz"
            width={200}
            height={200}
            className={styles.image}
          />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Sobre mí</h2>
          <p className={styles.text}>
            Soy <strong>Fernando Kaganovicz</strong>, desarrollador full-stack con enfoque en backend, pero con fuerte aprecio por la calidad visual del frontend.
            Me especializo en <strong>Node.js</strong>, <strong>PostgreSQL</strong> y <strong>React</strong>.
            Ayudo a profesionales y emprendedores a tener presencia online moderna, efectiva y escalable.
          </p>
          <p className={styles.text}>
            Con experiencia en equipos ágiles y productos en producción, ofrezco soluciones que automatizan procesos y optimizan tu negocio para que puedas concentrarte en crecer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
