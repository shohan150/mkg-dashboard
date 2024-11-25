import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { dashboardSlice } from './api/dashboardSlice';
import { settingsSlice } from './api/settingsSlice';

const store = configureStore({
  reducer: {
    [dashboardSlice.reducerPath]: dashboardSlice.reducer,
    [settingsSlice.reducerPath]: settingsSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      // Concatenate middleware from each API slice
      .concat(dashboardSlice.middleware)
      .concat(settingsSlice.middleware)
});

setupListeners(store.dispatch);

export default store;
