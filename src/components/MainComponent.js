import { useState } from "react";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import DishDetail from "./DishDetailComponent";
import About from "./AboutComponent";
import { Route, Redirect, Switch } from "react-router-dom";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { DISHES } from "../shared/dishes";

import "../App.css";

const DishWithId = ({ match }) => {
  return (
    <DishDetail
      dish={DISHES.filter((d) => d.id === parseInt(match.params.dishId))[0]}
      comments={COMMENTS.filter(
        (c) => c.dishId === parseInt(match.params.dishId)
      )}
    />
  );
};

const Main = (props) => {
  //   const [selectedDish, setSelectedDish] = useState({});

  //   const onDishSelect = (e) => {
  //     const [dish] = DISHES.filter((d) => d.id === parseInt(e.target.id));
  //     setSelectedDish(dish);
  //   };

  return (
    <div className="App">
      <Header />
      {/*<Menu dishes={DISHES} onDishSelect={onDishSelect} />
      <div className="container">
        <DishDetail dish={selectedDish} >
  </div>*/}

      <Switch>
        <Route
          path="/home"
          component={() => {
            return (
              <Home
                dish={DISHES.filter((d) => d.featured)[0]}
                leader={LEADERS.filter((l) => l.featured)[0]}
                promotion={PROMOTIONS.filter((p) => p.featured)[0]}
              />
            );
          }}
        />
        <Route
          exact
          path="/aboutus"
          component={() => <About leaders={LEADERS} />}
        />
        <Route exact path="/menu" component={() => <Menu dishes={DISHES} />} />
        <Route path="/menu/:dishId" component={DishWithId} />
        <Route exact path="/contactus" component={Contact} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
};
export default Main;
