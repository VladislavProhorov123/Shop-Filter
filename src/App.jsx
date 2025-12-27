import React, { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import data from "./data/data";
import FilterProvider from "./context/FilterProvider";

export default function App() {
  return (
    <FilterProvider>
      <Sidebar />
      <Nav />
      <Recommended />
      <Products />
    </FilterProvider>
  );
}
