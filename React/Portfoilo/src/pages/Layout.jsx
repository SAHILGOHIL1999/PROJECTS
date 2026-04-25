import React from "react";
import { createBrowserRouter, createBrowserRouter as Router, RouterProvider } from "react-router-dom";
import All_pages from "./All_pages";
import Navbar from "../components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <All_pages.Home />,
      },
      {
        path: "/about",
        element: <All_pages.AboutUs />,
      },
      {
        path: "/contact",
        element: <All_pages.Services />,
      },
      {
        path: "/portfolio",
        element: <All_pages.Portfolio />,
      },
      {
        path: "/login",
        element: <All_pages.Blog />,
      },
      {
        path: "/faq",
        element: <All_pages.ContactUs />,
      },
      {
        path: "*",
        element: <All_pages.Error />,
      },
    ],
  },
]);

const Layout = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default Layout;