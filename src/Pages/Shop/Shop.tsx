import "./Shop.css";
import { store } from "../../store";

interface ShopProps {
  onClickViewCart: () => void;
}

const Shop: React.FC<ShopProps> = ({onClickViewCart}) => {

  return (
    <div>
      <div className="item-grid">
        {store.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt={item.name} />
            {item.cost}
          </div>
        ))}
      </div>
      <img src="https://via.placeholder.com/100X350" alt="character" />
      <div>
        <button>Cancel</button>
        <button>Add to cart</button>
        <button>Preview</button>
        <button onClick={()=>onClickViewCart()}>View Cart</button>
      </div>
    </div>
  );
};
export default Shop;
