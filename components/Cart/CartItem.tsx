import classes from "./CartItem.module.css";
import { productMap } from "@/db/Products";
import { useDispatch } from "react-redux";
import { actions } from "@/store";

interface CartItemProps {
  itemId: string;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ itemId, quantity }) => {
  const dispatch = useDispatch();

  const product = productMap.get(itemId)!;
  const { ptitle, pprice } = product;
  const total = pprice * quantity;

  const itemChangeHandler = (amount: number) => () => {
    dispatch(actions.cartActions.addProduct({ pid: itemId, amount }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{ptitle}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${pprice.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={itemChangeHandler(-1)}>-</button>
          <button onClick={itemChangeHandler(1)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
