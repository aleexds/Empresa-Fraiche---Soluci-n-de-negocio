import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

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
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: 0,
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
    margin: 0,
    padding: 0,
  },
  linkBtn: {
    background: 'none',
    border: 'none',
    color: '#555',
    fontSize: '15px',
    fontWeight: 500,
    fontFamily: '"Poppins", sans-serif',
    transition: 'color 0.2s',
    cursor: 'pointer',
    padding: '6px 10px',
    borderRadius: '8px',
  },
  linkBtnActive: {
    background: 'rgba(74, 124, 89, 0.1)',
    border: 'none',
    color: '#4a7c59',
    fontSize: '15px',
    fontWeight: 700,
    fontFamily: '"Poppins", sans-serif',
    transition: 'color 0.2s',
    cursor: 'pointer',
    padding: '6px 12px',
    borderRadius: '8px',
  },
  cartBtn: {
    background: '#4a7c59',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '44px',
    height: '44px',
    fontSize: '18px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    transition: 'transform 0.2s, background 0.2s',
  },
  cartBadge: {
    position: 'absolute',
    top: '-4px',
    right: '-4px',
    background: '#c9a96e',
    color: '#1a1a1a',
    fontSize: '11px',
    fontWeight: 700,
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    fontFamily: '"Poppins", sans-serif',
  },
}

export default function Navbar({
  cartCount = 0,
  onOpenCart,
  onNavigate,
  activePage = 'home',
}) {
  const handleNav = (page, hash) => {
    if (onNavigate) {
      onNavigate(page)
    }
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <nav style={styles.nav}>
      <button
        style={styles.logo}
        onClick={() => handleNav('home')}
        title="Fraiche Costa Rica"
      >
        <div style={styles.logoIcon}>F</div>
        <div style={styles.logoText}>
          Fra<span style={styles.logoAccent}>i</span>che
        </div>
      </button>

      <ul style={styles.links}>
        <li>
          <button
            style={activePage === 'home' ? styles.linkBtnActive : styles.linkBtn}
            onClick={() => handleNav('home')}
          >
            Inicio
          </button>
        </li>
        <li>
          <button
            style={activePage === 'catalogo' ? styles.linkBtnActive : styles.linkBtn}
            onClick={() => handleNav('catalogo')}
          >
            Colección
          </button>
        </li>
        <li>
          <button
            style={activePage === 'perfil' ? styles.linkBtnActive : styles.linkBtn}
            onClick={() => handleNav('perfil')}
          >
            Mi Perfil
          </button>
        </li>
        <li>
          <button
            style={styles.cartBtn}
            onClick={onOpenCart}
            title="Ver carrito de compras"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.08)'
              e.currentTarget.style.background = '#3d6b4c'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.background = '#4a7c59'
            }}
          >
            <FontAwesomeIcon icon={faCartShopping} />
            {cartCount > 0 && (
              <span style={styles.cartBadge}>{cartCount}</span>
            )}
          </button>
        </li>
      </ul>
    </nav>
  )
}



