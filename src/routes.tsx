import { RouteObject } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import Blog from "./pages/blog/Blog";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Dashboard />,
    index: true,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
];

export default routes;
