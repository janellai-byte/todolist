import React from 'react';
import './App.css';

const burgers = [
  {
    id: 1,
    name: "Crispy Chicken",
    description: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
    price: "₱99.15",
    rating: 5,
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Ultimate Bacon",
    description: "House patty, cheddar cheese, bacon, onion, mustard",
    price: "₱99.32",
    rating: 5,
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Black Sheep",
    description: "American cheese, tomato relish, avocado, lettuce, red onion",
    price: "₱69.15",
    rating: 4,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Vegan Burger",
    description: "House patty, cheddar cheese, bacon, onion, mustard",
    price: "₱99.25",
    rating: 3,
    image: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=600&q=80"
  }
];

export default function App() {
  return (
    <div className="burger-app">
      {/* Navigation Header */}
      <header className="navbar">
        <div className="nav-logo">Tasty Burger</div>
        <nav className="nav-links">
          <a href="#about">ABOUT</a>
          <a href="#menu" className="active">OUR MENU</a>
          <a href="#shop">SHOP</a>
          <a href="#contact">CONTACT</a>
          <span className="cart-icon">🛒 2</span>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">OUR CRAZY BURGERS</h1>
        <p className="hero-description">
          Get ready for a wild ride of flavors! Our crazy burgers are loaded with juicy
          patties, bold toppings, and irresistible sauces, all stacked on a perfectly toasted
          bun. Whether you like it cheesy, or extra meaty, we've got a burger that will blow
          your mind!
        </p>
      </section>

      {/* Menu Cards Section */}
      <section className="menu-section">
        <div className="burger-grid">
          {burgers.map((burger) => (
            <div className="burger-card" key={burger.id}>
              <div className="card-image-container">
                <img src={burger.image} alt={burger.name} />
                <button className="wishlist-btn">♡</button>
              </div>
              <div className="card-content">
                <div className="rating">
                  {"★".repeat(burger.rating)}{"☆".repeat(5 - burger.rating)}
                </div>
                <h3 className="burger-name">{burger.name}</h3>
                <p className="burger-desc">{burger.description}</p>
                <div className="card-footer">
                  <span className="price-tag">{burger.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


