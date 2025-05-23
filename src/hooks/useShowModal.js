import React from "react";
import { useDispatch } from "react-redux";
import { showModalActions } from "../store/Modal-slice";

function useShowModal() {
  const dispatch = useDispatch();

  const showModal = (value) => {
    dispatch(showModalActions.ShowModalAction(value));
  };

  const showGroupListModal = (value) => {
    dispatch(showModalActions.ShowGroupListModalAction(value));
  };
  const showTplListModal = (value) => {
    dispatch(showModalActions.ShowTplListModalAction(value));
  };

  return { showModal, showGroupListModal, showTplListModal };
}

export default useShowModal;
