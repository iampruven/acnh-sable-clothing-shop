import { CartItem } from "../../App";
import "./Cart.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useState } from "react";

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
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [promptDeleteThisItem, setPromptDeleteThisItem] = useState<{
    id: number;
    name: string;
  } | null>(null);
  const onDeleteClick = (id: number, name: string) => {
    setDeleteDialogOpen(true);
    setPromptDeleteThisItem({ id, name });
  };
  const onYesClickDelete = (id: number) => {
    onDeleteItemFrCart(id);
    setDeleteDialogOpen(false);
  };
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
        <button
          className="trash-btn"
          onClick={() => onDeleteClick(item.id, item.name)}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </li>
    );
  };

  return (
    <div className="grid-cart-container">
      <div className="grid-cart-left">
        <div className="cart-money">
          <img src="https://via.placeholder.com/100X350" alt="character" />
        </div>
        <div>
          <p className="cart-money">
            Total Cost: {totalCost}{" "}
            <img
              className="bells"
              src="./img/bells.png"
              alt="bells money bag"
            />
          </p>
        </div>
      </div>

      <div className="grid-cart-right">
        <ul>{cartItems.map((item) => itemLookUp(item.id, item.quantity))}</ul>
      </div>
      <div className="grid-cart-footer">
        <button onClick={onClickViewCart}>Go Back</button>
        <button>Select</button>
        <button className="mouse-style">
          <i className="fas fa-check"></i> Purchase
        </button>
      </div>
      {promptDeleteThisItem && <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are you sure you want to remove this{" "}
          {!promptDeleteThisItem ? "" : promptDeleteThisItem.name} from the
          cart?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Confirm with yes to delete or no to keep the{" "}
            {!promptDeleteThisItem ? "" : promptDeleteThisItem.name} in the
            cart.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() =>
              onYesClickDelete(promptDeleteThisItem.id)
            }
            color="primary"
          >
            Yes
          </Button>
          <Button
            onClick={() => setDeleteDialogOpen(false)}
            color="primary"
            autoFocus
          >
            No
          </Button>
        </DialogActions>
      </Dialog>}
    </div>
  );
};

export default Cart;
