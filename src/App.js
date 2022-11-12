import Navbar from "./components/Navbar";

//components
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";

//react
import { useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";

//actions
import { calculateTotals } from "./features/cart/cartSlice";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
