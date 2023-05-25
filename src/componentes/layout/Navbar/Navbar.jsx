import "./Navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <>
      <nav className="container">
        <ul className="ListItem">
          <li>Home</li>
          <li>Indumentaria</li>
          <li>Calzados</li>
          <li>Accesorios</li>
          <li>Sucursales</li>
          <li>Contacto</li>
          <div>
            <ShoppingCartIcon sx={{ fontSize: 50 }} className="icono" />
            <span className="contador">0</span>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
