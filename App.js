
const parent = React.createElement("h1", { id: "parent" }, [
//third paramenter is attributes for tags
    React.createElement("div", {}, [
    React.createElement("h1", {}, "h1 tag"),
    React.createElement("h2", {}, "h2 tag"),
  ]),
  React.createElement("div", {}, [
    React.createElement("h1", {}, "h1 tag"),
    React.createElement("h2", {}, "h2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);//object
root.render(parent);
