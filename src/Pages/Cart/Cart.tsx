import {store} from '../../store';

interface CartProps {
    onClickViewCart: () => void;
  }
  

const Cart: React.FC<CartProps> = ({onClickViewCart}) => {
  return (
    <div>
      <div>
        <img src="https://via.placeholder.com/100X350" alt="character" />
      </div>
      <div>
          <ul>
              <li>hi</li>
              <li>item 2</li>
          </ul>
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
