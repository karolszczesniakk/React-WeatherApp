import React from "react";
import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__text">Copyright @ {currentYear}</p>
    </footer>)
    
} 