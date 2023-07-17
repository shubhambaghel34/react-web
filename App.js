import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
//React Element using JSX

//(HTML/XML like syntax) where code transpiled before it reaches to JS engine,Parcel=>Babel convert code which understand by JS engine
const jsxheading = <h1>Hello from React js with JSX</h1>;

//JSX-->Babel transpile to-->React.createElement==>Reactelement.JS Object => HTMLelement
const root = ReactDOM.createRoot(document.getElementById("root"));

//React Element
const headings = (
  <h1 className="heading">Hello Element from React js with JSX</h1>
);

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://w7.pngwing.com/pngs/664/210/png-transparent-uber-eats-muncheez-delivery-online-food-ordering-food-delivery-food-logo-uber-eats-thumbnail.png"
        />
      </div>
      <div className="navitems">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResturantCard = () => {
  return (
    <div className="resutrant-card">
      <img className="card-img" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rgsm28kwq466s7l9icy1"></img>
      <h3>Lemo tree Resturant</h3>
      <h5>Biryani,Maharashtrian,chinese </h5>
      <h5>4.4 stars</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resturant-container">
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

root.render(<AppLayout />);
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
