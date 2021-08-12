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
  onCalcTotal: (cost: number) => void;
  totalCost: number;
  cartItems: CartItem[]
}

const Shop: React.FC<ShopProps> = ({
  onClickViewCart,
  allItems,
  onAddToCart,
  onCalcTotal,
  totalCost,
  cartItems
}) => {
  const onDisabledIfInCart = (id:number)=>{
    const item = cartItems.find((item) => item.id === id);
    console.log(item)
    if (!item) {
      return false;
    } else{
      return true
    }
    
  }
  // console.log(cartItems)
  return (
    <div>
      <div className="item-grid">
        {allItems.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt={item.name} />
            {item.cost}
            <button
              disabled={onDisabledIfInCart(item.id)}
              onClick={() => {
                onAddToCart(item.id);
                onCalcTotal(item.cost);
              }}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
      <img src="https://via.placeholder.com/100X350" alt="character" />
      <div>{totalCost}</div>
      <div>
        <button>Cancel</button>
        <button>Preview</button>
        <button onClick={() => onClickViewCart()}>View Cart</button>
      </div>
    </div>
  );
};
export default Shop;
