import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <h1>О компании CHINT в России</h1>
        
        <section className="about-hero">
          <div className="about-content">
            <p className="lead">
              Мы являемся официальным дистрибьютором продукции CHINT на территории Российской Федерации.
              Наша миссия - обеспечить российский рынок качественными и надежными решениями для зарядки электромобилей.
            </p>
          </div>
        </section>

        <section className="about-section">
          <h2>Наша компания</h2>
          <p>
            CHINT - один из ведущих мировых производителей электротехнического оборудования, 
            включая современные зарядные станции для электромобилей. Мы представляем продукцию 
            CHINT в России с 2019 года и за это время установили более 1000 зарядных станций 
            по всей стране.
          </p>
          <p>
            Наш портфель включает полный спектр решений: от портативных зарядных устройств 
            до сверхбыстрых DC-станций мощностью до 120 кВт. Все оборудование сертифицировано 
            и соответствует российским стандартам безопасности.
          </p>
        </section>

        <section className="about-section">
          <h2>Почему выбирают CHINT?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <CheckCircle size={40} className="benefit-icon" />
              <h3>Официальная гарантия</h3>
              <p>Все продукты поставляются с официальной гарантией производителя</p>
            </div>
            <div className="benefit-card">
              <CheckCircle size={40} className="benefit-icon" />
              <h3>Сертификация</h3>
              <p>Оборудование сертифицировано по стандартам РФ</p>
            </div>
            <div className="benefit-card">
              <CheckCircle size={40} className="benefit-icon" />
              <h3>Техподдержка</h3>
              <p>Квалифицированная техническая поддержка 24/7</p>
            </div>
            <div className="benefit-card">
              <CheckCircle size={40} className="benefit-icon" />
              <h3>Сервис</h3>
              <p>Собственная сервисная служба по всей России</p>
            </div>
            <div className="benefit-card">
              <CheckCircle size={40} className="benefit-icon" />
              <h3>Доставка</h3>
              <p>Быстрая доставка в любой регион РФ</p>
            </div>
            <div className="benefit-card">
              <CheckCircle size={40} className="benefit-icon" />
              <h3>Обучение</h3>
              <p>Обучение персонала и консультации по установке</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Наши достижения</h2>
          <div className="stats-grid">
            <div className="stat-large">
              <span className="stat-number">5+</span>
              <span className="stat-label">лет на рынке РФ</span>
            </div>
            <div className="stat-large">
              <span className="stat-number">1000+</span>
              <span className="stat-label">установленных станций</span>
            </div>
            <div className="stat-large">
              <span className="stat-number">50+</span>
              <span className="stat-label">городов присутствия</span>
            </div>
            <div className="stat-large">
              <span className="stat-number">200+</span>
              <span className="stat-label">корпоративных клиентов</span>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Наши партнеры</h2>
          <p>
            Мы сотрудничаем с крупнейшими сетями АЗС, торговыми центрами, бизнес-центрами 
            и муниципальными образованиями по всей России. Среди наших клиентов:
          </p>
          <ul className="partners-list">
            <li>Федеральные сети АЗС</li>
            <li>Крупные торговые центры</li>
            <li>Бизнес-центры класса А</li>
            <li>Отели и курортные комплексы</li>
            <li>Муниципальные парковки</li>
            <li>Автодилеры и сервисные центры</li>
          </ul>
        </section>

        <section className="cta">
          <h2>Готовы к сотрудничеству?</h2>
          <p>Свяжитесь с нами для получения коммерческого предложения</p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Связаться с нами
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
