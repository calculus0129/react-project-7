import classes from "./CartItem.module.css";
import { Product } from "@/ds";
import { productMap } from "@/db/Products";

interface CartItemProps {
  itemId: string;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ itemId, quantity }) => {
  const product = productMap.get(itemId)!;
  const { ptitle, pprice } = product;
  const total = pprice * quantity;

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
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
