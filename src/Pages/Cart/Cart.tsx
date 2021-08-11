interface CartProps {
  onClickViewCart: () => void;
  cartItems: { id: number; quantity: number }[];
  allItems: {
    id: number;
    name: string;
    cost: number;
    type: string;
    img: string;
  }[];
}

const Cart: React.FC<CartProps> = ({
  onClickViewCart,
  allItems,
  cartItems,
}) => {
  const itemLookUp = (id: number, quantity:number) => {
    const item = allItems.find((item) => item.id === id);
    if (!item) {
      return null;
    }

    return (
      <li key={item.id}>
        {quantity} 
        {item.name}
        <img src={item.img} alt={item.name} />
        {item.cost}
      </li>
    );
  };
  return (
    <div>
      <div>
        <img src="https://via.placeholder.com/100X350" alt="character" />
      </div>
      <div>
        <ul>{cartItems.map((item) => itemLookUp(item.id, item.quantity))}</ul>
      </div>
      <div>
        <button onClick={onClickViewCart}>Go Back</button>
        <button>Select</button>
        <button>Purchase</button>
      </div>
    </div>
  );
};

export default Cart;
