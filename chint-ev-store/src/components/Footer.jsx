import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3>CHINT Россия</h3>
          <p>Официальный дистрибьютор зарядных станций для электромобилей в Российской Федерации.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Продукция</h4>
          <ul>
            <li><Link to="/catalog?category=AC зарядки">AC зарядки</Link></li>
            <li><Link to="/catalog?category=DC зарядки">DC зарядки</Link></li>
            <li><Link to="/catalog?category=Портативные">Портативные устройства</Link></li>
            <li><Link to="/catalog?category=Аксессуары">Аксессуары</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Компания</h4>
          <ul>
            <li><Link to="/about">О нас</Link></li>
            <li><Link to="/contact">Контакты</Link></li>
            <li><a href="#">Сервис</a></li>
            <li><a href="#">Гарантия</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Контакты</h4>
          <ul className="contact-info">
            <li>📍 Москва, Россия</li>
            <li>📞 8 (800) 000-00-00</li>
            <li>✉️ info@chint-ev.ru</li>
            <li>🕒 Пн-Пт: 9:00 - 18:00</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2024 CHINT Россия. Все права защищены.</p>
          <div className="footer-links">
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Договор оферты</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
