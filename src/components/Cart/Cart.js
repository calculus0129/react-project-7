import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { actions } from '../../store';

const Cart = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.item);
  const items = new Array(...cart.items);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        actions.ui.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data!',
        })
      );
      const response = await fetch('https://redux-firebase-27caf-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      });
      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }

      dispatch(
        actions.ui.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      );
      // const responseData = await response.json();
    };
    sendCartData().catch((error) => {
      dispatch(
        actions.ui.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sent cart data failed!',
        })
      );
    })

  }, [cart]); // to get rid of warnings, include the dispatch in the dependency array.
  

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