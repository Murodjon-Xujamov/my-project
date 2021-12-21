import React from "react";

const Home = React.lazy(() => import("./views/pages/Home"));
const Product = React.lazy(() => import("./views/pages/Product"));
const Category = React.lazy(() => import("./views/pages/Category"));
const OrderProduct = React.lazy(() => import("./views/pages/OrderProduct"));

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
    path: "/order-product",
    exact: true,
    name: "Buyutma",
    component: OrderProduct,
  },
];

export default routes;
