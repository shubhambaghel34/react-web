import React from "react";
import ReactDOM from "react-dom/client";

//React Element using JSX

//(HTML/XML like syntax) where code transpiled before it reaches to JS engine,Parcel=>Babel convert code which understand by JS engine 
const jsxheading=(<h1>Hello from React js with JSX</h1>)


//JSX-->Babel transpile to-->React.createElement==>Reactelement.JS Object => HTMLelement
const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(jsxheading);
