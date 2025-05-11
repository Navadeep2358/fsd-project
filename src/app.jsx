import React, { Component } from 'react';
import './App.css';
import Body from "./components/Body";
import Body1 from "./components/Body1";
import Body2 from "./components/Body2";
import Body3 from "./components/Body3";
import Dashboard from "./Dashboard.jsx";
import Footer from "./Footer";
import { BASEURL, callApi, setSession } from './api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dashboard: false,
      showSearchBar: false,
      searchQuery: ''
    };

    this.userRegistration = this.userRegistration.bind(this);
    this.forgotPassword = this.forgotPassword.bind(this);
    this.signin = this.signin.bind(this);
    this.signinResponse = this.signinResponse.bind(this);
    this.showsignup = this.showsignup.bind(this);
    this.showsignIn = this.showsignIn.bind(this);
    this.closesignIn = this.closesignIn.bind(this);
    this.signOut = this.signOut.bind(this);
    this.toggleSearchBar = this.toggleSearchBar.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  componentDidMount() {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    this.setState({ dashboard: isLoggedIn === "true" });
  }

  signOut() {
    sessionStorage.clear();
    this.setState({ dashboard: false });
  }

  forgotPassword() {
    const username = document.getElementById("username");
    const responseDiv = document.getElementById("responseDiv");
    username.style.border = "";

    if (username.value === "") {
      username.style.border = "1px solid red";
      username.focus();
      return;
    }

    const url = `${BASEURL}users/forgotpassword/${username.value}`;
    callApi("GET", url, "", (res) => {
      const data = res.split('::');
      responseDiv.innerHTML = `<br/><br/><label style='color:${data[0] === "200" ? "green" : "red"}'>${data[1]}</label>`;
    });
  }

  showsignIn() {
    document.getElementById("signIn").style.display = "block";
    document.getElementById("signup").style.display = "none";
    document.getElementById("popup").style.display = "block";
    document.getElementById("popupheader").innerHTML = "Login";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("responseDiv").innerHTML = "";
  }

  showsignup() {
    document.getElementById("signIn").style.display = "none";
    document.getElementById("signup").style.display = "block";
    document.getElementById("popup").style.display = "block";
    document.getElementById("popupheader").innerHTML = "Create New Account";
    ["fullname", "email", "phone", "signuppassword", "confirmpassword"].forEach(id => {
      document.getElementById(id).value = "";
    });
  }

  closesignIn(event) {
    if (event.target.id === "popup") {
      document.getElementById("popup").style.display = "none";
    }
  }

  userRegistration() {
    const fullname = document.getElementById("fullname");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const signuppassword = document.getElementById("signuppassword");
    const confirmpassword = document.getElementById("confirmpassword");

    [fullname, email, phone, signuppassword, confirmpassword].forEach(input => input.style.border = "");

    if (!fullname.value || !email.value || !phone.value || !signuppassword.value || signuppassword.value !== confirmpassword.value) {
      if (!fullname.value) fullname.style.border = "1px solid red";
      else if (!email.value) email.style.border = "1px solid red";
      else if (!phone.value) phone.style.border = "1px solid red";
      else if (!signuppassword.value) signuppassword.style.border = "1px solid red";
      else confirmpassword.style.border = "1px solid red";
      return;
    }

    const data = JSON.stringify({
      fullname: fullname.value,
      email: email.value,
      phone: phone.value,
      password: signuppassword.value
    });

    callApi("POST", `${BASEURL}users/signup`, data, (res) => {
      const resp = res.split('::');
      alert(resp[1]);
      if (resp[0] === "200") {
        this.showsignIn();
      }
    });
  }

  signin() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const responseDiv = document.getElementById("responseDiv");

    username.style.border = "";
    password.style.border = "";
    responseDiv.innerHTML = "";

    if (!username.value || !password.value) {
      if (!username.value) username.style.border = "1px solid red";
      else if (!password.value) password.style.border = "1px solid red";
      return;
    }

    const data = JSON.stringify({ email: username.value, password: password.value });
    callApi("POST", `${BASEURL}users/signin`, data, this.signinResponse);
  }

  signinResponse(res) {
    const rdata = res.split('::');
    if (rdata[0] === "200") {
      setSession("userid", rdata[1], 1);
      sessionStorage.setItem("csruser", rdata[1]);
      sessionStorage.setItem("isLoggedIn", "true");
      this.setState({ dashboard: true });
    } else {
      document.getElementById("responseDiv").innerHTML = `<br/><br/><label style='color:red'>${rdata[1]}</label>`;
    }
  }

  toggleSearchBar() {
    this.setState(prevState => ({
      showSearchBar: !prevState.showSearchBar,
      searchQuery: ''
    }));
  }

  handleSearchInput(event) {
    this.setState({ searchQuery: event.target.value });
    // Optionally, you can call a search API or filter product list here
  }

  render() {
    const { dashboard, showSearchBar, searchQuery } = this.state;
    if (dashboard) return <Dashboard signOut={this.signOut} />;

    return (
      <div id='container'>
        {/* LOGIN / SIGNUP POPUP */}
        <div id='popup' onClick={this.closesignIn}>
          <div id='popupwindow'>
            <div id='popupheader'>Login</div>

            {/* Sign In Form */}
            <div id='signIn'>
              <label className='usernamelabel'>E-mail or Phone Number*</label>
              <input type='text' id='username' />
              <label className='passwordlabel'>Password*</label>
              <input type='password' id='password' />
              <div className='forgotpassword'>Forgot <label onClick={this.forgotPassword}>Password?</label></div>
              <button className='signinbutton' onClick={this.signin}>Sign In</button>
              <div className='div1' id='responseDiv'></div>
              <div className='div2'>Don't Have an Account <label onClick={this.showsignup}>SignUp Now</label></div>
            </div>

            {/* Sign Up Form */}
            <div id='signup' style={{ display: 'none' }}>
              <label>Full Name</label>
              <input type='text' id='fullname' />
              <label>Email</label>
              <input type='text' id='email' />
              <label>Phone Number</label>
              <input type='text' id='phone' />
              <label>Password*</label>
              <input type='password' id='signuppassword' />
              <label>Confirm Password*</label>
              <input type='password' id='confirmpassword' />
              <button onClick={this.userRegistration}>Register</button>
              <div>Already have an account? <span onClick={this.showsignIn}>Sign In</span></div>
            </div>
          </div>
        </div>

        {/* HEADER */}
        <div className="header">
          <img src="/logo.png" className="logo1" alt="Logo" />
          <button className="loginbutton" onClick={this.showsignIn}>Log In</button>
          <button className="registerbutton" onClick={this.showsignup}>Register</button>
          <img src="/wishlist.png" alt="Wishlist" className="wishlist" />
          <div className="selectionsection1">HOME</div>
          <div className="selectionsection2">MEN</div>
          <div className="selectionsection3">WOMEN</div>

          <img src="/searchicon.png" className="searchicon" alt="Search" onClick={this.toggleSearchBar} />

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

        {/* BODY CONTENT */}
        <div id='content'>
          <Body showsignIn={this.showsignIn} />
          <Body1 />
          <Body2 />
          <Body3 />
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    );
  }
}

export default App;
