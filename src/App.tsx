import { store } from "./store";
import "./App.css";
import { useState } from "react";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart";

function App() {
  const [page, setPage] = useState("shop");
  const [allItems, setAllItems] = useState(store);
  const [cartItems, setCartItems] = useState<any[]>([])

  const onAddToCart = (id:number) => {
    let list = [];
    list.push({id, quantity: 1})
    setCartItems(cartItems.concat(list))
  };

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
        <Shop
          onAddToCart={onAddToCart}
          onClickViewCart={onClickViewCart}
          allItems={allItems}
        />
      ) : (
        <Cart cartItems={cartItems} onClickViewCart={onClickViewCart} allItems={allItems} />
      )}
    </div>
  );
}

export default App;
