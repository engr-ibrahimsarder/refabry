import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ProductDetail from "../Pages/Home/Home/ProductDetail";
// import Categories from "../Pages/Home/Categories/Categories/Categories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products/:productId",
        element: <ProductDetail></ProductDetail>,
      },
      // {
      //   path: "/product/:id",
      //   element: <Categories></Categories>,
      // },
    ],
  },
]);
export default router;
