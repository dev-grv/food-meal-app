import "./App.css";
import MainApp from "./components/MainApp";
import { Routes, Route } from "react-router-dom";
import MealInfo from "./components/MealInfo";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/:mealId" element={<MealInfo />} />
      </Routes>
    </>
  );
}

export default App;
