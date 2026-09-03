import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMobileScreenButton,
  faCreditCard,
  faMoneyBillWave,
  faCheck,
  faXmark,
  faReceipt,
  faTruckFast,
} from '@fortawesome/free-solid-svg-icons'


const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(6px)',
    zIndex: 1100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: "'Poppins', sans-serif",
  },
  modal: {
    background: '#ffffff',
    borderRadius: '20px',
    width: '100%',
    maxWidth: '560px',
    maxHeight: '90vh',
    overflowY: 'auto',
    boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    animation: 'popIn 0.3s ease-out',
  },
  header: {
    padding: '20px 28px',
    borderBottom: '1px solid #f0f0f0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#faf8f5',
  },
  headerTitle: {
    margin: 0,
    fontSize: '20px',
    fontWeight: 700,
    color: '#1a1a1a',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    fontSize: '22px',
    cursor: 'pointer',
    color: '#888',
    padding: '4px',
    lineHeight: 1,
  },
  body: {
    padding: '28px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  sectionTitle: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
    margin: '0 0 10px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    marginBottom: '12px',
  },
  label: {
    fontSize: '13px',
    fontWeight: 600,
    color: '#444',
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
  inputRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
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
  methodGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    marginBottom: '14px',
  },
  methodCard: {
    border: '2px solid #eee',
    borderRadius: '12px',
    padding: '14px 10px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
  },
  methodCardActive: {
    border: '2px solid #4a7c59',
    borderRadius: '12px',
    padding: '14px 10px',
    textAlign: 'center',
    cursor: 'pointer',
    background: '#f1f8f3',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
  },
  methodIcon: {
    fontSize: '22px',
  },
  methodName: {
    fontSize: '12px',
    fontWeight: 600,
    color: '#333',
  },
  sinpeBox: {
    background: '#fcf8f0',
    border: '1px solid #fae6c6',
    borderRadius: '12px',
    padding: '16px',
    fontSize: '13px',
    color: '#6d5328',
    lineHeight: 1.5,
  },
  sinpePhone: {
    fontSize: '17px',
    fontWeight: 700,
    color: '#4a7c59',
    display: 'block',
    margin: '4px 0',
  },
  orderSummaryBox: {
    background: '#fbfaf8',
    border: '1px solid #f0ede6',
    borderRadius: '12px',
    padding: '16px',
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '13px',
    color: '#666',
    marginBottom: '6px',
  },
  summaryTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '16px',
    fontWeight: 700,
    color: '#1a1a1a',
    marginTop: '10px',
    paddingTop: '10px',
    borderTop: '1px dashed #ddd',
  },
  payBtn: {
    background: '#4a7c59',
    color: 'white',
    border: 'none',
    borderRadius: '14px',
    padding: '16px',
    fontSize: '16px',
    fontWeight: 700,
    cursor: 'pointer',
    fontFamily: "'Poppins', sans-serif",
    transition: 'background 0.2s, transform 0.1s',
    boxShadow: '0 4px 14px rgba(74, 124, 89, 0.3)',
  },
  // Processing State
  processingWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 20px',
    textAlign: 'center',
    gap: '16px',
  },
  spinner: {
    width: '54px',
    height: '54px',
    border: '4px solid #e0ede4',
    borderTop: '4px solid #4a7c59',
    borderRadius: '50%',
    animation: 'spin 0.9s linear infinite',
  },
  processingTitle: {
    fontSize: '20px',
    fontWeight: 700,
    color: '#1a1a1a',
    margin: '8px 0 0',
  },
  processingSub: {
    fontSize: '14px',
    color: '#777',
    margin: 0,
  },
  // Success State
  successWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '10px 0',
    gap: '16px',
  },
  successIcon: {
    width: '68px',
    height: '68px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #4a7c59, #3d6b4c)',
    color: 'white',
    fontSize: '34px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 24px rgba(74, 124, 89, 0.35)',
  },
  successTitle: {
    fontSize: '22px',
    fontWeight: 700,
    color: '#1a1a1a',
    margin: '4px 0 0',
  },
  successSub: {
    fontSize: '14px',
    color: '#666',
    margin: 0,
    maxWidth: '420px',
  },
  receiptCard: {
    width: '100%',
    background: '#fdfcf9',
    border: '1px solid #eae5db',
    borderRadius: '14px',
    padding: '20px',
    textAlign: 'left',
    boxSizing: 'border-box',
  },
  receiptHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #eee',
    paddingBottom: '12px',
    marginBottom: '12px',
  },
  receiptOrderNum: {
    fontWeight: 700,
    color: '#4a7c59',
    fontSize: '15px',
  },
  receiptDate: {
    fontSize: '12px',
    color: '#999',
  },
  receiptItem: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '13px',
    color: '#444',
    marginBottom: '8px',
  },
  receiptTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '16px',
    fontWeight: 700,
    color: '#1a1a1a',
    borderTop: '1px dashed #ddd',
    paddingTop: '12px',
    marginTop: '12px',
  },
  finishBtn: {
    width: '100%',
    background: '#4a7c59',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    padding: '14px',
    fontSize: '15px',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: "'Poppins', sans-serif",
  },
}

export default function CheckoutModal({
  isOpen,
  onClose,
  cart,
  onPaymentSuccess,
  userProfile,
}) {
  const [step, setStep] = useState('FORM') // 'FORM' | 'PROCESSING' | 'SUCCESS'
  const [paymentMethod, setPaymentMethod] = useState('SINPE') // 'SINPE' | 'CARD' | 'CASH'
  const [formData, setFormData] = useState({
    nombre: userProfile?.nombre || '',
    telefono: userProfile?.telefono || '',
    provincia: userProfile?.provincia || 'San José',
    direccion: userProfile?.direccion || '',
    sinpeRef: '',
    cardNumber: '',
    cardExpiry: userProfile?.tarjetaVencimiento || '',
    cardCvv: '',
  })
  const [orderNumber, setOrderNumber] = useState('')

  if (!isOpen) return null


  const totalColones = cart.reduce(
    (acc, item) => acc + item.precio * item.quantity,
    0
  )
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.nombre.trim() || !formData.telefono.trim() || !formData.direccion.trim()) {
      alert('Por favor completa tu nombre, teléfono y dirección de entrega.')
      return
    }

    // Generate random Costa Rican order number
    const randomOrder = `FR-CR-${Math.floor(100000 + Math.random() * 900000)}`
    setOrderNumber(randomOrder)

    // Simulate payment processing
    setStep('PROCESSING')
    setTimeout(() => {
      setStep('SUCCESS')
    }, 2000)
  }

  const handleFinish = () => {
    onPaymentSuccess()
    setStep('FORM')
    onClose()
  }

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={styles.header}>
          <h3 style={styles.headerTitle}>
            {step === 'FORM' && 'Confirmación de Pago'}
            {step === 'PROCESSING' && 'Procesando Pago'}
            {step === 'SUCCESS' && '¡Comprobante de Compra!'}
          </h3>
          {step !== 'PROCESSING' && (
            <button
              style={styles.closeBtn}
              onClick={step === 'SUCCESS' ? handleFinish : onClose}
              title="Cerrar"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          )}
        </div>

        <div style={styles.body}>
          {/* STEP 1: FORM */}
          {step === 'FORM' && (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {/* Resumen compacto del pedido */}
              <div style={styles.orderSummaryBox}>
                <div style={styles.summaryRow}>
                  <span>Artículos seleccionados:</span>
                  <span style={{ fontWeight: 600 }}>{totalItems} perfume(s)</span>
                </div>
                <div style={styles.summaryRow}>
                  <span>
                    <FontAwesomeIcon icon={faTruckFast} style={{ marginRight: '6px', color: '#4a7c59' }} />
                    Envíos únicamente en Costa Rica ({formData.provincia}):
                  </span>
                  <span style={{ color: '#4a7c59', fontWeight: 600 }}>Gratis</span>
                </div>
                <div style={styles.summaryTotal}>
                  <span>Total a Pagar:</span>
                  <span style={{ color: '#4a7c59', fontSize: '18px' }}>
                    ₡{totalColones.toLocaleString('es-CR')}
                  </span>
                </div>
              </div>

              {/* Datos del Cliente */}
              <div>
                <div style={styles.sectionTitle}>1. Datos de Entrega</div>
                <div style={styles.inputRow}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Nombre Completo *</label>
                    <input
                      style={styles.input}
                      type="text"
                      name="nombre"
                      placeholder="Ej. María Rodríguez"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Teléfono / WhatsApp *</label>
                    <input
                      style={styles.input}
                      type="tel"
                      name="telefono"
                      placeholder="Ej. 8888-1234"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div style={styles.inputRow}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Provincia</label>
                    <select
                      style={styles.select}
                      name="provincia"
                      value={formData.provincia}
                      onChange={handleInputChange}
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
                    <label style={styles.label}>Dirección Exacta *</label>
                    <input
                      style={styles.input}
                      type="text"
                      name="direccion"
                      placeholder="Señas exactas, cantón, distrito"
                      value={formData.direccion}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Métodos de Pago */}
              <div>
                <div style={styles.sectionTitle}>2. Método de Pago</div>
                <div style={styles.methodGrid}>
                  <div
                    style={paymentMethod === 'SINPE' ? styles.methodCardActive : styles.methodCard}
                    onClick={() => setPaymentMethod('SINPE')}
                  >
                    <span style={styles.methodIcon}>
                      <FontAwesomeIcon icon={faMobileScreenButton} />
                    </span>
                    <span style={styles.methodName}>SINPE Móvil</span>
                  </div>
                  <div
                    style={paymentMethod === 'CARD' ? styles.methodCardActive : styles.methodCard}
                    onClick={() => setPaymentMethod('CARD')}
                  >
                    <span style={styles.methodIcon}>
                      <FontAwesomeIcon icon={faCreditCard} />
                    </span>
                    <span style={styles.methodName}>Tarjeta</span>
                  </div>
                  <div
                    style={paymentMethod === 'CASH' ? styles.methodCardActive : styles.methodCard}
                    onClick={() => setPaymentMethod('CASH')}
                  >
                    <span style={styles.methodIcon}>
                      <FontAwesomeIcon icon={faMoneyBillWave} />
                    </span>
                    <span style={styles.methodName}>Contra Entrega</span>
                  </div>
                </div>

                {/* Sub-formulario según método */}
                {paymentMethod === 'SINPE' && (
                  <div style={styles.sinpeBox}>
                    <p style={{ margin: 0, fontWeight: 600 }}>Pagar vía SINPE Móvil Oficial Fraiche:</p>
                    <span style={styles.sinpePhone}>+506 7010-4567</span>
                    <p style={{ margin: '4px 0 10px', fontSize: '12px' }}>
                      A nombre de: <strong>Fraiche Costa Rica S.A.</strong>
                    </p>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Número de comprobante / Referencia SINPE:</label>
                      <input
                        style={styles.input}
                        type="text"
                        name="sinpeRef"
                        placeholder="Ej. #8493021 o últimos 4 dígitos"
                        value={formData.sinpeRef}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                )}

                {paymentMethod === 'CARD' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Número de Tarjeta</label>
                      <input
                        style={styles.input}
                        type="text"
                        name="cardNumber"
                        placeholder="4000 1234 5678 9010"
                        maxLength="19"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div style={styles.inputRow}>
                      <div style={styles.formGroup}>
                        <label style={styles.label}>Vencimiento</label>
                        <input
                          style={styles.input}
                          type="text"
                          name="cardExpiry"
                          placeholder="MM/AA"
                          maxLength="5"
                          value={formData.cardExpiry}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div style={styles.formGroup}>
                        <label style={styles.label}>CVV</label>
                        <input
                          style={styles.input}
                          type="password"
                          name="cardCvv"
                          placeholder="123"
                          maxLength="4"
                          value={formData.cardCvv}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'CASH' && (
                  <div style={styles.sinpeBox}>
                    <p style={{ margin: 0 }}>
                      <FontAwesomeIcon icon={faMoneyBillWave} style={{ marginRight: '6px' }} />
                      Cancelarás un total de <strong>₡{totalColones.toLocaleString('es-CR')}</strong> en efectivo o con datáfono móvil al repartidor cuando entregue tu pedido en <strong>{formData.provincia || 'tu domicilio'}</strong>.
                    </p>
                  </div>
                )}
              </div>

              {/* Botón de Pagar */}
              <button
                type="submit"
                style={styles.payBtn}
                onMouseEnter={(e) => (e.target.style.background = '#3d6b4c')}
                onMouseLeave={(e) => (e.target.style.background = '#4a7c59')}
              >
                Confirmar y Pagar ₡{totalColones.toLocaleString('es-CR')}
              </button>
            </form>
          )}

          {/* STEP 2: PROCESSING ANIMATION */}
          {step === 'PROCESSING' && (
            <div style={styles.processingWrap}>
              <div style={styles.spinner} />
              <h4 style={styles.processingTitle}>Validando Transacción...</h4>
              <p style={styles.processingSub}>
                Estamos comunicándonos de forma segura con la pasarela de pago y reservando tus fragancias.
              </p>
            </div>
          )}

          {/* STEP 3: SUCCESS CONFIRMATION */}
          {step === 'SUCCESS' && (
            <div style={styles.successWrap}>
              <div style={styles.successIcon}>
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <h3 style={styles.successTitle}>¡Pago Confirmado con Éxito!</h3>
              <p style={styles.successSub}>
                Muchas gracias por tu compra, <strong>{formData.nombre}</strong>. Hemos registrado tu pedido y preparado tu envío.
              </p>

              {/* Digital Receipt */}
              <div style={styles.receiptCard}>
                <div style={styles.receiptHeader}>
                  <span style={styles.receiptOrderNum}>
                    <FontAwesomeIcon icon={faReceipt} style={{ marginRight: '6px' }} />
                    Orden {orderNumber}
                  </span>
                  <span style={styles.receiptDate}>{new Date().toLocaleDateString('es-CR')}</span>
                </div>

                <div style={{ marginBottom: '12px', fontSize: '12px', color: '#666', lineHeight: 1.6 }}>
                  <div><strong>Destinatario:</strong> {formData.nombre} ({formData.telefono})</div>
                  <div><strong>Entrega (Únicamente en Costa Rica):</strong> {formData.direccion}, {formData.provincia}</div>
                  <div><strong>Método:</strong> {paymentMethod === 'SINPE' ? 'SINPE Móvil' : paymentMethod === 'CARD' ? 'Tarjeta de Crédito/Débito' : 'Pago Contra Entrega'}</div>

                </div>

                <div style={{ borderTop: '1px solid #f0ede6', paddingTop: '10px', marginBottom: '8px' }}>
                  {cart.map((item) => (
                    <div key={item.id} style={styles.receiptItem}>
                      <span>{item.quantity}x {item.nombre}</span>
                      <span style={{ fontWeight: 600 }}>₡{(item.precio * item.quantity).toLocaleString('es-CR')}</span>
                    </div>
                  ))}
                </div>

                <div style={styles.receiptTotal}>
                  <span>Total Cancelado</span>
                  <span style={{ color: '#4a7c59', fontSize: '18px' }}>
                    ₡{totalColones.toLocaleString('es-CR')}
                  </span>
                </div>
              </div>

              <button
                style={styles.finishBtn}
                onClick={handleFinish}
                onMouseEnter={(e) => (e.target.style.background = '#3d6b4c')}
                onMouseLeave={(e) => (e.target.style.background = '#4a7c59')}
              >
                Volver a la Tienda
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
