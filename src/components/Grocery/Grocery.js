import { useGetAllProducts } from "../../utils/Store/apiSlice";

const Grocery = () => {
  const { data } = useGetAllProducts();
  console.log("data", data);

  return <div>Data</div>;
};
export default Grocery;
