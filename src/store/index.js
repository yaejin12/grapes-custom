import { configureStore } from "@reduxjs/toolkit";
import showModalReducer from "./Modal-slice";
const store = configureStore({
  reducer: {
    showModal: showModalReducer,
  },
});

export default store;
