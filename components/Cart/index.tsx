import Card from "@/components/UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const Cart: React.FC = () => {
  const itemNumber = useSelector((state: RootState) => state.cart.cart);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {Object.entries(itemNumber).map(([pid, quantity]) => {
          return <CartItem key={pid} itemId={pid} quantity={quantity} />;
        })}
      </ul>
    </Card>
  );
};

export default Cart;
