import { CartItem } from "../../App";
import "./Shop.css";

interface ShopProps {
  onClickViewCart: () => void;
  onAddToCart: (id: number) => void;
  allItems: {
    id: number;
    name: string;
    cost: number;
    type: string;
    img: string;
  }[];
  totalCost: number;
  cartItems: CartItem[];
}

const Shop: React.FC<ShopProps> = ({
  onClickViewCart,
  allItems,
  onAddToCart,
  totalCost,
  cartItems,
}) => {
  const onDisabledIfInCart = (id: number) => {
    const item = cartItems.find((item) => item.id === id);
    console.log(item);
    if (!item) {
      return false;
    } else {
      return true;
    }
  };

  const headerEight = allItems.slice(0, 8).map((item) => (
    <div key={item.id}>
      <div>
        <img src={item.img} alt={item.name} />
      </div>
      <div>{item.cost}</div>
      <button
        disabled={onDisabledIfInCart(item.id)}
        onClick={() => onAddToCart(item.id)}
      >
        Add to cart
      </button>
    </div>
  ));

  const leftSix = allItems.slice(8, 14).map((item) => (
    <div key={item.id}>
      <div>
        <img src={item.img} alt={item.name} />
      </div>
      <div>{item.cost}</div>
      <button
        disabled={onDisabledIfInCart(item.id)}
        onClick={() => onAddToCart(item.id)}
      >
        Add to cart
      </button>
    </div>
  ));
  const rightSix = allItems.slice(14).map((item) => (
    <div key={item.id}>
      <div>
        <img src={item.img} alt={item.name} />
      </div>
      <div>{item.cost}</div>
      <button
        disabled={onDisabledIfInCart(item.id)}
        onClick={() => onAddToCart(item.id)}
      >
        Add to cart
      </button>
    </div>
  ));
  return (
    <div className="clothing-item-grid">
      <div className="grid-header">{headerEight}</div>
      <div className="grid-left">{leftSix}</div>
      <div className="grid-right">{rightSix}</div>

      <div className="grid-main">
        <img src="https://via.placeholder.com/250X400" alt="character" />

        <div>{totalCost}</div>
      </div>
      <div className="grid-footer">
        <button>Cancel</button>
        <button>Preview</button>
        <button onClick={() => onClickViewCart()}>View Cart</button>
      </div>
    </div>
  );

  // return (
  //   <div className="grid-container">
  //     <div className="clothing-item-grid">
  //       {allItems.map((item) => (
  //         <div key={item.id}>
  //           <div>
  //             <img src={item.img} alt={item.name} />
  //           </div>
  //           <div>{item.cost}</div>
  //           <button
  //             disabled={onDisabledIfInCart(item.id)}
  //             onClick={() => onAddToCart(item.id)}
  //           >
  //             Add to cart
  //           </button>
  //         </div>
  //       ))}
  //     </div>
  //     <div>
  //       <div className="grid-img">
  //         <img src="https://via.placeholder.com/100X350" alt="character" />
  //       </div>
  //       <div>{totalCost}</div>
  //       <div>
  //         <button>Cancel</button>
  //         <button>Preview</button>
  //         <button onClick={() => onClickViewCart()}>View Cart</button>
  //       </div>
  //     </div>
  //   </div>
  // );
};
export default Shop;
