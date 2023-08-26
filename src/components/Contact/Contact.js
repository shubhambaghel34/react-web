import { useSelector } from "react-redux";
const Contact = () => {
  const Items = useSelector((store) => store.cart.items);
  console.log("cart:-", Items);

  return (
    <div>
      <p>Hello from Contact page</p>
    </div>
  );
};
export default Contact;
