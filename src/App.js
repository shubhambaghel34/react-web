import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


















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
