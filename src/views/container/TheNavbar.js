import React from "react";
import { Link } from "react-router-dom";

const TheNavbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Salom</Link>
        </li>
        <li>
          <Link to="/product">salom</Link>
        </li>
        <li>
          <Link to="/category">salom</Link>
        </li>
        <li>
          <Link to="/galeria">salom</Link>
        </li>
      </ul>
    </nav>
  );
};

export default TheNavbar;
