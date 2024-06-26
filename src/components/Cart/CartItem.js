import { useDispatch } from 'react-redux';
import { actions } from '../../store';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;

  const dispatch = useDispatch();
  const plusHandler = () => {
    dispatch(actions.item.increment({id, title, price}));
  };
  const minusHandler = () => {
    dispatch(actions.item.decrement(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={minusHandler}>-</button>
          <button onClick={plusHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
