import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px clamp(18px, 5vw, 64px)',
    background: '#5E2B72',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(255,255,255,0.18)',
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
    color: '#ffffff',
    fontSize: '15px',
    fontWeight: 500,
    fontFamily: '"Poppins", sans-serif',
    transition: 'color 0.2s',
    cursor: 'pointer',
    padding: '6px 10px',
    borderRadius: '8px',
  },
  linkBtnActive: {
    background: 'rgba(255,255,255,0.16)',
    border: 'none',
    color: '#ffffff',
    fontSize: '15px',
    fontWeight: 700,
    fontFamily: '"Poppins", sans-serif',
    transition: 'color 0.2s',
    cursor: 'pointer',
    padding: '6px 12px',
    borderRadius: '8px',
  },
  cartBtn: {
    background: '#D4AF37',
    color: '#222222',
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
    background: '#D4AF37',
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
        <img
          src="https://th.bing.com/th/id/R.da7cf2b590ecf904aa66dc0ac5b8a3cc?rik=XSSa6TItTSXPqg&riu=http%3a%2f%2fmallmegaplaza.com%2fwp-content%2fuploads%2f2020%2f08%2f1_fraiche.png&ehk=Kri3MfWqS7qVXlzpOv4jOtOQEF7ePkgso9Pd6cWOfug%3d&risl=&pid=ImgRaw&r=0"
          alt="Fraiche"
          style={{ width: '116px', height: 'auto', display: 'block' }}
        />
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
              e.currentTarget.style.background = '#b89420'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.background = '#D4AF37'
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



