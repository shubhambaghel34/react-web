import { useDispatch } from "react-redux";
import { CDN_URL } from "../../utils/constant";
import { addItems } from "../../utils/Store/cartSlice";

const RestaurantItemlist = ({ items }) => {
  //  console.log(items);
  const dispatch = useDispatch();

  const handleaddItem = () => {
    //Dispatch action which goes with payload- redux will create paylaod and pass in slice
    dispatch(addItems("Dosa"));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-4 text-left flex justify-between"
        >
          <div>
            <div className="py-4">
              <span className="font-medium text-lg">{item.card.info.name}</span>
              <span>- ₹ {item.card.info.price / 100}</span>
            </div>

            <p className="text-base items-center py-2  mr-4">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-40 p-4">
            <img
              className="w-32 rounded-md"
              src={CDN_URL + item.card.info.imageId}
            />
            <button
              className="p-2 bg-black shadow-lg absolute ml-9 -mt-8 rounded-lg text-white text-center"
              onClick={handleaddItem}
            >
              ADD +
            </button>
          </div>
          {/* <div className="flex">
            
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default RestaurantItemlist;
