import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const User = lazy(() => import("./pages/user/User"));
const Products = lazy(() => import("./pages/product/Products"));
const Blog = lazy(() => import("./pages/blog/Blogs"));
const Login = lazy(() => import("./pages/Login"));

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
];

export default routes;
