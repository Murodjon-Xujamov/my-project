import React from "react";

const Home = React.lazy(() => import("./views/pages/Home"));
const Product = React.lazy(() => import("./views/pages/Product"));

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
    name: "Maning kabinetim",
    component: Product,
  },
];

export default routes;
