import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { Trash2, Plus, Minus, ChevronLeft, CheckCircle } from 'lucide-react';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="container cart-empty">
          <CheckCircle size={80} className="empty-icon" />
          <h1>Корзина пуста</h1>
          <p>Добавьте товары из каталога для оформления заказа</p>
          <Link to="/catalog" className="btn btn-primary btn-large">
            Перейти в каталог
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Корзина</h1>

        <div className="cart-grid">
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p className="cart-item-category">{item.category}</p>
                  <p className="cart-item-price">{item.price.toLocaleString('ru-RU')} ₽</p>
                </div>
                <div className="cart-item-quantity">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    <Plus size={16} />
                  </button>
                </div>
                <div className="cart-item-total">
                  {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                </div>
                <button 
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Итого</h2>
            <div className="summary-row">
              <span>Товары ({cart.reduce((acc, item) => acc + item.quantity, 0)} шт.):</span>
              <span>{getCartTotal().toLocaleString('ru-RU')} ₽</span>
            </div>
            <div className="summary-row">
              <span>Доставка:</span>
              <span className="free">Бесплатно</span>
            </div>
            <div className="summary-total">
              <span>Общая сумма:</span>
              <span>{getCartTotal().toLocaleString('ru-RU')} ₽</span>
            </div>

            <button className="btn btn-primary btn-large btn-full">
              Оформить заказ
            </button>

            <button 
              className="btn btn-secondary btn-full"
              onClick={clearCart}
            >
              Очистить корзину
            </button>

            <Link to="/catalog" className="continue-shopping">
              <ChevronLeft size={16} />
              Продолжить покупки
            </Link>
          </div>
        </div>

        <div className="cart-info">
          <h3>Информация о заказе</h3>
          <div className="info-grid">
            <div className="info-item">
              <strong>🚚 Доставка</strong>
              <p>Бесплатная доставка до терминала в вашем городе</p>
            </div>
            <div className="info-item">
              <strong>💳 Оплата</strong>
              <p>Наличными, банковской картой или безналичный расчет для юр. лиц</p>
            </div>
            <div className="info-item">
              <strong>📄 Документы</strong>
              <p>Предоставляем полный пакет документов: счет, накладная, гарантия</p>
            </div>
            <div className="info-item">
              <strong>🔧 Установка</strong>
              <p>Рекомендуем профессиональную установку сертифицированными специалистами</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
