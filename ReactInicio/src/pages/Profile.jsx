import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faEnvelope,
  faLocationDot,
  faTruckFast,
  faCreditCard,
  faMobileScreenButton,
  faBoxOpen,
  faPenToSquare,
  faCheck,
  faArrowLeft,
  faShieldHalved,
  faClock,
  faGem,
} from '@fortawesome/free-solid-svg-icons'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import CartModal from '../components/CartModal.jsx'
import CheckoutModal from '../components/CheckoutModal.jsx'

const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    background: '#fdfbf7',
    minHeight: '100vh',
    color: '#1a1a1a',
  },
  wrapper: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '40px 24px 80px',
  },
  backLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    color: '#4a7c59',
    fontWeight: 600,
    fontSize: '14px',
    textDecoration: 'none',
    cursor: 'pointer',
    marginBottom: '24px',
    background: 'none',
    border: 'none',
    padding: 0,
    fontFamily: "'Poppins', sans-serif",
  },
  profileHeader: {
    background: 'linear-gradient(135deg, #eaf4ec 0%, #faf5ec 100%)',
    borderRadius: '20px',
    padding: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '24px',
    marginBottom: '32px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
    border: '1px solid rgba(74, 124, 89, 0.12)',
  },
  avatarGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #4a7c59, #c9a96e)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    fontWeight: 700,
    boxShadow: '0 8px 20px rgba(74, 124, 89, 0.25)',
  },
  userName: {
    margin: '0 0 6px',
    fontSize: '26px',
    fontWeight: 700,
    color: '#1a1a1a',
  },
  userMeta: {
    margin: 0,
    fontSize: '14px',
    color: '#666',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flexWrap: 'wrap',
  },
  vipBadge: {
    background: '#c9a96e',
    color: '#1a1a1a',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 700,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    letterSpacing: '0.3px',
  },
  deliveryBanner: {
    background: '#ffffff',
    border: '1px solid #4a7c59',
    borderRadius: '16px',
    padding: '16px 20px',
    marginBottom: '32px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    boxShadow: '0 2px 12px rgba(74, 124, 89, 0.08)',
  },
  deliveryBannerIcon: {
    fontSize: '24px',
    color: '#4a7c59',
  },
  deliveryBannerText: {
    margin: 0,
    fontSize: '14px',
    color: '#333',
    lineHeight: 1.5,
  },
  tabsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '28px',
  },
  card: {
    background: 'white',
    borderRadius: '16px',
    padding: '28px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    border: '1px solid #f0ede6',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    borderBottom: '1px solid #f5f2eb',
    paddingBottom: '12px',
  },
  cardTitle: {
    margin: 0,
    fontSize: '18px',
    fontWeight: 700,
    color: '#1a1a1a',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  cardIcon: {
    color: '#4a7c59',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    marginBottom: '16px',
  },
  label: {
    fontSize: '13px',
    fontWeight: 600,
    color: '#555',
  },
  input: {
    padding: '12px 14px',
    borderRadius: '10px',
    border: '1px solid #ddd',
    fontSize: '14px',
    fontFamily: "'Poppins', sans-serif",
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  select: {
    padding: '12px 14px',
    borderRadius: '10px',
    border: '1px solid #ddd',
    fontSize: '14px',
    fontFamily: "'Poppins', sans-serif",
    outline: 'none',
    background: '#fff',
  },
  textarea: {
    padding: '12px 14px',
    borderRadius: '10px',
    border: '1px solid #ddd',
    fontSize: '14px',
    fontFamily: "'Poppins', sans-serif",
    outline: 'none',
    minHeight: '80px',
    resize: 'vertical',
  },
  saveBtn: {
    background: '#4a7c59',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    padding: '12px 20px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'background 0.2s',
    fontFamily: "'Poppins', sans-serif",
  },
  savedToast: {
    color: '#2e563b',
    fontWeight: 600,
    fontSize: '13px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    marginLeft: '12px',
  },
  paymentCardPreview: {
    background: 'linear-gradient(135deg, #1f2937, #111827)',
    color: 'white',
    borderRadius: '14px',
    padding: '20px',
    marginBottom: '16px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.15)',
  },
  sinpeCardPreview: {
    background: 'linear-gradient(135deg, #2d5a3c, #1e3d29)',
    color: 'white',
    borderRadius: '14px',
    padding: '20px',
    marginBottom: '16px',
    boxShadow: '0 6px 18px rgba(45, 90, 60, 0.2)',
  },
  orderItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 0',
    borderBottom: '1px solid #f0ede6',
  },
  orderStatus: {
    fontSize: '12px',
    fontWeight: 600,
    padding: '4px 10px',
    borderRadius: '20px',
    background: '#eaf4ec',
    color: '#2e563b',
  },
}

export default function Profile({
  userProfile,
  onUpdateProfile,
  onNavigate,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) {
  const [formData, setFormData] = useState({ ...userProfile })
  const [isSaved, setIsSaved] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onUpdateProfile(formData)
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 2500)
  }

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <div style={styles.container}>
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={onNavigate}
        activePage="perfil"
      />

      <div style={styles.wrapper}>
        {/* Back navigation */}
        <button style={styles.backLink} onClick={() => onNavigate('home')}>
          <FontAwesomeIcon icon={faArrowLeft} /> Volver a la Tienda de Perfumes
        </button>

        {/* Profile Header */}
        <div style={styles.profileHeader}>
          <div style={styles.avatarGroup}>
            <div style={styles.avatar}>
              {formData.nombre ? formData.nombre.charAt(0).toUpperCase() : 'U'}
            </div>
            <div>
              <h1 style={styles.userName}>{formData.nombre}</h1>
              <p style={styles.userMeta}>
                <span>
                  <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '6px', color: '#4a7c59' }} />
                  {formData.email}
                </span>
                <span>
                  <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: '6px', color: '#4a7c59' }} />
                  {formData.provincia}, Costa Rica
                </span>
              </p>
            </div>
          </div>
          <div style={styles.vipBadge}>
            <FontAwesomeIcon icon={faGem} /> Cliente Premium Fraiche
          </div>
        </div>

        {/* Notice of Costa Rica Delivery Only */}
        <div style={styles.deliveryBanner}>
          <div style={styles.deliveryBannerIcon}>
            <FontAwesomeIcon icon={faTruckFast} />
          </div>
          <p style={styles.deliveryBannerText}>
            <strong>Cobertura de Entrega:</strong> Envíos <u>únicamente dentro del territorio de Costa Rica</u>.
            Los pedidos con destino a <strong>{formData.provincia}</strong> se despachan a domicilio con servicio express o Correos de Costa Rica en 24-48 horas hábiles.
          </p>
        </div>

        {/* Profile Grid Cards */}
        <div style={styles.tabsGrid}>
          {/* Card 1: Datos Personales */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h3 style={styles.cardTitle}>
                <FontAwesomeIcon icon={faUser} style={styles.cardIcon} /> Datos Personales
              </h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Nombre Completo</label>
                <input
                  style={styles.input}
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Correo Electrónico</label>
                <input
                  style={styles.input}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Teléfono / WhatsApp (Costa Rica)</label>
                <input
                  style={styles.input}
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Cédula / Identificación</label>
                <input
                  style={styles.input}
                  type="text"
                  name="cedula"
                  value={formData.cedula}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" style={styles.saveBtn}>
                <FontAwesomeIcon icon={faPenToSquare} /> Guardar Datos
              </button>

              {isSaved && (
                <span style={styles.savedToast}>
                  <FontAwesomeIcon icon={faCheck} /> ¡Actualizado con éxito!
                </span>
              )}
            </form>
          </div>

          {/* Card 2: Dirección de Entrega en Costa Rica */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h3 style={styles.cardTitle}>
                <FontAwesomeIcon icon={faLocationDot} style={styles.cardIcon} /> Dirección de Entrega (CR)
              </h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Provincia (Costa Rica)</label>
                <select
                  style={styles.select}
                  name="provincia"
                  value={formData.provincia}
                  onChange={handleChange}
                >
                  <option value="San José">San José</option>
                  <option value="Alajuela">Alajuela</option>
                  <option value="Cartago">Cartago</option>
                  <option value="Heredia">Heredia</option>
                  <option value="Guanacaste">Guanacaste</option>
                  <option value="Puntarenas">Puntarenas</option>
                  <option value="Limón">Limón</option>
                </select>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Cantón y Distrito</label>
                <input
                  style={styles.input}
                  type="text"
                  name="canton"
                  placeholder="Ej. Central, Carmen"
                  value={formData.canton}
                  onChange={handleChange}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Dirección Exacta (Señas)</label>
                <textarea
                  style={styles.textarea}
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                  placeholder="Señas exactas, color de casa, portón, puntos de referencia..."
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Instrucciones para el Repartidor</label>
                <input
                  style={styles.input}
                  type="text"
                  name="detallesEntrega"
                  value={formData.detallesEntrega}
                  onChange={handleChange}
                  placeholder="Ej. Tocar timbre, dejar en recepción..."
                />
              </div>

              <button type="submit" style={styles.saveBtn}>
                <FontAwesomeIcon icon={faPenToSquare} /> Actualizar Dirección
              </button>
            </form>
          </div>

          {/* Card 3: Métodos de Pago Guardados */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h3 style={styles.cardTitle}>
                <FontAwesomeIcon icon={faCreditCard} style={styles.cardIcon} /> Métodos de Pago
              </h3>
            </div>

            {/* SINPE Móvil Preview */}
            <div style={styles.sinpeCardPreview}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '13px', fontWeight: 600 }}>
                  <FontAwesomeIcon icon={faMobileScreenButton} style={{ marginRight: '6px' }} /> SINPE Móvil Vinculado
                </span>
                <span style={{ fontSize: '11px', background: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '10px' }}>
                  Predeterminado
                </span>
              </div>
              <div style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '1px' }}>
                {formData.telefono || '+506 8890-1234'}
              </div>
              <div style={{ fontSize: '12px', opacity: 0.8, marginTop: '4px' }}>
                Titular: {formData.nombre}
              </div>
            </div>

            {/* Credit Card Preview */}
            <div style={styles.paymentCardPreview}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <FontAwesomeIcon icon={faCreditCard} style={{ fontSize: '20px', color: '#c9a96e' }} />
                <span style={{ fontSize: '11px', letterSpacing: '0.5px' }}>VISA / MASTERCARD</span>
              </div>
              <div style={{ fontSize: '16px', letterSpacing: '2px', fontWeight: 600, marginBottom: '10px' }}>
                {formData.tarjetaMascara || '•••• •••• •••• 4242'}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', opacity: 0.8 }}>
                <span>{formData.nombre?.toUpperCase()}</span>
                <span>VENCE: {formData.tarjetaVencimiento || '11/28'}</span>
              </div>
            </div>

            <div style={{ fontSize: '12px', color: '#777', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <FontAwesomeIcon icon={faShieldHalved} style={{ color: '#4a7c59' }} />
              Pagos protegidos con encriptación bancaria de alta seguridad.
            </div>
          </div>

          {/* Card 4: Historial de Pedidos Recientes */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h3 style={styles.cardTitle}>
                <FontAwesomeIcon icon={faBoxOpen} style={styles.cardIcon} /> Pedidos Recientes (Costa Rica)
              </h3>
            </div>

            <div style={styles.orderItem}>
              <div>
                <div style={{ fontWeight: 600, fontSize: '14px', color: '#1a1a1a' }}>
                  Orden #FR-CR-90412
                </div>
                <div style={{ fontSize: '12px', color: '#888', marginTop: '2px' }}>
                  <FontAwesomeIcon icon={faClock} style={{ marginRight: '4px' }} /> 28 Feb 2026 • 2 perfumes
                </div>
                <div style={{ fontSize: '13px', color: '#4a7c59', fontWeight: 700, marginTop: '4px' }}>
                  ₡84,000 (SINPE Móvil)
                </div>
              </div>
              <span style={styles.orderStatus}>
                <FontAwesomeIcon icon={faCheck} style={{ marginRight: '4px' }} /> Entregado
              </span>
            </div>

            <div style={styles.orderItem}>
              <div>
                <div style={{ fontWeight: 600, fontSize: '14px', color: '#1a1a1a' }}>
                  Orden #FR-CR-87102
                </div>
                <div style={{ fontSize: '12px', color: '#888', marginTop: '2px' }}>
                  <FontAwesomeIcon icon={faClock} style={{ marginRight: '4px' }} /> 15 Ene 2026 • 1 perfume
                </div>
                <div style={{ fontSize: '13px', color: '#4a7c59', fontWeight: 700, marginTop: '4px' }}>
                  ₡52,000 (Tarjeta)
                </div>
              </div>
              <span style={styles.orderStatus}>
                <FontAwesomeIcon icon={faCheck} style={{ marginRight: '4px' }} /> Entregado
              </span>
            </div>

            <div style={{ marginTop: '16px', textAlign: 'center' }}>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#4a7c59',
                  fontWeight: 600,
                  fontSize: '13px',
                  cursor: 'pointer',
                  fontFamily: "'Poppins', sans-serif",
                }}
                onClick={() => onNavigate('home')}
              >
                + Comprar Nuevas Fragancias
              </button>
            </div>
          </div>
        </div>
      </div>

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
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        onPaymentSuccess={onClearCart}
        userProfile={formData}
      />
    </div>
  )
}
