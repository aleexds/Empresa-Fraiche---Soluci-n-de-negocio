import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { perfumes, perfumePricing } from '../data/perfumes.js'
import './FeaturedCarousel3D.css'

const featured = perfumes.slice(0, 8)

export default function FeaturedCarousel3D({ onAddToCart }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % featured.length)
    }, 4200)
    return () => window.clearInterval(timer)
  }, [])

  const move = (step) => {
    setActiveIndex((current) => (current + step + featured.length) % featured.length)
  }

  const addDefaultVariant = (perfume) => {
    const line = perfume.isPremium ? 'premium' : 'regular'
    onAddToCart?.({
      ...perfume,
      id: `${perfume.id}-100-clasica`,
      productId: perfume.id,
      precio: perfumePricing[line][100],
      size: 100,
      concentration: perfumePricing.concentrations.clasica.label,
      essence: perfumePricing.concentrations.clasica.essence,
    })
  }

  return (
    <section className="fraiche-3d" aria-labelledby="destacados-title">
      <div className="fraiche-3d__intro">
        <span className="fraiche-3d__eyebrow">Selección editorial</span>
        <h2 id="destacados-title">Los aromas que dejan huella</h2>
        <p>Explora nuestros destacados en una vista envolvente y elige tu próxima firma.</p>
        <div className="fraiche-3d__controls">
          <button type="button" onClick={() => move(-1)} aria-label="Perfume anterior">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <span>{String(activeIndex + 1).padStart(2, '0')} / {String(featured.length).padStart(2, '0')}</span>
          <button type="button" onClick={() => move(1)} aria-label="Siguiente perfume">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      <div className="fraiche-3d__stage">
        <div
          className="fraiche-3d__cylinder"
          style={{ transform: `rotateY(${-activeIndex * (360 / featured.length)}deg)` }}
        >
          {featured.map((perfume, index) => {
            const angle = index * (360 / featured.length)
            const isActive = index === activeIndex
            return (
              <article
                className={`fraiche-3d__item${isActive ? ' is-active' : ''}`}
                key={perfume.id}
                style={{ transform: `rotateY(${angle}deg) translateZ(var(--cylinder-depth))` }}
                aria-hidden={!isActive}
              >
                <img src={perfume.imagen} alt={perfume.nombre} />
                <div className="fraiche-3d__caption">
                  <span>{perfume.categoria}</span>
                  <strong>{perfume.nombre}</strong>
                  <button type="button" onClick={() => addDefaultVariant(perfume)}>
                    <FontAwesomeIcon icon={faCartPlus} /> Agregar
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
