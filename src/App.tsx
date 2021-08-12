import { store } from "./store";
import "./App.css";
import { useState } from "react";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart";

export interface CartItem {
  id: number;
  quantity: number;
}

function App() {
  const [page, setPage] = useState("shop");
  const [allItems, setAllItems] = useState(store);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalCost, setTotalCost] = useState(0);

  const onAddToCart = (id: number) => {
    let list = [];
    list.push({ id, quantity: 1 });
    setCartItems(cartItems.concat(list));
  };

  const onClickViewCart = () => {
    if (page === "shop") {
      setPage("cart");
    } else {
      setPage("shop");
    }
  };

  const onCalcTotal = (cost: number) => {
    setTotalCost(totalCost + cost);
  };

  return (
    <div>
      {page === "shop" ? (
        <Shop
          cartItems={cartItems}
          totalCost = {totalCost}
          onCalcTotal={onCalcTotal}
          onAddToCart={onAddToCart}
          onClickViewCart={onClickViewCart}
          allItems={allItems}
        />
      ) : (
        <Cart
          totalCost = {totalCost}
          cartItems={cartItems}
          onClickViewCart={onClickViewCart}
          allItems={allItems}
        />
      )}
    </div>
  );
}

export default App;
