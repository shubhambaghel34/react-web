import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import AboutUs from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";
import Cart from "./components/Cart/Cart";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* <Main /> */}
      <Outlet />
    </div>
  );
};

//react- router configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/cart",
        element: <Cart />
      },
    ],
    errorElement: <Error />
  },

  //single component
  // {
  //   path: "/about",
  //   element: <AboutUs />
  // },
  // {
  //   path: "/contact",
  //   element: <Contact/>
  // }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

//basic app configuration
//root.render(<AppLayout />);


//Render with Router configuration by latest router feature
root.render(<RouterProvider router={appRouter}/>)
















//React Element using JSX

//(HTML/XML like syntax) where code transpiled before it reaches to JS engine,Parcel=>Babel convert code which understand by JS engine
//const jsxheading = <h1>Hello from React js with JSX</h1>;

//JSX-->Babel transpile to-->React.createElement==>Reactelement.JS Object => HTMLelement
//const root = ReactDOM.createRoot(document.getElementById("root"));

//React Element
// const headings = (
//   <h1 className="heading">Hello Element from React js with JSX</h1>
// );
//root.render(headings)

/*structure of App
/**
 * Header
 *  Logo
 *  Nav items
 * Body
 *  -search
 *  -ResturantContainer
 *   -Resturantcard
 * Footer
 * -Copyright
 *  -Link
 *  -address
 * -Contact
 *
 *
 */
