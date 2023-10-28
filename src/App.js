import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/header/Header";
import BodyComponent from "./components/body/Body";

const AppLayoutComponent = () => (
  <div className="layout-container">
    <HeaderComponent />
    <BodyComponent />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayoutComponent />);
