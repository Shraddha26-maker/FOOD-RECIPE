import { Link, useLocation } from "react-router";



export default function Navbar() {
  const location = useLocation();

  const linkClass = (path) =>
    location.pathname === path
      ? "btn btn-sm btn-secondary"
      : "btn btn-sm btn-ghost";

  return (
    <div className="navbar bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white px-6 shadow-lg">
   
      {/* Logo */}
      <div className="flex-1">
        <Link to="/" className="text-2xl font-bold tracking-wide">
           Food Recipe Management System
        </Link>
      </div>

      {/* Menu */}
      <div className="flex gap-3">
        <Link to="/" className={linkClass("/")}>
          Home
        </Link>

        <Link to="/create" className={linkClass("/create")}>
          + Add Recipe
        </Link>

        <Link to="/quick" className={linkClass("/quick")}>
           Quick Recipes
        </Link>
      </div>
    </div>
  );
}
