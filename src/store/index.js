import { configureStore } from '@reduxjs/toolkit';
import itemSlice from './item';
import uiSlice from './ui-slice';

const store = configureStore({
    reducer: {
        item: itemSlice.reducer,
        ui: uiSlice.reducer,
    }
});

export const actions = {
    item: itemSlice.actions,
    ui: uiSlice.actions,
};

export default store;
