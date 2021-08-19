import { CartItem } from "../../App";
import "./Cart.css";

interface CartProps {
  onClickViewCart: () => void;
  cartItems: CartItem[];
  onQuantityChange: (id: number, quantity: number) => void;
  allItems: {
    id: number;
    name: string;
    cost: number;
    type: string;
    img: string;
  }[];
  totalCost: number;
  onDeleteItemFrCart: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({
  onClickViewCart,
  allItems,
  onQuantityChange,
  cartItems,
  totalCost,
  onDeleteItemFrCart,
}) => {
  const itemLookUp = (id: number, quantity: number) => {
    const item = allItems.find((item) => item.id === id);
    if (!item) {
      return null;
    }

    return (
      <li className="cart-item" key={item.id}>
        <input
          className="quantity-items"
          value={quantity}
          min="1"
          onChange={(e) =>
            e.target.value === ""
              ? null
              : onQuantityChange(item.id, parseInt(e.target.value))
          }
          type="number"
        />
        <img className="cart-clothes" src={item.img} alt={item.name} />
        <div className="item-name">{item.name}</div>
        <button className="trash-btn" onClick={(ev) => onDeleteItemFrCart(item.id)}>
          <i className="far fa-trash-alt"></i>
        </button>
      </li>
    );
  };

  return (
    <div className="grid-cart-container">
      <div className="grid-cart-left">
        <div>
          <img src="https://via.placeholder.com/100X350" alt="character" />
        </div>
        <div>
          <p>Total Cost: {totalCost}</p>
        </div>
      </div>

      <div className="grid-cart-right">
        <ul>{cartItems.map((item) => itemLookUp(item.id, item.quantity))}</ul>
      </div>
      <div className="grid-cart-footer">
        <button onClick={onClickViewCart}>Go Back</button>
        <button>Select</button>
        <button>Purchase</button>
      </div>
    </div>
  );
};

export default Cart;
