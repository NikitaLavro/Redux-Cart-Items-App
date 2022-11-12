import React from "react";

//redux
import { useDispatch } from "react-redux";

//actions
import { closeModal } from "../features/modal/ModalSlice";
import { clearCart } from "../features/cart/cartSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside
      className="modal-container"
      onClick={() => {
        dispatch(closeModal());
      }}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h4>remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
