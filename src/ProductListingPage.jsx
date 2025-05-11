import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productData from './productData';
import './ProductListingPage.css';

function ProductListingPage({ addToCart }) {
  const { category } = useParams();
  const products = productData[category] || [];

  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const toggleSearchBar = () => setShowSearchBar(!showSearchBar);
  const handleSearchInput = (e) => setSearchQuery(e.target.value);

  const handleAddToCart = (product) => {
    addToCart(product);
    setSuccessMessage(`${product.name} successfully added to cart!`);
    setTimeout(() => setSuccessMessage(''), 2000);
  };

  // Filter products based on search query
  const filteredProducts = products.filter((prod) =>
    prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    prod.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="header">
        <img src="/logo.png" className="logo1" alt="Logo" />
        <img src="/wishlist.png" alt="Wishlist" className="wishlist" />
        <div className="selectionsection1">HOME</div>
        <div className="selectionsection2">MEN</div>
        <div className="selectionsection3">WOMEN</div>
        <img
          src="/searchicon.png"
          className="searchicon"
          alt="Search"
          onClick={toggleSearchBar}
        />

        {showSearchBar && (
          <input
            type="text"
            className="searchbar"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchInput}
          />
        )}
      </div>

      {successMessage && (
        <div className="success-toast">
          {successMessage}
        </div>
      )}

      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <p>No products available for your search.</p>
        ) : (
          filteredProducts.map((prod) => (
            <div key={prod.id} className="product-card">
              <img src={prod.img} alt={prod.name} className="product-image" />
              <div className="product-info">
                <h3>{prod.name}</h3>
                <p>{prod.brand}</p>
                <p>₹{prod.price}</p>
                <div className="product-buttons">
                  <button className="add-to-cart-btn" onClick={() => handleAddToCart(prod)}>
                    Add to Cart
                  </button>
                  <button className="wishlist-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="heart-icon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 21l-1-1-7-7a5.4 5.4 0 010-7.6 5.4 5.4 0 017.6 0L12 8l1-1a5.4 5.4 0 017.6 7.6l-7 7-1 1z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default ProductListingPage;
