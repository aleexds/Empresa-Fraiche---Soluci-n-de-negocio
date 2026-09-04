import { useState, useMemo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass,
  faTruckFast,
} from '@fortawesome/free-solid-svg-icons'
import Navbar from '../components/Navbar.jsx'
import ProductCard from '../components/ProductCard.jsx'
import Footer from '../components/Footer.jsx'
import CartModal from '../components/CartModal.jsx'
import CheckoutModal from '../components/CheckoutModal.jsx'
import { perfumes } from '../data/perfumes.js'

const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    background: '#FFFFFF',
    minHeight: '100vh',
    color: '#1a1a1a',
  },
  hero: {
    textAlign: 'center',
    padding: '60px 24px 40px',
    background: '#E8C5C8',
    borderBottom: '1px solid rgba(94,43,114,0.15)',
  },
  heroTitle: {
    fontSize: '38px',
    fontWeight: 700,
    color: '#1a1a1a',
    margin: '0 0 10px',
    letterSpacing: '-0.5px',
  },
  heroAccent: {
    color: '#5E2B72',
  },
  heroSub: {
    fontSize: '16px',
    color: '#666',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
  section: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 24px 80px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    marginBottom: '36px',
    background: '#ffffff',
    padding: '16px 24px',
    borderRadius: '16px',
    boxShadow: '0 2px 14px rgba(0,0,0,0.04)',
    border: '1px solid #f0ede6',
  },
  searchWrap: {
    position: 'relative',
    minWidth: '280px',
    flex: 1,
    maxWidth: '400px',
  },
  searchIcon: {
    position: 'absolute',
    left: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#999',
    fontSize: '14px',
  },
  searchInput: {
    width: '100%',
    padding: '12px 16px 12px 38px',
    borderRadius: '10px',
    border: '1px solid #ddd',
    fontSize: '14px',
    fontFamily: "'Poppins', sans-serif",
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  },
  categoryFilters: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },
  filterBtn: {
    background: '#f7f5ef',
    border: '1px solid #e5e0d4',
    padding: '8px 18px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: 500,
    color: '#555',
    cursor: 'pointer',
    fontFamily: "'Poppins', sans-serif",
    transition: 'all 0.2s',
  },
  filterBtnActive: {
    background: '#5E2B72',
    border: '1px solid #5E2B72',
    padding: '8px 18px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: 600,
    color: 'white',
    cursor: 'pointer',
    fontFamily: "'Poppins', sans-serif",
    boxShadow: '0 2px 8px rgba(94,43,114,0.25)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
    gap: '28px',
  },
  emptyNotice: {
    textAlign: 'center',
    padding: '60px 20px',
    color: '#777',
  },
  deliveryNotice: {
    background: '#E8C5C8',
    borderRadius: '12px',
    padding: '12px 20px',
    marginBottom: '28px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: '#5E2B72',
    fontSize: '13px',
    fontWeight: 500,
  },
}

export default function Catalog({
  userProfile,
  onNavigate,
  cart = [],
  onAddToCart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [searchQuery, setSearchQuery] = useState('')
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  const categories = [
    'Todos',
    'Fragancia femenina',
    'Fragancia masculina',
    'Unisex',
  ]

  const filteredPerfumes = useMemo(() => {
    return perfumes.filter((p) => {
      const matchesCategory =
        selectedCategory === 'Todos' || p.category === selectedCategory
      const matchesSearch =
        p.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.descripcion.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <div style={styles.container}>
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={onNavigate}
        activePage="catalogo"
      />

      {/* Hero Header */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>
          Nuestra Colección de <span style={styles.heroAccent}>Fragancias</span>
        </h1>
        <p style={styles.heroSub}>
          Explora la línea exclusiva de perfumes elaborados con extractos naturales de Costa Rica.
          Envíos únicamente dentro del país.
        </p>
      </section>

      {/* Catalog Main Content */}
      <section style={styles.section}>
        {/* Delivery Notice */}
        <div style={styles.deliveryNotice}>
          <FontAwesomeIcon icon={faTruckFast} style={{ fontSize: '18px' }} />
          <span>
            <strong>Envíos Únicamente en Costa Rica:</strong> Despacho express gratis a <strong>{userProfile?.provincia || 'todas las provincias'}</strong> en 24-48 horas.
          </span>
        </div>

        {/* Toolbar: Search + Category Filters */}
        <div style={styles.toolbar}>
          <div style={styles.searchWrap}>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={styles.searchIcon} />
            <input
              style={styles.searchInput}
              type="text"
              placeholder="Buscar perfume, notas aromáticas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div style={styles.categoryFilters}>
            {categories.map((cat) => (
              <button
                key={cat}
                style={
                  selectedCategory === cat
                    ? styles.filterBtnActive
                    : styles.filterBtn
                }
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === 'Todos' ? 'Todas las Fragancias' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filteredPerfumes.length === 0 ? (
          <div style={styles.emptyNotice}>
            <h3>No se encontraron perfumes para tu búsqueda</h3>
            <p>Intenta con otro término o selecciona otra categoría.</p>
          </div>
        ) : (
          <div style={styles.grid}>
            {filteredPerfumes.map((p) => (
              <ProductCard
                key={p.id}
                id={p.id}
                nombre={p.nombre}
                isPremium={p.isPremium}
                descripcion={p.descripcion}
                imagen={p.imagen}
                badge={p.badge}
                categoria={p.categoria}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}
      </section>

      <Footer />

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={onUpdateQuantity}
        onRemoveItem={onRemoveItem}
        onClearCart={onClearCart}
        onStartCheckout={() => {
          setIsCartOpen(false)
          setIsCheckoutOpen(true)
        }}
        userProfile={userProfile}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        onPaymentSuccess={onClearCart}
        userProfile={userProfile}
      />
    </div>
  )
}
