import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <figure className="mx-auto flex min-h-screen max-w-4xl flex-col px-8 py-4">
      <Header />
      <Outlet />
    </figure>
  );
};

export default Layout;
