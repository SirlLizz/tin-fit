import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <div className= "spacer">
                <section id="nav-bar">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="/">TINFIT</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <span className="nav-item">
                                    <Link className="nav-link" to="/">ГЛАВНАЯ</Link>
                                </span>
                                <span className="nav-item">
                                    <Link className="nav-link" to="/about">О НАС</Link>
                                </span>
                                <span className="nav-item">
                                    <Link className="nav-link" to="/prices">ЦЕНЫ И УСЛУГИ</Link>
                                </span>
                                <span className="nav-item">
                                    <Link className="nav-link" to="/contact">КОНТАКТЫ</Link>
                                </span>
                            </ul>
                        </div>
                    </nav>
                </section>
            </div>
        );
    }
}
export default NavBar;