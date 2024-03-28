import { configureStore } from "@reduxjs/toolkit";
import toggleMenuSliceReducer from "./features/toggleMenu/toggleMenuSlice";

export const store = configureStore({
  reducer: {
    toggleMenuSlice: toggleMenuSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
