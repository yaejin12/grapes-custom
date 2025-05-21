import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  showVideoModal: false,
};

const showModal = createSlice({
  name: "showModal",
  initialState,
  reducers: {
    ShowModalAction(state, action) {
      state.showModal = action.payload;
    },

    ShowVideoModalAction(state, action) {
      state.showVideoModal = action.payload;
    },
  },
});

export const showModalActions = showModal.actions;
export default showModal.reducer;
