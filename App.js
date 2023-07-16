const parent = React.createElement("h1", {id:'parent'}, [
    React.createElement('div',{},[
        React.createElement('h1',{},"h1 tag"),
        React.createElement('h2',{},"h2 tag"),

    ]),
    React.createElement('div',{},[
        React.createElement('h1',{},"h1 tag"),
        React.createElement('h2',{},"h2 tag"),

    ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);
