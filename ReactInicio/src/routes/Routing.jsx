import { useState } from 'react'
import Home from '../pages/Home.jsx'
import Catalog from '../pages/Catalog.jsx'
import Profile from '../pages/Profile.jsx'

export default function Routing() {
  const [currentPage, setCurrentPage] = useState('home') // 'home' | 'catalogo' | 'perfil'
  const [cart, setCart] = useState([])

  const [userProfile, setUserProfile] = useState({
    nombre: 'Alejandro Morales',
    email: 'alejandro.morales@fraiche.cr',
    telefono: '+506 8890-1234',
    cedula: '1-1520-0340',
    provincia: 'San José',
    canton: 'Montes de Oca',
    distrito: 'San Pedro',
    codigoPostal: '11501',
    direccion: '200m Este de la Iglesia de San Pedro, Condominio Los Almendros, Casa #14',
    detallesEntrega: 'Dejar con el guarda de seguridad o llamar al timbre si está cerrado.',
    metodoPagoFavorito: 'SINPE',
    sinpeNumero: '+506 8890-1234',
    tarjetaMascara: '•••• •••• •••• 4242',
    tarjetaTitular: 'ALEJANDRO MORALES',
    tarjetaVencimiento: '11/28',
  })

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id)
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const handleUpdateQuantity = (productId, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === productId) {
            const newQty = item.quantity + delta
            return newQty > 0 ? { ...item, quantity: newQty } : null
          }
          return item
        })
        .filter(Boolean)
    )
  }

  const handleRemoveItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }

  const handleClearCart = () => {
    setCart([])
  }

  const handleUpdateProfile = (newProfileData) => {
    setUserProfile((prev) => ({ ...prev, ...newProfileData }))
  }

  const handleNavigate = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  if (currentPage === 'perfil') {
    return (
      <Profile
        userProfile={userProfile}
        onUpdateProfile={handleUpdateProfile}
        onNavigate={handleNavigate}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    )
  }

  if (currentPage === 'catalogo') {
    return (
      <Catalog
        userProfile={userProfile}
        onNavigate={handleNavigate}
        cart={cart}
        onAddToCart={handleAddToCart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    )
  }

  return (
    <Home
      userProfile={userProfile}
      onNavigate={handleNavigate}
      cart={cart}
      onAddToCart={handleAddToCart}
      onUpdateQuantity={handleUpdateQuantity}
      onRemoveItem={handleRemoveItem}
      onClearCart={handleClearCart}
    />
  )
}

