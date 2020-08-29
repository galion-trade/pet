import React, {Component} from 'react';
import {Link} from "react-router-dom";
import '../App.css';

export default class Header extends Component{

    render() {
       const {headerPosition, colorLogoText, colorMenuLink } = this.props;


        return (
            <header className={`header ${headerPosition}`}>
                <div className="container">
                    <div className="header__body flex-row">
                        <Link to="/" className="logo">
                            <span className="logo__title">Zoo - Help</span>
                            <span className={`logo__text ${colorLogoText}`}>Помощь бездомным животным</span>
                        </Link>
                        <nav className="menu">
                            <ul className="menu__list flex-row">
                                <li className="menu__item">
                                    <Link to="/about" className={`menu__link ${colorMenuLink}`}> О нас</Link>
                                </li>
                                <li className="menu__item">
                                    <Link to="/catalog" className={`menu__link ${colorMenuLink}`}>Питомцы</Link>
                                </li>
                                <li className="menu__item">
                                    <Link to="#" className={`menu__link ${colorMenuLink}`}>Оказать помощь</Link>
                                </li>
                                <li className="menu__item">
                                    <Link to="/contacts" className={`menu__link ${colorMenuLink}`}>Контакты</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}