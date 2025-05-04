import React from 'react';

function Question19() {
  return (
    <div className="question-answer">
      <p>
        Here's how to create a product cart page using useState where the cart count increases when "Add to Cart" is clicked:
      </p>
      
      <pre>
        <code className="language-jsx">
{`import React, { useState } from 'react';

function ProductCart() {
  // State for cart count
  const [cartCount, setCartCount] = useState(0);
  
  // State for products
  const [products] = useState([
    { id: 1, name: 'Smartphone', price: 699.99, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Laptop', price: 1299.99, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Headphones', price: 149.99, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Smartwatch', price: 249.99, image: 'https://via.placeholder.com/150' }
  ]);
  
  // Function to add product to cart
  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };
  
  return (
    <div className="shop-container">
      <header className="shop-header">
        <h1>Online Store</h1>
        <div className="cart-icon">
          <span role="img" aria-label="shopping cart">🛒</span>
          <span className="cart-count">{cartCount}</span>
        </div>
      </header>
      
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img 
              src={product.image} 
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">\${product.price.toFixed(2)}</p>
            <button 
              onClick={addToCart}
              className="add-to-cart-btn"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      
      {cartCount > 0 && (
        <div className="cart-summary">
          <h2>Cart Summary</h2>
          <p>Items in cart: {cartCount}</p>
          <button className="checkout-btn">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductCart;`}
        </code>
      </pre>
      
      <p>
        This component creates a simple product cart page:
      </p>
      
      <ul>
        <li>It uses <code>useState</code> to track the cart count and product list.</li>
        <li>The <code>addToCart</code> function increments the cart count when a product is added.</li>
        <li>Products are displayed in a grid, each with an image, name, price, and "Add to Cart" button.</li>
        <li>The cart count is displayed in the header, updating whenever a product is added.</li>
        <li>A cart summary section appears when there are items in the cart.</li>
      </ul>
      
      <p>
        For a more advanced implementation, you could:
      </p>
      
      <ul>
        <li>Track which specific products are in the cart, not just the count</li>
        <li>Allow users to adjust quantities or remove items</li>
        <li>Calculate the total price of items in the cart</li>
        <li>Add product categories or filters</li>
        <li>Implement a checkout process</li>
      </ul>
      
      <p>
        This example demonstrates the basic concept of state management for a shopping cart in React.
      </p>
    </div>
  );
}

export default Question19;
