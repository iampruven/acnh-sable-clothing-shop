import { store } from "./store";
import "./App.css";
import { useState } from "react";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart";

function App() {
  const [page, setPage] = useState("shop");
  const onClickViewCart = () => {
    if (page === "shop") {
      setPage("cart");
    } else {
      setPage("shop");
    }
  };
  return (
    <div>
      {page === "shop" ? (
        <Shop onClickViewCart={onClickViewCart} />
      ) : (
        <Cart onClickViewCart={onClickViewCart} />
      )}
    </div>
  );
}

export default App;
