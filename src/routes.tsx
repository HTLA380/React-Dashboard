import { RouteObject } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import User from "./pages/user/User";
import Products from "./pages/product/Products";
import Blog from "./pages/blog/Blogs";
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
    element: <Products />,
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
