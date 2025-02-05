import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { actions } from "@/store";

const CartButton: React.FC = () => {
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(actions.uiActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
