import RestaurnatItemlist from "../RestaurnatItemlist/RestaurnatItemlist";

const RestaurantCategory = ({ categories }) => {
  console.log(categories);
  return (
    <>
      <div className=" w-6/12 mx-auto bg-gray-50 shadow-lg p-4 my-4">
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {categories.title}({categories.itemCards.length})
          </span>
          <span>🡇</span>
        </div>
        <RestaurnatItemlist items={categories.itemCards} />
      </div>
    </>
  );
};

export default RestaurantCategory;
