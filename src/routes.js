import React from "react";

const Home = React.lazy(() => import("./views/pages/Home"));
const Product = React.lazy(() => import("./views/pages/Product"));
const Category = React.lazy(() => import("./views/pages/Category"));
const OrderProduct = React.lazy(() => import("./views/pages/OrderProduct"));
const Register = React.lazy(() => import("./views/pages/Register"));
const Admin = React.lazy(() => import("./views/pages/Admin"));
const Profile = React.lazy(() => import("./views/pages/Profile"));

const routes = [
  {
    path: "/home",
    exact: true,
    name: "Maning kabinetim",
    component: Home,
  },
  {
    path: "/product",
    exact: true,
    name: "Mahsulotlar",
    component: Product,
  },
  {
    path: "/category",
    exact: true,
    name: "Categoryalar",
    component: Category,
  },
  {
    path: "/order-product/:productId",
    exact: true,
    name: "Buyutma",
    component: OrderProduct,
  },
  {
    path: "/register",
    exact: true,
    name: "",
    component: Register,
  },
  {
    path: "/admin",
    exact: true,
    name: "",
    component: Admin,
  },
  {
    path: "/profile",
    exact: true,
    name: "",
    component: Profile,
  },
];

export default routes;
