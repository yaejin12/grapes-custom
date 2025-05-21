import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
};

const showModal = createSlice({
  name: "showModal",
  initialState,
  reducers: {
    ShowModalAction(state, action) {
      state.showModal = action.payload;
    },
  },
});

export const showModalActions = showModal.actions;
export default showModal.reducer;
