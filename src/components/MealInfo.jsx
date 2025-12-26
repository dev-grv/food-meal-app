import React, { useState } from "react";
import { useParams } from "react-router-dom";

const MealInfo = () => {
  const [data, setData] = useState(null);
  const { mealId } = useParams();
  const get_by_id = async () => {
    const urlForId = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const dataForId = await urlForId.json();
    console.log("data for id :", dataForId.meals[0]);
    setData(dataForId.meals[0]);
  };
  if (!data) {
    get_by_id();
  }
  return (
    <>
      {!data ? (
        "Not Found"
      ) : (
        <div className="msg">
          <img src={data?.strMealThumb} alt={data?.strMeal} />
          <div className="info">
            <h2>{data.strMeal}</h2>
            <h3>Intructions :</h3>
            <p>{data.strInstructions}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MealInfo;
