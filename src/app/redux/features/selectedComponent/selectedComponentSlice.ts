import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Component {
  id: string;
  type: string;
  hasImage: boolean;
  isStylesChangable: boolean;
  hasText: boolean;
  hasLink: boolean;
  innerSelection: string;
  isOuter: boolean;
}

interface State {
  isUserActionToggled: boolean;
  componentToBeEdit: Component;
}

const initialState: State = {
  isUserActionToggled: false,
  componentToBeEdit: {
    id: "",
    type: "",
    hasImage: true,
    isStylesChangable: false,
    hasText: true,
    hasLink: false,
    innerSelection: "",
    isOuter: false,
  }
};

export const selectedComponentSlice = createSlice({
  name: "selectedComponent",
  initialState,
  reducers: {
    componentToEdit: (state, action: PayloadAction<Partial<Component>>) => {
      const { payload } = action;
      state.componentToBeEdit = {
        ...state.componentToBeEdit,
        ...payload,
        innerSelection: `inner-${payload.innerSelection ?? "0"}`,
        isOuter: payload.isOuter ?? false
      };
    },
    toggleUserAction: (state) => {
      state.isUserActionToggled = !state.isUserActionToggled
    }
  }
})

export const { componentToEdit, toggleUserAction } = selectedComponentSlice.actions;
export default selectedComponentSlice.reducer;