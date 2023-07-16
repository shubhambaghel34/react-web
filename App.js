import React from "react";
import ReactDOM from "react-dom/client";

//React Element using JSX

//(HTML/XML like syntax) where code transpiled before it reaches to JS engine,Parcel=>Babel convert code which understand by JS engine
const jsxheading = <h1>Hello from React js with JSX</h1>;

//JSX-->Babel transpile to-->React.createElement==>Reactelement.JS Object => HTMLelement
const root = ReactDOM.createRoot(document.getElementById("root"));

//React Element
const headings = (<h1>Hello from React js with JSX</h1>);


//This is component composition
const HeadingComponent = () => (
   <h1>Hello from Heading  Component</h1>
);

const TitleComponent = () => (
  <div>
    <HeadingComponent />
    <h1>Hello from Title Component </h1>;
  </div>
);

root.render(<TitleComponent />);
