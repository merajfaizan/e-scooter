import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/Contact">Contact</Link>
    </div>
  );
};

export default Navbar;
