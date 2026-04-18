import React from 'react';
import { products } from '../data/homeData';

const Apothecary = () => {
  return (
    <section className="bg-cream">
      <div className="flex-between mb-12">
        <div>
          <h2>Apothecary</h2>
          <p className="text-evergreen opacity-60">Curated essentials for the modern seeker.</p>
        </div>
        <a href="#" className="view-all">View All</a>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card group">
            <div className="product-image-wrapper">
              {product.badge && <div className="badge">{product.badge}</div>}
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-info">
              <div>
                <h3>{product.name}</h3>
                <p className="text-xs opacity-60 uppercase mt-1">{product.size}</p>
              </div>
              <span className="price">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Apothecary;
