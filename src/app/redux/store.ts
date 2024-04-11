import { configureStore } from "@reduxjs/toolkit";
import toggleMenuSliceReducer from "./features/toggleMenu/toggleMenuSlice";
import selectPageSliceReducer from "./features/selectPage/selectPageSlice";

export const store = configureStore({
  reducer: {
    toggleMenuSlice: toggleMenuSliceReducer,
    selectedPageSlice: selectPageSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
