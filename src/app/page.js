import Image from "next/image";
import ActionsClient from './components/ActionsClient';

export default function Home() {
  return (
    <main style={styles.page}>
      <div style={styles.card}>
        <div style={styles.brandRow}>
          <div style={styles.logoWrap}>
            <Image src="/next.svg" alt="logo" width={48} height={48} priority />
          </div>
          <h1 style={styles.title}>BirdieCare</h1>
        </div>

        <h2 style={styles.headline}>Sitio en construcción</h2>
        <p style={styles.lead}>
          Estamos trabajando para traerte una experiencia mejor. Pronto volveremos con
          nuevas funcionalidades y un diseño renovado.
        </p>

        <ActionsClient />

        <div style={styles.progressRow} aria-hidden>
          <div style={styles.progressBar}>
            <div style={styles.progressFill} />
          </div>
          <span style={styles.progressLabel}>Casi listo — 10%</span>
        </div>

        <div style={styles.illustration}>
          <Image src="/globe.svg" alt="en construcción" width={240} height={160} />
        </div>

        <footer style={styles.footer}>
          <small>© {new Date().getFullYear()} BirdieCare — Todos los derechos reservados</small>
        </footer>
      </div>
    </main>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '48px 24px',
    background: 'linear-gradient(180deg, #f7fbff 0%, #ffffff 100%)',
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    color: '#0f172a',
  },
  card: {
    maxWidth: 820,
    width: '100%',
    background: 'white',
    borderRadius: 16,
    boxShadow: '0 10px 30px rgba(15,23,42,0.08)',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    gap: 18,
    alignItems: 'center',
  },
  brandRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    width: '100%',
  },
  logoWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
    borderRadius: 12,
    background: 'linear-gradient(135deg,#06b6d4,#7c3aed20)',
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
    margin: 0,
  },
  headline: {
    fontSize: 28,
    margin: '6px 0 0 0',
    textAlign: 'center',
  },
  lead: {
    margin: 0,
    color: '#475569',
    textAlign: 'center',
    maxWidth: 680,
    lineHeight: 1.5,
  },
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
  progressRow: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginTop: 8,
  },
  progressBar: {
    flex: 1,
    height: 8,
    background: '#eef2ff',
    borderRadius: 999,
    overflow: 'hidden',
  },
  progressFill: {
    width: '10%',
    height: '100%',
    background: 'linear-gradient(90deg,#7c3aed,#06b6d4)',
    borderRadius: 999,
    transition: 'width 800ms ease',
  },
  progressLabel: {
    fontSize: 13,
    color: '#94a3b8',
    whiteSpace: 'nowrap',
  },
  illustration: {
    marginTop: 8,
  },
  footer: {
    marginTop: 6,
    color: '#94a3b8',
  },
};
