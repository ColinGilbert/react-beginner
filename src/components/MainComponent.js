import { useState } from "react";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

import "../App.css";
import { DISHES } from "../shared/dishes";

const Main = (props) => {
  const [selectedDish, setSelectedDish] = useState({});

  const onDishSelect = (e) => {
    const [dish] = DISHES.filter((d) => d.id === parseInt(e.target.id));
    setSelectedDish(dish);
  };

  return (
    <div className="App">
      <Header />
      <Menu dishes={DISHES} onDishSelect={onDishSelect} />
      <div className="container">
        <DishDetail dish={selectedDish} />
      </div>
      <Footer />
    </div>
  );
};
export default Main;
