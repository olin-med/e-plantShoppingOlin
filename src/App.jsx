import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './CartItem'; // Import the Cart component
import './App.css';
import AboutUs from './AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleContinueShopping = () => {
    setShowProductList(true); // Ensure the product list is visible when continuing shopping
  };

  return (
    <div className="app-container background-image">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
          <div className="landing_content">
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>
            <button className="get-started-button" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
          <div className="aboutus_container">
            <AboutUs />
          </div>
        </div>
      </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList />
        <Cart onContinueShopping={handleContinueShopping} />
      </div>
    </div>
  );
}

export default App;
