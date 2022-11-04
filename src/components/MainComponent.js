import { useState } from "react";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import DishDetail from "./DishDetailComponent";
import About from "./AboutComponent";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "../App.css";

const Main = (props) => {
  const dispatch = useDispatch();
  const dishes = useSelector((state) => state.dishes);
  const promotions = useSelector((state) => state.promotions);
  const leaders = useSelector((state) => state.leaders);
  const comments = useSelector((state) => state.comments);

  const DishWithId = ({ match }) => {
    return (
      <DishDetail
        dish={dishes.filter((d) => d.id === parseInt(match.params.dishId))[0]}
        comments={comments.filter(
          (c) => c.dishId === parseInt(match.params.dishId)
        )}
      />
    );
  };
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
                dish={dishes.filter((d) => d.featured)[0]}
                leader={leaders.filter((l) => l.featured)[0]}
                promotion={promotions.filter((p) => p.featured)[0]}
              />
            );
          }}
        />
        <Route
          exact
          path="/aboutus"
          component={() => <About leaders={leaders} />}
        />
        <Route exact path="/menu" component={() => <Menu dishes={dishes} />} />
        <Route path="/menu/:dishId" component={DishWithId} />
        <Route exact path="/contactus" component={Contact} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
};
export default Main;
