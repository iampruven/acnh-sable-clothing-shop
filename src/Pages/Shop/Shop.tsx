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
    <div key={item.id} className="grid-style">
      <div>
        <img src={item.img} alt={item.name} />
      </div>
      <div>{item.cost} <img src="./img/coin.png" alt="money symbol"/></div>
      <button
        disabled={onDisabledIfInCart(item.id)}
        onClick={() => onAddToCart(item.id)}
      >
        Add to cart
      </button>
    </div>
  ));

  const leftSix = allItems.slice(8, 14).map((item) => (
    <div key={item.id} className="grid-style">
      <div>
        <img src={item.img} alt={item.name} />
      </div>
      <div>{item.cost} <img src="./img/coin.png" alt="money symbol"/></div>
      <button
        disabled={onDisabledIfInCart(item.id)}
        onClick={() => onAddToCart(item.id)}
      >
        Add to cart
      </button>
    </div>
  ));
  const rightSix = allItems.slice(14).map((item) => (
    <div key={item.id} className="grid-style">
      <div>
        <img src={item.img} alt={item.name} />
      </div>
      <div>{item.cost} <img src="./img/coin.png" alt="money symbol"/></div>
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

        <div className="total-money">{totalCost} <img className="bells" src="./img/bells.png" alt="bells money bag" /></div>
      </div>
      <div className="grid-footer">
        <button><i className="fas fa-times"></i> Cancel</button>
        <button><i className="far fa-eye"></i> Preview</button>
        <button onClick={() => onClickViewCart()}>View <i className="fas fa-shopping-cart"></i></button>
      </div>
    </div>
  );
};
export default Shop;
