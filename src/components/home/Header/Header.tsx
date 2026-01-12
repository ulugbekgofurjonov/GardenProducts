'use client'

import Link from "next/link";
import { useState } from "react";
import './Header.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='header container'>
      {/* Logo */}
      <Link href="/">
        <img 
          className='img' 
          src="./Images/HomePageIMG/logo.png" 
          alt="Logo" 
        />
      </Link>

      {/* Navigation Menu */}
      <nav className={`nav-wrapper ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-list">
          <li><Link className="link" href="/" onClick={closeMenu}>Main Page</Link></li>
          <li><Link className="link" href="/categories" onClick={closeMenu}>Categories</Link></li>
          <li><Link className="link" href="/products" onClick={closeMenu}>All products</Link></li>
        </ul>
      </nav>

      {/* Right Side */}
      <div className="header-right">
        {/* Cart Icon */}
        <Link href="/cart">
          <img 
            src="./Images/HomePageIMG/savat.svg" 
            alt="Cart"
            className="cart-icon"
          />
        </Link>

        {/* Hamburger Menu Icon */}
        <div 
          className={`menu-icon ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}