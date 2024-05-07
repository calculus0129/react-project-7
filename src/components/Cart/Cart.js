import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Cart = (props) => {
  const cart = useSelector(state=>state.item);
  const items = new Array(...cart.items);

  useEffect(() => {
    fetch('https://redux-firebase-27caf-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart),
    });
  }, [cart]);

  // console.log(items);
  // HOW???
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((arg) => <CartItem key={arg.id} item={arg}/>)}
      </ul>
    </Card>
  );
};

export default Cart;
