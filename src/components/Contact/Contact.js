import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../utils/Store/themeSlice";
const Contact = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme));
  };
  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <p>Hello from Contact page</p>
      <button
        className="bg-gray-300 dark:bg-gray-800 px-4 py-2 rounded-lg"
        onClick={changeTheme}
      >
        Mode
      </button>
    </div>
  );
};
export default Contact;
