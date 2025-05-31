import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>Proyectos destacados</h2>
      <div className={styles.projectCard}>
        <img
          src="/web_professor_artist.png"
          alt="Portfolio Profesor/Artista"
          className={styles.projectImage}
        />
        <div className={styles.projectContent}>
          <h3 className={styles.projectTitle}>Portfolio Profesor/Artista</h3>
          <p className={styles.projectDescription}>
            Una landing avanzada con doble interfaz que combina perfil profesional
            y artístico. Permite mostrar servicios y portafolio de forma clara y atractiva.
          </p>
          <p className={styles.projectPlan}>
            Tipo de plan: <strong>Landing Avanzada</strong>
          </p>
          <a
            href="https://portfolio-juanma-brown.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectButton}
          >
            Visitar Web
          </a>
        </div>
      </div>
    </section>
  );
}
