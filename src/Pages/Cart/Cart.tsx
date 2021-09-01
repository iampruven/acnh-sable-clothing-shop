import { CartItem } from "../../App";
import "./Cart.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import TotalCostMoney from "../../Components/TotalCostMoney/TotalCostMoney";

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
    prevImg: string;
  }[];
  totalCost: number;
  previewItem: { previewImg: string; altDesc: string };
  onDeleteItemFrCart: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({
  onClickViewCart,
  allItems,
  onQuantityChange,
  cartItems,
  totalCost,
  previewItem,
  onDeleteItemFrCart,
}) => {
  //quantity dialog
  const [openQuantity, setOpenQuantity] = useState(false);
  console.log(openQuantity);
  const [newQuantity, setNewQuantity] = useState(1);
  const handleClickOpenQuantityPrompt = (
    id: number,
    name: string,
    quantity: number
  ) => {
    console.log("opening quantity change");
    setOpenQuantity(true);
    setNewQuantity(quantity);
    setPromptDeleteThisItem({ id, name, quantity });
  };
  const onYesUpdateQuantity = () => {
    console.log("yes updating");
    console.log(promptDeleteThisItem?.id, newQuantity);
    if (promptDeleteThisItem) {
      console.log(promptDeleteThisItem.id, newQuantity);
      onQuantityChange(promptDeleteThisItem.id, newQuantity);
      setOpenQuantity(false);
    }
  };
  const onNoUpdateQuantity = (id: number) => {
    onQuantityChange(id, 1);
    setOpenQuantity(false);
  };
  //delete diaglog
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [promptDeleteThisItem, setPromptDeleteThisItem] = useState<{
    id: number;
    quantity: number;
    name: string;
  } | null>(null);
  console.log(promptDeleteThisItem);
  const onDeleteClick = (id: number, name: string, quantity: number) => {
    setDeleteDialogOpen(true);
    setPromptDeleteThisItem({ id, name, quantity });
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
        <Button
          variant="outlined"
          color="primary"
          onClick={() =>
            handleClickOpenQuantityPrompt(item.id, item.name, quantity)
          }
        >
          {quantity}
        </Button>

        <img className="cart-clothes" src={item.img} alt={item.name} />
        <div className="item-name">{item.name}</div>
        <button
          className="trash-btn"
          onClick={() => onDeleteClick(item.id, item.name, quantity)}
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
          <img src={previewItem.previewImg} alt={previewItem.altDesc} />
        </div>
        <div className="total-money-container">
          <div>
            <p className="cart-money">Total Cost: </p>
          </div>
          <TotalCostMoney totalCost={totalCost} />
        </div>
      </div>

      <div className="grid-cart-right">
        <ul>{cartItems.map((item) => itemLookUp(item.id, item.quantity))}</ul>
      </div>
      <div className="grid-cart-footer">
        <button className="btn-style" onClick={onClickViewCart}>
          Go Back
        </button>
        <button className="btn-style">Select</button>
        <button className="purchase-style">
          <i className="fas fa-check"></i> Purchase
        </button>
      </div>
      {promptDeleteThisItem && (
        <Dialog
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
              onClick={() => setDeleteDialogOpen(false)}
              color="primary"
              autoFocus
            >
              No
            </Button>
            <Button
              onClick={() => onYesClickDelete(promptDeleteThisItem.id)}
              color="primary"
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      )}

      {promptDeleteThisItem && (
        <Dialog
          open={openQuantity}
          onClose={onNoUpdateQuantity}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Update {promptDeleteThisItem.name} Quantity
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              How many {promptDeleteThisItem.name}s did you want to buy?
            </DialogContentText>

            <TextField
              id="standard-number"
              label="Number"
              type="number"
              value={newQuantity}
              // min="1"
              onChange={(e) => setNewQuantity(parseInt(e.target.value))}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenQuantity(false)} color="primary">
              No
            </Button>
            <Button onClick={onYesUpdateQuantity} color="primary">
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default Cart;
