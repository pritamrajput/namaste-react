import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";


// React.createElement => it will create an object => render method will convert this object to HTMLElement
const heading = React.createElement("h1",{id:"heading"},"Hello i am learning react");
console.log(heading);


// JSX heading
// JSX is not HTMl inside javascript. It is HTML like syntax.
const jsxHeading = (<h1 id="heading" className="head">
    Namaste React using JSX
    </h1>);
console.log(jsxHeading);

// React functional component

const Title = () => {
    return ( <h1 id="title"> 
    This is the TITLE Component 
    </h1> );
}

const HeadingComponent = () => {
    return <h1>Namaste React Functional component</h1>;
}

const HeadingComponent2 = () => ( <h1 id="heading2">
    This is react function component
</h1> );

const HeadingComponent3 = () => {
    return ( <div>
              <Title/>
              <h1>This is the third component</h1>;
             </div>
    );
    
}

const number = 1000;

const title2 = <h1>This is the title element</h1>

const HeadingComponent4 = () => {
    return (
        <div>
            <h2>{ number }</h2>
            <h2>{ title2 }</h2>
            <h1 className="heading-tag">Namaste React functional component</h1>
        </div>
    );
}

const newElement = React.createElement("div",{id:"mainTag"},"This is the div tag");

const newElementWithJSX = (<div>
        <div>This is the child div</div>
        <div>This is the div tag</div>
</div>);


const TitleComponent = () => {
    return <h1>This is the title</h1>
}

const NewElementFuncComponent = () => {
    return (
        <div>
        <TitleComponent/>
        <TitleComponent></TitleComponent>
        { TitleComponent() }
          <div>This is functional component</div>
        </div>
    );
}



const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); To render react element
root.render(<NewElementFuncComponent/>);