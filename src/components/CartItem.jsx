import React from "react";

//redux
import { useDispatch } from "react-redux";

//icons
import { ChevronDown, ChevronUp } from "../icons";

//actions
import { removeItem, changeCartItemAmount } from "../features/cart/cartSlice";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() =>
            dispatch(changeCartItemAmount({ id, type: "increase" }))
          }
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount} </p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(changeCartItemAmount({ id, type: "decrease" }));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
