import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { actions } from '../../store';
import { useSelector } from 'react-redux';

// Note: All the variables used in a local funtion works only when it is local in the function (?)
const CartButton = (props) => {
  const numItems = useSelector(state=>state.item.totalQuantity);
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(actions.ui.toggle());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{numItems}</span>
    </button>
  );
};

export default CartButton;
