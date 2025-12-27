import React, { useState } from "react";
import { FilterContext } from "./FilterContext";
import data from "../data/data";

export default function FilterProvider({ children }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");

  const filteredProducts = data.filter((product) => {
    const matchesQuery = product.title.toLowerCase().includes(query.toLowerCase())

    const matchesCategory = category ? product.category === category : true
    const matchesColor = color ? product.color : true
    const matchesPrice = price ? product.price <= price : true

    return matchesQuery && matchesCategory && matchesColor && matchesPrice
  })

  return <FilterContext.Provider value={{query, setQuery, category, setCategory, color, setColor, price, setPrice, filteredProducts}}>{children}</FilterContext.Provider>;
}
