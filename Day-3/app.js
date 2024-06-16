import React from "react";

import ReactDOM from "react-dom/client";


// This is core React 
const heading = React.createElement("h1",{id: "heading"}, "Hello React 🚀");

// JSX 
// React Element
const title = (<h1 className="heading"> Namaste React using JSX </h1>);
   
// React Components - A function that returns some jsx code  
const number = 100;
 const HeadingComoponents = () =>(
    <div id="container" >
        <h2>{number}</h2>
        <h2>{100+200}</h2>
       {title}
        <h1 className="heading"> Namaste React Functional Components</h1>
    </div>
    
 );

// A good way to write components 
// const HeadingComoponents1 = () => <h1> Namaste React Components </h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(title);
root.render(<HeadingComoponents/>);
