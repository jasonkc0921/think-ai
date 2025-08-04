import React from "react";
import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export const Home = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};
