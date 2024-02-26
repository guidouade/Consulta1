import { CartWidget } from "../common/CartWidget";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="containerNavbar">
        <Link to="/" style={{ color: "beige" }}>
          Tinta Virtual
        </Link>
        <ul className="categories">
          <Link to="/">Todas</Link>
          <Link to="/category/nacional">Urbanas</Link>
          <Link to="/category/internacional">Deportivas</Link>
        </ul>
        <CartWidget />
      </div>
      <Outlet />
    </>
  );
};