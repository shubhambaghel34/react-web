import { useSelector } from "react-redux";
import { clearCart } from "../../utils/Store/cartSlice";

import { useDispatch } from "react-redux";
import RestaurantItemlist from "../RestaurnatItemlist/RestaurnatItemlist";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <p className="font-bold">hello from Cart page</p>
      <div className="w-6/12 m-auto">
        <button
          onClick={handleClearCart}
          className="m-4 bg-teal-100 text-black-700 rounded-md"
        >
          Remove
        </button>
        {cartItems.length == 0 && (
          <h1>Cart is Empty, Please continue shopping !! </h1>
        )}
        {<RestaurantItemlist items={cartItems} />}
      </div>
    </div>
  );
};
export default Cart;
