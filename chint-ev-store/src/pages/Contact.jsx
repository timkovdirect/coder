import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      <div className="container">
        <h1>Контакты</h1>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Свяжитесь с нами</h2>
            <p className="lead">
              Мы готовы ответить на все ваши вопросы и помочь с выбором оборудования
            </p>

            <div className="contact-item">
              <MapPin size={24} />
              <div>
                <h3>Адрес</h3>
                <p>Москва, Россия</p>
                <p>Деловой центр "Сити", офис 1001</p>
              </div>
            </div>

            <div className="contact-item">
              <Phone size={24} />
              <div>
                <h3>Телефон</h3>
                <p><a href="tel:+78000000000">8 (800) 000-00-00</a></p>
                <p>Бесплатно по России</p>
              </div>
            </div>

            <div className="contact-item">
              <Mail size={24} />
              <div>
                <h3>Email</h3>
                <p><a href="mailto:info@chint-ev.ru">info@chint-ev.ru</a></p>
                <p>sales@chint-ev.ru</p>
              </div>
            </div>

            <div className="contact-item">
              <Clock size={24} />
              <div>
                <h3>Режим работы</h3>
                <p>Пн-Пт: 9:00 - 18:00</p>
                <p>Сб-Вс: Выходной</p>
              </div>
            </div>

            <div className="map-placeholder">
              <img src="https://via.placeholder.com/600x300?text=Карта+Москвы" alt="Карта" />
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h2>Напишите нам</h2>
            <p>Заполните форму и мы свяжемся с вами в ближайшее время</p>

            {formSubmitted && (
              <div className="success-message">
                <CheckCircle size={40} />
                <h3>Сообщение отправлено!</h3>
                <p>Мы свяжемся с вами в ближайшее время</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className={!formSubmitted ? '' : 'hidden'}>
              <div className="form-group">
                <label htmlFor="name">Ваше имя *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Иван Иванов"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@mail.ru"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Телефон</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Компания</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Название компании"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Сообщение *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Опишите ваш вопрос или интересующее оборудование"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-large btn-full">
                <Send size={20} />
                Отправить сообщение
              </button>

              <p className="form-note">
                Нажимая кнопку "Отправить", вы соглашаетесь с политикой обработки персональных данных
              </p>
            </form>
          </div>
        </div>

        <section className="faq-section">
          <h2>Часто задаваемые вопросы</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Какие сроки доставки?</h3>
              <p>Доставка по Москве - 1-2 дня. По регионам России - от 3 до 10 дней в зависимости от удаленности.</p>
            </div>
            <div className="faq-item">
              <h3>Предоставляете ли вы гарантию?</h3>
              <p>Да, все оборудование поставляется с официальной гарантией производителя от 2 до 5 лет.</p>
            </div>
            <div className="faq-item">
              <h3>Есть ли у вас сервисное обслуживание?</h3>
              <p>Да, мы предоставляем полное сервисное обслуживание и техническую поддержку 24/7.</p>
            </div>
            <div className="faq-item">
              <h3>Можно ли получить скидку при оптовом заказе?</h3>
              <p>Да, для корпоративных клиентов и оптовых заказов предусмотрены специальные условия. Свяжитесь с нами для расчета.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
