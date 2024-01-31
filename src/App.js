import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/header/Header";
import BodyComponent from "./components/body/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUsComponent from "./pages/AboutUs";
import ContactUsComponent from "./pages/ContactUs";
import ErrorComponent from "./components/utils/Error";
import RestaurantMenuComponent from "./components/restaurant/RestaurantMenu";
import useInternetStatus from "./components/utils/useInternetStatus";
import OfflineComponent from "./components/utils/Offline";

// on demand loading with lazy
const Grocery = lazy(() => import("./components/Grocery"));
const GroceryFallback = () => <h1>Loading Groceries...</h1>;
const AppLayoutComponent = () => {
  const { isOnline } = useInternetStatus();

  return (
    <div className="layout-container">
      <HeaderComponent />
      {!isOnline && <OfflineComponent />}
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayoutComponent />,
    errorElement: <ErrorComponent />,
    children: [
      { path: "/", element: <BodyComponent /> },
      { path: "/about", element: <AboutUsComponent /> },
      { path: "/contact", element: <ContactUsComponent /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<GroceryFallback />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:restaurantId",
        element: <RestaurantMenuComponent />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
