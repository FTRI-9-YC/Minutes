import React from 'react';

function Click() {
    var navbar = document.querySelector(".main-nav ul");
    navbar.classList.toggle("active");
  }

export default function NavBar (){
    return (
        <header className="main-header">
        <a href="index.html" className="brand-logo">
          <div className="brand-logo-name">
            <h1>minutes</h1>
          </div>
        </a>
        <div className="toggle-button" onClick={Click}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <nav className="main-nav">
          <ul>
            <li>
              <a href="#">Hello, User!</a>
            </li>
          </ul>
        </nav>
      </header>
    )
}