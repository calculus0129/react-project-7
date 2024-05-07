import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { Fragment, useEffect } from 'react';
import { actions } from './store';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.item);
  const showCart = useSelector(state => state.ui.showCart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        actions.ui.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data!',
        })
      );
      // erase .json to see the error state!
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

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        actions.ui.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sent cart data failed!',
        })
      );
    })

  }, [cart, dispatch]); // to get rid of warnings, include the dispatch in the dependency array, although it is ensured by the react not to be modified.

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
