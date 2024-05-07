import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const items = new Array(...useSelector(state => state.item.items));
  // console.log(items);
  // HOW???
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((arg) => <CartItem key={arg.id} item={arg} />)}
      </ul>
    </Card>
  );
};

export default Cart;