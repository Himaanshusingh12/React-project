import React from "react";
import { NavLink, Link } from "react-router-dom";

function AHeader() {
  return (
    <>
      <div>
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
                  <NavLink to="/dashboard" className="nav-item nav-link">
                    Dashboard
                  </NavLink>

                  <div className="nav-item dropdown">
                    <NavLink
                      to="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Categories
                    </NavLink>
                    <div className="dropdown-menu">
                      <NavLink to="/Categories/add" className="dropdown-item">
                        Add-categories
                      </NavLink>
                      <NavLink
                        to="/categories/manage"
                        className="dropdown-item"
                      >
                        Manage-categories
                      </NavLink>
                    </div>
                  </div>

                  <div className="nav-item dropdown">
                    <NavLink
                      to="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Employee
                    </NavLink>

                    <div className="dropdown-menu">
                      <NavLink to="/Employee/add" className="dropdown-item">
                        Add
                      </NavLink>
                      <NavLink to="/Employee/manage" className="dropdown-item">
                        Manage
                      </NavLink>
                    </div>
                  </div>

                  <div className="nav-item dropdown">
                    <NavLink
                      to="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Items
                    </NavLink>
                    <div className="dropdown-menu">
                      <NavLink to="/items/add" className="dropdown-item">
                        Add
                      </NavLink>
                      <NavLink to="/items/manage" className="dropdown-item">
                        Manage
                      </NavLink>
                    </div>
                  </div>
                  <div className="nav-item dropdown">
                    <NavLink
                      to="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      User
                    </NavLink>
                    <div className="dropdown-menu">
                      <NavLink to="/add_user" className="dropdown-item">
                        Add
                      </NavLink>
                      <NavLink to="/manage_user" className="dropdown-item">
                        Manage
                      </NavLink>
                    </div>
                  </div>

                  <NavLink to="/manage-contact" className="nav-item nav-link">
                    Contact
                  </NavLink>
                  <NavLink to="/manage-feedback" className="nav-item nav-link">
                    Feedback
                  </NavLink>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default AHeader;
