import Card from "@/components/UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { Product } from "@/ds";
import { productMap } from "@/db/Products";

const itemNumber = new Map<string, number>();
const firstKey = productMap.keys().next().value ?? "";
itemNumber.set(firstKey, 3);

const Cart: React.FC = (props) => {
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {Array.from(itemNumber.entries()).map(([pid, quantity]) => {
          return (
            <CartItem
              key={pid}
              item={productMap.get(pid)!}
              quantity={quantity}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
