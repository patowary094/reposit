import React from 'react';
import { NavLink } from 'react-router-dom';
import './Pages/Navbar.css';
import logos from "./Pages/Images/logos.png";


const Navbar = () => {
    return (

        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-md-10 col-12">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <div className="container-fluid container-sm">
                                <NavLink className="navbar-brand" to="/"><img src={logos} className="img-fluid" alt="logo" />iPRO</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" exact className="nav-link active" to="/about">About</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" exact className="nav-link active" to="/Services">Services</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" exact className="nav-link active" to="/Contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar;
