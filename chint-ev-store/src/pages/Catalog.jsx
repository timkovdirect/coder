import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import { Filter, Grid, List } from 'lucide-react';

const Catalog = () => {
  const [searchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || 'all'
  );

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="catalog">
      <div className="container">
        <h1>Каталог продукции CHINT</h1>
        
        <div className="catalog-controls">
          <div className="category-filter">
            <Filter size={20} />
            <span>Категория:</span>
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>

          <div className="view-toggle">
            <button
              className={viewMode === 'grid' ? 'active' : ''}
              onClick={() => setViewMode('grid')}
            >
              <Grid size={20} />
            </button>
            <button
              className={viewMode === 'list' ? 'active' : ''}
              onClick={() => setViewMode('list')}
            >
              <List size={20} />
            </button>
          </div>
        </div>

        <div className={`products-grid ${viewMode}`}>
          {filteredProducts.map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} />
                {!product.inStock && (
                  <span className="out-of-stock-badge">Нет в наличии</span>
                )}
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3>{product.name}</h3>
                <p className="product-power">{product.power}</p>
                <p className="product-price">{product.price.toLocaleString('ru-RU')} ₽</p>
              </div>
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-products">
            <h3>Товары не найдены</h3>
            <p>Попробуйте выбрать другую категорию</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
