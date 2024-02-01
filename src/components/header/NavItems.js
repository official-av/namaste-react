import { Link } from "react-router-dom";

export const NavItemsComponent = () => (
  <div className="flex justify-end w-full bg-red-600">
    <Link className="p-4 m-2 text-white" to="/">Home</Link>
    <Link className="p-4 m-2 text-white" to="/about">About Us</Link>
    <Link className="p-4 m-2 text-white" to="/contact">Contact Us</Link>
    <Link className="p-4 m-2 text-white" to="/grocery">Grocery</Link>
  </div>
);
