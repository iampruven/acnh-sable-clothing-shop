import "./Shop.css";

interface ShopProps {
  onClickViewCart: () => void;
  onAddToCart: (id: number)=>void;
  allItems: {
    id: number;
    name: string;
    cost: number;
    type: string;
    img: string;
  }[];
}

const Shop: React.FC<ShopProps> = ({
  onClickViewCart,
  allItems,
  onAddToCart,
}) => {

  return (
    <div>
      <div className="item-grid">
        {allItems.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt={item.name} />
            {item.cost}
            <button onClick={() => onAddToCart(item.id)}>Add to cart</button>
          </div>
        ))}
      </div>
      <img src="https://via.placeholder.com/100X350" alt="character" />
      <div>
        <button>Cancel</button>
        <button>Preview</button>
        <button onClick={() => onClickViewCart()}>View Cart</button>
      </div>
    </div>
  );
};
export default Shop;
