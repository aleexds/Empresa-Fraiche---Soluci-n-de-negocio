const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 48px',
    background: 'rgba(255, 255, 255, 0.92)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(0,0,0,0.06)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
  },
  logoIcon: {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(135deg, #4a7c59, #c9a96e)',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    color: 'white',
    fontWeight: 700,
    fontFamily: '"Poppins", sans-serif',
  },
  logoText: {
    fontSize: '24px',
    fontWeight: 700,
    color: '#4a7c59',
    letterSpacing: '-0.5px',
    fontFamily: '"Poppins", sans-serif',
  },
  logoAccent: {
    color: '#c9a96e',
  },
  links: {
    display: 'flex',
    gap: '32px',
    alignItems: 'center',
    listStyle: 'none',
  },
  link: {
    textDecoration: 'none',
    color: '#555',
    fontSize: '15px',
    fontWeight: 500,
    fontFamily: '"Poppins", sans-serif',
    transition: 'color 0.2s',
    cursor: 'pointer',
  },
  cartBtn: {
    background: '#4a7c59',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    fontSize: '18px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
}

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <a href="#" style={styles.logo}>
        <div style={styles.logoIcon}>F</div>
        <div style={styles.logoText}>
          Fra<span style={styles.logoAccent}>i</span>che
        </div>
      </a>
      <ul style={styles.links}>
        <li><a href="#inicio" style={styles.link}>Inicio</a></li>
        <li><a href="#productos" style={styles.link}>Productos</a></li>
        <li><a href="#perfil" style={styles.link}>Perfil</a></li>
        <li>
          <button style={styles.cartBtn}>🛒</button>
        </li>
      </ul>
    </nav>
  )
}
