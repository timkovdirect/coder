import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Phone, Menu, X } from 'lucide-react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const { getCartCount } = useContext(CartContext);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          <span className="logo-text">CHINT</span>
          <span className="logo-subtitle">Официальный дистрибьютор в РФ</span>
        </Link>

        <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Главная</Link>
          <Link to="/catalog" onClick={() => setMobileMenuOpen(false)}>Каталог</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>О компании</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Контакты</Link>
        </nav>

        <div className="header-actions">
          <a href="tel:+78000000000" className="phone-link">
            <Phone size={20} />
            <span>8 (800) 000-00-00</span>
          </a>
          
          <Link to="/cart" className="cart-link">
            <ShoppingCart size={24} />
            {getCartCount() > 0 && (
              <span className="cart-badge">{getCartCount()}</span>
            )}
          </Link>

          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
