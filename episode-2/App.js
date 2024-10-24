import React from "react";
import ReactDOM from "react-dom/client";

const heading =  React.createElement("h1",{
    id:'heading',
    xyz: "abc"
},"Hello world from React");

const parentElement = React.createElement("div",{
    id:"parent",
}, React.createElement("div",{
    id:"child",
}, React.createElement("h1",{},"Hello I am h1 tag")))

const nestedStructure = React.createElement("div",{},
    [React.createElement("h1",{},"First child"), React.createElement("h2",{},"Seconds child")]
);

const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(nestedStructure);