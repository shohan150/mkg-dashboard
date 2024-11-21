import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { dashboardSlice } from './api/dashboardSlice';

const store = configureStore({
  reducer: {
    [dashboardSlice.reducerPath]: dashboardSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      // Concatenate middleware from each API slice
      .concat(dashboardSlice.middleware),
});

setupListeners(store.dispatch);

export default store;
