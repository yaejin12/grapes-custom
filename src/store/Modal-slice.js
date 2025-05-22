import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  showEduDetailModal: false,
  showGroupListModal: false,
};

const showModal = createSlice({
  name: "showModal",
  initialState,
  reducers: {
    ShowModalAction(state, action) {
      state.showModal = action.payload;
    },

    ShowEduDetailModalAction(state, action) {
      state.showEduDetailModal = action.payload;
    },

    ShowGroupListModalAction(state, action) {
      state.showGroupListModal = action.payload;
    },
  },
});

export const showModalActions = showModal.actions;
export default showModal.reducer;
