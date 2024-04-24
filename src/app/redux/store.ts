import { configureStore } from "@reduxjs/toolkit";
import toggleMenuSliceReducer from "./features/toggleMenu/toggleMenuSlice";
import selectPageSliceReducer from "./features/selectPage/selectPageSlice";
import selectedComponentSliceReducer from "./features/selectedComponent/selectedComponentSlice";

export const store = configureStore({
  reducer: {
    toggleMenuSlice: toggleMenuSliceReducer,
    selectedPageSlice: selectPageSliceReducer,
    selectedComponentSlice: selectedComponentSliceReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
