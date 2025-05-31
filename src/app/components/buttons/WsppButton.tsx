'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './WsppButton.module.css';

const WsppButton = () => {
  const phoneNumber = '541121775778'; // ← Reemplazá esto con tu número (código país + sin espacios)

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <button className={styles.floatingButton} onClick={handleClick} aria-label="WhatsApp">
      <FaWhatsapp className={styles.icon} />
    </button>
  );
};

export default WsppButton;
