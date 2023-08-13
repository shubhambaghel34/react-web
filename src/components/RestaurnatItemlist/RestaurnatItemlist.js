import { CDN_URL } from "../../utils/constant";

const RestaurantItemlist = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-4 text-left flex justify-between"
        >
          <div>
            <div className="py-6">
              <span className="font-bold">{item.card.info.name}</span>
              <span>- ₹ {item.card.info.price / 100}</span>
            </div>

            <p className="text-xs ">{item.card.info.description}</p>
          </div>
          <div className="w-40 p-4">
            <img
              className="w-32 rounded-md"
              src={CDN_URL + item.card.info.imageId}
            />
            <button className="p-2 bg-white shadow-lg absolute ml-9 -mt-8">
              Add +
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
