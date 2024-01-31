import { Link } from "react-router-dom";

export const NavItemsComponent = () => (
  <div className="nav-items">
    <Link to="/">Home</Link>
    <Link to="/about">About Us</Link>
    <Link to="/contact">Contact Us</Link>
    <Link to="/grocery">Grocery</Link>
    <Link to="/"></Link>
  </div>
);
