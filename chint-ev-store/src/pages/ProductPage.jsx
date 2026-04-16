import React, { useContext, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { CartContext } from '../context/CartContext';
import { ChevronLeft, Check, Zap, Shield, Thermometer, Cable } from 'lucide-react';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container product-not-found">
        <h2>Товар не найден</h2>
        <Link to="/catalog" className="btn btn-primary">Вернуться в каталог</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="product-page">
      <div className="container">
        <button onClick={() => navigate(-1)} className="back-btn">
          <ChevronLeft size={20} />
          Назад
        </button>

        <div className="product-detail">
          <div className="product-gallery">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-info-detail">
            <span className="product-category">{product.category}</span>
            <h1>{product.name}</h1>
            
            {!product.inStock && (
              <span className="out-of-stock-badge large">Нет в наличии</span>
            )}

            <p className="product-price-large">{product.price.toLocaleString('ru-RU')} ₽</p>
            
            <p className="product-description">{product.description}</p>

            <div className="product-features">
              <h3>Характеристики:</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>
                    {feature.includes('Мощность') && <Zap size={16} />}
                    {feature.includes('Защита') && <Shield size={16} />}
                    {feature.includes('Температура') && <Thermometer size={16} />}
                    {feature.includes('Кабель') && <Cable size={16} />}
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {product.inStock && (
              <div className="purchase-controls">
                <div className="quantity-selector">
                  <label>Количество:</label>
                  <div className="quantity-buttons">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)}>
                      +
                    </button>
                  </div>
                </div>

                <button 
                  className={`btn btn-primary btn-large ${addedToCart ? 'added' : ''}`}
                  onClick={handleAddToCart}
                >
                  {addedToCart ? (
                    <>
                      <Check size={20} />
                      Добавлено в корзину
                    </>
                  ) : (
                    'Добавить в корзину'
                  )}
                </button>
              </div>
            )}

            <div className="product-meta">
              <p>✅ Официальная гарантия CHINT</p>
              <p>🚚 Доставка по всей России</p>
              <p>🔧 Сервисное обслуживание</p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="related-products">
          <h2>Похожие товары</h2>
          <div className="products-grid">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map(p => (
                <Link to={`/product/${p.id}`} key={p.id} className="product-card">
                  <img src={p.image} alt={p.name} />
                  <div className="product-info">
                    <span className="product-category">{p.category}</span>
                    <h3>{p.name}</h3>
                    <p className="product-price">{p.price.toLocaleString('ru-RU')} ₽</p>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductPage;
