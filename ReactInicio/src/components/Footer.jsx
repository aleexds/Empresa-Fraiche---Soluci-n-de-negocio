
const styles = {
  footer: {
    background: '#5E2B72',
    color: 'rgba(255,255,255,0.6)',
    textAlign: 'center',
    padding: '32px 24px',
    fontSize: '14px',
    fontFamily: "'Poppins', sans-serif",
  },
  footerBrand: {
    color: '#D4AF37',
  },
}

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={{ margin: 0 }}>
        &copy; 2026 <span style={styles.footerBrand}>Fraiche</span> — Perfumería premium en Costa Rica.
      </p>
    </footer>
  )
}
