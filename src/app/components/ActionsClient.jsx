"use client";

import React from 'react';

export default function ActionsClient() {
  const handleMoreInfo = (e) => {
    e.preventDefault();
    // Placeholder action: open a modal or navigate — currently just logs
    if (typeof window !== 'undefined') {
      window.alert('Más información pronto.');
    }
  };

  return (
    <div style={styles.actions}>
      <a href="mailto:info@birdiecare.com" style={styles.cta}>
        Avisarme cuando esté listo
      </a>
      <a href="#" style={styles.secondary} onClick={handleMoreInfo}>
        Más información
      </a>
    </div>
  );
}

const styles = {
  actions: {
    display: 'flex',
    gap: 12,
    marginTop: 8,
  },
  cta: {
    background: '#0ea5a4',
    color: 'white',
    padding: '10px 16px',
    borderRadius: 10,
    textDecoration: 'none',
    fontWeight: 600,
  },
  secondary: {
    background: 'transparent',
    color: '#0f172a',
    padding: '10px 16px',
    borderRadius: 10,
    textDecoration: 'none',
    border: '1px solid #e6eef8',
  },
};
