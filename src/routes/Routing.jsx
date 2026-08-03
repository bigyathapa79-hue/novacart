import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductionDetials";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "product/:slug",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
