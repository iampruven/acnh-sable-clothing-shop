import { store } from "./store";
import "./App.css";
import { useState } from "react";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart";



export interface CartItem {
  id: number;
  quantity: number;
}

const calculateTotalCost = (items: any[], cartItems: CartItem[]): number => {
  return cartItems.reduce((sum, item) => {
    const itemDetails = items.find(x => x.id === item.id)

    if (!itemDetails) {
      return sum
    }
    return sum + itemDetails.cost * item.quantity
  }, 0)
}

function App() {
  const [page, setPage] = useState("shop");
  const [allItems, setAllItems] = useState(store);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
 

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


  const onDeleteItemFrCart = (id:number)=>{
    const item = cartItems.filter((item) => item.id !== id);
    setCartItems(item)
  }

  const onQuantityChange = (id:number, quantity:number)=>{
    const itemUpdate = cartItems.map((item) => {
      if(item.id === id){
        item.quantity = quantity;
        console.log(item)
        return item;
      } else{
        return item;
      }
      
    });
    setCartItems(itemUpdate)
    console.log(cartItems)

  }

  const totalCost = calculateTotalCost(allItems, cartItems)
  return (
    <div>
      {page === "shop" ? (
        <Shop
          cartItems={cartItems}
          totalCost = {totalCost}
          onAddToCart={onAddToCart}
          onClickViewCart={onClickViewCart}
          allItems={allItems}
        />
      ) : (
        <Cart
          onQuantityChange={onQuantityChange}
          onDeleteItemFrCart = {onDeleteItemFrCart}
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
