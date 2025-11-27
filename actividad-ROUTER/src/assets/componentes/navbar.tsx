import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div>
        <ul className="nav-links">
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          {}
          <li>
            <Link to="/usuario/jiahao">
              MiSkills
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};