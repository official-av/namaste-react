import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("h1", { id: "h1", xyz: "abc" }, "h1 React");
const heading2 = React.createElement(
  "h2",
  { id: "h2", xyz: "abc" },
  "h2 via pacel React yo!"
);
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [heading, heading2]),
  React.createElement("div", { id: "child2" }, [heading, heading2]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
// takes object, creates html, and injects in root

console.log(parent);
// prints js object of react, has props
// props is children + attributes
