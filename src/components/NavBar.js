import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <div className = "navbar">
                <p className = "brand">Tin Fit</p>
                <div className="groupbtn">
                    <Link to="/"><span className = "navbtn">ГЛАВНАЯ</span></Link>
                    <Link to="/about"><span className = "navbtn">О НАС</span></Link>
                    <Link to="/prices"><span className = "navbtn">ЦЕНЫ И УСЛУГИ</span></Link>
                    <Link to="/contact"><span className = "navbtn">КОНТАКТЫ</span></Link>
                </div>
            </div>
        );
    }
}
export default NavBar;