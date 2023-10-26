import React from "react";
import ReactDOM from "react-dom/client";

const element = <span>react element</span>;
const HeadingComponent = (props) => (
  <h1>
    this is
    {props.data}
  </h1>
);
const ContainerComponent = () => (
  <div className="container">
    {element}
    <HeadingComponent data="JSX" />
  </div>
);
// this is component compistions
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ContainerComponent />);
