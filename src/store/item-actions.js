import { actions } from '.';

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            // We need no additional parameter in the fetch because the default action is GET!
            const response = await fetch('https://redux-firebase-27caf-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json');
            if (!response.ok) {
                throw new Error("Could not fetch cart data!");
            }

            const data = await response.json();

            return data;
        };
        try {
            const cartData = await fetchData();
            dispatch(actions.item.replaceItem({
                items: cartData.items || [], // replace with an empty array [] if undefined.
                totalQuantity: cartData.totalQuantity, // works without replacement. is undefined == 0? (or === 0?)
            }));
        } catch (error) {
            dispatch(
                actions.ui.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: `Fetching cart data failed! Error: ${error}`,
                })
            );
        }
    };
};

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            actions.ui.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!',
            })
        );

        const sendRequest = async () => {
            // erase .json to see the error state!
            const response = await fetch('https://redux-firebase-27caf-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
                method: 'PUT',
                // body: JSON.stringify(cart),
                // Save only necessary informations
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity,
                }),
            });
            if (!response.ok) {
                throw new Error('Sending cart data failed.');
            }
        };

        try {
            await sendRequest(); // await: because it is an async function!

            dispatch(
                actions.ui.showNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Sent cart data successfully!',
                })
            );
            // const responseData = await response.json();
        } catch (error) {
            dispatch(
                actions.ui.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: `Sent cart data failed! Error: ${error}`,
                })
            );
        }
    };
};