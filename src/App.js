import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/header/Header";
import BodyComponent from "./components/body/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUsComponent from "./pages/AboutUs";
import ContactUsComponent from "./pages/ContactUs";
import ErrorComponent from "./components/utils/Error";

const AppLayoutComponent = () => (
  <div className="layout-container">
    <HeaderComponent />
    <Outlet />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayoutComponent />,
    errorElement: <ErrorComponent />,
    children: [
      { path: "/", element: <BodyComponent /> },
      { path: "/about", element: <AboutUsComponent /> },
      { path: "/contact", element: <ContactUsComponent /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
