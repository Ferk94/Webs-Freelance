import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Páginas web profesionales para mostrar lo que hacés
          </h1>
          <p className={styles.subtitle}>
            Sitios modernos, rápidos y pensados para convertir visitas en consultas.
          </p>
          <a href="#contacto" className={styles.button}>
            Quiero mi página web
          </a>
        </div>
      </div>
    </section>
  );
}
