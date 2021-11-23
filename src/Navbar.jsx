import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">


                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <NavLink
                                    exact
                                    className="navbar-brand"
                                    to="/">Hassaan Portfolio</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav ml-auto mb-2 mb-lg-0">

                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/" exact activeClassName="menu_active"
                                                exact>Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/service" exact activeClassName="menu_active"
                                                exact>Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active"
                                                exact
                                                className="nav-link" to="/contact" >Contact Us</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact
                                                activeClassName="menu_active"

                                                className="nav-link" to="/about">About</NavLink>
                                        </li>


                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar
