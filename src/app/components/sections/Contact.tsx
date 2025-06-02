'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import styles from './Contact.module.css';

interface FormData {
  name: string;
  email: string;
  message: string;
  [key: string]: string; // permite propiedades string-indexadas
}

type Status = 'success' | 'error' | null;

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<Status>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const envData = {
        serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        userId: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
    }

    emailjs.send(
        envData.serviceId || '',
        envData.templateId || '',
        formData,
        envData.userId || ''
    )   
    .then(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(() => setStatus('error'));
  };

  return (
    <section className={styles.contactSection}>
      <h2 className={styles.title}>Contacto</h2>
      <p className={styles.description}>
        Usá el siguiente formulario y ponete en contacto con el desarrollador. <br />
        También podés usar el botón de WhatsApp flotante para escribir directamente.
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Tu correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          className={styles.textarea}
          name="message"
          placeholder="Tu mensaje"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button className={styles.button} type="submit">Enviar</button>
        {status === 'success' && (
          <p className={styles.successMessage}>Mensaje enviado, gracias!</p>
        )}
        {status === 'error' && (
          <p className={styles.errorMessage}>Error al enviar, intenta nuevamente.</p>
        )}
      </form>
    </section>
  );
}
