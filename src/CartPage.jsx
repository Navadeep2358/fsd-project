import React, { Component } from 'react';

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [
        { id: 1, brand: 'H&M', price: 500, image: '/top wear/tshirts/tshirts (1).avif' },
        { id: 2, brand: 'Diesel', price: 1200, image: '/top wear/jackets/jackets (8).avif' },
        { id: 3, brand: 'Jockey', price: 800, image: '/bottom wears/underwares/u4.avif' },
      ],
      showSearchBar: false,
      searchQuery: ''
    };
  }

  calculateTotal = () => {
    return this.state.cartItems.reduce((total, item) => total + item.price, 0);
  };

  removeItem = (id) => {
    const updatedItems = this.state.cartItems.filter(item => item.id !== id);
    this.setState({ cartItems: updatedItems });
  };

  handleCheckout = () => {
    alert('Proceeding to checkout...');
  };

  toggleSearchBar = () => {
    this.setState(prevState => ({ showSearchBar: !prevState.showSearchBar }));
  };

  handleSearchInput = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    const { cartItems, showSearchBar, searchQuery } = this.state;

    return (
      <div style={{ padding: '20px' }}>
        {/* ✅ Header Section */}
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
            onClick={this.toggleSearchBar}
          />
          {showSearchBar && (
            <input
              type="text"
              className="searchbar"
              placeholder="Search products..."
              value={searchQuery}
              onChange={this.handleSearchInput}
            />
          )}
        </div>

        <h2>Your Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <div className="product-grid">
              {cartItems.map(item => (
                <div key={item.id} className="product-card" style={styles.productCard}>
                  <img src={item.image} alt={item.brand} style={styles.productImage} />
                  <div style={styles.productInfo}>
                    <h4>{item.brand}</h4>
                    <p>Price: ₹{item.price}</p>
                  </div>
                  <button
                    onClick={() => this.removeItem(item.id)}
                    style={styles.removeItemBtn}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div style={styles.checkoutSection}>
              <h3>Total: ₹{this.calculateTotal()}</h3>
              <button onClick={this.handleCheckout} style={styles.checkoutButton}>
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const styles = {
  productCard: {
    marginTop: '20px',
    backgroundColor: '#fff',
    borderRadius: '15px',
    boxShadow: '0 4px 25px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    width: '100%',
    maxWidth: '270px',
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  productInfo: {
    padding: '10px',
    textAlign: 'center',
  },
  removeItemBtn: {
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
  checkoutSection: {
    marginTop: '20px',
    padding: '10px',
    borderTop: '2px solid #ddd',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkoutButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default CartPage;
