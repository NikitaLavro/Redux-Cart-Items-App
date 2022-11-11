import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

//react
import { useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";

//actions
import { calculateTotals } from "./features/cart/cartSlice";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
