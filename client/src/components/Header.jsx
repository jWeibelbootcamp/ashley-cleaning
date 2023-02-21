import { FaSignInAlt, FaSignOutAlt, FaUser, FaBroom } from "react-icons/fa";
import { Link } from "react-router-dom";

// adding logout later

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/"></Link>
      </div>
      <ul>
        <li>
          <Link to="/login">
            <FaSignInAlt /> Login
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaUser /> Register
          </Link>
        </li>
        <li>
          <Link to="/service">
            <FaBroom /> Service
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
