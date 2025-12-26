import React from "react";
import { NavLink } from "react-router-dom";

const MealCard = ({ data, hasSearched }) => {
  if (hasSearched && (!data || data.length === 0)) {
    return <h3 className="msg">Sorry, Data Not Found</h3>;
  }
  return (
    <>
      <div className="meals">
        {data.map((dataValue) => {
          return (
            <div className="mealImg">
              <img src={dataValue.strMealThumb} alt="" />
              <p> {dataValue.strMeal}</p>
              <button>
                <NavLink target="blank" to={`/${dataValue.idMeal}`}>
                  Instructions
                </NavLink>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MealCard;
