import { useState } from 'react'
import { perfumePricing } from '../data/perfumes.js'

const styles = {
  card: {
    background: 'white',
    borderRadius: '4px',
    overflow: 'hidden',
    boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
    transition: 'all 0.3s ease',
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    background: '#D4AF37',
    color: '#222222',
    padding: '4px 14px',
    borderRadius: '50px',
    fontSize: '11px',
    fontWeight: 600,
    fontFamily: "'Poppins', sans-serif",
    letterSpacing: '0.3px',
    textTransform: 'uppercase',
    zIndex: 2,
  },
  img: {
    width: '100%',
    height: '300px',
    objectFit: 'contain',
    background: '#ffffff',
    display: 'block',
  },
  body: {
    padding: '24px',
  },
  category: {
    fontSize: '11px',
    fontWeight: 600,
    color: '#5E2B72',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '6px',
    fontFamily: "'Poppins', sans-serif",
  },
  name: {
    fontSize: '20px',
    fontWeight: 700,
    color: '#222222',
    marginBottom: '8px',
    fontFamily: "'Poppins', sans-serif",
    lineHeight: 1.3,
  },
  desc: {
    fontSize: '14px',
    color: '#777',
    lineHeight: 1.6,
    marginBottom: '20px',
    fontFamily: "'Poppins', sans-serif",
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceWrap: {
    display: 'flex',
    flexDirection: 'column',
  },
  price: {
    fontSize: '24px',
    fontWeight: 700,
    color: '#D4AF37',
    fontFamily: "'Poppins', sans-serif",
  },
  priceLabel: {
    fontSize: '11px',
    color: '#aaa',
    fontFamily: "'Poppins', sans-serif",
  },
  optionGroup: {
    marginBottom: '14px',
  },
  optionLabel: {
    display: 'block',
    fontSize: '11px',
    fontWeight: 700,
    color: '#555',
    marginBottom: '7px',
    textTransform: 'uppercase',
    letterSpacing: '0.7px',
    fontFamily: "'Poppins', sans-serif",
  },
  pills: {
    display: 'flex',
    gap: '6px',
    flexWrap: 'wrap',
  },
  pill: {
    background: '#f7f5ef',
    border: '1px solid #e5e0d4',
    borderRadius: '999px',
    padding: '6px 11px',
    color: '#555',
    fontSize: '12px',
    cursor: 'pointer',
    fontFamily: "'Poppins', sans-serif",
  },
  activePill: {
    background: '#D4AF37',
    borderColor: '#D4AF37',
    color: '#222',
    fontWeight: 700,
  },
  select: {
    width: '100%',
    background: '#f7f5ef',
    border: '1px solid #e5e0d4',
    borderRadius: '8px',
    padding: '8px 10px',
    color: '#444',
    fontSize: '12px',
    fontFamily: "'Poppins', sans-serif",
  },
  premiumBadge: {
    display: 'inline-block',
    background: '#D4AF37',
    color: '#222',
    borderRadius: '999px',
    padding: '4px 9px',
    marginBottom: '10px',
    fontSize: '10px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.4px',
    fontFamily: "'Poppins', sans-serif",
  },
  btn: {
    background: '#D4AF37',
    color: '#222222',
    border: 'none',
    borderRadius: '12px',
    padding: '12px 24px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: '"Poppins", sans-serif',
    transition: 'all 0.2s',
  },
  btnAdded: {
    background: '#5E2B72',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    padding: '12px 20px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: '"Poppins", sans-serif',
    transition: 'all 0.2s',
  },
}

export default function ProductCard({
  id,
  nombre,
  descripcion,
  imagen,
  badge,
  categoria,
  isPremium = false,
  onAddToCart,
}) {
  const [justAdded, setJustAdded] = useState(false)
  const [size, setSize] = useState(100)
  const [concentration, setConcentration] = useState('clasica')

  const line = isPremium ? 'premium' : 'regular'
  const basePrice = perfumePricing[line][size]
  const concentrationOption = perfumePricing.concentrations[concentration]
  const finalPrice = basePrice + concentrationOption.extra

  const handleAdd = () => {
    const variantId = `${id}-${size}-${concentration}`
    if (onAddToCart) {
      onAddToCart({
        id: variantId,
        productId: id,
        nombre,
        precio: finalPrice,
        descripcion,
        imagen,
        badge,
        categoria,
        size,
        concentration: concentrationOption.label,
        essence: concentrationOption.essence,
      })
    }
    setJustAdded(true)
    setTimeout(() => {
      setJustAdded(false)
    }, 1200)
  }

  return (
    <div
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.06)'
      }}
    >
      {badge && <div style={styles.badge}>{badge}</div>}
      <img
        src={imagen}
        alt={nombre}
        style={styles.img}
        onError={(e) => {
          e.target.src = `https://placehold.co/400x280/f5f0e8/4a7c59?text=${encodeURIComponent(
            nombre
          )}`
        }}
      />
      <div style={styles.body}>
        {isPremium && <div style={styles.premiumBadge}>Línea Concentrada</div>}
        {categoria && <div style={styles.category}>{categoria}</div>}
        <div style={styles.name}>{nombre}</div>
        <div style={styles.desc}>{descripcion}</div>
        <div style={styles.optionGroup}>
          <span style={styles.optionLabel}>Tamaño</span>
          <div style={styles.pills}>
            {[60, 100].map((optionSize) => (
              <button
                key={optionSize}
                type="button"
                style={{
                  ...styles.pill,
                  ...(size === optionSize ? styles.activePill : {}),
                }}
                onClick={() => setSize(optionSize)}
              >
                {optionSize} ml
              </button>
            ))}
          </div>
        </div>
        <div style={styles.optionGroup}>
          <label style={styles.optionLabel} htmlFor={`concentration-${id}`}>
            Fijación
          </label>
          <select
            id={`concentration-${id}`}
            value={concentration}
            style={styles.select}
            onChange={(e) => setConcentration(e.target.value)}
          >
            {Object.entries(perfumePricing.concentrations).map(([key, option]) => (
              <option key={key} value={key}>
                {option.label}: {option.essence} (+₡{option.extra.toLocaleString('es-CR')})
              </option>
            ))}
          </select>
        </div>
        <div style={styles.footer}>
          <div style={styles.priceWrap}>
            <div style={styles.price}>₡{finalPrice.toLocaleString('es-CR')}</div>
            <div style={styles.priceLabel}>{size} ml · {concentrationOption.label}</div>
          </div>
          <button
            style={justAdded ? styles.btnAdded : styles.btn}
            onClick={handleAdd}
            onMouseEnter={(e) => {
              if (!justAdded) {
                e.target.style.background = '#b89420'
                e.target.style.transform = 'scale(1.05)'
              }
            }}
            onMouseLeave={(e) => {
              if (!justAdded) {
                e.target.style.background = '#D4AF37'
                e.target.style.transform = 'scale(1)'
              }
            }}
          >
            {justAdded ? '✓ Agregado' : 'Agregar'}
          </button>
        </div>
      </div>
    </div>
  )
}

