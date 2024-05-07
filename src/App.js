import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { actions } from './store';

function App() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.item);
  const showCart = useSelector(state=>state.ui.showCart);

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

  }, [cart, dispatch]); // to get rid of warnings, include the dispatch in the dependency array, although it is ensured by the react not to be modified.

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
