import { useSelector } from "react-redux";
import RestaurantItemlist from "../RestaurnatItemlist/RestaurnatItemlist";
const Cart = () => {
  const Items = useSelector((store) => console.log(store.cart.items));
  console.log("cart::::", Items);

  //   const cartItems = useSelector((store) => store.cart.items);
  //   console.log("cart on header", cartItems);

  return (
    <div className="text-center m-4 p-4">
      <p className="font-bold">hello from Cart page</p>
      <div>{/* <RestaurantItemlist items={cartItems.itemCards} /> */}</div>
    </div>
  );
};
export default Cart;
