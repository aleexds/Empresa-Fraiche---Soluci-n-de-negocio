import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faTruckFast,
  faClock,
  faMobileScreenButton,
  faLeaf,
  faStar,
  faGem,
  faCheck,
  faCircleQuestion,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons'
import Navbar from '../components/Navbar.jsx'
import ProductCard from '../components/ProductCard.jsx'
import Footer from '../components/Footer.jsx'
import CartModal from '../components/CartModal.jsx'
import CheckoutModal from '../components/CheckoutModal.jsx'
import FeaturedCarousel3D from '../components/FeaturedCarousel3D.jsx'
import { perfumes } from '../data/perfumes.js'

const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    background: '#FFFFFF',
    minHeight: '100vh',
    color: '#222222',
  },
  // Hero Section
  hero: {
    padding: '90px 24px 80px',
    background: '#E8C5C8',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    borderBottom: '1px solid rgba(74, 124, 89, 0.1)',
  },
  heroBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: '#ffffff',
    color: '#5E2B72',
    padding: '8px 18px',
    borderRadius: '30px',
    fontSize: '13px',
    fontWeight: 600,
    boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
    marginBottom: '20px',
  },
  heroTitle: {
    fontSize: '50px',
    fontWeight: 800,
    color: '#222222',
    margin: '0 auto 16px',
    maxWidth: '850px',
    letterSpacing: '-1.5px',
    lineHeight: 1.15,
  },
  heroAccent: {
    color: '#5E2B72',
  },
  heroSub: {
    fontSize: '18px',
    color: '#666',
    maxWidth: '680px',
    margin: '0 auto 32px',
    lineHeight: 1.6,
  },
  heroCtas: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    flexWrap: 'wrap',
    marginBottom: '48px',
  },
  primaryBtn: {
    background: '#5E2B72',
    color: 'white',
    border: 'none',
    borderRadius: '14px',
    padding: '16px 32px',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: "'Poppins', sans-serif",
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    transition: 'all 0.2s',
    boxShadow: '0 4px 18px rgba(74, 124, 89, 0.3)',
  },
  secondaryBtn: {
    background: '#ffffff',
    color: '#222222',
    border: '1px solid #ddd',
    borderRadius: '14px',
    padding: '16px 28px',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: "'Poppins', sans-serif",
    transition: 'all 0.2s',
  },
  heroTrustBadges: {
    display: 'flex',
    justifyContent: 'center',
    gap: '32px',
    flexWrap: 'wrap',
    borderTop: '1px solid rgba(0,0,0,0.06)',
    paddingTop: '32px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  trustItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
    fontWeight: 600,
    color: '#444',
  },
  trustIcon: {
    color: '#5E2B72',
    fontSize: '18px',
  },
  // Sections General
  section: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '80px 24px',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  sectionTag: {
    fontSize: '12px',
    fontWeight: 700,
    color: '#D4AF37',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    marginBottom: '8px',
    display: 'block',
  },
  sectionTitle: {
    fontSize: '34px',
    fontWeight: 700,
    color: '#1a1a1a',
    margin: '0 0 12px',
    letterSpacing: '-0.5px',
  },
  sectionSub: {
    fontSize: '16px',
    color: '#777',
    maxWidth: '560px',
    margin: '0 auto',
  },
  // Bento Features
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '24px',
  },
  featureCard: {
    background: '#ffffff',
    borderRadius: '18px',
    padding: '32px 24px',
    border: '1px solid #f0ede6',
    boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  featureIconWrap: {
    width: '56px',
    height: '56px',
    borderRadius: '14px',
    background: '#E8C5C8',
    color: '#5E2B72',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    marginBottom: '20px',
  },
  featureCardTitle: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#1a1a1a',
    margin: '0 0 10px',
  },
  featureCardText: {
    fontSize: '14px',
    color: '#666',
    lineHeight: 1.6,
    margin: 0,
  },
  // Categories Showcase
  categoryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px',
  },
  categoryCard: {
    position: 'relative',
    borderRadius: '20px',
    overflow: 'hidden',
    height: '280px',
    boxShadow: '0 6px 24px rgba(0,0,0,0.08)',
    cursor: 'pointer',
  },
  categoryCardImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s ease',
  },
  categoryCardOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    color: 'white',
  },
  categoryTitle: {
    fontSize: '22px',
    fontWeight: 700,
    margin: '0 0 6px',
  },
  categorySub: {
    fontSize: '13px',
    opacity: 0.85,
    margin: '0 0 12px',
  },
  categoryBtn: {
    alignSelf: 'flex-start',
    background: '#D4AF37',
    color: '#222222',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 700,
    cursor: 'pointer',
    fontFamily: "'Poppins', sans-serif",
  },
  // Products Grid
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
    gap: '28px',
  },
  // Testimonials
  testimonialsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
  },
  testimonialCard: {
    background: '#ffffff',
    borderRadius: '18px',
    padding: '30px',
    border: '1px solid #f0ede6',
    boxShadow: '0 4px 18px rgba(0,0,0,0.04)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  stars: {
    color: '#D4AF37',
    fontSize: '14px',
    marginBottom: '14px',
    display: 'flex',
    gap: '4px',
  },
  testimonialQuote: {
    fontSize: '14px',
    color: '#444',
    lineHeight: 1.7,
    fontStyle: 'italic',
    margin: '0 0 20px',
  },
  testimonialAuthor: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  authorAvatar: {
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    background: '#5E2B72',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 700,
    fontSize: '16px',
  },
  authorName: {
    fontSize: '14px',
    fontWeight: 700,
    color: '#1a1a1a',
  },
  authorLocation: {
    fontSize: '12px',
    color: '#888',
  },
  // Newsletter Banner
  clubBanner: {
    background: 'linear-gradient(135deg, #1e3d29 0%, #2d5a3c 100%)',
    borderRadius: '24px',
    padding: '50px 36px',
    color: 'white',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(30, 61, 41, 0.25)',
  },
  clubTitle: {
    fontSize: '32px',
    fontWeight: 700,
    margin: '0 0 10px',
    letterSpacing: '-0.5px',
  },
  clubText: {
    fontSize: '15px',
    color: 'rgba(255,255,255,0.85)',
    maxWidth: '560px',
    margin: '0 auto 28px',
    lineHeight: 1.6,
  },
  clubForm: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    maxWidth: '500px',
    margin: '0 auto',
    flexWrap: 'wrap',
  },
  clubInput: {
    flex: 1,
    minWidth: '240px',
    padding: '14px 20px',
    borderRadius: '12px',
    border: 'none',
    fontSize: '14px',
    fontFamily: "'Poppins', sans-serif",
    outline: 'none',
  },
  clubBtn: {
    background: '#D4AF37',
    color: '#1a1a1a',
    border: 'none',
    borderRadius: '12px',
    padding: '14px 26px',
    fontSize: '14px',
    fontWeight: 700,
    cursor: 'pointer',
    fontFamily: "'Poppins', sans-serif",
  },
  // FAQ Section
  faqGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '20px',
  },
  faqCard: {
    background: '#ffffff',
    borderRadius: '14px',
    padding: '24px',
    border: '1px solid #f0ede6',
  },
  faqQuestion: {
    fontSize: '16px',
    fontWeight: 700,
    color: '#1a1a1a',
    margin: '0 0 10px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  faqAnswer: {
    fontSize: '14px',
    color: '#666',
    lineHeight: 1.6,
    margin: 0,
  },
}

export default function Home({
  userProfile,
  onNavigate,
  cart = [],
  onAddToCart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) {
  const [emailSub, setEmailSub] = useState('')
  const [subSuccess, setSubSuccess] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (emailSub) {
      setSubSuccess(true)
      setEmailSub('')
      setTimeout(() => setSubSuccess(false), 3000)
    }
  }

  const bestSellers = perfumes.slice(0, 3)
  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <div style={styles.container}>
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={onNavigate}
        activePage="home"
      />

      {/* HERO SECTION */}
      <section style={styles.hero}>
        <div style={styles.heroBadge}>
          <FontAwesomeIcon icon={faGem} /> Extractos Naturales Costarricenses
        </div>
        <h1 style={styles.heroTitle}>
          Fragancias de Autor que Capturan la Esencia de <span style={styles.heroAccent}>Costa Rica</span>
        </h1>
        <p style={styles.heroSub}>
          Descubre perfumes premium de alta fijación elaborados con notas tropicales, maderas finas y esencias botánicas. 
          Envíos a domicilio <strong>únicamente en Costa Rica</strong>.
        </p>

        <div style={styles.heroCtas}>
          <button
            style={styles.primaryBtn}
            onClick={() => onNavigate('catalogo')}
            onMouseEnter={(e) => (e.target.style.background = '#3f1d4d')}
            onMouseLeave={(e) => (e.target.style.background = '#5E2B72')}
          >
            Explorar Colección <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <button
            style={styles.secondaryBtn}
            onClick={() => {
              const el = document.getElementById('mas-vendidos')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Ver Más Vendidos
          </button>
        </div>

        <div style={styles.heroTrustBadges}>
          <div style={styles.trustItem}>
            <FontAwesomeIcon icon={faTruckFast} style={styles.trustIcon} />
            <span>Envíos 24/48h en Costa Rica</span>
          </div>
          <div style={styles.trustItem}>
            <FontAwesomeIcon icon={faClock} style={styles.trustIcon} />
            <span>Fijación +12 Horas</span>
          </div>
          <div style={styles.trustItem}>
            <FontAwesomeIcon icon={faMobileScreenButton} style={styles.trustIcon} />
            <span>Paga Fácil con SINPE Móvil</span>
          </div>
        </div>
      </section>

      <FeaturedCarousel3D onAddToCart={onAddToCart} />

      {/* CATEGORIES SHOWCASE */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionTag}>Nuestras Familias Olfativas</span>
          <h2 style={styles.sectionTitle}>Encuentra tu Aroma Ideal</h2>
          <p style={styles.sectionSub}>
            Selecciona la categoría que mejor refleje tu personalidad y estilo.
          </p>
        </div>

        <div style={styles.categoryGrid}>
          {/* Femenina */}
          <div
            style={styles.categoryCard}
            onClick={() => onNavigate('catalogo')}
            onMouseEnter={(e) => {
              const img = e.currentTarget.querySelector('img')
              if (img) img.style.transform = 'scale(1.06)'
            }}
            onMouseLeave={(e) => {
              const img = e.currentTarget.querySelector('img')
              if (img) img.style.transform = 'scale(1)'
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=400&fit=crop"
              alt="Fragancias Femeninas"
              style={styles.categoryCardImg}
            />
            <div style={styles.categoryCardOverlay}>
              <h3 style={styles.categoryTitle}>Fragancias Femeninas</h3>
              <p style={styles.categorySub}>Florales, dulces, orquídeas y acordes tropicales.</p>
              <button style={styles.categoryBtn}>Ver Perfumes</button>
            </div>
          </div>

          {/* Masculina */}
          <div
            style={styles.categoryCard}
            onClick={() => onNavigate('catalogo')}
            onMouseEnter={(e) => {
              const img = e.currentTarget.querySelector('img')
              if (img) img.style.transform = 'scale(1.06)'
            }}
            onMouseLeave={(e) => {
              const img = e.currentTarget.querySelector('img')
              if (img) img.style.transform = 'scale(1)'
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&h=400&fit=crop"
              alt="Fragancias Masculinas"
              style={styles.categoryCardImg}
            />
            <div style={styles.categoryCardOverlay}>
              <h3 style={styles.categoryTitle}>Fragancias Masculinas</h3>
              <p style={styles.categorySub}>Maderas de roble, ámbar, especias y cuero elegante.</p>
              <button style={styles.categoryBtn}>Ver Perfumes</button>
            </div>
          </div>

          {/* Unisex */}
          <div
            style={styles.categoryCard}
            onClick={() => onNavigate('catalogo')}
            onMouseEnter={(e) => {
              const img = e.currentTarget.querySelector('img')
              if (img) img.style.transform = 'scale(1.06)'
            }}
            onMouseLeave={(e) => {
              const img = e.currentTarget.querySelector('img')
              if (img) img.style.transform = 'scale(1)'
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=600&h=400&fit=crop"
              alt="Colección Unisex"
              style={styles.categoryCardImg}
            />
            <div style={styles.categoryCardOverlay}>
              <h3 style={styles.categoryTitle}>Colección Unisex</h3>
              <p style={styles.categorySub}>Café de altura, brisa marina y bosque nuboso.</p>
              <button style={styles.categoryBtn}>Ver Perfumes</button>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION / BENTO */}
      <section style={{ ...styles.section, background: '#E8C5C8', borderRadius: '4px', margin: '40px auto' }}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionTag}>Calidad & Garantía</span>
          <h2 style={styles.sectionTitle}>¿Por qué elegir Fraiche Costa Rica?</h2>
          <p style={styles.sectionSub}>
            Combinamos técnicas de perfumería fina con la riqueza botánica de nuestro país.
          </p>
        </div>

        <div style={styles.featuresGrid}>
          <div style={styles.featureCard}>
            <div style={styles.featureIconWrap}>
              <FontAwesomeIcon icon={faGem} />
            </div>
            <h3 style={styles.featureCardTitle}>Concentración Eau de Parfum</h3>
            <p style={styles.featureCardText}>
              25% de aceites esenciales puros para asegurar una duración de más de 12 horas en piel y ropa.
            </p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIconWrap}>
              <FontAwesomeIcon icon={faTruckFast} />
            </div>
            <h3 style={styles.featureCardTitle}>Envíos 100% Nacionales</h3>
            <p style={styles.featureCardText}>
              Envíos rápidos a domicilio en San José, Alajuela, Cartago, Heredia, Guanacaste, Puntarenas y Limón.
            </p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIconWrap}>
              <FontAwesomeIcon icon={faMobileScreenButton} />
            </div>
            <h3 style={styles.featureCardTitle}>Pago Cómodo y Seguro</h3>
            <p style={styles.featureCardText}>
              Cancela vía SINPE Móvil oficial, tarjetas de crédito/débito nacionales o paga al recibir tu paquete.
            </p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIconWrap}>
              <FontAwesomeIcon icon={faLeaf} />
            </div>
            <h3 style={styles.featureCardTitle}>Esencias Eco-Conscientes</h3>
            <p style={styles.featureCardText}>
              Libres de parabenos, no testeadas en animales y envasadas en frascos de cristal reciclable.
            </p>
          </div>
        </div>
      </section>

      {/* BEST SELLERS PREVIEW */}
      <section id="mas-vendidos" style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionTag}>Favoritos del Mes</span>
          <h2 style={styles.sectionTitle}>Los Perfumes Más Populares</h2>
          <p style={styles.sectionSub}>
            Las fragancias más elogiadas por nuestros clientes en todo Costa Rica.
          </p>
        </div>

        <div style={styles.productsGrid}>
          {bestSellers.map((p) => (
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

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <button
            style={styles.primaryBtn}
            onClick={() => onNavigate('catalogo')}
          >
            Ver Catálogo Completo <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionTag}>Experiencias Reales</span>
          <h2 style={styles.sectionTitle}>Opiniones de Clientes</h2>
          <p style={styles.sectionSub}>
            Miles de costarricenses ya disfrutan de nuestras fragancias de autor.
          </p>
        </div>

        <div style={styles.testimonialsGrid}>
          <div style={styles.testimonialCard}>
            <div>
              <div style={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} />
                ))}
              </div>
              <p style={styles.testimonialQuote}>
                "El aroma de Verde Monteverde es espectacular, dura todo el día en el trabajo. El paquete me llegó al día siguiente a Heredia pagando con SINPE Móvil."
              </p>
            </div>
            <div style={styles.testimonialAuthor}>
              <div style={styles.authorAvatar}>V</div>
              <div>
                <div style={styles.authorName}>Valeria Soto</div>
                <div style={styles.authorLocation}>Heredia, Costa Rica</div>
              </div>
            </div>
          </div>

          <div style={styles.testimonialCard}>
            <div>
              <div style={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} />
                ))}
              </div>
              <p style={styles.testimonialQuote}>
                "Noche en San José tiene una fijación que no le envidia nada a perfumes de nicho de ₡100.000. Excelente atención y presentación de la botella."
              </p>
            </div>
            <div style={styles.testimonialAuthor}>
              <div style={styles.authorAvatar}>C</div>
              <div>
                <div style={styles.authorName}>Carlos Mora</div>
                <div style={styles.authorLocation}>San José, Costa Rica</div>
              </div>
            </div>
          </div>

          <div style={styles.testimonialCard}>
            <div>
              <div style={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} />
                ))}
              </div>
              <p style={styles.testimonialQuote}>
                "Pedí Brisa Tropical y Orquídea Limón para un regalo en Alajuela. Llegaron perfectamente empacados. Definitivamente volveré a pedir."
              </p>
            </div>
            <div style={styles.testimonialAuthor}>
              <div style={styles.authorAvatar}>M</div>
              <div>
                <div style={styles.authorName}>Mariana Fonseca</div>
                <div style={styles.authorLocation}>Alajuela, Costa Rica</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{ ...styles.section, paddingTop: '20px' }}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionTag}>Dudas Frecuentes</span>
          <h2 style={styles.sectionTitle}>Preguntas Frecuentes</h2>
          <p style={styles.sectionSub}>
            Información clave sobre compras, pagos y envíos en Costa Rica.
          </p>
        </div>

        <div style={styles.faqGrid}>
          <div style={styles.faqCard}>
            <h4 style={styles.faqQuestion}>
              <FontAwesomeIcon icon={faCircleQuestion} style={{ color: '#5E2B72' }} />
              ¿Hacen envíos fuera de Costa Rica?
            </h4>
            <p style={styles.faqAnswer}>
              No, nos enfocamos en brindar el mejor servicio express <strong>únicamente dentro de Costa Rica</strong> con cobertura completa en las 7 provincias.
            </p>
          </div>

          <div style={styles.faqCard}>
            <h4 style={styles.faqQuestion}>
              <FontAwesomeIcon icon={faCircleQuestion} style={{ color: '#5E2B72' }} />
              ¿Cómo funciona el pago con SINPE Móvil?
            </h4>
            <p style={styles.faqAnswer}>
              Al finalizar tu compra seleccionas SINPE Móvil y transfieres al número oficial de Fraiche Costa Rica (+506 7010-4567). Tu orden se procesa de inmediato.
            </p>
          </div>

          <div style={styles.faqCard}>
            <h4 style={styles.faqQuestion}>
              <FontAwesomeIcon icon={faCircleQuestion} style={{ color: '#5E2B72' }} />
              ¿Cuánto tiempo tarda la entrega?
            </h4>
            <p style={styles.faqAnswer}>
              En el Gran Área Metropolitana (GAM) entregamos en 24 horas hábiles. En zonas rurales y costas el tiempo estimado es de 48 horas vía mensajería express.
            </p>
          </div>

          <div style={styles.faqCard}>
            <h4 style={styles.faqQuestion}>
              <FontAwesomeIcon icon={faCircleQuestion} style={{ color: '#5E2B72' }} />
              ¿Puedo pagar contra entrega?
            </h4>
            <p style={styles.faqAnswer}>
              ¡Sí! Puedes pagar en efectivo o mediante datáfono móvil directamente al repartidor cuando recibas tu pedido en la puerta de tu casa.
            </p>
          </div>
        </div>
      </section>

      {/* CLUB FRAICHE / NEWSLETTER BANNER */}
      <section style={{ maxWidth: '1100px', margin: '0 auto 80px', padding: '0 24px' }}>
        <div style={styles.clubBanner}>
          <h3 style={styles.clubTitle}>Únete al Club Fraiche Costa Rica</h3>
          <p style={styles.clubText}>
            Suscríbete para recibir lanzamientos de ediciones limitadas, notas olfativas y un <strong>10% de descuento</strong> en tu primer pedido.
          </p>
          <form onSubmit={handleSubscribe} style={styles.clubForm}>
            <input
              style={styles.clubInput}
              type="email"
              placeholder="Ingresa tu correo electrónico..."
              value={emailSub}
              onChange={(e) => setEmailSub(e.target.value)}
              required
            />
            <button type="submit" style={styles.clubBtn}>
              <FontAwesomeIcon icon={faPaperPlane} style={{ marginRight: '6px' }} /> Suscribirme
            </button>
          </form>
          {subSuccess && (
            <div style={{ marginTop: '16px', color: '#D4AF37', fontWeight: 600 }}>
              <FontAwesomeIcon icon={faCheck} /> ¡Gracias por suscribirte! Te hemos enviado tu cupón.
            </div>
          )}
        </div>
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