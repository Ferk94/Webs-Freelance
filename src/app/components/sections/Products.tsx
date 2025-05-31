import styles from './Products.module.css';

const plans = [
  {
    title: 'Landing Básica',
    price: '$150.000 ARS',
    features: [
      'Página única scrollable',
      'Diseño responsive',
      'Formulario de contacto',
      'Optimización básica',
      '1 mes de mantenimiento gratuito'
    ],
    highlight: false,
  },
  {
    title: 'Landing Avanzada',
    price: '$220.000 ARS',
    features: [
      'Todas las funciones de la básica',
      'Múltiples secciones',
      'Ruteo interno',
      'Animaciones suaves',
      'Integraciones externas',
      '1 mes de mantenimiento gratuito'
    ],
    highlight: true,
  },
  {
    title: 'Landing Pro + E-commerce',
    price: '$320.000 ARS',
    features: [
      'Todo lo de la Avanzada',
      'Carrito de compras',
      'Pasarela de pagos',
      'Gestión de productos',
      'Checkout personalizado',
      '1 mes de mantenimiento gratuito'
    ],
    highlight: false,
  },
];

export default function Products() {
  return (
    <section className={styles.plans}>
      <div className={styles.container}>
        <h2 className={styles.title}>Planes de Desarrollo Web</h2>
        <p className={styles.subtitle}>
          Elegí el plan que mejor se adapte a tus necesidades.
        </p>
        <div className={styles.grid}>
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`${styles.card} ${plan.highlight ? styles.highlight : ''}`}
            >
              <h3 className={styles.planTitle}>{plan.title}</h3>
              <p className={styles.price}>{plan.price}</p>
              <ul className={styles.features}>
                {plan.features.map((feature, i) => (
                  <li key={i} className={styles.feature}>✅ {feature}</li>
                ))}
              </ul>
              <button className={styles.button}>Solicitar</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
