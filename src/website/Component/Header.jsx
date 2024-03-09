import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Header() {
  const redirect = useNavigate();

  // Delete session
  const logout = () => {
    localStorage.removeItem("userid");
    localStorage.removeItem("uname");
    toast.success("Logout Success");
    redirect("/");
  };
  return (
    <>
      <div>
        {/* Top bar Start */}
        <div className="top-bar">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">
                <i className="fa fa-envelope" />
                support@email.com
              </div>
              <div className="col-sm-6">
                <i className="fa fa-phone-alt" />
                +012-345-6789
              </div>
            </div>
          </div>
        </div>
        {/* Top bar End */}
        {/* Nav Bar Start */}
        <div className="nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
              <a href="#" className="navbar-brand">
                MENU
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto">
                  <NavLink to="/" className="nav-item nav-link active">
                    Home
                  </NavLink>
                  <NavLink to="/Products" className="nav-item nav-link">
                    Products
                  </NavLink>
                  <NavLink to="/Productdetails" className="nav-item nav-link">
                    Product Detail
                  </NavLink>
                  <NavLink to="/Cart" className="nav-item nav-link">
                    Cart
                  </NavLink>
                  <NavLink to="/Checkout" className="nav-item nav-link">
                    Checkout
                  </NavLink>
                  <NavLink to="/Myaccount" className="nav-item nav-link">
                    My Account
                  </NavLink>

                  <div className="nav-item dropdown">
                    <NavLink
                      to="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      More Pages
                    </NavLink>
                    <div className="dropdown-menu">
                      <NavLink to="/Feedback" className="dropdown-item">
                        Feedback
                      </NavLink>
                      <NavLink to="/Wishlist" className="dropdown-item">
                        Wishlist
                      </NavLink>

                      <NavLink to="/Contact" className="dropdown-item">
                        Contact Us
                      </NavLink>
                      <NavLink to="/404" className="dropdown-item">
                        404 page
                      </NavLink>
                    </div>
                  </div>
                  {(() => {
                    //  Use  session
                    if (localStorage.getItem("userid")) {
                      return (
                        <NavLink to="/profile" className="nav-item nav-link">
                          Hi .. {localStorage.getItem("uname")}
                        </NavLink>
                      );
                    }
                  })()}
                </div>
                {/* <NavLink to="/Login" className="nav-item nav-link">
                  Log in
                </NavLink> */}

                <div className="navbar-nav ml-auto">
                  <div className="nav-item dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      User Account
                    </a>
                    {/* <div className="dropdown-menu">
                      <NavLink to="/Login" className="dropdown-item">
                        Login
                      </NavLink>
                    </div> */}
                    {(() => {
                      if (localStorage.getItem("userid")) {
                        return (
                          <>
                            <a
                              href="javascript:void(0)"
                              onClick={logout}
                              className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block"
                            >
                              Logout
                            </a>
                          </>
                        );
                      } else {
                        return (
                          <>
                            {/* <Link
                              to="/login"
                              className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block"
                            >
                              Login
                            </Link> */}
                            <div className="dropdown-menu">
                              <NavLink to="/Login" className="dropdown-item">
                                Login
                              </NavLink>
                            </div>
                          </>
                        );
                      }
                    })()}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* Nav Bar End */}
        {/* Bottom Bar Start */}
        <div className="bottom-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-3">
                <div className="logo">
                  <a href="index.html">
                    <img src="img/logo.png" alt="Logo" />
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="search">
                  <input type="text" placeholder="Search" />
                  <button>
                    <i className="fa fa-search" />
                  </button>
                </div>
              </div>
              <div className="col-md-3">
                <div className="user">
                  <a href="wishlist.html" className="btn wishlist">
                    <i className="fa fa-heart" />
                    <span>(0)</span>
                  </a>
                  <a href="cart.html" className="btn cart">
                    <i className="fa fa-shopping-cart" />
                    <span>(0)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar End */}
      </div>
    </>
  );
}

export default Header;
