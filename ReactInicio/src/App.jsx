import Navbar from './components/Navbar.jsx'
import ProductCard from './components/ProductCard.jsx'

const perfumes = [
  {
    id: 1,
    nombre: 'Brisa Tropical',
    precio: 45000,
    descripcion: 'Notas de coco, azahar y vainilla. La frescura del Caribe costarricense.',
    imagen: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=350&fit=crop',
    badge: 'Más vendido',
    categoria: 'Fragancia femenina',
  },
  {
    id: 2,
    nombre: 'Noche en San José',
    precio: 52000,
    descripcion: 'Ámbar, cuero y pachulí. Elegancia urbana con carácter premium.',
    imagen: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=350&fit=crop',
    badge: 'Nuevo',
    categoria: 'Fragancia masculina',
  },
  {
    id: 3,
    nombre: 'Verde Monteverde',
    precio: 48000,
    descripcion: 'Musgo, cítricos y madera de bosque tropical. Puras notas de naturaleza.',
    imagen: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400&h=350&fit=crop',
    badge: '',
    categoria: 'Unisex',
  },
  {
    id: 4,
    nombre: 'Orquídea Limón',
    precio: 39000,
    descripcion: 'Flor de orquídea, bergamota y miel. Delicada y luminosa.',
    imagen: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=400&h=350&fit=crop',
    badge: 'Edición limitada',
    categoria: 'Fragancia femenina',
  },
]

const pageStyles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    background: '#fdfbf7',
    minHeight: '100vh',
    color: '#1a1a1a',
  },
  hero: {
    textAlign: 'center',
    padding: '80px 24px 60px',
    background:
      'linear-gradient(135deg, #eaf4ec 0%, #faf5ec 100%)',
  },
  heroTitle: {
    fontSize: '44px',
    fontWeight: 700,
    color: '#1a1a1a',
    margin: '0 0 12px',
    letterSpacing: '-1px',
    lineHeight: 1.2,
  },
  heroAccent: {
    color: '#4a7c59',
  },
  heroSub: {
    fontSize: '17px',
    color: '#777',
    maxWidth: '560px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
  section: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 24px 80px',
  },
  sectionTitle: {
    fontSize: '30px',
    fontWeight: 700,
    color: '#1a1a1a',
    margin: '0 0 8px',
    letterSpacing: '-0.5px',
  },
  sectionSub: {
    fontSize: '15px',
    color: '#999',
    margin: '0 0 40px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
    gap: '28px',
  },
  footer: {
    background: '#1a1a1a',
    color: 'rgba(255,255,255,0.6)',
    textAlign: 'center',
    padding: '32px 24px',
    fontSize: '14px',
    fontFamily: "'Poppins', sans-serif",
  },
  footerBrand: {
    color: '#c9a96e',
  },
}

export default function App() {
  return (
    <div style={pageStyles.container}>
      <Navbar />

      <section style={pageStyles.hero}>
        <h1 style={pageStyles.heroTitle}>
          Fragancias que evocan el paraíso <span style={pageStyles.heroAccent}>Costa Rica</span>
        </h1>
        <p style={pageStyles.heroSub}>
          Perfumes premium elaborados con esencias naturales. Envíos a todo el país.
        </p>
      </section>

      <section id="productos" style={pageStyles.section}>
        <h2 style={pageStyles.sectionTitle}>Nuestra Colección</h2>
        <p style={pageStyles.sectionSub}>Descubre los favoritos de nuestros clientes</p>
        <div style={pageStyles.grid}>
          {perfumes.map((p) => (
            <ProductCard
              key={p.id}
              nombre={p.nombre}
              precio={p.precio}
              descripcion={p.descripcion}
              imagen={p.imagen}
              badge={p.badge}
              categoria={p.categoria}
            />
          ))}
        </div>
      </section>

      <footer style={pageStyles.footer}>
        <p>
          &copy; 2026 <span style={pageStyles.footerBrand}>Fraiche</span> — Perfumería premium en Costa Rica.
        </p>
      </footer>
    </div>
  )
}