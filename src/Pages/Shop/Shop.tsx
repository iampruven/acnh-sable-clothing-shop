import { CartItem } from "../../App";
import "./Shop.css";

interface ShopProps {
  onClickViewCart: () => void;
  onAddToCart: (id: number) => void;
  onPrevItem: (id: number) => void;
  allItems: {
    id: number;
    name: string;
    cost: number;
    type: string;
    img: string;
    prevImg: string;
  }[];
  totalCost: number;
  cartItems: CartItem[];
  previewItem: { previewImg: string; altDesc: string };
}

const Shop: React.FC<ShopProps> = ({
  onClickViewCart,
  onPrevItem,
  allItems,
  onAddToCart,
  totalCost,
  cartItems,
  previewItem,
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

  const onDisablePreview = (id: number) => {
    const item = allItems.find((item) => item.id === id);
    if (!item) {
      return false;
    } else if (item.prevImg === previewItem.previewImg) {
      return true;
    } else {
      return false;
    }
  };

  const headerEight = allItems.slice(0, 8).map((item) => (
    <div key={item.id} className="grid-style">
      <div>
        <img src={item.img} alt={item.name} />
      </div>
      <div>
        {item.cost} <img src="./img/coin.png" alt="money symbol" />
      </div>
      <button
        disabled={onDisablePreview(item.id)}
        onClick={() => onPrevItem(item.id)}
      >
        <i className="far fa-eye"></i> Preview
      </button>
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
      <div>
        {item.cost} <img src="./img/coin.png" alt="money symbol" />
      </div>
      <button
        disabled={onDisablePreview(item.id)}
        onClick={() => onPrevItem(item.id)}
      >
        <i className="far fa-eye"></i> Preview
      </button>
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
      <div>
        {item.cost} <img src="./img/coin.png" alt="money symbol" />
      </div>
      <button
        disabled={onDisablePreview(item.id)}
        onClick={() => onPrevItem(item.id)}
      >
        <i className="far fa-eye"></i> Preview
      </button>
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
        <img src={previewItem.previewImg} alt={previewItem.altDesc} />

        <div className="total-money">
          Total Cost: {totalCost}{" "}
          <img className="bells" src="./img/bells.png" alt="bells money bag" />
        </div>
      </div>
      <div className="grid-footer">
        <button>
          <i className="fas fa-times"></i> Cancel
        </button>
        <button onClick={() => onClickViewCart()}>
          View <i className="fas fa-shopping-cart"></i>
        </button>
      </div>
    </div>
  );
};
export default Shop;
