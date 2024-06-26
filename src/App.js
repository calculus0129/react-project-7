import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/item-actions';
// import { actions } from './store';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.item);
  const showCart = useSelector(state => state.ui.showCart);
  const notification = useSelector(state => state.ui.notification);

  // This code changes the 'cart' content, triggering the PUT request once again!
  useEffect(()=>{
    dispatch(fetchCartData()); // You need to use fetchCartData(), not the name only!
  }, [dispatch]); // dispatch is for 'completeness'. Since it is constant, it is guaranteed to be executed only once!!

  useEffect(() => {
    if (isInitial) {
      // dispatch(fetchCartData); // this can alternatively be used to fetch Cart Data only at the beginning.
      isInitial = false;
      return;
    }
    if(cart.changed) {
      dispatch(sendCartData(cart));
    }
    // Component-based async fetch implementation
    
    // const sendCartData = async () => {
    //   dispatch(
    //     actions.ui.showNotification({
    //       status: 'pending',
    //       title: 'Sending...',
    //       message: 'Sending cart data!',
    //     })
    //   );
    //   // erase .json to see the error state!
    //   const response = await fetch('https://redux-firebase-27caf-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
    //     method: 'PUT',
    //     body: JSON.stringify(cart),
    //   });
    //   if (!response.ok) {
    //     throw new Error('Sending cart data failed.');
    //   }

    //   dispatch(
    //     actions.ui.showNotification({
    //       status: 'success',
    //       title: 'Success!',
    //       message: 'Sent cart data successfully!',
    //     })
    //   );
    //   // const responseData = await response.json();
    // };

    // sendCartData().catch((error) => {
    //   dispatch(
    //     actions.ui.showNotification({
    //       status: 'error',
    //       title: 'Error!',
    //       message: 'Sent cart data failed!',
    //     })
    //   );
    // })

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
