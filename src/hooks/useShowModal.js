import React from "react";
import { useDispatch } from "react-redux";
import { showModalActions } from "../store/Modal-slice";

function useShowModal() {
  const dispatch = useDispatch();

  const showModal = (value) => {
    dispatch(showModalActions.ShowModalAction(value));
  };

  return { showModal };
}

export default useShowModal;
