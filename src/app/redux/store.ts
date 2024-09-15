import { configureStore } from "@reduxjs/toolkit";
import toggleMenuSliceReducer from "./features/toggleMenu/toggleMenuSlice";
import switchMenuSliceReducer from "./features/switchMenu/switchMenuSlice";
import selectPageSliceReducer from "./features/selectPage/selectPageSlice";
import selectedComponentSliceReducer from "./features/selectedComponent/selectedComponentSlice";
import isDroppableSliceReducer from "./features/isDroppable/isDroppableSlice";
import headerLinksSliceReducer from "./features/headerLinks/headerLinksSlice";
import footerLinksSliceReducer from "./features/footerLinks/footerLinksSlice";

export const store = configureStore({
  reducer: {
    toggleMenuSlice: toggleMenuSliceReducer,
    switchMenuSlice: switchMenuSliceReducer,
    selectedPageSlice: selectPageSliceReducer,
    selectedComponentSlice: selectedComponentSliceReducer,
    isDroppableSlice: isDroppableSliceReducer,
    headerLinksSlice: headerLinksSliceReducer,
    footerLinksSlice: footerLinksSliceReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
