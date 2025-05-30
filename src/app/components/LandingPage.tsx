// components/LandingPage.tsx
import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Páginas web profesionales para tu negocio
        </h1>
        <p className={styles.heroText}>
          Mostrá tus servicios, ganá confianza y empezá a recibir consultas con
          tu propio sitio web.
        </p>
        <button className={styles.primaryButton}>Quiero mi página web</button>
      </section>

      {/* Sobre mí */}
      <section className={styles.aboutSection}>
        <h2 className={styles.sectionTitle}>¿Quién soy?</h2>
        <div className={styles.aboutContent}>
          <img
            src="/img-kaganovicz.jpeg" // reemplazá por tu foto real
            alt="Foto de Fernando Kaganovicz"
            className={styles.aboutImage}
          />
          <div className={styles.aboutTextContainer}>
            <p>
              Me llamo Fernando Kaganovicz y soy desarrollador web con más de 4
              años de experiencia creando sitios modernos, rápidos y pensados
              para convertir visitas en clientes.
            </p>
            <p>
              Trabajo de forma freelance ayudando a profesionales y negocios a
              tener presencia en internet sin complicaciones técnicas. Mi
              enfoque es práctico, claro y adaptado a lo que realmente
              necesitás.
            </p>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className={styles.benefits}>
        {[
          "Diseño adaptado a celular",
          "Contacto directo por WhatsApp",
          "Entrega en 7 días",
          "Sin complicaciones",
        ].map((benefit, i) => (
          <div key={i} className={styles.benefitCard}>
            <span className={styles.benefitIcon}>✅</span>
            <span>{benefit}</span>
          </div>
        ))}
      </section>

      {/* Cómo funciona */}
      <section className={styles.stepsSection}>
        <h2 className={styles.sectionTitle}>¿Cómo funciona?</h2>
        <ol className={styles.stepsList}>
          <li>Me contás qué necesitás</li>
          <li>Te envío una propuesta simple</li>
          <li>Diseñamos y revisamos</li>
          <li>¡Tu web online en menos de una semana!</li>
        </ol>
      </section>

      {/* Ejemplos */}
      <section className={styles.examplesSection}>
        <h2 className={styles.sectionTitle}>
          Algunos ejemplos de páginas que hice
        </h2>
        <div className={styles.examplesGrid}>
          <div className={styles.exampleCard}>
            <img
              src="/web_professor_artist.png"
              alt="Ejemplo 1"
              className={styles.exampleImage}
            />
            <p className={styles.exampleTitle}>Landing Profesor/Artista</p>
            <p className={styles.exampleText}>
              Doble interfaz, una para perfil de profesor y otra con perfil
              artístico.
            </p>
            <a
              href="https://portfolio-juanma-brown.vercel.app/"
              className={styles.thirdButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visitar Web
            </a>
          </div>
        </div>
      </section>

      {/* Planes y precios */}
      <section className={styles.pricingSection}>
        <h2 className={styles.sectionTitle}>Planes y precios</h2>
        <div className={styles.pricingGrid}>
          {/* Plan base */}
          <div className={styles.pricingCard}>
            <h3 className={styles.pricingTitle}>Plan base – $150.000 ARS</h3>
            <ul className={styles.pricingList}>
              <li>1 página (inicio, servicios, contacto)</li>
              <li>Diseño responsivo</li>
              <li>WhatsApp directo</li>
              <li>Formulario de contacto</li>
              <li>Hosting gratis por 1 año</li>
              <li>Entrega en 7 días</li>
            </ul>
            <p className={styles.pricingNote}>
              Opcionales con recargos: dominio personalizado, más secciones,
              integración con redes, etc.
            </p>
          </div>

          {/* Plan profesional */}
          <div className={styles.pricingCard}>
            <h3 className={styles.pricingTitle}>
              Plan profesional – $220.000 ARS
            </h3>
            <ul className={styles.pricingList}>
              <li>Hasta 3 secciones</li>
              <li>Diseño personalizado</li>
              <li>WhatsApp y formulario de contacto</li>
              <li>SEO básico</li>
              <li>Hosting gratis por 1 año</li>
              <li>Entrega en 10 días</li>
            </ul>
            <p className={styles.pricingNote}>
              Incluye soporte técnico por 15 días post-entrega.
            </p>
          </div>

          {/* Plan avanzado */}
          <div className={styles.pricingCard}>
            <h3 className={styles.pricingTitle}>
              Plan avanzado – $300.000 ARS
            </h3>
            <ul className={styles.pricingList}>
              <li>Hasta 6 secciones</li>
              <li>Diseño a medida</li>
              <li>Integración con redes y mapa</li>
              <li>Galería o portfolio</li>
              <li>SEO avanzado + velocidad</li>
              <li>Hosting + dominio gratis</li>
              <li>Entrega en 14 días</li>
            </ul>
            <p className={styles.pricingNote}>
              Incluye soporte técnico por 1 mes y una revisión gratuita.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.paymentInfoSection}>
        <p>
          Todos los planes cuentan con hasta{" "}
          <strong>3 cuotas sin interés</strong>. Podés pagar por{" "}
          <strong>transferencia bancaria</strong> o <strong>efectivo</strong>.
        </p>
      </section>

      {/* CTA final */}
      <section className={styles.ctaFinal}>
        <h2 className={styles.sectionTitle}>¿Querés tu web?</h2>
        <p className={styles.heroText}>
          Escribime por WhatsApp y contame tu idea, o dejá tus datos y te
          contacto.
        </p>
        <a
          href="https://wa.me/5491121775778"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.secondaryButton}
        >
          Hablame por WhatsApp
        </a>
      </section>
    </div>
  );
}
