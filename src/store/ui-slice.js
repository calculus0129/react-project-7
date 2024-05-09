import { createSlice } from '@reduxjs/toolkit';
import { actions } from '.';
const uiSlice = createSlice({
    name: "ui",
    initialState: { showCart: false, notification: null },
    reducers: {
        toggle(state) {
            state.showCart = !state.showCart;
        },
        // Show the HTTP request notifications
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            };
        },
    }
});

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
                body: JSON.stringify(cart),
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
}

export default uiSlice;