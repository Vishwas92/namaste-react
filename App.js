import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {id:"parent"}, 
React.createElement("div",{id:"child"}, [
React.createElement("h1",{},"I'm h1 tag then 1 then 2 then 3 then 4 then 5"),
React.createElement("h2",{}, "I'm h2 tag"),])
);

//JSX is Html like syntax, It is not Html inside Javascript. It is Html like syntax or like xml. This piece of code when executed becomes a react element. 
//JSX is just a syntax. React Element is an Object.
//<h1> Namste React using JSX </h1>; is equivalent to React.createElement("h1",{}, "Namste React using JSX");
//Is JSX a valid javascript --> It is not pure javascript, JS Engine does not understand JSX. Any piece of Javascript code is such that JS Engine understands that code. JS Engine understands ES6.
//How is this code interpreted --> Parcer is doing all this things!!!. This code is basically transpiled before it reaches the JS Engine.
// Transpile means this code is converted into the code which JS Engine can understands.
//Is Transpiation done using parcel --> No, It is done using Babel.
//JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
//Who is converting this code? => Babel is converting it.
const jsxHeading = <h1 id="heading"> Namste React using JSX </h1>; // You can assume that is also a react element
const jsxHeading1 = <h2 className="head"> Namste React using JSX </h2>;
// When writing JSX in multiple line enclose it in brackets.
const jsxHeading2 = (<h3 className="head">
    Namaste React using JSX
    </h3>);


console.log(parent);

// React Component --> Everything in React is a component
// Class Based Components and Functional Components
// Class Based Components --> Old ways for writing code --> Nobody uses class based based components
// Functional Based Componets --> New ways for writing code --> Everybody uses functional components

//React Functional Component is a normal javascript function. It returns a JSX
const HeadingComponent = () => (<div id="container">
    {title}
    <h1>Namaste React Functional Component</h1>
    <h2>{100 * 200}</h2>
    </div>);

const number = 10000;

//Component composition is a component inside a component
const title = (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX
    </h1>
);

const heading = React.createElement(
"h1", 
{ id:"heading", xyz:"abc"}, 
"Hello World from React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading1);
root.render(<HeadingComponent />);