const styles = {
  card: {
    background: 'white',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
    transition: 'all 0.3s ease',
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    background: 'linear-gradient(135deg, #c9a96e, #b8924a)',
    color: 'white',
    padding: '4px 14px',
    borderRadius: '50px',
    fontSize: '11px',
    fontWeight: 600,
    fontFamily: "'Poppins', sans-serif",
    letterSpacing: '0.3px',
    textTransform: 'uppercase',
  },
  img: {
    width: '100%',
    height: '280px',
    objectFit: 'cover',
    display: 'block',
  },
  body: {
    padding: '24px',
  },
  category: {
    fontSize: '11px',
    fontWeight: 600,
    color: '#c9a96e',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '6px',
    fontFamily: "'Poppins', sans-serif",
  },
  name: {
    fontSize: '20px',
    fontWeight: 700,
    color: '#1a1a1a',
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
    color: '#4a7c59',
    fontFamily: "'Poppins', sans-serif",
  },
  priceLabel: {
    fontSize: '11px',
    color: '#aaa',
    fontFamily: "'Poppins', sans-serif",
  },
  btn: {
    background: '#4a7c59',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    padding: '12px 24px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: '"Poppins", sans-serif',
    transition: 'all 0.2s',
  },
}

export default function ProductCard({ nombre, precio, descripcion, imagen, badge, categoria }) {
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
          e.target.src = `https://placehold.co/400x280/f5f0e8/4a7c59?text=${encodeURIComponent(nombre)}`
        }}
      />
      <div style={styles.body}>
        {categoria && <div style={styles.category}>{categoria}</div>}
        <div style={styles.name}>{nombre}</div>
        <div style={styles.desc}>{descripcion}</div>
        <div style={styles.footer}>
          <div style={styles.priceWrap}>
            <div style={styles.price}>₡{precio.toLocaleString('es-CR')}</div>
            <div style={styles.priceLabel}>Precio en colones</div>
          </div>
          <button
            style={styles.btn}
            onMouseEnter={(e) => {
              e.target.style.background = '#3d6b4c'
              e.target.style.transform = 'scale(1.05)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#4a7c59'
              e.target.style.transform = 'scale(1)'
            }}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  )
}
