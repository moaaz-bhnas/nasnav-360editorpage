import React, { Component } from 'react';
import logo from '../../image/logo.png';
import menuIcon from '../../image/menu-button.svg';
import './Topbar.scss';

class Topbar extends Component {
  state = {  
    menuButtonPressed: false
  }

  render() {
    const {menuButtonPressed} = this.state;
  
    return (
      <div className="topbar header__topbar">
        {/* Logo: always exists */}
        <img src={logo} alt="Logo" className="logo topbar__logo" />
        {/* Menu button: mobile only */}
        <button 
          className="menuButton topbar__menuButton" 
          aria-pressed={menuButtonPressed} 
          aria-expanded={menuButtonPressed} 
          aria-controls="sidebar"
        >
          <img className="image" src={menuIcon} alt="Menu Icon" />
        </button>
        {/* Sidebar: mobile only when menu button is clicked */}
        {
          menuButtonPressed &&
          <div className="sidebar" id="sidebar">
            <nav className="mobileNavbar" role="navigation">
              <h2 className="mobileNavbar__title">Mobile Navigation Bar</h2>
              <ul className="list mobileNavMenu">
                <li className="mobileNavMenu__item">
                  <a href="#" className="mobileNavMenu__link">Navbox</a>
                </li>
                <li className="mobileNavMenu__item">
                  <a href="#" className="mobileNavMenu__link">NavStyle</a>
                </li>
                <li className="mobileNavMenu__item">
                  <a href="#" className="mobileNavMenu__link">Shopping</a>
                </li>
                <li className="mobileNavMenu__item">
                  <a href="#" className="mobileNavMenu__link">360 Editor</a>
                </li>
                <li className="mobileNavMenu__item">
                  <a href="#" className="mobileNavMenu__link">Dashboard</a>
                </li>
              </ul>
            </nav>
            <button className="button button_color_blue sidebar__button" tabIndex={-1}>Get Started</button>
            <div className="sidebarOverlay" />
          </div>              
        }
        {/* Desktop navbar: desktop only */}
        <nav className="desktopNavbar" role="navigation">
          <h2 className="desktopNavbar__title">Desktop Navigation Bar</h2>
          <ul className="list desktopNavMenu">
            <li className="desktopNavMenu__item">
              <a href="#" className="desktopNavMenu__link">Navbox</a>
            </li>
            <li className="desktopNavMenu__item">
              <a href="#" className="desktopNavMenu__link">NavStyle</a>
            </li>
            <li className="desktopNavMenu__item">
              <a href="#" className="desktopNavMenu__link">Shopping</a>
            </li>
            <li className="desktopNavMenu__item">
              <a href="#" className="desktopNavMenu__link">360 Editor</a>
            </li>
            <li className="desktopNavMenu__item">
              <a href="#" className="desktopNavMenu__link">Dashboard</a>
            </li>
          </ul>
        </nav>
        <button className="button button_color_white topbar__button">Get Started</button>
      </div>
    );
  }
}

export default Topbar;