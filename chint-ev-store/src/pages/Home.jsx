import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { ChevronRight, Zap, Shield, Truck, Headphones } from 'lucide-react';

const Home = () => {
  const featuredProducts = products.filter(p => p.inStock).slice(0, 3);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>Зарядные станции CHINT для электромобилей</h1>
            <p>Официальный дистрибьютор в Российской Федерации. Надежные решения для зарядки вашего электромобиля дома, на работе и в пути.</p>
            <div className="hero-buttons">
              <Link to="/catalog" className="btn btn-primary">
                Смотреть каталог
                <ChevronRight size={20} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Связаться с нами
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://via.placeholder.com/600x400?text=CHINT+EV+Charging" alt="CHINT Зарядная станция" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container features-grid">
          <div className="feature-card">
            <Zap size={40} className="feature-icon" />
            <h3>Быстрая зарядка</h3>
            <p>Современные технологии быстрой зарядки DC до 120 кВт</p>
          </div>
          <div className="feature-card">
            <Shield size={40} className="feature-icon" />
            <h3>Надежность</h3>
            <p>Сертифицированное оборудование с гарантией качества</p>
          </div>
          <div className="feature-card">
            <Truck size={40} className="feature-icon" />
            <h3>Доставка по РФ</h3>
            <p>Бесплатная доставка до терминала в любом городе России</p>
          </div>
          <div className="feature-card">
            <Headphones size={40} className="feature-icon" />
            <h3>Поддержка 24/7</h3>
            <p>Техническая поддержка и сервисное обслуживание</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <h2>Популярные модели</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <Link to={`/product/${product.id}`} key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3>{product.name}</h3>
                  <p className="product-power">{product.power}</p>
                  <p className="product-price">{product.price.toLocaleString('ru-RU')} ₽</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="view-all">
            <Link to="/catalog" className="btn btn-primary">
              Весь каталог
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-preview">
        <div className="container about-content">
          <div className="about-text">
            <h2>О компании CHINT в России</h2>
            <p>Мы являемся официальным дистрибьютором продукции CHINT - одного из ведущих мировых производителей оборудования для зарядки электромобилей.</p>
            <p>Наша миссия - обеспечить доступность качественных и надежных зарядных станций на территории Российской Федерации, способствуя развитию электромобильной инфраструктуры.</p>
            <Link to="/about" className="btn btn-secondary">
              Узнать больше
            </Link>
          </div>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">лет на рынке РФ</span>
            </div>
            <div className="stat">
              <span className="stat-number">1000+</span>
              <span className="stat-label">установленных станций</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">городов присутствия</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">техническая поддержка</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Готовы сделать заказ?</h2>
          <p>Свяжитесь с нами для получения консультации и расчета стоимости оборудования</p>
          <div className="cta-buttons">
            <Link to="/catalog" className="btn btn-primary btn-large">
              Перейти в каталог
            </Link>
            <a href="tel:+78000000000" className="btn btn-secondary btn-large">
              Позвонить нам
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
