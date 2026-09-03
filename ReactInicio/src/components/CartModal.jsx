
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBagShopping,
  faTrash,
  faXmark,
  faPlus,
  faMinus,
  faTruckFast,
} from '@fortawesome/free-solid-svg-icons'


const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(4px)',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'flex-end',
    transition: 'opacity 0.3s ease',
  },
  drawer: {
    width: '100%',
    maxWidth: '440px',
    height: '100%',
    background: '#ffffff',
    boxShadow: '-4px 0 25px rgba(0,0,0,0.15)',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    fontFamily: "'Poppins', sans-serif",
    animation: 'slideIn 0.3s ease-out',
  },
  header: {
    padding: '24px',
    borderBottom: '1px solid #f0f0f0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#faf8f5',
  },
  titleWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  title: {
    margin: 0,
    fontSize: '20px',
    fontWeight: 700,
    color: '#1a1a1a',
  },
  badge: {
    background: '#5E2B72',
    color: 'white',
    fontSize: '12px',
    fontWeight: 600,
    padding: '2px 8px',
    borderRadius: '12px',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    color: '#777',
    padding: '4px 8px',
    borderRadius: '8px',
    transition: 'background 0.2s',
  },
  body: {
    flex: 1,
    overflowY: 'auto',
    padding: '20px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  emptyState: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    textAlign: 'center',
    color: '#888',
    gap: '12px',
    padding: '40px 20px',
  },
  emptyIcon: {
    fontSize: '48px',
    color: '#D4AF37',
    marginBottom: '8px',
  },
  emptyText: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#333',
    margin: 0,
  },
  emptySubtext: {
    fontSize: '14px',
    color: '#888',
    margin: 0,
  },
  exploreBtn: {
    marginTop: '16px',
    background: '#5E2B72',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '10px',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: "'Poppins', sans-serif",
  },
  itemCard: {
    display: 'flex',
    gap: '14px',
    padding: '14px',
    borderRadius: '12px',
    border: '1px solid #f0ede6',
    background: '#fdfcf9',
    alignItems: 'center',
  },
  itemImg: {
    width: '70px',
    height: '70px',
    borderRadius: '10px',
    objectFit: 'cover',
  },
  itemInfo: {
    flex: 1,
  },
  itemCategory: {
    fontSize: '10px',
    color: '#D4AF37',
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  itemName: {
    fontSize: '15px',
    fontWeight: 600,
    color: '#1a1a1a',
    margin: '2px 0 4px',
  },
  itemPrice: {
    fontSize: '14px',
    fontWeight: 700,
    color: '#5E2B72',
  },
  qtyContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '6px',
  },
  qtyBtn: {
    width: '26px',
    height: '26px',
    borderRadius: '6px',
    border: '1px solid #ddd',
    background: '#fff',
    cursor: 'pointer',
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    color: '#333',
  },
  qtyNumber: {
    fontSize: '14px',
    fontWeight: 600,
    minWidth: '20px',
    textAlign: 'center',
  },
  removeBtn: {
    background: 'none',
    border: 'none',
    color: '#e05656',
    cursor: 'pointer',
    fontSize: '16px',
    padding: '6px',
    borderRadius: '6px',
  },
  footer: {
    padding: '24px',
    borderTop: '1px solid #f0f0f0',
    background: '#faf8f5',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14px',
    color: '#666',
  },
  totalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '18px',
    fontWeight: 700,
    color: '#1a1a1a',
    paddingTop: '10px',
    borderTop: '1px dashed #e0ded8',
  },
  totalPrice: {
    color: '#5E2B72',
    fontSize: '22px',
  },
  checkoutBtn: {
    background: '#D4AF37',
    color: 'white',
    border: 'none',
    padding: '14px',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: "'Poppins', sans-serif",
    transition: 'all 0.2s ease',
  },
  clearBtn: {
    background: 'transparent',
    color: '#888',
    border: '1px solid #ddd',
    padding: '8px',
    borderRadius: '8px',
    fontSize: '13px',
    cursor: 'pointer',
    fontFamily: "'Poppins', sans-serif",
  },
}

export default function CartModal({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onStartCheckout,
  userProfile,
}) {
  if (!isOpen) return null

  const totalColones = cart.reduce(
    (acc, item) => acc + item.precio * item.quantity,
    0
  )

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  const handleCheckout = () => {
    if (onStartCheckout) {
      onStartCheckout()
    }
  }

  return (
    <div
      style={styles.overlay}
      onClick={onClose}
    >
      <div
        style={styles.drawer}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.titleWrap}>
            <h3 style={styles.title}>Tu Carrito</h3>
            <span style={styles.badge}>{totalItems} items</span>
          </div>
          <button
            style={styles.closeBtn}
            onClick={onClose}
            title="Cerrar carrito"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        {/* Body */}
        <div style={styles.body}>
          {cart.length === 0 ? (
            <div style={styles.emptyState}>
              <div style={styles.emptyIcon}>
                <FontAwesomeIcon icon={faBagShopping} />
              </div>
              <p style={styles.emptyText}>Tu carrito está vacío</p>
              <p style={styles.emptySubtext}>
                Explora nuestras fragancias costarricenses y añade tus favoritas.
              </p>
              <button
                style={styles.exploreBtn}
                onClick={onClose}
              >
                Ver Colección
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} style={styles.itemCard}>
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  style={styles.itemImg}
                  onError={(e) => {
                    e.target.src = `https://placehold.co/70x70/f5f0e8/4a7c59?text=Fraiche`
                  }}
                />
                <div style={styles.itemInfo}>
                  <span style={styles.itemCategory}>{item.categoria}</span>
                  <div style={styles.itemName}>{item.nombre}</div>
                  <div style={styles.itemPrice}>
                    ₡{(item.precio * item.quantity).toLocaleString('es-CR')}
                  </div>

                  {/* Quantity Controls */}
                  <div style={styles.qtyContainer}>
                    <button
                      style={styles.qtyBtn}
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      title="Disminuir"
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span style={styles.qtyNumber}>{item.quantity}</span>
                    <button
                      style={styles.qtyBtn}
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      title="Aumentar"
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                </div>

                <button
                  style={styles.removeBtn}
                  onClick={() => onRemoveItem(item.id)}
                  title="Eliminar del carrito"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div style={styles.footer}>
            <div style={styles.summaryRow}>
              <span>Subtotal</span>
              <span>₡{totalColones.toLocaleString('es-CR')}</span>
            </div>
            <div style={styles.summaryRow}>
              <span>
                <FontAwesomeIcon icon={faTruckFast} style={{ marginRight: '6px', color: '#5E2B72' }} />
                Envíos únicamente en Costa Rica ({userProfile?.provincia || 'Costa Rica'})
              </span>
              <span style={{ color: '#5E2B72', fontWeight: 600 }}>Gratis</span>
            </div>
            <div style={styles.totalRow}>
              <span>Total</span>
              <span style={styles.totalPrice}>
                ₡{totalColones.toLocaleString('es-CR')}
              </span>
            </div>


            <button
              style={styles.checkoutBtn}
              onClick={handleCheckout}
              onMouseEnter={(e) => (e.target.style.background = '#b89420')}
              onMouseLeave={(e) => (e.target.style.background = '#D4AF37')}
            >
              Finalizar Pedido
            </button>

            <button
              style={styles.clearBtn}
              onClick={onClearCart}
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

