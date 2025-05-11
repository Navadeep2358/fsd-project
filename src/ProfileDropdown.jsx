import React, { Component } from 'react';
import './ProfileDropdown.css';

class ProfileDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      username: '',
      email: ''
    };
    this.dropdownRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);

    // ✅ Corrected backend URL for fetching user details
    fetch("http://localhost:8080/users/details", {
      method: "GET",
      credentials: "include", // Send session cookies
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          username: data.fullname || "User",
          email: data.email || "user@example.com"
        });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        this.setState({
          username: "User",
          email: "user@example.com"
        });
      });
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.dropdownRef.current && !this.dropdownRef.current.contains(event.target)) {
      this.setState({ isOpen: false });
    }
  };

  toggleDropdown = () => {
    this.setState((prev) => ({ isOpen: !prev.isOpen }));
  };

  render() {
    return (
      <div className="profile-dropdown" ref={this.dropdownRef}>
        <img
          src="/profile.png"
          alt="User"
          className="user-icon"
          onClick={this.toggleDropdown}
        />
        {this.state.isOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-header">
              <div className="username">{this.state.username}</div>
              <div className="email">{this.state.email}</div>
            </div>
            <ul>
              <li>👤 Profile</li>
              <li>🛒 My Cart</li>
              <li>💖 Wishlist</li>
              <li>📦 My Orders</li>
              <li>📞 Customer Care</li>
              <li onClick={this.props.signOut} className="signout">🚪 Sign Out</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileDropdown;
