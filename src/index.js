import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../public/index.css"; // Adjusted the path
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ResturantentMenu from "./components/ResturantentMenu";
import { Shimmer } from "./components/Shimmer";
import Body from "./components/Body";
import Cart from "./components/Cart";

// It help to load the js when it's call for the first time
const AboutUs = lazy(() => import("./Pages/About"));
const ContactUs = lazy(() => import("./Pages/Contact"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Shimmer />}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path : '/cart',
        element : <Cart />
      },
      {
        path: "/resturent/:resId",
        element: <ResturantentMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>
);
