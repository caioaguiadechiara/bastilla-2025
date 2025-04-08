import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <p>&copy; {new Date().getFullYear()} Bastilla FC - Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
