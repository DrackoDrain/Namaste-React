import React from "react";
import ReactDOM from "react-dom";


const parent = React.createElement("div",{ id : "parent"}, [React.createElement("div", {id: "child"},[React.createElement("h1", {}, "This is Namaste React 🚀"), 
  React.createElement("h2",{}, "I am h2 tag"),
]),
 React.createElement("div",{id: "child2"},[
  React.createElement("h1",{},"i am an h1 tag in child 2"),
  React.createElement("h2",{}, "i am an h2 tag in child 2 "),
 ]),

]);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);