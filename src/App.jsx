import { ProductsList } from "./componentes/pages/productsList/ProductsList";
import Navbar from "./componentes/layout/Navbar/Navbar.jsx";
import "./App.css";
import { Brand } from "./componentes/layout/Brand/Brand";

const App = () => {
  return (
    <div>
      <Brand />
      <Navbar />
      <ProductsList />
    </div>
  );
};

export default App;
