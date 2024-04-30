import { configureStore } from "@reduxjs/toolkit";
import toggleMenuSliceReducer from "./features/toggleMenu/toggleMenuSlice";
import switchMenuSliceReducer from "./features/switchMenu/switchMenuSlice";
import selectPageSliceReducer from "./features/selectPage/selectPageSlice";
import selectedComponentSliceReducer from "./features/selectedComponent/selectedComponentSlice";
import isDroppableSliceReducer from "./features/isDroppable/isDroppableSlice";

export const store = configureStore({
  reducer: {
    toggleMenuSlice: toggleMenuSliceReducer,
    switchMenuSlice: switchMenuSliceReducer,
    selectedPageSlice: selectPageSliceReducer,
    selectedComponentSlice: selectedComponentSliceReducer,
    isDroppableSlice: isDroppableSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
