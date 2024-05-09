import { createSlice } from '@reduxjs/toolkit';
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

export default uiSlice;