import React from "react";

const Header = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="/logo.png" alt="Bastilla FC" height="80" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://wa.me/56978762996">Habla con nosotros</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Banner */}
      <div className="text-center mb-4">
        <img src="/banner.jpeg" alt="Bastilla FC" className="img-fluid" />
      </div>
    </>
  );
};

export default Header;
