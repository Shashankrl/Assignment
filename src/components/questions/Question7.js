import React from 'react';

function Question7() {
  return (
    <div className="question-answer">
      <p>
        Here's a React component that creates a list of products using the map() function:
      </p>
      
      <pre>
        <code className="language-jsx">
{`import React from 'react';

function ProductList() {
  // Sample product data
  const products = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Smartphone', price: 699.99 },
    { id: 3, name: 'Headphones', price: 149.99 },
    { id: 4, name: 'Tablet', price: 399.99 },
    { id: 5, name: 'Camera', price: 549.99 }
  ];

  // Function to handle buy button click
  const handleBuy = (productName) => {
    alert(\`You've purchased \${productName}!\`);
  };

  return (
    <div className="product-list">
      <h1>Product Catalog</h1>
      
      <div className="products">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h2>{product.name}</h2>
            <p className="price">\${product.price.toFixed(2)}</p>
            <button 
              onClick={() => handleBuy(product.name)}
              className="buy-button"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;`}
        </code>
      </pre>
      
      <p>
        This component creates a list of product cards, each showing the product name, price, and a "Buy Now" button. 
        When the button is clicked, it shows an alert message. The <code>key</code> prop is important when using 
        <code>map()</code> to help React identify which items have changed.
      </p>
    </div>
  );
}

export default Question7;
