import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { actions, RootState } from "@/store";
import { useSelector } from "react-redux";

const CartButton: React.FC = () => {
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(actions.uiActions.toggleCart());
  };
  const cart = useSelector((state: RootState) => state.cart.cart);

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>
        {Object.entries(cart).reduce((acc, [_pid, quantity]) => {
          return quantity + acc;
        }, 0)}
      </span>
    </button>
  );
};

export default CartButton;
