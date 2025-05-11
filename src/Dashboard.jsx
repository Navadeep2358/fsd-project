import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProfileDropdown from './ProfileDropdown';
import './Dashboard.css';
import Footer from './Footer';
import Body1 from './UserDashboard/Body1';
import Body2 from './UserDashboard/Body2';
import Body3 from './UserDashboard/Body3';
import Body4 from './UserDashboard/Body4';
import Body5 from './UserDashboard/Body5.1';
import ProductListingPage from './ProductListingPage';
import CartPage from './CartPage';  // Import CartPage component

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenDropdown: false,
      showWomenDropdown: false,
      showSearchBox: false,
      cart: [],
    };
    this.hideMenTimeout = null;
    this.hideWomenTimeout = null;
  }

  // Dropdowns and search
  handleMenMouseEnter = () => {
    clearTimeout(this.hideMenTimeout);
    this.setState({ showMenDropdown: true });
  };

  handleMenMouseLeave = () => {
    this.hideMenTimeout = setTimeout(() => {
      this.setState({ showMenDropdown: false });
    }, 300);
  };

  handleWomenMouseEnter = () => {
    clearTimeout(this.hideWomenTimeout);
    this.setState({ showWomenDropdown: true });
  };

  handleWomenMouseLeave = () => {
    this.hideWomenTimeout = setTimeout(() => {
      this.setState({ showWomenDropdown: false });
    }, 300);
  };

  toggleSearchBox = () => {
    this.setState((prevState) => ({
      showSearchBox: !prevState.showSearchBox,
    }));
  };

  // ✅ Add to cart logic
  handleAddToCart = (product) => {
    this.setState(
      (prevState) => ({
        cart: [...prevState.cart, product],
      }),
      () => {
        alert(`✅ ${product.name} added to cart successfully!`);
      }
    );
  };

  // Navigate to CartPage
  handleWishlistClick = () => {
    this.props.history.push('/cart');  // Redirect to cart page when wishlist is clicked
  };

  render() {
    return (
      <div className="dashboard">
        <div className="header">
          <img src="logo.png" className="logo1" alt="Logo" />
          <ProfileDropdown signOut={this.props.signOut} />
          <img
            src="wishlist.png"
            alt="Wishlist"
            className="wishlist"
            onClick={this.handleWishlistClick}  // Trigger redirection when wishlist clicked
            style={{ cursor: 'pointer' }}
          />
          <Link to="/dashboard" className="selectionsection1">HOME</Link>

          <div
            className="selectionsection2"
            onMouseEnter={this.handleMenMouseEnter}
            onMouseLeave={this.handleMenMouseLeave}
          >
            MEN
            {this.state.showMenDropdown && (
              <div className="dropdown">
                <Link to="/dashboard/products/shirts" className="dropdown-link">Shirts</Link>
                <Link to="/dashboard/products/tshirts" className="dropdown-link">T-Shirts</Link>
                <Link to="/dashboard/products/jeans" className="dropdown-link">Jeans</Link>
              </div>
            )}
          </div>

          <div
            className="selectionsection3"
            onMouseEnter={this.handleWomenMouseEnter}
            onMouseLeave={this.handleWomenMouseLeave}
          >
            WOMEN
            {this.state.showWomenDropdown && (
              <div className="dropdown">
                <Link to="/dashboard/products/tops" className="dropdown-link">Tops</Link>
                <Link to="/dashboard/products/kurtis" className="dropdown-link">Kurtis</Link>
              </div>
            )}
          </div>

          <img
            src="searchicon.png"
            className="searchicon"
            alt="Search"
            onClick={this.toggleSearchBox}
            style={{ cursor: 'pointer' }}
          />
        </div>

        {this.state.showSearchBox && (
          <div className="search-box-container">
            <input type="text" placeholder="Search for products..." className="search-box" autoFocus />
          </div>
        )}

        {/* 🔁 Route with addToCart passed as prop */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Body1 />
                <Body2 />
                <Body3 />
                <Body4 />
                <Body5 />
                <Footer />
              </>
            }
          />
          <Route
            path="products/:category"
            element={<ProductListingPage addToCart={this.handleAddToCart} />}
          />
          <Route path="/cart" element={<CartPage />} /> {/* Add CartPage route */}
        </Routes>
      </div>
    );
  }
}

export default Dashboard;
