import React, { useState } from "react";
import MealCard from "./MealCard";

const MainApp = () => {
  const [searchItem, setSearchItem] = useState("");
  const [dataItem, setDataItem] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [msg, setMsg] = useState("Search and Get Recipe's");
  const handleSearch = () => {
    setHasSearched(true);
    apiCall();
  };
  const handleChange = (event) => {
    setSearchItem(event.target.value);
  };

  const apiCall = async () => {
    if (!searchItem) {
      setMsg("Please Enter Something");
    } else {
      const url = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`
      );
      const data = await url.json();
      const dataMeals = data.meals;
      setDataItem(dataMeals || []);
      setSearchItem("");
      setMsg("Your Search Result's");
    }
  };
  return (
    <>
      <h2 className="head">Enter Your Recipe</h2>
      <div className="container">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Enter Recipe"
            value={searchItem}
            onChange={handleChange}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <h2 className="msg">{msg}</h2>
        <div className="msg"></div>
        <MealCard data={dataItem} hasSearched={hasSearched} />
      </div>
    </>
  );
};

export default MainApp;
